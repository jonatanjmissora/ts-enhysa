import { Part1DataType } from "@/lib/types"
import NuevoReporteEmpresa from "./empresa"
import NuevoReporteInstrumento from "./instrumental"
import NuevoReportePersona from "./persona"
import { Save } from "lucide-react"

export default function NewReportPart1({
	actualStep,
	setActualStep,
	part1Data,
	setPart1Data,
}: {
	actualStep: number
	setActualStep: (step: number) => void
	part1Data: Part1DataType
	setPart1Data: (data: Part1DataType) => void
}) {
	return (
		<main
			className={`${actualStep === 1 ? "flex-1" : "hidden"} p-20 sm:py-15 2xl:py-20 flex flex-col gap-10 justify-center`}
		>
			<div className="flex items-stretch gap-10">
				<NuevoReportePersona />
				<NuevoReporteEmpresa
					part1Data={part1Data}
					setPart1Data={setPart1Data}
				/>
			</div>
			<NuevoReporteInstrumento
				part1Data={part1Data}
				setPart1Data={setPart1Data}
			/>
			<button
				onClick={() => {
					setActualStep(2)
					if (typeof window !== "undefined") {
						window.scrollTo(0, 0)
					}
				}}
				type="button"
				className="flex items-center gap-4 themeBtnAccent justify-center rounded-xl my-shadow text-lg text-foreground tracking-wide px-6 py-4 cursor-pointer m-0"
			>
				<Save className="size-6" />
				Guardar y Continuar
			</button>
		</main>
	)
}
