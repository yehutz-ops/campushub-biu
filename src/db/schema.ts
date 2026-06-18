import { pgTable, text, timestamp, uuid, varchar, integer, pgEnum } from "drizzle-orm/pg-core";

// Enums
export const requestStatusEnum = pgEnum("request_status", ["open", "in-progress", "closed", "under-review"]);
export const proposalStatusEnum = pgEnum("proposal_status", ["pending", "accepted", "rejected"]);

// A dummy courses table just for foreign key reference if needed later
// export const courses = pgTable("courses", {
//   id: uuid("id").primaryKey().defaultRandom(),
//   name: varchar("name", { length: 255 }).notNull(),
// });

// Material Requests Table
export const materialRequests = pgTable("material_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: varchar("user_id", { length: 255 }).notNull(), // Clerk User ID
  courseId: uuid("course_id").notNull(), // Would reference courses.id in a full schema
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
