import { createFileRoute } from "@tanstack/react-router"
import { FileChartColumn } from "lucide-react"
import Part1Data from "../../../components/disenio2/part-1"
import Part2Data from "../../../components/disenio2/part-2"
import { Part3Data } from "@/components/disenio2/part-3"

export const Route = createFileRoute("/_protected/new-report2/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="card bg-accent rounded-lg flex-col items-start gap-10 pb-40">
			<p className="w-full text-left textXL bg-blue-500/25 py-4 flex items-center gap-8 px-5 rounded">
				Nuevo Reporte <FileChartColumn className="sm:size-5 2xl:size-7" />
			</p>

			<div className="px-5 w-full flex flex-col gap-10">
				<Part1Data />
				<Part2Data />
				<Part3Data />
			</div>

			<button className="card bg-background py-2 px-4 rounded-lg textL my-10 flex items-center justify-center gap-2 mx-auto w-1/2">
				<FileChartColumn className="sm:size-5 2xl:size-7 text-foreground/70" />
				Generar Reporte
			</button>
		</div>
	)
}
