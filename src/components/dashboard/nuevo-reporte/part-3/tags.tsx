import { PuntoType } from "@/lib/types"
import { puntosResult } from "@/lib/utils"
import { Check, X } from "lucide-react"

export default function NewReportPart3Tags({
	puntos,
}: {
	puntos: PuntoType[] | null
}) {
	if (!puntos) return null

	const { puntosQueCumplen, puntosQueNoCumplen } = puntosResult(puntos)

	return (
		<div className="flex gap-10">
			<div className="flex-1 sm:p-2 sm:px-4 2xl:p-6 card bg-accent justify-around gap-3">
				<div className="flex gap-3">
					<Check className="sm:size-12 2xl:size-16 text-green-600/75 sm:p-2 2xl:p-3 bg-green-900/20 rounded-lg shadow-xl" />
					<p className="sm:text-lg 2xl:text-xl text-foreground/70">cumple</p>
				</div>
				<p className="sm:text-4xl 2xl:text-2xl font-semibold">
					{puntosQueCumplen.length}
				</p>
			</div>
			<div className="flex-1 sm:p-2 sm:px-4 2xl:p-6 card bg-accent justify-around gap-3">
				<div className="flex gap-3">
					<X className="sm:size-12 2xl:size-16 text-red-600/75 sm:p-2 2xl:p-3 bg-red-900/20 rounded-lg shadow-xl" />
					<p className="sm:text-lg 2xl:text-xl text-foreground/70">no cumple</p>
				</div>
				<p className="sm:text-4xl 2xl:text-2xl font-semibold">
					{puntosQueNoCumplen.length}
				</p>
			</div>
		</div>
	)
}
