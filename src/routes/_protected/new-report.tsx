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
			<header className="sm:text-base 2xl:text-xl font-semibold tracking-wider sm:h-20 2xl:h-24 px-20 bg-accent border border-background flex justify-between items-center">
				<span>Protocolo de Iluminación Res 84/12 SRT</span>
				<Link
					to="/"
					className="bg-background hover:bg-background/80 rounded-xl shadow-xl sm:text-sm 2xl:text-lg text-foreground tracking-wide px-6 py-3 cursor-pointer m-0"
				>
					Cancelar
				</Link>
			</header>

			{/* ==================================================================== */}
			{/* PARTE 1 */}
			{/* ==================================================================== */}

			<main
				className={`${actualStep === 1 ? "flex-1" : "hidden"} p-20 sm:py-10 2xl:py-20 flex flex-col gap-10 justify-center`}
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

			{/* ==================================================================== */}
			{/* PARTE 2 */}
			{/* ==================================================================== */}

			<main
				className={`${actualStep === 2 ? "flex-1" : "hidden"} p-20 sm:py-10 2xl:py-20 flex flex-col sm:gap-6 2xl:gap-10 justify-center`}
			>
				<p className="text-xl font-semibold tracking-wider">
					Calculo de Indice de Local ( RI )
				</p>

				<div className="flex items-strech gap-10">
					<div className="flex-1 bg-accent rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-xl">
						<input
							type="file"
							className="sm:h-40 2xl:h-60 bg-background rounded-lg"
						/>
						<p className="italic text-center tracking-wider text-foreground/50 sm:text-sm 2xl:text-xl text-pretty px-6">
							El indice del Local (RI) es un valor numerico que representa la
							geometria del recinto para calculos luminotexnicos.
						</p>
					</div>
					<div className="flex-1 bg-accent rounded-xl p-4 flex flex-col items-center justify-center gap-12 border-dotted border-2 border-foreground/20">
						<p className="italic text-center tracking-wider text-foreground/50 sm:text-lg 2xl:text-xl text-pretty">
							FORMULA APLICADA
						</p>
						<p className="sm:text-2xl 2xl:text-4xl font-semibold">
							RI = (L x W) / (H x (L + W))
						</p>
						<p className="sm:text-sm 2xl:text-base tracking-wider text-foreground/50">
							L = Longitud W = Ancho H = Altura
						</p>
					</div>
				</div>

				<div className="flex items-strech gap-10">
					<div className="flex-1 bg-accent rounded-xl p-6 flex flex-col justify-center gap-4 shadow-xl">
						<p className="text-xl font-semibold tracking-wide">
							Dimensiones del Local (M)
						</p>
						<div className="flex flex-col gap-2">
							<div className="flex items-center justify-between gap-6">
								<div className="font-semibold bg-background rounded-full py-1 px-3">
									L
								</div>
								<span>Largo (m)</span>
								<input
									type="number"
									className="w-80 bg-background py-1 px-4 rounded-lg text-center"
									placeholder="Ej. 10.00"
								/>
							</div>
							<div className="flex items-center justify-between gap-6">
								<div className="font-semibold bg-background rounded-full py-1 px-3">
									w
								</div>
								<span>Ancho (m)</span>
								<input
									type="number"
									className="w-80 bg-background py-1 px-4 rounded-lg text-center"
									placeholder="Ej. 8.00"
								/>
							</div>
							<div className="flex items-center justify-between gap-6">
								<div className="font-semibold bg-background rounded-full py-1 px-3">
									H
								</div>
								<span>Altura (m)</span>
								<input
									type="number"
									className="w-80 bg-background py-1 px-4 rounded-lg text-center"
									placeholder="Ej. 2,50"
								/>
							</div>
						</div>
					</div>
					<div className="flex-1 bg-accent rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-xl">
						<p className="text-xl font-semibold tracking-wide">
							Resultado RI (Redondeado)
						</p>
						<p className="text-4xl font-bold tracking-wide">
							2.00 <span className="text-base">INDICE</span>
						</p>
						<div className="h-px w-full bg-background"></div>
						<div className="flex items-center justify-center gap-12">
							<span>Valor calculado : 1.78</span>
							<button className="text-sm bg-background text-foreground rounded px-2 py-1 hover:bg-background/80 cursor-pointer">
								calc applied
							</button>
						</div>
					</div>
				</div>
			</main>

			{/* ==================================================================== */}
			{/* PARTE 3 */}
			{/* ==================================================================== */}

			<main
				className={`${actualStep === 3 ? "flex-1" : "hidden"} p-20 sm:py-10 2xl:py-20 flex flex-col gap-10 justify-center`}
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
