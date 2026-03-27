import { BookmarkCheck } from "lucide-react"
import Resumen from "./resumen"
import { PuntosType } from "@/routes/_protected/new-report"
import NewReportPart3Tags from "./tags"
import NewReportPart3Plano from "./plano"

export default function NewReportPart3({
	actualStep,
	nombre,
	setActualStep,
	puntos,
	cantidadFilas,
	cantidadColumnas,
	celdasSeleccionadas,
}: {
	actualStep: number
	nombre: string
	setActualStep: (step: number) => void
	puntos: PuntosType[]
	cantidadFilas: number
	cantidadColumnas: number
	celdasSeleccionadas: string[]
}) {
	const finalizarProyecto = () => {
		// TODO: implementar
		setActualStep(1)
	}

	return (
		<main
			className={`${actualStep === 3 ? "flex-1" : "hidden"} p-20 sm:py-10 2xl:py-20 flex flex-col gap-10 justify-center`}
		>
			<div className="flex items-stretch gap-10">
				<div className="flex-1 flex flex-col gap-10 sm:w-[40%] 2xl:w-1/2">
					<Resumen puntos={puntos} nombre={nombre} />

					<div className={`flex-1 cardAccent p-20 items-center justify-center`}>
						AQUI VA LA FORMULA
					</div>
				</div>

				<div className="flex flex-col gap-10 w-1/2">
					<NewReportPart3Tags puntos={puntos} />

					<NewReportPart3Plano
						puntos={puntos}
						nombre={nombre}
						cantidadFilas={cantidadFilas}
						cantidadColumnas={cantidadColumnas}
						celdasSeleccionadas={celdasSeleccionadas}
					/>
				</div>
			</div>

			<button
				type="button"
				className="flex items-center gap-4 themeBtnAccent justify-center rounded-xl shadow-xl text-lg text-foreground tracking-wide px-6 py-4 cursor-pointer m-0"
				onClick={finalizarProyecto}
			>
				<BookmarkCheck className="size-6" />
				Generar Reporte PDF
			</button>
		</main>
	)
}
