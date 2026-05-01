import { user } from "db/users/schema"
import { pgTable, text } from "drizzle-orm/pg-core"

export const NRpart3s = pgTable("NRpart3s", {
	id: text("id").primaryKey(),

	observacion: text("observacion").notNull(),

	conclusion: text("conclusion").notNull(),

	recomendacion: text("recomendacion").notNull(),

	userId: text("userId")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
})

export type Part3DataType = typeof NRpart3s.$inferSelect
