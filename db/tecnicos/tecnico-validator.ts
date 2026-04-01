import { z } from "zod"

export const tecnicoFormValidator = z.object({
	id: z.string().min(3, "La matrícula debe tener al menos 3 caracteres"),
	nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
	cargo: z.string().min(4, "El cargo debe tener al menos 4 caracteres"),
	telefono: z.string().default(""),
	imagen: z.string().default(""),
	membrete: z.string().default(""),
	firma: z.string().default(""),
})

export type TecnicoFormType = z.infer<typeof tecnicoFormValidator>
