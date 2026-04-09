import MedidasPlano from "./medidas/medidas-plano"
import { Save } from "lucide-react"
import type { PuntosType } from "@/routes/_protected/new-report"
import { toast } from "sonner"
import InformacionMedicion from "./informacion/Informacion-medicion"
import CroquisComponent from "./croquis/croquis"
import PuntosList from "./puntos/puntos-list"
import Area from "./area/area"

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
	sector,
	setSector,
	tipoIluminacion,
	setTipoIluminacion,
	tipoFuente,
	setTipoFuente,
	iluminacion,
	setIluminacion,
	valorRequerido,
	setValorRequerido,
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
	sector: string
	setSector: (sector: string) => void
	tipoIluminacion: string
	setTipoIluminacion: (tipoIluminacion: string) => void
	tipoFuente: string
	setTipoFuente: (tipoFuente: string) => void
	iluminacion: string
	setIluminacion: (iluminacion: string) => void
	valorRequerido: string
	setValorRequerido: (valorRequerido: string) => void
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

	const step0 =
		nombre !== "" &&
		sector !== "" &&
		tipoIluminacion !== "" &&
		tipoFuente !== "" &&
		iluminacion !== "" &&
		valorRequerido !== ""
	const step1 =
		cantidadAltura !== 0 && cantidadColumnas !== 0 && cantidadFilas !== 0

	const step2 = puntos.length > 0

	return (
		<main
			className={`${actualStep === 2 ? "flex-1" : "hidden"} p-20 sm:py-10 2xl:py-20 flex flex-col sm:gap-6 2xl:gap-10 justify-center`}
		>
			<header className="w-full flex items-center justify-between border-b-[1.5px] border-foreground/20 py-1">
				<span className="text-2xl font-semibold tracking-wider">
					Area de trabajo
				</span>
				<span className="sm:text-lg 2xl:text-xl text-foreground/70">
					{nombre || "Depósito"}
				</span>
				<button
					className="themeBtnAccent py-1 px-4 rounded-lg sm:text-lg 2xl:text-xl font-semibold tracking-wilder"
					onClick={() => {
						//TODO logica
					}}
				>
					+ nueva area
				</button>
			</header>
			<div className="flex gap-10 items-stretch">
				<div className="flex flex-col gap-10 sm:w-[40%] 2xl:w-1/2">
					<Area
						nombre={nombre}
						setNombre={setNombre}
						sector={sector}
						setSector={setSector}
						tipoIluminacion={tipoIluminacion}
						setTipoIluminacion={setTipoIluminacion}
						tipoFuente={tipoFuente}
						setTipoFuente={setTipoFuente}
						iluminacion={iluminacion}
						setIluminacion={setIluminacion}
						valorRequerido={valorRequerido}
						setValorRequerido={setValorRequerido}
					/>

					<div
						className={`flex-1 flex flex-col ${!step0 && "opacity-50 blur-[2px]"}`}
					>
						<MedidasPlano
							nombre={nombre}
							cantidadFilas={cantidadFilas}
							cantidadColumnas={cantidadColumnas}
							cantidadAltura={cantidadAltura}
							setCantidadFilas={setCantidadFilas}
							setCantidadColumnas={setCantidadColumnas}
							setCantidadAltura={setCantidadAltura}
							setCeldasSeleccionadas={setCeldasSeleccionadas}
							setPuntos={setPuntos}
						/>
					</div>

					<div
						className={`flex-1 flex flex-col ${!step1 && "opacity-50 blur-[2px]"}`}
					>
						<InformacionMedicion nombre={nombre} />
					</div>
				</div>

				<div
					className={`flex-1 flex flex-col gap-10 ${!step1 && "opacity-50 blur-[2px]"}`}
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
					<div className={`flex-1 flex ${!step2 && "opacity-50 blur-[2px]"}`}>
						<PuntosList nombre={nombre} puntos={puntos} setPuntos={setPuntos} />
					</div>
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
