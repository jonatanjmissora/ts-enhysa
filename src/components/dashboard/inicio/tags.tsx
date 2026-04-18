import { CheckCircle2, Clock, FileChartColumn } from "lucide-react"

export default function InicioTags() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-10">
			<div className="p-4 sm:p-4 sm:px-6 2xl:p-10 card bg-accent rounded-lg gap-4 sm:justify-start sm:gap-6  w-64 sm:w-full">
				<FileChartColumn className="size-13 sm:size-16 2xl:size-20 text-blue-600/50 p-3 sm:p-3 2xl:p-4 bg-slate-900/75 rounded-lg shadow-xl" />
				<div className="flex flex-col gap-0 sm:gap-2">
					<p className="textM sm:text-xl font-semibold text-foreground/70">
						Informes totales
					</p>
					<p className="text-2xl 2xl:text-4xl font-semibold">24</p>
				</div>
			</div>

			<div className="p-4 sm:p-4 sm:px-6 2xl:p-10 card bg-accent rounded-lg gap-4 sm:justify-start sm:gap-6  w-64 sm:w-full mx-auto">
				<CheckCircle2 className="size-13 sm:size-16 2xl:size-20 text-green-500/50 p-3 sm:p-3 2xl:p-4 bg-green-900/75 rounded-lg shadow-xl" />
				<div className="flex flex-col gap-0 sm:gap-2">
					<p className="textM sm:text-xl font-semibold text-foreground/70">
						Cumplen Norma
					</p>
					<p className="text-2xl 2xl:text-4xl font-semibold">18</p>
				</div>
			</div>

			<div className="p-4 sm:p-4 sm:px-6 2xl:p-10 card bg-accent rounded-lg gap-4 sm:justify-start sm:gap-6  w-64 sm:w-full ml-auto">
				<Clock className="size-13 sm:size-16 2xl:size-20 text-amber-500/50 p-3 sm:p-3 2xl:p-4 bg-amber-900/75 rounded-lg shadow-xl" />
				<div className="flex flex-col gap-0 sm:gap-2">
					<p className="textM sm:text-xl font-semibold text-foreground/70">
						Pendientes
					</p>
					<p className="text-2xl 2xl:text-4xl font-semibold">6</p>
				</div>
			</div>
		</div>
	)
}
