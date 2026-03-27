import NuevoReporteEmpresa from "./empresa"
import NuevoReporteInstrumental from "./instrumental"
import NuevoReportePersona from "./persona"
import { Save } from "lucide-react"

export default function NewReportPart1({
	actualStep,
	setActualStep,
}: {
	actualStep: number
	setActualStep: (step: number) => void
}) {
	return (
		<main
			className={`${actualStep === 1 ? "flex-1" : "hidden"} p-20 sm:py-10 2xl:py-20 flex flex-col gap-10 justify-center`}
		>
			<div className="flex items-stretch gap-10">
				<NuevoReportePersona />
				<NuevoReporteEmpresa />
			</div>
			<NuevoReporteInstrumental />
			<button
				onClick={() => {
					setActualStep(2)
					window.scrollTo(0, 0)
				}}
				type="button"
				className="flex items-center gap-4 themeBtnAccent justify-center rounded-xl shadow-xl text-lg text-foreground tracking-wide px-6 py-4 cursor-pointer m-0"
			>
				<Save className="size-6" />
				Guardar y Continuar
			</button>
		</main>
	)
}
