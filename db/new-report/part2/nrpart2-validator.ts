import {
	ILUMINACION,
	ILUMINACION_FUENTE,
	ILUMINACION_TIPO,
	VALORES_REQUERIDOS,
} from "@/lib/constants"
import { z } from "zod"

export const part2DataFormValidator = z.object({
	nombre: z.string().min(1, "Requerido"),
	tipo: z.string().min(1, "Requerido"),
	iluminacionTipo: z.enum(ILUMINACION_TIPO),
	iluminacionFuente: z.enum(ILUMINACION_FUENTE),
	iluminacion: z.enum(ILUMINACION),
	valorRequerido: z.enum(VALORES_REQUERIDOS),
	observaciones: z.string(),
	largo: z.number().min(1, "Requerido").max(50, "Max 50"),
	ancho: z.number().min(1, "Requerido").max(50, "Max 50"),
	alto: z.number().min(1, "Requerido").max(50, "Max 50"),
})

export type Part2DataFormType = z.infer<typeof part2DataFormValidator>

export const part2DataValidator = part2DataFormValidator.extend({
	puntos: z.array(z.number()).min(1, "Requerido"),
	imagenes: z.array(z.string()),
})

export type Part2DataWPuntosType = z.infer<typeof part2DataValidator>

export const updatePart2DataValidator = part2DataFormValidator.extend({
	id: z.string().min(1, "Id requerido"),
	userId: z.string().min(1, "UserId requerido"),
})

export type UpdatePart2DataType = z.infer<typeof updatePart2DataValidator>

export const nrPart2IdValidator = z.object({
	id: z.string().min(1, "Id requerido"),
})

export type NrPart2IdType = z.infer<typeof nrPart2IdValidator>

export const defaultPart2Data: Part2DataFormType = {
	nombre: "",
	tipo: "",
	iluminacionTipo: "natural",
	iluminacionFuente: "incandescente",
	iluminacion: "general",
	valorRequerido: "200",
	observaciones: "",
	largo: 1,
	ancho: 1,
	alto: 1,
}
