import { z } from "zod"

export const tecnicoFormValidator = z
	.object({
		id: z.string().min(3, "Mínimo 3 caracteres"),
		nombre: z.string().min(3, "Mínimo 3 caracteres"),
		cargo: z.string().min(4, "Mínimo 4 caracteres"),
		telefono: z.string().default(""),
		membrete: z.string().default(""),
		firma: z.string().default(""),
		localidad: z.string().default(""),
	})
	.transform(data => ({
		...data,
		telefono: data.telefono || "",
		membrete: data.membrete || "",
		firma: data.firma || "",
		localidad: data.localidad || "",
	}))

export type TecnicoFormType = z.infer<typeof tecnicoFormValidator>
