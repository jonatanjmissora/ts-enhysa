import { tecnicos } from "db/tecnicos/schema"
import { pgTable, text } from "drizzle-orm/pg-core"

export const empresas = pgTable("empresas", {
	id: text("id").primaryKey(),

	razonSocial: text("razonSocial").notNull(),

	direccion: text("direccion").notNull(),

	localidad: text("localidad").notNull(),

	provincia: text("provincia").notNull(),

	codigoPostal: text("codigoPostal").notNull(),

	horarios: text("horarios").notNull(),

	logo: text("logo").notNull(),

	tecnicoId: text("tecnicoId")
		.notNull()
		.references(() => tecnicos.id, { onDelete: "cascade" }),
})

export type EmpresaType = typeof empresas.$inferSelect
