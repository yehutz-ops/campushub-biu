"use server";

import { revalidatePath } from "next/cache";

// Assuming you'll have a real db instance imported here:
// import { db } from "@/db";
// import { materialRequests, proposals } from "@/db/schema";
// import { eq, and } from "drizzle-orm";

// Dummy type definitions for the mock implementations
export type RequestInsertData = {
  userId: string;
  courseId: string;
  title: string;
  description: string;
  deadline?: Date;
};

export type ProposalInsertData = {
  requestId: string;
  providerId: string;
  message: string;
  estimatedTime: string;
  price?: number;
};

export async function createRequest(data: RequestInsertData) {
  try {
    // REAL IMPLEMENTATION:
    // await db.insert(materialRequests).values({
    //   ...data,
    //   status: "open",
    //   proposalCount: 0,
    // });
    
    console.log("Mock createRequest", data);
    revalidatePath("/requests");
    return { success: true };
  } catch (error) {
    console.error("Failed to create request", error);
    return { success: false, error: "Failed to create request" };
  }
}

export async function fetchOpenRequests() {
  try {
    // REAL IMPLEMENTATION:
    // const results = await db.query.materialRequests.findMany({
    //   where: eq(materialRequests.status, "open"),
    //   // join with courses and users here...
    // });
    
    console.log("Mock fetchOpenRequests");
    
    // Mock Data for frontend rendering
    return [
      {
        id: "req-1",
        title: "סיכום למבחן במיקרו כלכלה",
        description: "מחפש סיכום מסודר ומודפס הכולל את כל גרפי ההיצע והביקוש, רצוי ממישהו שלמד אצל ד״ר כהן וקיבל מעל 90.",
        status: "open",
        deadline: new Date(Date.now() + 86400000 * 3), // 3 days
        proposalCount: 2,
        course: { name: "מיקרו כלכלה" },
        user: { name: "דן ש.", avatar: "https://i.pravatar.cc/150?u=dan" }
      },
      {
        id: "req-2",
        title: "שיעור פרטי בהכנה לסטטיסטיקה א׳",
        description: "חייב דחוף עזרה בנושא הסתברויות והתפלגות נורמלית, עדיף בזום בשעות הערב.",
        status: "open",
        deadline: new Date(Date.now() + 86400000 * 1), // 1 day
        proposalCount: 5,
        course: { name: "סטטיסטיקה א׳" },
        user: { name: "נועה ב.", avatar: "https://i.pravatar.cc/150?u=noa" }
      }
    ];
  } catch (error) {
    console.error("Failed to fetch open requests", error);
    return [];
  }
}

export async function submitProposal(data: ProposalInsertData) {
  try {
    // REAL IMPLEMENTATION:
    // await db.transaction(async (tx) => {
    //   await tx.insert(proposals).values({
    //     ...data,
    //     status: "pending",
    //   });
    //   // Increment proposal count
    //   const req = await tx.select().from(materialRequests).where(eq(materialRequests.id, data.requestId));
    //   await tx.update(materialRequests)
    //     .set({ proposalCount: req[0].proposalCount + 1 })
    //     .where(eq(materialRequests.id, data.requestId));
    // });

    console.log("Mock submitProposal", data);
    revalidatePath("/requests");
    return { success: true };
  } catch (error) {
    console.error("Failed to submit proposal", error);
    return { success: false, error: "Failed to submit proposal" };
  }
}

export async function acceptProposal(proposalId: string, requestId: string) {
  try {
    // REAL IMPLEMENTATION:
    // await db.transaction(async (tx) => {
    //   // Mark proposal as accepted
    //   await tx.update(proposals)
    //     .set({ status: "accepted" })
    //     .where(eq(proposals.id, proposalId));
    //
    //   // Mark other pending proposals as rejected? (Optional logic)
    //
    //   // Update request status
    //   await tx.update(materialRequests)
    //     .set({ status: "in-progress" })
    //     .where(eq(materialRequests.id, requestId));
    // });

    console.log("Mock acceptProposal", { proposalId, requestId });
    revalidatePath("/requests");
    return { success: true };
  } catch (error) {
    console.error("Failed to accept proposal", error);
    return { success: false, error: "Failed to accept proposal" };
  }
}
