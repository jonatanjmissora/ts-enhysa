import { user } from "db/users/schema"
import { pgTable, text } from "drizzle-orm/pg-core"

export const tecnicos = pgTable("tecnicos", {
	id: text("id").primaryKey(),

	nombre: text("nombre").notNull(),

	cargo: text("cargo").notNull(),

	telefono: text("telefono"),

	imagen: text("imagen"),

	membrete: text("membrete"),

	firma: text("firma"),

	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
})

export type TecnicoType = typeof tecnicos.$inferSelect
