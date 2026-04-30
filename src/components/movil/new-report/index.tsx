import { FileChartColumn } from "lucide-react"
import MovilPart1Data from "./part-1"
import { Dispatch, SetStateAction, useState } from "react"
import Part3Data from "@/components/dashboard/nuevo-reporte2/part-3"
import { Part2DataType, Part3DataType } from "@/lib/types2"
import Final from "@/components/dashboard/nuevo-reporte2/final"
import MovilPart2Data from "./part-2"
import { Part1DataType } from "db/new-report/part1/schema"

export default function MovilNewReport({
	part1Data,
	part2Data,
	setPart3Data,
	part3Data,
}: {
	part1Data: Part1DataType
	part2Data: Part2DataType
	setPart3Data: Dispatch<SetStateAction<Part3DataType>>
	part3Data: Part3DataType
}) {
	const [reportStep, setReportStep] = useState<1 | 2 | 3 | 4>(1)

	return (
		<section className="min-h-screen w-11/12 py-30 pt-40 mx-auto">
			<p className="w-full text-left textXL bg-blue-500/25 py-4 flex items-center gap-8 px-5 rounded justify-between">
				Nuevo Reporte <FileChartColumn className="sm:size-5 2xl:size-7" />
			</p>
			{reportStep === 1 && <MovilPart1Data setReportStep={setReportStep} />}
			{reportStep === 2 && <MovilPart2Data setReportStep={setReportStep} />}
			{reportStep === 3 && (
				<Part3Data
					setReportStep={setReportStep}
					setPart3Data={setPart3Data}
					part3Data={part3Data}
				/>
			)}
			{reportStep === 4 && (
				<Final
					setReportStep={setReportStep}
					part1Data={part1Data}
					part2Data={part2Data}
					part3Data={part3Data}
				/>
			)}
		</section>
	)
}
