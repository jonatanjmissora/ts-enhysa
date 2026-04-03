import { z } from "zod"

export const empresaFormValidator = z.object({
	cuit: z.string().min(11, "Mínimo 11 caracteres"),
	razonSocial: z.string().min(3, "Mínimo 3 caracteres"),
	direccion: z.string(),
	localidad: z.string(),
	provincia: z.string(),
	codigoPostal: z.string(),
	horarios: z.string(),
	logo: z.string(),
})

export type EmpresaFormType = z.infer<typeof empresaFormValidator>

export const updateEmpresasValidator = z.object({
	userId: z.string().min(1, "UserId requerido"),
})

export type UpdateEmpresaType = z.infer<typeof updateEmpresasValidator>
