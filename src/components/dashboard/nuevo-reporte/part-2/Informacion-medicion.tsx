import { Info, Upload } from "lucide-react"
import NewReportPart2Observaciones from "./observaciones"
import NewReportPart2Clima from "./clima"
import NewReportPart2Locacion from "./locacion"

export default function InformacionMedicion({ nombre }: { nombre: string }) {
	return (
		<div className="flex-1 cardAccent flex-col p-10 px-14 gap-6">
			<div className="flex w-full items-end border-b border-foreground/20">
				<div className="flex items-center gap-3 w-full">
					<div className="bg-teal-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<Info className="size-6" />
					</div>
					<span className="w-full sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2">
						Información
					</span>
				</div>
				<p className="ml-auto text-sm text-foreground/70 py-1">
					{nombre || "Depósito"}
				</p>
			</div>

			<div className="w-full relative py-4 mx-auto cardBackground flex items-center justify-center">
				<div className="w-[90%] p-4 italic text-foreground/50 tracking-wider text-sm flex items-center justify-center border-3 border-dashed border-foreground/10 rounded-lg">
					<Upload size={16} />
					<span>Ingresar imagenes del lugar</span>
				</div>
				<input
					type="file"
					className="absolute inset-0 opacity-0 cursor-pointer"
				/>
			</div>

			<div className="sm:w-full w-full mx-auto border-b border-foreground/20 flex items-center gap-6">
				<NewReportPart2Locacion />
			</div>

			<div className="sm:w-full w-full mx-auto border-b border-foreground/20 flex items-center gap-6">
				<NewReportPart2Observaciones />
			</div>

			<NewReportPart2Clima />
		</div>
	)
}
