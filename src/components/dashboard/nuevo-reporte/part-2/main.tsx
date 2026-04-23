import MedidasPlano from "./medidas/medidas-plano"
import { Save } from "lucide-react"
import { toast } from "sonner"
import InformacionMedicion from "./informacion/Informacion-medicion"
import Area from "./area/area"
import { ClimaType, CroquisType, PuntoType, SectorType } from "@/lib/types"
import CroquisComponent from "./croquis/croquis"

export default function NewReportPart2({
	actualStep,
	setActualStep,
	puntos,
	setPuntos,
	croquis,
	setCroquis,
	sector,
	setSector,
	clima,
	setClima,
}: {
	actualStep: number
	setActualStep: (step: number) => void
	puntos: PuntoType[]
	setPuntos: (puntos: PuntoType[]) => void
	croquis: CroquisType
	setCroquis: (croquis: CroquisType) => void
	sector: SectorType
	setSector: (sector: SectorType) => void
	clima: ClimaType
	setClima: (clima: ClimaType) => void
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

	const step0 = sector.nombre !== "" && sector.tipo !== ""

	const step1 = croquis.celdasSeleccionadas.length > 0

	return (
		<main
			className={`${actualStep === 2 ? "flex-1" : "hidden"} p-20 sm:py-10 2xl:py-20 flex flex-col sm:gap-6 2xl:gap-10 justify-center`}
		>
			<header className="w-full flex items-center justify-between border-b-[1.5px] border-foreground/20 py-1">
				<span className="text-2xl font-semibold tracking-wider">
					Area de trabajo
				</span>
				<span className="sm:text-lg 2xl:text-xl text-foreground/70">
					{sector.nombre || "Depósito"}
				</span>
				<button
					className="themeBtnAccent py-1 px-4 rounded-lg sm:text-lg 2xl:text-xl font-semibold tracking-wilder my-shadow"
					onClick={() => {
						//TODO logica
					}}
				>
					+ nueva area
				</button>
			</header>
			<div className="flex gap-10 items-stretch">
				<div className="flex flex-col gap-10 sm:w-[40%] 2xl:w-1/2">
					<Area sector={sector} setSector={setSector} />

					<div
						className={`flex-1 flex flex-col ${!step0 && "opacity-50 blur-[2px]"}`}
					>
						<MedidasPlano
							nombre={sector.nombre}
							croquis={croquis}
							setCroquis={setCroquis}
							setPuntos={setPuntos}
						/>
					</div>

					<div
						className={`flex-1 flex flex-col ${!step1 && "opacity-50 blur-[2px]"}`}
					>
						<InformacionMedicion
							nombre={sector.nombre}
							clima={clima}
							setClima={setClima}
						/>
					</div>
				</div>

				<div
					className={`flex-1 flex flex-col gap-10 ${!step1 && "opacity-50 blur-[2px]"}`}
				>
					<CroquisComponent
						nombre={sector.nombre}
						croquis={croquis}
						puntos={puntos}
						setPuntos={setPuntos}
					/>
				</div>
			</div>
			<button
				onClick={pasarAlPaso3}
				type="button"
				className="flex items-center gap-4 themeBtnAccent justify-center rounded-xl my-shadow text-lg text-foreground tracking-wide px-6 py-4 cursor-pointer m-0"
			>
				<Save className="size-6" />
				Guardar y Calcular
			</button>
		</main>
	)
}
