import NuevoReporteEmpresa from "@/components/dashboard/nuevo-reporte/empresa"
import NuevoReporteInstrumental from "@/components/dashboard/nuevo-reporte/instrumental"
import NuevoReportePersona from "@/components/dashboard/nuevo-reporte/persona"
import { createFileRoute, Link } from "@tanstack/react-router"
import { useState } from "react"

export const Route = createFileRoute("/_protected/new-report")({
	component: RouteComponent,
})

function RouteComponent() {
	const [actualStep, setActualStep] = useState(2)

	return (
		<div className="min-h-screen flex flex-col">
			<header className="text-xl font-semibold tracking-wider h-24 px-20 bg-accent border border-background flex justify-between items-center">
				<span>Protocolo de Iluminación Res 84/12 SRT</span>
				<Link
					to="/"
					className="bg-background hover:bg-background/80 rounded-xl shadow-xl text-lg text-foreground tracking-wide px-6 py-3 cursor-pointer m-0"
				>
					Cancelar
				</Link>
			</header>

			<main
				className={`${actualStep === 1 ? "flex-1" : "hidden"} p-20 flex flex-col gap-10 justify-center`}
			>
				<div className="flex items-stretch gap-10">
					<NuevoReportePersona />
					<NuevoReporteEmpresa />
				</div>
				<NuevoReporteInstrumental />
				<button
					onClick={() => setActualStep(2)}
					type="button"
					className="bg-accent text-center hover:bg-accent/80 rounded-xl shadow-xl text-lg text-foreground tracking-wide px-6 py-4 cursor-pointer m-0"
				>
					Guardar y Continuar
				</button>
			</main>

			<main
				className={`${actualStep === 2 ? "flex-1" : "hidden"} p-20 flex flex-col gap-10 justify-center`}
			>
				<p className="text-2xl font-semibold">
					Calculo de Indice de Local ( RI )
				</p>

				<div className="flex items-strech gap-10">
					<div className="flex-1 bg-accent rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-xl">
						<input type="file" className="h-60 bg-background rounded-lg" />
						<p className="italic text-center tracking-wider text-foreground/50 text-xl text-pretty">
							El indice del Local (RI) es un valor numerico que representa la
							geometria del recinto para calculos luminotexnicos.
						</p>
					</div>
					<div className="flex-1 bg-accent rounded-xl p-4 flex flex-col items-center justify-center gap-12 border-dotted border-2 border-foreground/20">
						<p className="italic text-center tracking-wider text-foreground/50 text-xl text-pretty">
							FORMULA APLICADA
						</p>
						<p className="text-4xl font-semibold">
							RI = (L x W) / (H x (L + W))
						</p>
						<p className="tracking-wider text-foreground/50">
							L = Longitud W = Ancho H = Altura
						</p>
					</div>
				</div>

				<div className="flex items-strech gap-10">
					<div className="flex-1 bg-accent rounded-xl p-6 flex flex-col justify-center gap-4 shadow-xl">
						<p className="text-2xl font-semibold tracking-wide">
							Dimensiones del Local (M)
						</p>
						datos
					</div>
					<div className="flex-1 bg-accent rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-xl">
						calculo
					</div>
				</div>
			</main>

			<main
				className={`${actualStep === 3 ? "flex-1" : "hidden"} p-20 flex flex-col gap-10 justify-center`}
			>
				<div className="flex items-stretch gap-10">
					<NuevoReportePersona />
					<NuevoReporteEmpresa />
				</div>
				<NuevoReporteInstrumental />
				<button
					type="button"
					className="bg-accent text-center hover:bg-accent/80 rounded-xl shadow-xl text-lg text-foreground tracking-wide px-6 py-4 cursor-pointer m-0"
				>
					Guardar y Continuar
				</button>
			</main>
		</div>
	)
}
