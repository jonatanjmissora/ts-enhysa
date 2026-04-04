import Empresas from "@/components/dashboard/perfil/empresa"
import Tecnico from "@/components/dashboard/perfil/tecnico"
import { createFileRoute } from "@tanstack/react-router"
import { Cpu, UserRound, Warehouse } from "lucide-react"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { useState } from "react"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import Instrumental from "@/components/dashboard/perfil/instrumentos"

export const Route = createFileRoute("/_protected/profile")({
	loader: ({ context }) => {
		context.queryClient.ensureQueryData(tecnicoQueryOptions)
		context.queryClient.ensureQueryData(empresasQueryOptions)
		return null
	},
	component: RouteComponent,
})

function RouteComponent() {
	const [toggleProfile, setToggleProfile] = useState<
		"tecnico" | "empresa" | "instrumento"
	>("tecnico")

	return (
		<section className="flex flex-col items-center min-h-screen p-20 sm:py-10 2xl:py-20">
			<div className="w-full flex items-center my-10 mb-20 sm:text-base 2xl:text-lg font-semibold tracking-wider">
				<button
					className={`${toggleProfile === "tecnico" ? "themeBtnAccent" : ""} py-2 flex-1 flex items-center justify-between px-6 cursor-pointer`}
					onClick={() => setToggleProfile("tecnico")}
				>
					<span></span>
					<span>Tecnico</span>
					<UserRound
						className={`bg-blue-500/50 size-9 p-1 rounded-lg text-foreground ${toggleProfile === "tecnico" ? "" : "text-transparent bg-transparent"}`}
					/>
				</button>
				<button
					className={`${toggleProfile === "empresa" ? "themeBtnAccent" : ""} py-2 flex-1 flex items-center justify-center gap-4 px-6 cursor-pointer`}
					onClick={() => setToggleProfile("empresa")}
				>
					<Warehouse
						className={`bg-teal-500/50 size-9 p-1 rounded-lg text-foreground ${toggleProfile === "empresa" ? "" : "text-transparent bg-transparent"}`}
					/>
					<span>Empresa</span>
				</button>
				<button
					className={`${toggleProfile === "instrumento" ? "themeBtnAccent" : ""} py-2 flex-1 flex items-center justify-between px-6 cursor-pointer`}
					onClick={() => setToggleProfile("instrumento")}
				>
					<Cpu
						className={`bg-orange-700/50 size-9 p-1 rounded-lg text-foreground ${toggleProfile === "instrumento" ? "" : "text-transparent bg-transparent"}`}
					/>
					<span>Instrumento</span>
					<span></span>
				</button>
			</div>
			{toggleProfile === "empresa" ? (
				<Empresas />
			) : toggleProfile === "tecnico" ? (
				<Tecnico />
			) : (
				<Instrumental />
			)}
		</section>
	)
}
