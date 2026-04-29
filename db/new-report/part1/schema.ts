import { user } from "db/users/schema"
import { pgTable, text } from "drizzle-orm/pg-core"

export const NRpart1s = pgTable("NRpart1s", {
	id: text("id").primaryKey(),

	tecnicoNombre: text("tecnico_nombre").notNull(),

	empresaId: text("empresa_id").notNull(),

	instrumentoId: text("instrumento_id").notNull(),

	clima: text("clima", {
		enum: ["soleado", "nublado", "templado", "lluvioso"],
	}).notNull(),

	humedad: text("humedad", { enum: ["60", "70", "80", "90"] }).notNull(),

	temperatura: text("temperatura", {
		enum: ["10", "20", "30", "40"],
	}).notNull(),

	userId: text("userId")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
})

export type Part1DataType = typeof NRpart1s.$inferSelect
