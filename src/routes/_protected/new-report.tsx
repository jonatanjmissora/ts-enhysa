import NuevoReporteEmpresa from "@/components/dashboard/nuevo-reporte/empresa"
import NuevoReporteInstrumental from "@/components/dashboard/nuevo-reporte/instrumental"
import NuevoReportePersona from "@/components/dashboard/nuevo-reporte/persona"
import { Button } from "@/components/ui/button"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/_protected/new-report")({
	component: RouteComponent,
})

function RouteComponent() {
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

			<main className="flex-1 p-20 flex flex-col gap-10 justify-center">
				<div className="flex items-stretch gap-10">
					<NuevoReportePersona />
					<NuevoReporteEmpresa />
				</div>
				<NuevoReporteInstrumental />
				<Link
					to="/"
					className="bg-accent text-center hover:bg-accent/80 rounded-xl shadow-xl text-lg text-foreground tracking-wide px-6 py-4 cursor-pointer m-0"
				>
					Guardar y Continuar
				</Link>
			</main>
		</div>
	)
}
