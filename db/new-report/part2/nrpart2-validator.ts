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
	observaciones: z.string().min(1, "Requerido"),
	largo: z.number().min(1, "Requerido").max(50, "Max 50"),
	ancho: z.number().min(1, "Requerido").max(50, "Max 50"),
	alto: z.number().min(1, "Requerido").max(50, "Max 50"),
	imagenes: z.string().array().min(1, "Requerido").max(4, "Max 4"),
	puntos: z.number().array().min(1, "Requerido"),
})

export type Part2DataFormType = z.infer<typeof part2DataFormValidator>

export const updatePart2DataValidator = part2DataFormValidator.extend({
	id: z.string().min(1, "Id requerido"),
	userId: z.string().min(1, "UserId requerido"),
})

export type UpdatePart2DataType = z.infer<typeof updatePart2DataValidator>

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
	imagenes: [],
	puntos: [],
}
