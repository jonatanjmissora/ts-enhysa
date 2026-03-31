import { tecnicos } from "db/tecnicos/schema"
import { pgTable, text } from "drizzle-orm/pg-core"

export const instrumentos = pgTable("instrumentos", {
	id: text("id").primaryKey(),

	marca: text("marca").notNull(),

	modelo: text("modelo").notNull(),

	fechaCalibracion: text("fechaCalibracion").notNull(),

	certificado: text("certificado").array().notNull(),

	imagenes: text("imagenes").array(),

	tecnicoId: text("tecnico_id")
		.notNull()
		.references(() => tecnicos.id, { onDelete: "cascade" }),
})

export type InstrumentoType = typeof instrumentos.$inferSelect
