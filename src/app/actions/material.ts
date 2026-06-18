"use server";

import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function uploadMaterialAction(formData: FormData) {
  // Protect the Server Action
  const { userId } = await auth();
  if (!userId) {
    throw new Error("You must be logged in to upload materials.");
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const courseCode = formData.get("courseCode") as string;
  const tagsStr = formData.get("tags") as string;
  const price = parseFloat(formData.get("price") as string) || 0.0;
  const fileUrl = formData.get("fileUrl") as string || "https://dummy-bucket.s3.amazonaws.com/example.pdf"; // Mock storage URL

  if (!title || !courseCode) {
    throw new Error("Missing required fields");
  }

  // Find or create course (simplified)
  let course = await prisma.course.findUnique({
    where: { code: courseCode }
  });

  if (!course) {
    // We assume a generic "General" department for now if course doesn't exist
    const dept = await prisma.department.upsert({
      where: { name: "כללי" },
      update: {},
      create: { name: "כללי", description: "קורסים כלליים" }
    });

    course = await prisma.course.create({
      data: {
        code: courseCode,
        title: `קורס ${courseCode}`,
        departmentId: dept.id
      }
    });
  }

  // Ensure user exists in our DB
  const user = await prisma.user.upsert({
    where: { clerkId: userId },
    update: {},
    create: {
      clerkId: userId,
      email: `${userId}@placeholder.com`, // Usually fetched via Clerk webhooks
      username: `user_${userId.slice(-5)}`,
    }
  });

  const tags = tagsStr ? tagsStr.split(",").map(t => t.trim()) : [];

  const material = await prisma.material.create({
    data: {
      title,
      description,
      fileUrl,
      fileType: fileUrl.endsWith(".pdf") ? "PDF" : "DOCX",
      tags,
      price,
      authorId: user.id,
      courseId: course.id,
    }
  });

  revalidatePath("/marketplace");
  revalidatePath("/dashboard");
  
  return { success: true, materialId: material.id };
}
