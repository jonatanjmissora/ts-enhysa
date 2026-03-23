import { CheckCircle2, Clock, FileChartColumn } from "lucide-react"

export default function InicioTags() {
	return (
		<div className="grid grid-cols-3 gap-10">
			<div className="sm:p-4 sm:px-6 2xl:p-10 cardAccent gap-6">
				<FileChartColumn className="sm:size-16 2xl:size-20 text-blue-600/50 sm:p-3 2xl:p-4 bg-slate-900/75 rounded-lg shadow-xl" />
				<div className="flex flex-col gap-2">
					<p className="sm:text-lg 2xl:text-xl text-foreground/70">
						Informes totales
					</p>
					<p className="sm:text-2xl 2xl:text-4xl font-semibold">24</p>
				</div>
			</div>

			<div className="sm:p-4 sm:px-6 2xl:p-10 cardAccent gap-6">
				<CheckCircle2 className="sm:size-16 2xl:size-20 text-green-500/50 sm:p-3 2xl:p-4 bg-green-900/75 rounded-lg shadow-xl" />
				<div className="flex flex-col gap-2">
					<p className="sm:text-lg 2xl:text-xl text-foreground/70">
						Cumplen Norma
					</p>
					<p className="sm:text-2xl 2xl:text-4xl font-semibold">18</p>
				</div>
			</div>

			<div className="sm:p-4 sm:px-6 2xl:p-10 cardAccent gap-6">
				<Clock className="sm:size-16 2xl:size-20 text-amber-500/50 sm:p-3 2xl:p-4 bg-amber-900/75 rounded-lg shadow-xl" />
				<div className="flex flex-col gap-2">
					<p className="sm:text-lg 2xl:text-xl text-foreground/70">
						Pendientes
					</p>
					<p className="sm:text-2xl 2xl:text-4xl font-semibold">6</p>
				</div>
			</div>
		</div>
	)
}
