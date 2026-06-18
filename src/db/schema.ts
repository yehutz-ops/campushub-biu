import { pgTable, text, timestamp, uuid, varchar, integer, pgEnum, decimal, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Enums
export const requestStatusEnum = pgEnum("request_status", ["open", "in-progress", "closed", "under-review"]);
export const proposalStatusEnum = pgEnum("proposal_status", ["pending", "accepted", "rejected"]);
export const degreeEnum = pgEnum("degree_enum", ["Bachelors", "Masters", "PhD"]);
export const yearEnum = pgEnum("year_enum", ["A", "B", "C", "D"]);
export const semesterEnum = pgEnum("semester_enum", ["A", "B", "Summer", "Annual"]);

// Lecturers Table
export const lecturers = pgTable("lecturers", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  department: varchar("department", { length: 255 }).notNull(),
  avgRating: decimal("avg_rating", { precision: 3, scale: 2 }).default("0").notNull(),
  reviewCount: integer("review_count").default(0).notNull(),
});

// Courses Table
export const courses = pgTable("courses", {
  id: uuid("id").primaryKey().defaultRandom(),
  courseNumber: varchar("course_number", { length: 100 }).unique().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  department: varchar("department", { length: 255 }).notNull(),
  degree: degreeEnum("degree").notNull(),
  year: yearEnum("year").notNull(),
  semester: semesterEnum("semester").notNull(),
  credits: decimal("credits", { precision: 3, scale: 1 }).notNull(),
  avgDifficulty: decimal("avg_difficulty", { precision: 3, scale: 2 }).default("0").notNull(),
  avgRating: decimal("avg_rating", { precision: 3, scale: 2 }).default("0").notNull(),
  materialCount: integer("material_count").default(0).notNull(),
  reviewCount: integer("review_count").default(0).notNull(), // Add this since we update it
});

// Course-Lecturer Junction Table
export const courseLecturers = pgTable(
  "course_lecturers",
  {
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    lecturerId: uuid("lecturer_id")
      .notNull()
      .references(() => lecturers.id, { onDelete: "cascade" }),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.courseId, t.lecturerId] }),
  })
);

// Course Reviews Table
export const courseReviews = pgTable("course_reviews", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: varchar("user_id", { length: 255 }).notNull(), // Clerk User
  courseId: uuid("course_id")
    .notNull()
    .references(() => courses.id, { onDelete: "cascade" }),
  lecturerId: uuid("lecturer_id").references(() => lecturers.id, { onDelete: "set null" }),
  difficultyScore: integer("difficulty_score").notNull(), // 1-5
  overallRating: integer("overall_rating").notNull(), // 1-5
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Material Requests Table
export const materialRequests = pgTable("material_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: varchar("user_id", { length: 255 }).notNull(), // Clerk User ID
  courseId: uuid("course_id")
    .notNull()
    .references(() => courses.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  status: requestStatusEnum("status").default("open").notNull(),
  deadline: timestamp("deadline"),
  proposalCount: integer("proposal_count").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Proposals Table
export const proposals = pgTable("proposals", {
  id: uuid("id").primaryKey().defaultRandom(),
  requestId: uuid("request_id")
    .references(() => materialRequests.id, { onDelete: "cascade" })
    .notNull(),
  providerId: varchar("provider_id", { length: 255 }).notNull(), // Clerk User ID bidding
  message: text("message").notNull(),
  estimatedTime: varchar("estimated_time", { length: 100 }).notNull(),
  price: integer("price"), // Optional price
  status: proposalStatusEnum("status").default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// --- Relations ---

export const coursesRelations = relations(courses, ({ many }) => ({
  courseLecturers: many(courseLecturers),
  reviews: many(courseReviews),
  requests: many(materialRequests),
}));

export const lecturersRelations = relations(lecturers, ({ many }) => ({
  courseLecturers: many(courseLecturers),
  reviews: many(courseReviews),
}));

export const courseLecturersRelations = relations(courseLecturers, ({ one }) => ({
  course: one(courses, {
    fields: [courseLecturers.courseId],
    references: [courses.id],
  }),
  lecturer: one(lecturers, {
    fields: [courseLecturers.lecturerId],
    references: [lecturers.id],
  }),
}));

export const courseReviewsRelations = relations(courseReviews, ({ one }) => ({
  course: one(courses, {
    fields: [courseReviews.courseId],
    references: [courses.id],
  }),
  lecturer: one(lecturers, {
    fields: [courseReviews.lecturerId],
    references: [lecturers.id],
  }),
}));

export const materialRequestsRelations = relations(materialRequests, ({ one, many }) => ({
  course: one(courses, {
    fields: [materialRequests.courseId],
    references: [courses.id],
  }),
  proposals: many(proposals),
}));

export const proposalsRelations = relations(proposals, ({ one }) => ({
  request: one(materialRequests, {
    fields: [proposals.requestId],
    references: [materialRequests.id],
  }),
}));
