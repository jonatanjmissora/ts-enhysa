import { CheckCircle2, Clock, FileChartColumn } from "lucide-react"

export default function InicioTags() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
			<div className="p-7 sm:p-4 sm:px-6 2xl:p-10 card bg-accent rounded-lg gap-4 sm:justify-start sm:gap-6 ">
				<FileChartColumn className="size-20 sm:size-16 2xl:size-20 text-blue-600/50 p-3 sm:p-3 2xl:p-4 bg-slate-900/75 rounded-lg shadow-xl" />
				<div className="flex flex-col gap-2">
					<p className="textL font-semibold text-foreground/70">
						Informes totales
					</p>
					<p className="text-4xl sm:text-2xl 2xl:text-4xl font-semibold">24</p>
				</div>
			</div>

			<div className="p-7 sm:p-4 sm:px-6 2xl:p-10 card bg-accent rounded-lg gap-4 sm:justify-start sm:gap-6">
				<CheckCircle2 className="size-20 sm:size-16 2xl:size-20 text-green-500/50 p-3 sm:p-3 2xl:p-4 bg-green-900/75 rounded-lg shadow-xl" />
				<div className="flex flex-col gap-2">
					<p className="textL font-semibold text-foreground/70">
						Cumplen Norma
					</p>
					<p className="text-4xl sm:text-2xl 2xl:text-4xl font-semibold">18</p>
				</div>
			</div>

			<div className="p-7 sm:p-4 sm:px-6 2xl:p-10 card bg-accent rounded-lg gap-4 sm:justify-start sm:gap-6">
				<Clock className="size-20 sm:size-16 2xl:size-20 text-amber-500/50 p-3 sm:p-3 2xl:p-4 bg-amber-900/75 rounded-lg shadow-xl" />
				<div className="flex flex-col gap-2">
					<p className="textL font-semibold text-foreground/70">Pendientes</p>
					<p className="text-4xl sm:text-2xl 2xl:text-4xl font-semibold">6</p>
				</div>
			</div>
		</div>
	)
}
