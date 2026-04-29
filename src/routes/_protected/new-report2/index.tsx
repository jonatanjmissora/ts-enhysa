import { createFileRoute } from "@tanstack/react-router"
import { FileChartColumn } from "lucide-react"
import Part2Data from "@/components/dashboard/nuevo-reporte2/part2/part-2"
import Part3Data from "@/components/dashboard/nuevo-reporte2/part-3"
import MovilNewReport from "@/components/movil/new-report"
import { useEffect, useState } from "react"
import Part1Data from "@/components/dashboard/nuevo-reporte2/part1"
import {
	part2DataDefault,
	Part2DataType,
	part3DataDefault,
	Part3DataType,
} from "@/lib/types2"
import { Part1DataType } from "db/new-report/part1/schema"
import { defaultPart1Data } from "db/new-report/part1/nrpart1-validator"

export const Route = createFileRoute("/_protected/new-report2/")({
	component: RouteComponent,
})

function RouteComponent() {
	const [part1Data, setPart1Data] = useState<Part1DataType>(defaultPart1Data)
	const [part2Data, setPart2Data] = useState<Part2DataType>(part2DataDefault)
	const [part3Data, setPart3Data] = useState<Part3DataType>(part3DataDefault)

	// null = aún no se conoce el tamaño (SSR / primer render)
	const [isMobil, setIsMobil] = useState<boolean | null>(null)

	useEffect(() => {
		const check = () => setIsMobil(window.innerWidth < 640)
		check()
		window.addEventListener("resize", check)
		return () => window.removeEventListener("resize", check)
	}, [])

	// Durante SSR y el primer render no se sabe el viewport → no renderizar nada
	if (isMobil === null) return <span className="text-4xl">CARGANDO</span>

	if (isMobil)
		return (
			<MovilNewReport
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
