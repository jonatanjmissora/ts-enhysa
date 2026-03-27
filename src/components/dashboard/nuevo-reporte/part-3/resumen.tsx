import { PuntosType } from "@/routes/_protected/new-report"
import { Lightbulb } from "lucide-react"

export default function NewReportResumen({ puntos }: { puntos: PuntosType[] }) {
	if (!puntos || puntos.length === 0) return null

	return (
		<div className="cardAccent p-10 py-15 flex-col gap-3 justify-start ">
			<p className="w-full sm:text-xl 2xl:text-2xl font-semibold tracking-wider py-2">
				Detalle de las mediciones
			</p>
			{puntos.map(punto => (
				<div
					key={punto?.nombre}
					className={`cardBackground w-full px-3 py-2 flex items-center gap-4 rounded-lg ${punto?.cumple ? "bg-green-600/10" : "bg-red-600/10"}`}
				>
					<Lightbulb
						className={`size-6 ${punto?.cumple ? "text-green-600" : "text-red-600"} rotate-181`}
					/>
					<div className="flex flex-col gap-0">
						<span className="italic font-semibold text-lg tracking-wider">
							{punto?.nombre
								? punto?.nombre?.charAt(0).toUpperCase() +
									punto?.nombre?.slice(1)
								: ""}
						</span>
						<span className="text-sm text-foreground/50">
							Valor: {punto?.valor} / Requerido 1.00
						</span>
					</div>
					{punto?.cumple ? (
						<span className="ml-auto">cumple</span>
					) : (
						<span className="ml-auto">no cumple</span>
					)}
				</div>
			))}
		</div>
	)
}
