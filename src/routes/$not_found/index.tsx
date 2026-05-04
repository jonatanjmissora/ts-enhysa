import WorkingOnIt from "@/components/layout/working-on-it"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/$not_found/")({
	component: RouteComponent,
})

function RouteComponent() {
	return <WorkingOnIt />
}
