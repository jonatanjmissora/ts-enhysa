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

export const FECHA_1970 = new Date("1970-01-01")

export const PROTOCOLOS = [
	{ id: "iluminacion", title: "Estudio de Iluminación Res. 84/2012 SRT" },
	{ id: "ruido", title: "Estudio de Ruido Res 84/2012 SRT" },
	{ id: "extintores", title: "Control de Extintores, Recarga y PH." },
	{
		id: "pat",
		title:
			"Estudio de PAT y Continuidad de las Masas Res. 900/2015 SRT y Reglamento AEA.",
	},
	{ id: "fuego", title: "Carga de Fuego." },
	{ id: "emergencia", title: "Plan de Respuesta a la Emergencia." },
	{ id: "maquinas", title: "Check list de máquinas y equipos." },
	{
		id: "horas",
		title: "Registro de Horas Profesionales HSE Con geolocalización.",
	},
	{ id: "legislacion", title: "Consulta de Legislación." },
	{
		id: "incidentes",
		title:
			"Reporte de Incidentes, accidentes e investigación de Siniestros. (estadísticas, seguimiento de mejoras)",
	},
	{ id: "riesgos", title: "Matriz de Riesgos (IPER)" },
] as const

export type ProtocolosType = (typeof PROTOCOLOS)[number]
