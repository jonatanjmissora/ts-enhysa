import { BookmarkCheck, Download } from "lucide-react"
import { CeldasGridWithPuntos } from "../part-2/croquis"
import Resumen from "./resumen"
import { PuntosType } from "@/routes/_protected/new-report"

export default function NewReportPart3({
	actualStep,
	setActualStep,
	puntos,
}: {
	actualStep: number
	setActualStep: (step: number) => void
	puntos: PuntosType[]
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
					<Resumen puntos={puntos} />

					<div className={`flex-1 cardAccent p-20`}>FORMULA</div>
				</div>

				<div className="h-full w-1/2 cardAccent flex items-center justify-center p-20">
					<CeldasGridWithPuntos
						cantidad_filas={3}
						cantidad_columnas={2}
						celdasSeleccionadas={["11"]}
						puntos={puntos}
					/>
				</div>
			</div>

			<div className="flex justify-end">
				<button
					type="button"
					className="cardAccent py-2 px-5 cursor-pointer hover:bg-accent/50 flex items-center justify-center gap-2"
				>
					<Download className="size-6" />
					Descargar PDF
				</button>
			</div>

			<button
				type="button"
				className="flex items-center gap-4 themeBtnAccent justify-center rounded-xl shadow-xl text-lg text-foreground tracking-wide px-6 py-4 cursor-pointer m-0"
				onClick={finalizarProyecto}
			>
				<BookmarkCheck className="size-6" />
				Finalizar Reporte
			</button>
		</main>
	)
}
