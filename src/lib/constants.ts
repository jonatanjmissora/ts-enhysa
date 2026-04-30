export const CLIMA = ["soleado", "nublado", "templado", "lluvioso"] as const

export type ClimaType = (typeof CLIMA)[number]

export const HUMEDAD = ["60", "70", "80", "90"] as const

export type HumedadType = (typeof HUMEDAD)[number]

export const TEMPERATURA = ["10", "20", "30", "40"] as const

export type TemperaturaType = (typeof TEMPERATURA)[number]

export const MUESTREO = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
]

export const ILUMINACION_TIPO = ["natural", "artificial", "mixta"] as const

export type IluminacionTipoType = (typeof ILUMINACION_TIPO)[number]

export const ILUMINACION_FUENTE = [
	"incandescente",
	"descarga",
	"mixta",
] as const

export type IluminacionFuenteType = (typeof ILUMINACION_FUENTE)[number]

export const ILUMINACION = ["general", "localizada", "mixta"] as const

export type IluminacionType = (typeof ILUMINACION)[number]

export const VALORES_REQUERIDOS = ["100", "200", "300", "750", "1000"] as const

export type ValoresRequeridosType = (typeof VALORES_REQUERIDOS)[number]
