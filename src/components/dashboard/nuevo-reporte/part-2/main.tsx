import MedidasPlano from "./medidas-plano"
import { Save } from "lucide-react"
import type { PuntosType } from "@/routes/_protected/new-report"
import { toast } from "sonner"
import InformacionMedicion from "./Informacion-medicion"
import CroquisComponent from "./croquis"
import PuntosList from "./puntos-list"

export default function NewReportPart2({
	actualStep,
	setActualStep,
	nombre,
	setNombre,
	puntos,
	setPuntos,
	cantidadFilas,
	setCantidadFilas,
	cantidadColumnas,
	setCantidadColumnas,
	cantidadAltura,
	setCantidadAltura,
	celdasSeleccionadas,
	setCeldasSeleccionadas,
}: {
	actualStep: number
	setActualStep: (step: number) => void
	nombre: string
	setNombre: (nombre: string) => void
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
	cantidadFilas: number
	setCantidadFilas: (cantidad: number) => void
	cantidadColumnas: number
	setCantidadColumnas: (cantidad: number) => void
	cantidadAltura: number
	setCantidadAltura: (cantidad: number) => void
	celdasSeleccionadas: number[]
	setCeldasSeleccionadas: (celdas: number[]) => void
}) {
	const pasarAlPaso3 = () => {
		let completos = true
		if (!puntos) return
		puntos.forEach(punto => {
			if (!punto?.valor) {
				completos = false
			}
		})
		if (completos) {
			window.scrollTo(0, 0)
			setActualStep(3)
		} else toast.error("Por favor, complete los valores de la tabla")
	}
	const valoresValidos =
		cantidadFilas !== 0 && cantidadColumnas !== 0 && cantidadAltura !== 0

	return (
		<main
			className={`${actualStep === 2 ? "flex-1" : "hidden"} p-20 sm:py-10 2xl:py-20 flex flex-col sm:gap-6 2xl:gap-10 justify-center`}
		>
			<div className="flex gap-10 items-stretch">
				<div className="flex flex-col gap-10 sm:w-[40%] 2xl:w-1/2">
					<MedidasPlano
						nombre={nombre}
						setNombre={setNombre}
						cantidadFilas={cantidadFilas}
						cantidadColumnas={cantidadColumnas}
						cantidadAltura={cantidadAltura}
						setCantidadFilas={setCantidadFilas}
						setCantidadColumnas={setCantidadColumnas}
						setCantidadAltura={setCantidadAltura}
						setCeldasSeleccionadas={setCeldasSeleccionadas}
						setPuntos={setPuntos}
					/>

					<div
						className={`flex-1 flex flex-col ${!valoresValidos && "opacity-50 blur-[2px]"}`}
					>
						<InformacionMedicion nombre={nombre} />
					</div>
				</div>

				<div
					className={`flex-1 flex flex-col gap-10 ${!valoresValidos && "opacity-50 blur-[2px]"}`}
				>
					<CroquisComponent
						nombre={nombre}
						cantidadFilas={cantidadFilas}
						cantidadColumnas={cantidadColumnas}
						cantidadAltura={cantidadAltura}
						celdasSeleccionadas={celdasSeleccionadas}
						setCeldasSeleccionadas={setCeldasSeleccionadas}
						puntos={puntos}
						setPuntos={setPuntos}
					/>

					<PuntosList nombre={nombre} puntos={puntos} setPuntos={setPuntos} />
				</div>
			</div>

			<button
				onClick={pasarAlPaso3}
				type="button"
				className="flex items-center gap-4 themeBtnAccent justify-center rounded-xl shadow-xl text-lg text-foreground tracking-wide px-6 py-4 cursor-pointer m-0"
			>
				<Save className="size-6" />
				Guardar y Calcular
			</button>
		</main>
	)
}
