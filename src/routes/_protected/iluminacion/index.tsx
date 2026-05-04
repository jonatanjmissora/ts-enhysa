import InicioPlan from "@/components/dashboard/inicio/plan"
import Footer from "@/components/movil/footer"
import MovilHero from "@/components/movil/inicio/iluminacion/hero"
import MovilRecientes from "@/components/movil/inicio/iluminacion/recientes"
import MovilInicioTags from "@/components/movil/inicio/iluminacion/tags"
import { createFileRoute, Link } from "@tanstack/react-router"
import { ChevronLeft } from "lucide-react"
import { useEffect } from "react"

export const Route = createFileRoute("/_protected/iluminacion/")({
	component: RouteComponent,
})

function RouteComponent() {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0)
		}
	}, [])
	return (
		<div className="flex-1 flex flex-col gap-60 relative">
			<Link to="/" className={`absolute top-20 left-4`}>
				<ChevronLeft size={24} />
			</Link>
			<MovilHero />

			<div className="px-6 flex gap-30 flex-col sm:flex-row">
				<MovilInicioTags />

				<MovilRecientes />
				<InicioPlan />
			</div>

			<Footer />
		</div>
	)
}
