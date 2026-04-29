import { createFileRoute } from "@tanstack/react-router"
import InicioHeader from "@/components/dashboard/inicio/header"
import InicioTags from "@/components/dashboard/inicio/tags"
import InicioRecientes from "@/components/dashboard/inicio/recientes"
import InicioPlan from "@/components/dashboard/inicio/plan"
import { PreferencesMenu } from "@/components/layout/preferences-menu"
import Footer from "@/components/movil/footer"
import MovilHero from "@/components/movil/inicio/hero"
import MovilInicioTags from "@/components/movil/inicio/tags"
import MovilRecientes from "@/components/movil/inicio/recientes"

export const Route = createFileRoute("/_protected/")({
	component: App,
})

function App() {
	// const isMobil = typeof window !== "undefined" && window.innerWidth < 640
	const isMobil = true

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

				<div className="flex gap-10 flex-col sm:flex-row">
					<InicioRecientes />
					<InicioPlan />
				</div>
			</main>
		</div>
	)
}

const MovilIndex = () => {
	return (
		<section className="w-full pt-18 overflow-visible">
			<div className="flex-1 flex flex-col gap-30 px-6">
				<MovilHero />

				<MovilInicioTags />

				<div className="flex gap-30 flex-col sm:flex-row">
					<MovilRecientes />
					<InicioPlan />
				</div>
			</div>

			<Footer />
		</section>
	)
}
