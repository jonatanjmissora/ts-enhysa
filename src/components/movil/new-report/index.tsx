import Part1Data from "@/components/disenio2/part-1"
import Part2Data from "@/components/disenio2/part-2"
import { Part3Data } from "@/components/disenio2/part-3"
import { FileChartColumn } from "lucide-react"

export default function MovilNewReport() {
	return (
		<section className="min-h-screen w-11/12 py-30 pt-40 mx-auto">
			<p className="w-full text-left textXL bg-blue-500/25 py-4 flex items-center gap-8 px-5 rounded">
				Nuevo Reporte <FileChartColumn className="sm:size-5 2xl:size-7" />
			</p>
			<Part1Data />
			<Part2Data />
			<Part3Data />
		</section>
	)
}
