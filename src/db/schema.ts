import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const giftEnquiries = pgTable("gift_enquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  email: varchar("email", { length: 160 }),
  city: varchar("city", { length: 120 }),
  product: varchar("product", { length: 180 }).notNull(),
  occasion: varchar("occasion", { length: 120 }),
  photoName: varchar("photo_name", { length: 240 }),
  message: text("message"),
  source: varchar("source", { length: 40 }).default("website").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type GiftEnquiry = typeof giftEnquiries.$inferSelect;
export type NewGiftEnquiry = typeof giftEnquiries.$inferInsert;
