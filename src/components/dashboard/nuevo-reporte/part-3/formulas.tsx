import { Calculator, Info } from "lucide-react"
import type { PuntosType } from "@/routes/_protected/new-report"

export default function NewReportPart3Formulas({
	nombre,
	cantidadFilas,
	cantidadColumnas,
	cantidadAltura,
}: {
	nombre: string
	puntos: PuntosType[] | null
	cantidadFilas: number
	cantidadColumnas: number
	cantidadAltura: number
}) {
	const RIValue =
		(cantidadFilas * cantidadColumnas) /
		(cantidadAltura * (cantidadFilas + cantidadColumnas))

	const RIIndex =
		Math.abs(RIValue % 1) > 0 ? Math.trunc(RIValue) + 1 : Math.trunc(RIValue)
	const cantidadCeldas: Record<number, string> = {
		NaN: "sin valor",
		1: "aprox 9",
		2: "aprox 16",
		3: "aprox 25",
		4: "aprox 36",
		5: "aprox 36",
		6: "aprox 36",
		7: "aprox 36",
	}

	return (
		<div className={`flex-1 cardAccent flex-col items-start gap-6 p-10`}>
			<div className="w-full flex items-center gap-2">
				<div className="bg-pink-600/75 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
					<Calculator className="size-6" />
				</div>
				<span className="sm:text-lg 2xl:text-xl font-semibold tracking-wider py-2">
					Detalle de las mediciones - {nombre}
				</span>
			</div>

			<div className="flex flex-col gap-2 w-full">
				<div className="flex items-center justify-between gap-2 w-full">
					<p className="italic tracking-widest">
						RI(redondeo) : <span>{RIIndex || "sin valor"}</span>
					</p>
					<Info className="size-4 text-foreground/30" />
				</div>

				<div className="flex items-center justify-between gap-2 w-full">
					<p className="italic tracking-widest">
						Cant.celdas : <span>{cantidadCeldas[RIIndex] || "sin valor"}</span>
					</p>
					<Info className="size-4 text-foreground/40" />
				</div>
			</div>

			<p className="text-sm italic tracking-widest text-foreground/50 w-full text-center">
				Res. 84/2012 S.R.T.
			</p>
		</div>
	)
}
