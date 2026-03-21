import { createFileRoute } from "@tanstack/react-router"
import InicioHeader from "@/components/dashboard/inicio/header"
import InicioTags from "@/components/dashboard/inicio/tags"
import InicioRecientes from "@/components/dashboard/inicio/recientes"
import InicioPlan from "@/components/dashboard/inicio/plan"

export const Route = createFileRoute("/_protected/")({
	component: App,
})

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="text-xl font-semibold tracking-wider py-10 px-20 bg-accent border border-background">
				Protocolo de Iluminación Res 84/12 SRT
			</header>

			<main className="flex-1 p-20 flex flex-col gap-10 justify-center">
				<InicioHeader />

				<InicioTags />

				<div className="flex gap-10">
					<InicioRecientes />
					<InicioPlan />
				</div>
			</main>
		</div>
	)
}
