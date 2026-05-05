import Profile from "@/components/dashboard/perfil2/profile"
import { createFileRoute, Link, useLocation } from "@tanstack/react-router"
import { ChevronLeft, FileText } from "lucide-react"

export const Route = createFileRoute("/_protected/profile2/")({
	component: RouteComponent,
})

function RouteComponent() {
	const pathname = useLocation({
		select: location => location.pathname,
	})

	return (
		<section className="card bg-accent rounded-lg flex-col items-start gap-10 pb-40 relative bw">
			<Link
				to="/iluminacion"
				className={`absolute top-20 left-0`}
				search={{ from: pathname.split("/")[1] }}
			>
				<ChevronLeft size={24} />
			</Link>
			<div className="text-left textXL bg-blue-500/25 py-4 mt-10 px-5 rounded w-full">
				<div className="flex items-center gap-8 w-max">
					Mi Perfil leria
					<FileText className="size-7" />
				</div>
			</div>

			<div className="px-5 w-full flex flex-col gap-10">
				<Profile />
			</div>
		</section>
	)
}
