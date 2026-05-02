import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_protected/new-report2/pdf/")({
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/_protected/new-report2/pdf/"!</div>
}
