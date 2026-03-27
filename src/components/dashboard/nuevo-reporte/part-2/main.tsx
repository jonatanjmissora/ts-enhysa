import MedidasPlano from "./medidas-plano"
import PuntosMedicion from "./puntos-medicion"
import { Croquis } from "./croquis"
import { useState } from "react"
import { Save } from "lucide-react"
import { PuntosType } from "@/routes/_protected/new-report"
import { toast } from "sonner"

export default function NewReportPart2({
	actualStep,
	setActualStep,
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
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
	cantidadFilas: number
	setCantidadFilas: (cantidad: number) => void
	cantidadColumnas: number
	setCantidadColumnas: (cantidad: number) => void
	cantidadAltura: number
	setCantidadAltura: (cantidad: number) => void
	celdasSeleccionadas: string[]
	setCeldasSeleccionadas: (celdas: string[]) => void
}) {
	const [componentStep, setComponentStep] = useState<number>(1)
	const pasarAlPaso3 = () => {
		let completos = true
		puntos.forEach(punto => {
			if (!punto?.valor) {
				completos = false
			}
		})
		if (completos) {
			setActualStep(3)
		} else toast.error("Por favor, complete los valores de la tabla")
	}

	return (
		<main
			className={`${actualStep === 2 ? "flex-1" : "hidden"} p-20 sm:py-10 2xl:py-20 flex flex-col sm:gap-6 2xl:gap-10 justify-center`}
		>
			<div className="flex items-stretch gap-10">
				<div className="flex-1 flex flex-col gap-10 sm:w-[40%] 2xl:-1/2">
					<MedidasPlano
						cantidadFilas={cantidadFilas}
						cantidadColumnas={cantidadColumnas}
						cantidadAltura={cantidadAltura}
						setCantidadFilas={setCantidadFilas}
						setCantidadColumnas={setCantidadColumnas}
						setCantidadAltura={setCantidadAltura}
						setComponentStep={setComponentStep}
						setCeldasSeleccionadas={setCeldasSeleccionadas}
					/>

					<div className={`flex-1 ${componentStep < 3 && "opacity-50 blur"}`}>
						<PuntosMedicion
							cantidadFilas={cantidadFilas}
							cantidadColumnas={cantidadColumnas}
							celdasSeleccionadas={celdasSeleccionadas}
							puntos={puntos}
							setPuntos={setPuntos}
						/>
					</div>
				</div>

				<div className={`h-full ${componentStep < 2 && "opacity-50 blur"}`}>
					<Croquis
						cantidadFilas={cantidadFilas}
						cantidadColumnas={cantidadColumnas}
						celdasSeleccionadas={celdasSeleccionadas}
						setCeldasSeleccionadas={setCeldasSeleccionadas}
						setComponentStep={setComponentStep}
						puntos={puntos}
						setPuntos={setPuntos}
					/>
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
