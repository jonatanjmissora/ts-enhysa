import Profile from "@/components/dashboard/perfil2/profile"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_protected/profile2/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<section className="card bg-accent rounded-lg flex-col items-start gap-10 pb-40">
			<p className="w-full text-left textXL bg-blue-500/25 py-4  mt-10 flex items-center gap-8 px-5 rounded">
				Mi Perfil
			</p>

			<div className="px-5 w-full flex flex-col gap-10">
				<Profile />
			</div>
		</section>
	)
}
