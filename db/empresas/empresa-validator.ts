import { z } from "zod"

export const empresaFormValidator = z.object({
	id: z.string().min(3, "Mínimo 3 caracteres"),
	razonSocial: z.string().min(3, "Mínimo 3 caracteres"),
	direccion: z.string(),
	localidad: z.string(),
	provincia: z.string(),
	codigoPostal: z.string(),
	horarios: z.string(),
	logo: z.string(),
	tecnicoId: z.string(),
})

export type EmpresaFormType = z.infer<typeof empresaFormValidator>

export const empresaIdValidator = z.object({
	id: z.string().min(1, "ID inválido"),
	tecnicoId: z.string().min(1, "TécnicoId requerido"),
})

export const updateEmpresaValidator = empresaFormValidator.extend({
	tecnicoId: z.string().min(1, "TécnicoId requerido"),
})

export type UpdateEmpresaType = z.infer<typeof updateEmpresaValidator>
