import { z } from "zod"

export const tecnicoFormValidator = z.object({
	id: z.string().min(3, "Mínimo 3 caracteres"),
	nombre: z.string().min(3, "Mínimo 3 caracteres"),
	cargo: z.string().min(4, "Mínimo 4 caracteres"),
	telefono: z.string(),
	membrete: z.string(),
	firma: z.string(),
	localidad: z.string(),
})

export type TecnicoFormType = z.infer<typeof tecnicoFormValidator>

export const updateTecnicoValidator = tecnicoFormValidator.extend({
	userId: z.string().min(1, "UserId requerido"),
})

export type UpdateTecnicoType = z.infer<typeof updateTecnicoValidator>
