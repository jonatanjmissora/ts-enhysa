import { ChevronLeft, FileChartColumn } from "lucide-react"
import MovilPart1Data from "./part-1"
import { useEffect, useState } from "react"
import MovilPart2Data from "./part-2"
import MovilPart3Data from "./part-3"
import MovilPart4Data from "./part-4"
import { Link } from "@tanstack/react-router"

export default function MovilNewReport() {
	const [reportStep, setReportStep] = useState<1 | 2 | 3 | 4>(1)
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.scrollTo(0, 1)
		}
	}, [])

	return (
		<section className="min-h-screen w-11/12 py-30 pt-40 mx-auto relative">
			<Link to="/iluminacion" className={`absolute top-20 left-4`}>
				<ChevronLeft size={24} />
			</Link>
			<p className="w-full text-left textXL bg-blue-500/25 py-4 flex items-center gap-8 px-5 rounded justify-between">
				Nuevo Reporte <FileChartColumn className="sm:size-5 2xl:size-7" />
			</p>
			{reportStep === 1 && <MovilPart1Data setReportStep={setReportStep} />}
			{reportStep === 2 && <MovilPart2Data setReportStep={setReportStep} />}
			{reportStep === 3 && <MovilPart3Data setReportStep={setReportStep} />}
			{reportStep === 4 && <MovilPart4Data setReportStep={setReportStep} />}
		</section>
	)
}
