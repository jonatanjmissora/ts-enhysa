import { CheckCircle2, Clock, FileChartColumn } from "lucide-react"

export default function InicioTags() {
	return (
		<div className="grid grid-cols-3 gap-10">
			<div className="p-10 bg-accent border border-border rounded-xl flex items-center gap-6">
				<FileChartColumn className="size-20 text-foreground/70 p-4 bg-background rounded-lg shadow-xl" />
				<div className="flex flex-col gap-2">
					<p className="text-xl text-foreground/70">Informes totales</p>
					<p className="text-4xl font-semibold">24</p>
				</div>
			</div>

			<div className="p-10 bg-accent border border-border rounded-xl flex items-center gap-6">
				<CheckCircle2 className="size-20 text-foreground/70 p-4 bg-background rounded-lg shadow-xl" />
				<div className="flex flex-col gap-2">
					<p className="text-xl text-foreground/70">Cumplen Norma</p>
					<p className="text-4xl font-semibold">18</p>
				</div>
			</div>

			<div className="p-10 bg-accent border border-border rounded-xl flex items-center gap-6">
				<Clock className="size-20 text-foreground/70 p-4 bg-background rounded-lg shadow-xl" />
				<div className="flex flex-col gap-2">
					<p className="text-xl text-foreground/70">Pendientes</p>
					<p className="text-4xl font-semibold">6</p>
				</div>
			</div>
		</div>
	)
}
