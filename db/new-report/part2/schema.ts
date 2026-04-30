import {
	ILUMINACION,
	ILUMINACION_FUENTE,
	ILUMINACION_TIPO,
	VALORES_REQUERIDOS,
} from "@/lib/constants"
import { user } from "db/users/schema"
import { integer, pgTable, text } from "drizzle-orm/pg-core"

export const NRpart2s = pgTable("NRpart2s", {
	id: text("id").primaryKey(),

	nombre: text("nombre").notNull(),

	tipo: text("tipo").notNull(),

	iluminacionTipo: text("iluminacion_tipo", {
		enum: ILUMINACION_TIPO as [string, ...string[]],
	}).notNull(),

	iluminacionFuente: text("iluminacion_fuente", {
		enum: ILUMINACION_FUENTE as [string, ...string[]],
	}).notNull(),

	iluminacion: text("iluminacion", {
		enum: ILUMINACION as [string, ...string[]],
	}).notNull(),

	valorRequerido: text("valor_requerido", {
		enum: VALORES_REQUERIDOS as [string, ...string[]],
	}).notNull(),

	observaciones: text("observaciones").notNull(),

	largo: integer("largo").notNull(),

	ancho: integer("ancho").notNull(),

	alto: integer("alto").notNull(),

	imagenes: text("imagenes").array().notNull(),

	puntos: integer("puntos").array().notNull(),

	userId: text("userId")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
})

export type Part2DataType = typeof NRpart2s.$inferSelect
