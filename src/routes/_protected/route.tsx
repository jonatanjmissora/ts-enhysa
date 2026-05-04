import {
	createFileRoute,
	Link,
	Outlet,
	useLocation,
} from "@tanstack/react-router"
import { protectedRoute } from "@/lib/protected-route"
import DashboardMenu from "@/components/dashboard/menu/menu"
import MovilMenu from "@/components/movil/menu"
import { ChevronLeft } from "lucide-react"
import { useIsMobile } from "@/hooks/use-is-mobile"
import LoadingMovil from "@/components/layout/loading-movil"

export const Route = createFileRoute("/_protected")({
	loader: async () => await protectedRoute(),
	component: RouteComponent,
})

function RouteComponent() {
	const { isMobile, isLoading } = useIsMobile()
	return (
		<>
			{isLoading ? (
				<LoadingMovil />
			) : (
				<>
					{isMobile && <MovilRoute />}
					{!isMobile && <DesktopRoute />}
				</>
			)}
		</>
	)
}

const DesktopRoute = () => {
	return (
		<section className="w-screen min-h-screen overflow-hidden flex">
			<aside className="sm:w-[22dvw] 2xl:w-1/4">
				<DashboardMenu />
			</aside>
			<article className="sm:w-[78dvw] 2xl:w-3/4">
				<Outlet />
			</article>
		</section>
	)
}

const MovilRoute = () => {
	return (
		<main className="w-screen min-h-screen overflow-hidden flex flex-col relative">
			<MovilMenu />
			<Outlet />
		</main>
	)
}
