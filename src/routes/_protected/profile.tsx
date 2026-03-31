import FormTecnico from "@/components/dashboard/perfil/form-tecnico"
import { createFileRoute } from "@tanstack/react-router"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"

export const Route = createFileRoute("/_protected/profile")({
	loader: ({ context }) => {
		context.queryClient.prefetchQuery(tecnicoQueryOptions)
		return null
	},
	component: RouteComponent,
})

function RouteComponent() {
	return <FormTecnico />
}
