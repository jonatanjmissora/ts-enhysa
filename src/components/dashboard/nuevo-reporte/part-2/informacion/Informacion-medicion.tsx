import { Info } from "lucide-react"
import NewReportPart2Clima from "./clima"
import NewReportPart2Locacion from "./locacion"
import { useState } from "react"
import { InputFiles } from "@/components/layout/input-files"
import { ClimaType } from "@/lib/types"

export default function InformacionMedicion({
	nombre,
	clima,
	setClima,
}: {
	nombre: string
	clima: ClimaType
	setClima: (clima: ClimaType) => void
}) {
	const [planoFiles, setPlanoFiles] = useState<File[]>([])

	return (
		<div className="flex-1 card bg-accent flex-col gap-6">
			<div className="flex w-full items-center border-b border-foreground/20">
				<div className="flex items-center gap-3 flex-1">
					<div className="bg-teal-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<Info className="size-6" />
					</div>
					<span className="w-full sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2">
						Información
					</span>
				</div>
				<p className="flex-1 text-right text-sm text-foreground/70 py-1">
					{nombre || "Depósito"}
				</p>
			</div>

			<div className="w-full py-4 cardBackground flex items-center justify-center flex-col">
				<InputFiles
					text="Imágenes del plano a medir."
					files={planoFiles}
					setFiles={setPlanoFiles}
					editMode={true}
				/>
			</div>

			<div className="sm:w-full w-full mx-auto border-b border-foreground/20 flex items-center gap-6">
				<NewReportPart2Locacion />
			</div>

			<NewReportPart2Clima clima={clima} setClima={setClima} />
		</div>
	)
}
