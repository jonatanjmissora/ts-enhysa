import { user } from "db/users/schema"
import { pgTable, text } from "drizzle-orm/pg-core"

export const tecnicos = pgTable("tecnicos", {
	nombre: text("nombre").notNull(),

	telefono: text("telefono").notNull(),

	localidad: text("localidad").notNull(),

	cargo: text("cargo").notNull(),

	id: text("id").primaryKey(),

	firma: text("firma").notNull(),

	membrete: text("membrete").notNull(),

	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
})

export type TecnicoType = typeof tecnicos.$inferSelect
