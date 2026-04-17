import { createFileRoute } from "@tanstack/react-router"
import InicioHeader from "@/components/dashboard/inicio/header"
import InicioTags from "@/components/dashboard/inicio/tags"
import InicioRecientes from "@/components/dashboard/inicio/recientes"
import InicioPlan from "@/components/dashboard/inicio/plan"
import { PreferencesMenu } from "@/components/layout/preferences-menu"

export const Route = createFileRoute("/_protected/")({
	component: App,
})

function App() {
	const isMobil = window.innerWidth < 640

	if (isMobil) return <MovilIndex />
	return (
		<div className="min-h-screen flex flex-col">
			<header className="sm:text-base 2xl:text-xl font-semibold tracking-wider sm:h-20 2xl:h-24 px-20 bg-accent border border-background flex justify-between items-center">
				<span>Protocolo de Iluminación Res 84/12 SRT</span>
				<PreferencesMenu />
			</header>

			<main className="flex-1 px-20 py-4 flex flex-col justify-around">
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

const MovilIndex = () => {
	return (
		<main className="flex-1 flex flex-col px-6 py-10 gap-30">
			<InicioHeader />

			<InicioTags />
		</main>
	)
}
