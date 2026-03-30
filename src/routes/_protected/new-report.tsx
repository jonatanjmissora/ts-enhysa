import NewReportPart1 from "@/components/dashboard/nuevo-reporte/part-1/main"
import NewReportPart2 from "@/components/dashboard/nuevo-reporte/part-2/main"
import NewReportPart3 from "@/components/dashboard/nuevo-reporte/part-3/main"
import { createFileRoute, Link } from "@tanstack/react-router"
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react"
import { useState } from "react"

export type PuntosType = {
	nombre: string
	valor: number
	valorX: number
	valorY: number
	cumple: boolean
} | null

export const Route = createFileRoute("/_protected/new-report")({
	component: RouteComponent,
})

function RouteComponent() {
	const [actualStep, setActualStep] = useState(1)
	const [nombre, setNombre] = useState("")
	const [largo, setLargo] = useState<number>(0)
	const [ancho, setAncho] = useState<number>(0)
	const [alto, setAlto] = useState<number>(0)
	const [celdasSeleccionadas, setCeldasSeleccionadas] = useState<string[]>([])
	const [puntos, setPuntos] = useState<PuntosType[]>([null])

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
							disabled={actualStep === 3}
							className={`cursor-pointer ${actualStep === 3 && "opacity-10"}`}
						>
							<ChevronRight className="size-7" />
						</button>
					</div>
					<Link
						to="/"
						className="flex items-center justify-center gap-2 themeBtnAccent rounded-lg shadow-xl sm:text-sm 2xl:text-lg text-foreground tracking-wider px-6 py-2 cursor-pointer m-0"
					>
						<Trash2 className="size-5" />
						descartar
					</Link>
				</div>
			</header>

			{/* ==================================================================== */}
			{/* PARTE 1 */}
			{/* ==================================================================== */}

			<NewReportPart1 actualStep={actualStep} setActualStep={setActualStep} />

			{/* ==================================================================== */}
			{/* PARTE 2 */}
			{/* ==================================================================== */}

			<NewReportPart2
				actualStep={actualStep}
				nombre={nombre}
				setNombre={setNombre}
				setActualStep={setActualStep}
				cantidadFilas={largo}
				cantidadColumnas={ancho}
				cantidadAltura={alto}
				setCantidadFilas={setLargo}
				setCantidadColumnas={setAncho}
				setCantidadAltura={setAlto}
				celdasSeleccionadas={celdasSeleccionadas}
				setCeldasSeleccionadas={setCeldasSeleccionadas}
				puntos={puntos}
				setPuntos={setPuntos}
			/>

			{/* ==================================================================== */}
			{/* PARTE 3 */}
			{/* ==================================================================== */}

			<NewReportPart3
				actualStep={actualStep}
				nombre={nombre}
				setActualStep={setActualStep}
				cantidadAltura={alto}
				cantidadFilas={largo}
				cantidadColumnas={ancho}
				celdasSeleccionadas={celdasSeleccionadas}
				puntos={puntos}
			/>
		</div>
	)
}
