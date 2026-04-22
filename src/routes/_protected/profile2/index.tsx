import Profile from "@/components/dashboard/perfil2/profile"
import { createFileRoute } from "@tanstack/react-router"
import { FileText } from "lucide-react"

export const Route = createFileRoute("/_protected/profile2/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<section className="card bg-accent rounded-lg flex-col items-start gap-10 pb-40">
			<div className="text-left textXL bg-blue-500/25 py-4 mt-10 px-5 rounded w-full">
				<div className="flex items-center gap-8 w-max">
					Mi Perfil
					<FileText className="size-7" />
				</div>
			</div>

			<div className="px-5 w-full flex flex-col gap-10">
				<Profile />
			</div>
		</section>
	)
}
