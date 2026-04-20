import { createFileRoute, Link, Outlet } from "@tanstack/react-router"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { instrumentosQueryOptions } from "queries/instrumentos/instrumentos-query"
import { ChevronLeft } from "lucide-react"
import MovilProfile from "@/components/movil/profile"

export const Route = createFileRoute("/_protected/profile2")({
	loader: ({ context }) => {
		context.queryClient.ensureQueryData(tecnicoQueryOptions)
		context.queryClient.ensureQueryData(empresasQueryOptions)
		context.queryClient.ensureQueryData(instrumentosQueryOptions)
		return null
	},
	component: RouteComponent,
})

function RouteComponent() {
	const isMobile = window.innerWidth < 640
	if (isMobile) return <MovilProfile />

	return (
		<div className="min-h-screen flex flex-col">
			<header className="hidden sm:text-base 2xl:text-xl font-semibold tracking-wider sm:h-20 2xl:h-24 px-20 bg-accent border border-background sm:flex justify-between items-center">
				<span>Protocolo de Iluminación Res 84/12 SRT</span>
				<div className="flex gap-10 items-center justify-center">
					<Link
						to="/"
						className="flex items-center justify-center gap-2 themeBtnAccent rounded-lg shadow-xl sm:text-sm 2xl:text-lg text-foreground tracking-wider px-6 py-2 cursor-pointer m-0"
					>
						<ChevronLeft className="size-5" />
						Volver
					</Link>
				</div>
			</header>
			<div className="flex-1 p-20 py-10">
				<Outlet />
			</div>
		</div>
	)
}
