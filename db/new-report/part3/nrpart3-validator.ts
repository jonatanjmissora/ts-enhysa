import { z } from "zod"

export const part3DataFormValidator = z.object({
	observacion: z.string(),
	conclusion: z.string(),
	recomendacion: z.string(),
})

export type Part3DataFormType = z.infer<typeof part3DataFormValidator>

export const updatePart3DataValidator = part3DataFormValidator.extend({
	id: z.string().min(1, "Id requerido"),
	userId: z.string().min(1, "UserId requerido"),
})

export type UpdatePart3DataType = z.infer<typeof updatePart3DataValidator>

export const defaultPart3Data: Part3DataFormType = {
	observacion: "",
	conclusion: "",
	recomendacion: "",
}
