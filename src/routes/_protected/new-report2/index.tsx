import { createFileRoute } from "@tanstack/react-router"
import { FileChartColumn } from "lucide-react"
import Part2Data from "@/components/dashboard/nuevo-reporte2/part2/part-2"
import Part3Data from "@/components/dashboard/nuevo-reporte2/part-3"
import MovilNewReport from "@/components/movil/new-report"
import { useState } from "react"
import Part1Data from "@/components/dashboard/nuevo-reporte2/part1"
import { z } from "zod"

export const Route = createFileRoute("/_protected/new-report2/")({
	component: RouteComponent,
})

export type Part1DataType = {
	empresaId: string
	instrumentoId: string
	clima: string
}
export const part1DataDefault: Part1DataType = {
	empresaId: "",
	instrumentoId: "",
	clima: "000",
}

export type Part2DataType = {
	nombre: string
	tipo: string
	iluminacionTipo: string
	iluminacionFuente: string
	iluminacion: string
	requerido: string
	observacion: string
}[]
export const part2DataDefault = {
	nombre: "",
	tipo: "",
	iluminacionTipo: "natural",
	iluminacionFuente: "incandescente",
	iluminacion: "general",
	requerido: "200",
	observacion: "",
	largo: "",
	ancho: "",
	alto: "",
}

export const areaFormValidator = z.object({
	nombre: z.string().min(3, "Mínimo 3 caracteres"),
	tipo: z.string().min(3, "Mínimo 3 caracteres"),
	iluminacionTipo: z.enum(["natural", "artificial", "mixta"]),
	iluminacionFuente: z.enum(["incandescente", "descarga", "mixta"]),
	iluminacion: z.enum(["general", "localizada", "mixta"]),
	requerido: z.enum(["100", "200", "300", "750", "1000"]),
	observacion: z.string(),
	largo: z.string(),
	ancho: z.string(),
	alto: z.string(),
})
export type Part3DataType = {}
export const part3DataDefault = {}

function RouteComponent() {
	const [part1Data, setPart1Data] = useState<Part1DataType>(part1DataDefault)
	const [part2Data, setPart2Data] = useState<Part2DataType>(part2DataDefault)
	const [part3Data, setPart3Data] = useState<Part3DataType>(part3DataDefault)

	const isMobil = typeof window !== "undefined" && window.innerWidth < 640

	if (isMobil)
		return (
			<MovilNewReport
				part1Data={part1Data}
				setPart1Data={setPart1Data}
				part2Data={part2Data}
				setPart2Data={setPart2Data}
				part3Data={part3Data}
				setPart3Data={setPart3Data}
			/>
		)

	return (
		<div className="card bg-accent rounded-lg flex-col items-start gap-10 pb-40">
			<p className="w-full text-left textXL bg-blue-500/25 py-4  mt-10 flex items-center gap-8 px-5 rounded">
				Nuevo Reporte <FileChartColumn className="sm:size-5 2xl:size-7" />
			</p>

			<div className="px-5 w-full flex flex-col gap-10">
				<Part1Data part1Data={part1Data} setPart1Data={setPart1Data} />
				<Part2Data part2Data={part2Data} setPart2Data={setPart2Data} />
				<Part3Data part3Data={part3Data} setPart3Data={setPart3Data} />
			</div>

			<button className="card bg-background py-2 px-4 rounded-lg textL my-10 flex items-center justify-center gap-2 mx-auto w-1/2">
				<FileChartColumn className="sm:size-5 2xl:size-7 text-foreground/70" />
				Generar Reporte
			</button>
		</div>
	)
}
