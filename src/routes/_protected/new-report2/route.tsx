import { createFileRoute, Outlet } from "@tanstack/react-router"
import { Trash2 } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { instrumentosQueryOptions } from "queries/instrumentos/instrumentos-query"
import MovilNewReport from "@/components/movil/new-report"

export const Route = createFileRoute("/_protected/new-report2")({
	loader: ({ context }) => {
		context.queryClient.ensureQueryData(tecnicoQueryOptions)
		context.queryClient.ensureQueryData(empresasQueryOptions)
		context.queryClient.ensureQueryData(instrumentosQueryOptions)
		return null
	},
	component: RouteComponent,
})

function RouteComponent() {
	const isMobil = typeof window !== "undefined" && window.innerWidth < 640
	if (isMobil) return <MovilNewReport />

	return (
		<div className="min-h-screen flex flex-col">
			<header className="sm:text-base 2xl:text-xl font-semibold tracking-wider sm:h-20 2xl:h-24 px-20 bg-accent border border-background flex justify-between items-center">
				<span>Protocolo de Iluminación Res 84/12 SRT</span>
				<Link
					to="/"
					className="flex items-center justify-center gap-2 themeBtnAccent rounded-lg my-shadow sm:text-sm 2xl:text-lg text-foreground tracking-wider px-6 py-2 cursor-pointer m-0"
				>
					<Trash2 className="size-5" />
					descartar
				</Link>
			</header>
			<div className="flex-1 p-20 py-10">
				<Outlet />
			</div>
		</div>
	)
}
