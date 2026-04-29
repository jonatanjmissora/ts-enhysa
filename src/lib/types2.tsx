import { z } from "zod"

// export type Part1DataType = {
// 	tecnicoNombre: string
// 	empresaId: string
// 	instrumentoId: string
// 	clima: "soleado" | "nublado" | "templado" | "lluvioso"
// 	humedad: "60" | "70" | "80" | "90"
// 	temperatura: "10" | "20" | "30" | "40"
// }
// export const defaultPart1Data: Part1DataFormType = {
// 	tecnicoNombre: "",
// 	empresaId: "",
// 	instrumentoId: "",
// 	clima: "soleado",
// 	humedad: "80",
// 	temperatura: "20",
// }

export type Part2DataType = {
	nombre: string
	tipo: string
	iluminacionTipo: string
	iluminacionFuente: string
	iluminacion: string
	requerido: string
	observacion: string
	largo: number
	ancho: number
	alto: number
}
export const part2DataDefault = {
	nombre: "",
	tipo: "",
	iluminacionTipo: "natural",
	iluminacionFuente: "incandescente",
	iluminacion: "general",
	requerido: "200",
	observacion: "",
	largo: 0,
	ancho: 0,
	alto: 0,
}

export const areaFormValidator = z.object({
	nombre: z.string().min(3, "Mínimo 3 caracteres"),
	tipo: z.string().min(3, "Mínimo 3 caracteres"),
	iluminacionTipo: z.enum(["natural", "artificial", "mixta"]),
	iluminacionFuente: z.enum(["incandescente", "descarga", "mixta"]),
	iluminacion: z.enum(["general", "localizada", "mixta"]),
	requerido: z.enum(["100", "200", "300", "750", "1000"]),
	observacion: z.string(),
	largo: z.number().min(0, "Debe ser mayor a 0").max(50, "Debe ser menor a 50"),
	ancho: z.number().min(0, "Debe ser mayor a 0").max(50, "Debe ser menor a 50"),
	alto: z.number().min(0, "Debe ser mayor a 0").max(50, "Debe ser menor a 50"),
})
export type Part3DataType = {}
export const part3DataDefault = {}
