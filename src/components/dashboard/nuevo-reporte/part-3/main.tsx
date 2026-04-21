import { BookmarkCheck } from "lucide-react"
import Resumen from "./resumen"
import NewReportPart3Tags from "./tags"
import NewReportPart3Plano from "./plano"
import NewReportPart3Observaciones from "./observaciones"
import {
	CroquisType,
	Part1DataType,
	Part3DataType,
	PuntoType,
} from "@/lib/types"
import { toast } from "sonner"

export default function NewReportPart3({
	actualStep,
	setActualStep,
	croquis,
	nombre,
	puntos,
	part3Data,
	setPart3Data,
}: {
	actualStep: number
	setActualStep: (step: number) => void
	part1Data: Part1DataType
	croquis: CroquisType
	nombre: string
	puntos: PuntoType[]
	part3Data: Part3DataType
	setPart3Data: (data: Part3DataType) => void
}) {
	const pasarAlPaso4 = () => {
		if (part3Data.conclusion && part3Data.recomendacion) {
			window.scrollTo(0, 0)
			setActualStep(4)
		} else toast.error("Por favor, complete los Conclusiones y Recomendaciones")
	}

	return (
		<main
			className={`${actualStep === 3 ? "flex-1" : "hidden"} p-20 sm:py-10 2xl:py-20 flex flex-col gap-10 justify-center`}
		>
			<div className="flex items-stretch gap-10">
				<div className="flex-1 flex flex-col gap-10 sm:w-[40%] 2xl:w-1/2">
					<NewReportPart3Tags puntos={puntos} />

					<Resumen puntos={puntos} nombre={nombre} />
				</div>

				<div className="flex flex-col gap-10 w-1/2">
					<NewReportPart3Plano
						puntos={puntos}
						nombre={nombre}
						croquis={croquis}
					/>
					<div className="card bg-accent">
						<NewReportPart3Observaciones
							part3Data={part3Data}
							setPart3Data={setPart3Data}
						/>
					</div>
				</div>
			</div>

			<button
				type="button"
				onClick={pasarAlPaso4}
				className="flex items-center gap-4 themeBtnAccent justify-center rounded-xl my-shadow text-lg text-foreground tracking-wide px-6 py-4 cursor-pointer m-0"
			>
				<BookmarkCheck className="size-6" />
				Generar Reporte PDF
			</button>
		</main>
	)
}
