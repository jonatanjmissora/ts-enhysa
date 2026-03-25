import NewReportPart1 from "@/components/dashboard/nuevo-reporte/part-1/main"
import NewReportPart2 from "@/components/dashboard/nuevo-reporte/part-2/main"
import NewReportPart3 from "@/components/dashboard/nuevo-reporte/part-3/main"
import { createFileRoute, Link } from "@tanstack/react-router"
import { X } from "lucide-react"
import { useState } from "react"

export const Route = createFileRoute("/_protected/new-report")({
	component: RouteComponent,
})

function RouteComponent() {
	const [actualStep, setActualStep] = useState(1)

	return (
		<div className="min-h-screen flex flex-col">
			<header className="sm:text-base 2xl:text-xl font-semibold tracking-wider sm:h-20 2xl:h-24 px-20 bg-accent border border-background flex justify-between items-center">
				<span>Protocolo de Iluminación Res 84/12 SRT</span>
				<Link
					to="/"
					className="flex items-center justify-center gap-4 themeBtnAccent rounded-lg shadow-xl sm:text-sm 2xl:text-lg text-foreground tracking-wider px-6 py-3 cursor-pointer m-0"
				>
					<X className="size-4" />
					Cancelar
				</Link>
			</header>

			{/* ==================================================================== */}
			{/* PARTE 1 */}
			{/* ==================================================================== */}

			<NewReportPart1 actualStep={actualStep} setActualStep={setActualStep} />

			{/* ==================================================================== */}
			{/* PARTE 2 */}
			{/* ==================================================================== */}

			<NewReportPart2 actualStep={actualStep} setActualStep={setActualStep} />

			{/* ==================================================================== */}
			{/* PARTE 3 */}
			{/* ==================================================================== */}

			<NewReportPart3 actualStep={actualStep} setActualStep={setActualStep} />
		</div>
	)
}
