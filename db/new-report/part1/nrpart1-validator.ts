import { CLIMA, HUMEDAD, TEMPERATURA } from "@/lib/constants"
import { z } from "zod"

export const part1DataFormValidator = z.object({
	tecnicoNombre: z.string().min(3, "Mínimo 3 caracteres"),
	empresaId: z.string().min(1, "requerido"),
	instrumentoId: z.string().min(1, "requerido"),
	clima: z.enum(CLIMA),
	humedad: z.enum(HUMEDAD),
	temperatura: z.enum(TEMPERATURA),
})

export type Part1DataFormType = z.infer<typeof part1DataFormValidator>

export const updatePart1DataValidator = part1DataFormValidator.extend({
	id: z.string().min(1, "Id requerido"),
	userId: z.string().min(1, "UserId requerido"),
})

export type UpdatePart1DataType = z.infer<typeof updatePart1DataValidator>

export const defaultPart1Data: Part1DataFormType = {
	tecnicoNombre: "",
	empresaId: "",
	instrumentoId: "",
	clima: "soleado",
	humedad: "80",
	temperatura: "20",
}
