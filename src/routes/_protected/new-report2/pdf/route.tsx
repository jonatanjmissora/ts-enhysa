import { createFileRoute, Outlet } from "@tanstack/react-router"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { instrumentosQueryOptions } from "queries/instrumentos/instrumentos-query"
import { part1DataQueryOptions } from "queries/new-report/part1/nrpart1-query"
import { part2DataQueryOptions } from "queries/new-report/part2/nrpart2-query"
import { part3DataQueryOptions } from "queries/new-report/part3/nrpart3-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"

export const Route = createFileRoute("/_protected/new-report2/pdf")({
	loader: ({ context }) => {
		context.queryClient.ensureQueryData(tecnicoQueryOptions)
		context.queryClient.ensureQueryData(empresasQueryOptions)
		context.queryClient.ensureQueryData(instrumentosQueryOptions)
		context.queryClient.ensureQueryData(part1DataQueryOptions)
		context.queryClient.ensureQueryData(part2DataQueryOptions)
		context.queryClient.ensureQueryData(part3DataQueryOptions)
		return null
	},
	component: RouteComponent,
})

function RouteComponent() {
	return <Outlet />
}
