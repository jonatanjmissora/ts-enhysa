import { z } from "zod"

export const part1DataFormValidator = z.object({
	tecnicoNombre: z.string().min(3, "Mínimo 3 caracteres"),
	empresaId: z.string().min(1, "requerido"),
	instrumentoId: z.string().min(1, "requerido"),
	clima: z.enum(["soleado", "nublado", "templado", "lluvioso"]),
	humedad: z.enum(["60", "70", "80", "90"]),
	temperatura: z.enum(["10", "20", "30", "40"]),
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
