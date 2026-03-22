import { createFileRoute, Outlet } from "@tanstack/react-router"
// import { protectedRoute } from "@/lib/protected-route"
import DashboardMenu from "@/components/dashboard/menu/menu"

export const Route = createFileRoute("/_protected")({
	// loader: async () => await protectedRoute(),
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<section className="w-screen min-h-screen overflow-hidden flex">
			<aside className="w-1/4 bg-accent">
				<DashboardMenu />
			</aside>
			<article className="w-3/4">
				<Outlet />
			</article>
		</section>
	)
}
