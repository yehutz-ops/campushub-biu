"use server";

import { revalidatePath } from "next/cache";

export type CourseFilter = {
  department?: string;
  degree?: string;
  year?: string;
  semester?: string;
  search?: string;
};

export type CourseReviewInsert = {
  userId: string;
  courseId: string;
  lecturerId?: string;
  difficultyScore: number;
  overallRating: number;
  content: string;
};

export async function fetchCourses(filters?: CourseFilter) {
  try {
    // REAL IMPLEMENTATION:
    // const query = db.select().from(courses);
    // if (filters?.department) query.where(eq(courses.department, filters.department));
    // ... apply all filters
    // const results = await query;
    // return results;

    console.log("Mock fetchCourses", filters);

    // Mock Data for the Discovery Hub
    let mockCourses = [
      {
        id: "c-1",
        courseNumber: "89-112",
        name: "אלגברה לינארית",
        department: "מדעי המחשב",
        degree: "Bachelors",
        year: "A",
        semester: "Annual",
        credits: 5.0,
        avgDifficulty: 4.8,
        avgRating: 4.2,
        materialCount: 154,
        reviewCount: 89,
        lecturers: [{ id: "l-1", name: "פרופ' כהן" }],
      },
      {
        id: "c-2",
        courseNumber: "66-211",
        name: "תורת המחירים א'",
        department: "כלכלה",
        degree: "Bachelors",
        year: "B",
        semester: "A",
        credits: 3.5,
        avgDifficulty: 4.5,
        avgRating: 4.5,
        materialCount: 82,
        reviewCount: 120,
        lecturers: [{ id: "l-2", name: "ד״ר לוי" }],
      },
      {
        id: "c-3",
        courseNumber: "101-101",
        name: "מבוא לפסיכולוגיה",
        department: "פסיכולוגיה",
        degree: "Bachelors",
        year: "A",
        semester: "A",
        credits: 2.0,
        avgDifficulty: 2.1,
        avgRating: 4.9,
        materialCount: 300,
        reviewCount: 450,
        lecturers: [{ id: "l-3", name: "ד״ר ישראלי" }],
      },
    ];

    if (filters?.department) {
      mockCourses = mockCourses.filter((c) => c.department === filters.department);
    }
    if (filters?.search) {
      mockCourses = mockCourses.filter((c) => c.name.includes(filters.search!) || c.courseNumber.includes(filters.search!));
    }

    return mockCourses;
  } catch (error) {
    console.error("Failed to fetch courses", error);
    return [];
  }
}

export async function fetchCourseDetails(id: string) {
  try {
    // REAL IMPLEMENTATION:
    // const course = await db.query.courses.findFirst({ ... });
    
    console.log("Mock fetchCourseDetails for ID:", id);

    // Mock response
    return {
      id,
      courseNumber: "89-112",
      name: "אלגברה לינארית",
      department: "מדעי המחשב",
      degree: "Bachelors",
      year: "A",
      semester: "Annual",
      credits: 5.0,
      avgDifficulty: 4.8,
      avgRating: 4.2,
      materialCount: 154,
      reviewCount: 89,
      lecturers: [
        { 
          id: "l-1", 
          name: "פרופ' דוד כהן", 
          department: "מדעי המחשב", 
          avgRating: 4.5, 
          reviewCount: 120 
        }
      ],
      reviews: [
        {
          id: "r-1",
          difficultyScore: 5,
          overallRating: 4,
          content: "קורס קשה מאוד אבל המרצה מסביר מצוין. חובה לפתור את כל התרגילים מהספר.",
          createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
          lecturer: { name: "פרופ' דוד כהן" },
          user: { name: "דן ש." }
        },
        {
          id: "r-2",
          difficultyScore: 4,
          overallRating: 5,
          content: "מעולה! החומר מאתגר אבל הקורס בנוי נכון. ממליצה ללמוד קבוצתי.",
          createdAt: new Date(Date.now() - 86400000 * 12).toISOString(),
          lecturer: { name: "פרופ' דוד כהן" },
          user: { name: "נועה ב." }
        }
      ],
      previewMaterials: [
        { id: "m-1", title: "סיכום משפטים למבחן", type: "PDF", rating: 4.9 },
        { id: "m-2", title: "פתרון מבחן 2023 מועד א", type: "PDF", rating: 5.0 },
      ]
    };
  } catch (error) {
    console.error("Failed to fetch course details", error);
    return null;
  }
}

export async function submitCourseReview(data: CourseReviewInsert) {
  try {
    // REAL IMPLEMENTATION:
    // await db.transaction(async (tx) => {
    //   await tx.insert(courseReviews).values(data);
    //   
    //   // Recalculate metrics
    //   const reviews = await tx.select().from(courseReviews).where(eq(courseReviews.courseId, data.courseId));
    //   const avgDiff = reviews.reduce((acc, r) => acc + r.difficultyScore, 0) / reviews.length;
    //   const avgRat = reviews.reduce((acc, r) => acc + r.overallRating, 0) / reviews.length;
    //   
    //   await tx.update(courses).set({
    //     avgDifficulty: String(avgDiff),
    //     avgRating: String(avgRat),
    //     reviewCount: reviews.length
    //   }).where(eq(courses.id, data.courseId));
    // });

    console.log("Mock submitCourseReview", data);
    revalidatePath(`/courses/${data.courseId}`);
    return { success: true };
  } catch (error) {
    console.error("Failed to submit review", error);
    return { success: false, error: "Failed to submit review" };
  }
}
