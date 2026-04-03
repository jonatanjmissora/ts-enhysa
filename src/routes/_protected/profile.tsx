import Empresas from "@/components/dashboard/perfil/empresa"
import Tecnico from "@/components/dashboard/perfil/tecnico"
import { createFileRoute } from "@tanstack/react-router"
import { UserRound, Warehouse } from "lucide-react"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { useState } from "react"

export const Route = createFileRoute("/_protected/profile")({
	loader: ({ context }) => {
		context.queryClient.ensureQueryData(tecnicoQueryOptions)
		return null
	},
	component: RouteComponent,
})

function RouteComponent() {
	const [toggleProfile, setToggleProfile] = useState<"tecnico" | "empresas">(
		"tecnico"
	)

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
						className={`${toggleProfile === "tecnico" ? "" : "text-transparent"}`}
					/>
				</button>
				<button
					className={`${toggleProfile === "empresas" ? "themeBtnAccent" : ""} py-2 flex-1 flex items-center justify-between px-6 cursor-pointer`}
					onClick={() => setToggleProfile("empresas")}
				>
					<Warehouse
						className={`${toggleProfile === "empresas" ? "" : "text-transparent"}`}
					/>
					<span>Empresa</span>
					<span></span>
				</button>
			</div>
			{toggleProfile === "empresas" ? <Empresas /> : <Tecnico />}
		</section>
	)
}
