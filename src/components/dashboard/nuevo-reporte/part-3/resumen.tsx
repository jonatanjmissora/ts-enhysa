import { PuntosType } from "@/routes/_protected/new-report"
import { Lightbulb } from "lucide-react"

export default function NewReportResumen({ puntos }: { puntos: PuntosType[] }) {
	return (
		<div className="cardAccent p-20 flex items-center justify-center flex-col gap-3">
			{puntos?.map(punto => (
				<div
					key={punto?.nombre}
					className={`cardBackground w-full px-4 py-1 flex justify-between items-center gap-3 rounded-lg ${punto?.valor && punto?.valor >= 1 ? "bg-green-600/10" : "bg-red-600/10"}`}
				>
					<span>{punto?.nombre}</span>
					<span>{punto?.valor}</span>
					{punto?.valor && punto?.valor >= 1 ? (
						<div className="flex items-center justify-center gap-8 w-34">
							<Lightbulb className="size-6 text-green-600 rotate-180" />
							<span>cumple</span>
						</div>
					) : (
						<div className="flex items-center justify-center gap-2 w-34">
							<Lightbulb className="size-6 text-red-600 rotate-180" />
							<span>no cumple</span>
						</div>
					)}
				</div>
			))}
		</div>
	)
}
