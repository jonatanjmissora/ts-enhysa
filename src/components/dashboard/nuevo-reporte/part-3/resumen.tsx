import type { PuntosType } from "@/routes/_protected/new-report"
import { Info, Lightbulb } from "lucide-react"

export default function NewReportResumen({
	puntos,
	nombre,
}: {
	puntos: PuntosType[]
	nombre: string
}) {
	if (!puntos || puntos[0] === null) return null

	return (
		<div className="cardAccent flex-col p-10 px-14 gap-6">
			<div className="w-full flex items-center gap-2">
				<div className="bg-amber-600/75 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
					<Info className="size-6" />
				</div>
				<span className="sm:text-lg 2xl:text-xl font-semibold tracking-wider py-2">
					Detalle de las mediciones - {nombre}
				</span>
			</div>

			<div className="flex flex-col gap-3 w-full">
				{puntos.map(punto => (
					<div
						key={punto?.nombre}
						className={`cardBackground w-full px-3 py-2 flex items-center gap-4 rounded-lg ${punto?.cumple ? "bg-green-600/10 border border-green-600/30" : "bg-red-600/10 border border-red-600/30"}`}
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
		</div>
	)
}
