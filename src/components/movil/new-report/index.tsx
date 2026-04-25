import { FileChartColumn } from "lucide-react"
import MovilPart1Data from "./part-1"
import Part2Data from "@/components/dashboard/nuevo-reporte2/part-2"
import { Part3Data } from "@/components/dashboard/nuevo-reporte2/part-3"
import { useState } from "react"

export default function MovilNewReport() {
	const [reportStep, setReportStep] = useState<1 | 2 | 3>(1)

	return (
		<section className="min-h-screen w-11/12 py-30 pt-40 mx-auto">
			<p className="w-full text-left textXL bg-blue-500/25 py-4 flex items-center gap-8 px-5 rounded justify-between">
				Nuevo Reporte <FileChartColumn className="sm:size-5 2xl:size-7" />
			</p>
			<MovilPart1Data />
			<Part2Data />
			<Part3Data />
		</section>
	)
}
