import { CLIMA, HUMEDAD, TEMPERATURA } from "@/lib/constants"
import { user } from "db/users/schema"
import { pgTable, text } from "drizzle-orm/pg-core"

export const NRpart1s = pgTable("NRpart1s", {
	id: text("id").primaryKey(),

	tecnicoNombre: text("tecnico_nombre").notNull(),

	empresaId: text("empresa_id").notNull(),

	instrumentoId: text("instrumento_id").notNull(),

	clima: text("clima", {
		enum: CLIMA,
	}).notNull(),

	humedad: text("humedad", {
		enum: HUMEDAD,
	}).notNull(),

	temperatura: text("temperatura", {
		enum: TEMPERATURA,
	}).notNull(),

	userId: text("userId")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
})

export type Part1DataType = typeof NRpart1s.$inferSelect
