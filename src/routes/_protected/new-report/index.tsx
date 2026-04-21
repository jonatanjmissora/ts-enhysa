import { createFileRoute } from "@tanstack/react-router"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { instrumentosQueryOptions } from "queries/instrumentos/instrumentos-query"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react"
import { Link } from "@tanstack/react-router"
import NewReportPart1 from "@/components/dashboard/nuevo-reporte/part-1/main"
import NewReportPart2 from "@/components/dashboard/nuevo-reporte/part-2/main"
import NewReportPart3 from "@/components/dashboard/nuevo-reporte/part-3/main"
import NewReportPart4 from "@/components/dashboard/nuevo-reporte/part-4/main"
import {
	ClimaType,
	CroquisType,
	Part1DataType,
	Part3DataType,
	PuntoType,
	SectorType,
	defaultClima,
	defaultCroquis,
	defaultPart1Data,
	defaultPart3Data,
	defaultSector,
} from "@/lib/types"

export const Route = createFileRoute("/_protected/new-report/")({
	loader: ({ context }) => {
		context.queryClient.ensureQueryData(tecnicoQueryOptions)
		context.queryClient.ensureQueryData(empresasQueryOptions)
		context.queryClient.ensureQueryData(instrumentosQueryOptions)
		return null
	},
	component: RouteComponent,
})

function RouteComponent() {
	// estado del componente
	const [actualStep, setActualStep] = useState(1)

	// estados globales
	const [part1Data, setPart1Data] = useState<Part1DataType>(defaultPart1Data)

	const [sector, setSector] = useState<SectorType>(defaultSector)

	const [croquis, setCroquis] = useState<CroquisType>(defaultCroquis)

	const [clima, setClima] = useState<ClimaType>(defaultClima)

	const [puntos, setPuntos] = useState<PuntoType[]>([])

	const [part3Data, setPart3Data] = useState<Part3DataType>(defaultPart3Data)

	const volverPaso = () => {
		setActualStep(actualStep - 1)
	}

	const siguientePaso = () => {
		setActualStep(actualStep + 1)
	}

	return (
		<div className="min-h-screen flex flex-col">
			<header className="sm:text-base 2xl:text-xl font-semibold tracking-wider sm:h-20 2xl:h-24 px-20 bg-accent border border-background flex justify-between items-center">
				<span>Protocolo de Iluminación Res 84/12 SRT</span>
				<div className="flex gap-10 items-center justify-center">
					<div className={`flex gap-4 items-center justify-center`}>
						<button
							onClick={volverPaso}
							disabled={actualStep === 1}
							className={`cursor-pointer ${actualStep === 1 && "opacity-10"}`}
						>
							<ChevronLeft className="size-7" />
						</button>
						<button
							onClick={siguientePaso}
							disabled={actualStep === 4}
							className={`cursor-pointer ${actualStep === 4 && "opacity-10"}`}
						>
							<ChevronRight className="size-7" />
						</button>
					</div>
					<Link
						to="/"
						className="flex items-center justify-center gap-2 themeBtnAccent rounded-lg my-shadow sm:text-sm 2xl:text-lg text-foreground tracking-wider px-6 py-2 cursor-pointer m-0"
					>
						<Trash2 className="size-5" />
						descartar
					</Link>
				</div>
			</header>

			{/* ==================================================================== */}
			{/* PARTE 1 */}
			{/* ==================================================================== */}

			<NewReportPart1
				actualStep={actualStep}
				setActualStep={setActualStep}
				part1Data={part1Data}
				setPart1Data={setPart1Data}
			/>

			{/* ==================================================================== */}
			{/* PARTE 2 */}
			{/* ==================================================================== */}

			<NewReportPart2
				actualStep={actualStep}
				setActualStep={setActualStep}
				croquis={croquis}
				setCroquis={setCroquis}
				puntos={puntos}
				setPuntos={setPuntos}
				sector={sector}
				setSector={setSector}
				clima={clima}
				setClima={setClima}
			/>

			{/* ==================================================================== */}
			{/* PARTE 3 */}
			{/* ==================================================================== */}

			<NewReportPart3
				actualStep={actualStep}
				setActualStep={setActualStep}
				part1Data={part1Data}
				nombre={sector.nombre}
				croquis={croquis}
				puntos={puntos}
				part3Data={part3Data}
				setPart3Data={setPart3Data}
			/>

			{/* ==================================================================== */}
			{/* PARTE 4 */}
			{/* ==================================================================== */}

			<NewReportPart4
				actualStep={actualStep}
				part1Data={part1Data}
				sector={sector}
				clima={clima}
				croquis={croquis}
				puntos={puntos}
				part3Data={part3Data}
			/>
		</div>
	)
}
