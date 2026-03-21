import { createFileRoute } from "@tanstack/react-router"
import InicioHeader from "@/components/dashboard/inicio/header"
import InicioTags from "@/components/dashboard/inicio/tags"
import InicioRecientes from "@/components/dashboard/inicio/recientes"
import InicioPlan from "@/components/dashboard/inicio/plan"
import { Sun } from "lucide-react"

export const Route = createFileRoute("/_protected/")({
	component: App,
})

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="text-xl font-semibold tracking-wider h-24 px-20 bg-accent border border-background flex justify-between items-center">
				<span>Protocolo de Iluminación Res 84/12 SRT</span>
				<div className="flex items-center gap-2">
					<div className="bg-background/50 rounded-full p-2 px-3 text-foreground/50 italic font-thin cursor-pointer">
						es
					</div>
					<div className="bg-background/50 rounded-full p-2 px-3 cursor-pointer">
						<Sun size={20} className="text-foreground/50" />
					</div>
				</div>
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
