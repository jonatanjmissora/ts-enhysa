import MedidasPlano from "./medidas-plano"
import PuntosMedicion from "./puntos-medicion"
import { Croquis } from "./croquis"
import { useState } from "react"
import { Save } from "lucide-react"

export type PuntosType = {
	nombre: string
	valor: number
	valorX: number
	valorY: number
} | null

export default function NewReportPart2({
	actualStep,
	setActualStep,
}: {
	actualStep: number
	setActualStep: (step: number) => void
}) {
	const [largo, setLargo] = useState<number>(0)
	const [ancho, setAncho] = useState<number>(0)
	const [alto, setAlto] = useState<number>(0)
	const [celdasSeleccionadas, setCeldasSeleccionadas] = useState<string[]>([])
	const [componentStep, setComponentStep] = useState<number>(1)
	const [puntos, setPuntos] = useState<PuntosType[]>([
		{
			nombre: "punto 1",
			valor: 1.45,
			valorX: 0,
			valorY: 0,
		},
	])

	return (
		<main
			className={`${actualStep === 2 ? "flex-1" : "hidden"} p-20 sm:py-10 2xl:py-20 flex flex-col sm:gap-6 2xl:gap-10 justify-center`}
		>
			<div className="flex gap-10">
				<div className="flex flex-col gap-10 flex-1">
					<MedidasPlano
						cantidadFilas={largo}
						cantidadColumnas={ancho}
						cantidadAltura={alto}
						setCantidadFilas={setLargo}
						setCantidadColumnas={setAncho}
						setCantidadAltura={setAlto}
						setComponentStep={setComponentStep}
						setCeldasSeleccionadas={setCeldasSeleccionadas}
					/>

					<div className={` ${componentStep < 3 && "opacity-50 blur"}`}>
						<PuntosMedicion
							cantidadFilas={largo}
							cantidadColumnas={ancho}
							celdasSeleccionadas={celdasSeleccionadas}
							puntos={puntos}
							setPuntos={setPuntos}
						/>
					</div>
				</div>

				<div className={` ${componentStep < 2 && "opacity-50 blur"}`}>
					<Croquis
						cantidadFilas={largo}
						cantidadColumnas={ancho}
						celdasSeleccionadas={celdasSeleccionadas}
						setCeldasSeleccionadas={setCeldasSeleccionadas}
						setComponentStep={setComponentStep}
						puntos={puntos}
						setPuntos={setPuntos}
					/>
				</div>
			</div>

			<button
				onClick={() => setActualStep(3)}
				type="button"
				className="flex items-center gap-4 themeBtnAccent justify-center rounded-xl shadow-xl text-lg text-foreground tracking-wide px-6 py-4 cursor-pointer m-0"
			>
				<Save className="size-6" />
				Guardar y Continuar
			</button>
		</main>
	)
}
