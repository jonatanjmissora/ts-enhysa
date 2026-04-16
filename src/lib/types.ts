import { uuid } from "zod"

export type Part1DataType = {
	empresaIndex: number
	instrumentoIndex: number
}

export const defaultPart1Data: Part1DataType = {
	empresaIndex: 0,
	instrumentoIndex: 0,
}

// ************************************************************************************************
export type SectorType = {
	id: string
	nombre: string
	tipo: string
	tipoIluminacion: "Natural" | "Artificial" | "Mixta"
	tipoFuente: "Incandescente" | "Descarga" | "Mixta"
	iluminacion: "General" | "Localizada" | "Mixta"
	valorRequerido:
		| "100"
		| "200"
		| "300"
		| "750"
		| "1500"
		| "3000"
		| "5000"
		| "10000"
	observaciones: string
}

export const defaultSector: SectorType = {
	id: uuid().toString(),
	nombre: "",
	tipo: "",
	tipoIluminacion: "Natural",
	tipoFuente: "Incandescente",
	iluminacion: "General",
	valorRequerido: "100",
	observaciones: "",
}

// ************************************************************************************************

type EstadoType = "soleado" | "nublado" | "templado" | "lluvioso"
type HumedadType = "60" | "70" | "80" | "90"
type TemperaturaType = "10" | "15" | "20" | "25" | "30" | "35"
export type ClimaType = {
	estado: EstadoType
	humedad: HumedadType
	temperatura: TemperaturaType
}

export const defaultClima: ClimaType = {
	estado: "soleado",
	humedad: "60",
	temperatura: "20",
}

// ************************************************************************************************

export type CroquisType = {
	largo: number
	ancho: number
	altura: number
	celdasSeleccionadas: number[]
}

export const defaultCroquis: CroquisType = {
	largo: 0,
	ancho: 0,
	altura: 0,
	celdasSeleccionadas: [],
}

// ************************************************************************************************

export type PuntoType = {
	nombre: string
	valor: number
	valorX: number
	valorY: number
	orden: number
	created: number
}

export const defaultPunto = {
	nombre: "",
	valor: 0,
	valorX: 0,
	valorY: 0,
	orden: 0,
	created: Date.now(),
}

// ************************************************************************************************

export type Part3DataType = {
	observacion: string
	conclusion: string
	recomendacion: string
}

export const defaultPart3Data: Part3DataType = {
	observacion: "",
	conclusion: "",
	recomendacion: "",
}
