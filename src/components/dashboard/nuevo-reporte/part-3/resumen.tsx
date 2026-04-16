import { PuntoType } from "@/lib/types"
import { getHalfMedia } from "@/lib/utils"
import { Info, Lightbulb } from "lucide-react"

export default function NewReportResumen({
	puntos,
	nombre,
}: {
	puntos: PuntoType[] | null
	nombre: string
}) {
	if (!puntos) return null
	const halfMedia = getHalfMedia(puntos)

	return (
		<div className="card bg-accent flex-col gap-6 flex-1">
			<div className="flex items-center w-full border-b border-foreground/20">
				<div className="flex items-center gap-3 flex-1">
					<div className="bg-amber-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<Info className="size-6" />
					</div>
					<span className="w-full sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2">
						Mediciones
					</span>
				</div>
				<p className="flex-1 text-right text-sm text-foreground/70 py-1">
					{nombre || "Depósito"}
				</p>
			</div>

			<div className="flex flex-col gap-3 w-full">
				{puntos.map((punto, index) => (
					<div
						key={punto?.nombre}
						className={`cardBackground w-full px-3 py-2 flex items-center gap-4 rounded-lg ${punto?.valor >= halfMedia ? "bg-green-600/10 border border-green-600/30" : "bg-red-600/10 border border-red-600/30"}`}
					>
						<Lightbulb
							className={`size-6 ${punto?.valor >= halfMedia ? "text-green-600" : "text-red-600"} rotate-181`}
						/>
						<div className="flex flex-col gap-0">
							<div className="flex gap-6 items-center">
								<span className="italic font-semibold text-lg tracking-wider">
									punto-{index + 1}
								</span>
								<span className="italic font-semibold text-lg tracking-wider">
									Valor: {punto?.valor}
								</span>
							</div>
							<span className="text-sm text-foreground/50">
								Requerido {halfMedia.toFixed(0)}
							</span>
						</div>
						{punto?.valor >= halfMedia ? (
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
