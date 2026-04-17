import { createFileRoute } from "@tanstack/react-router"
import { FileChartColumn } from "lucide-react"
import Part1Data from "./_components/part-1"
import Part2Data from "./_components/part-2"

export const Route = createFileRoute("/_protected/new-report2/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="card bg-accent flex-col items-start gap-10">
			<p className="w-full text-left textXL text-blue-500/50 py-4 flex items-center gap-8 border-b-2 border-blue-500/25">
				Nuevo Reporte{" "}
				<FileChartColumn className="sm:size-8 2xl:size-10 text-blue-500/50" />
			</p>

			<div className="px-5 w-full flex flex-col gap-10">
				<Part1Data />
				<Part2Data />
			</div>
		</div>
	)
}
