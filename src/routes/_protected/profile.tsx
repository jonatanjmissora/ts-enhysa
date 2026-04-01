import Empresas from "@/components/dashboard/perfil/empresa"
import FormTecnico from "@/components/dashboard/perfil/form-tecnico"
import { createFileRoute } from "@tanstack/react-router"
import { UserRound, Warehouse } from "lucide-react"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { useState } from "react"

export const Route = createFileRoute("/_protected/profile")({
	loader: ({ context }) => {
		context.queryClient.prefetchQuery(tecnicoQueryOptions)
		return null
	},
	component: RouteComponent,
})

function RouteComponent() {
	const [isEmpresa, setIsEmpresa] = useState<boolean>(false)

	return (
		<section className="flex flex-col items-center min-h-screen p-20 sm:py-10 2xl:py-20">
			<div className="w-full flex items-center my-10 mb-20 sm:text-base 2xl:text-lg font-semibold tracking-wider">
				<button
					className={`${!isEmpresa ? "themeBtnAccent" : ""} py-2 flex-1 flex items-center justify-between px-6`}
					onClick={() => setIsEmpresa(false)}
				>
					<span></span>
					<span>Tecnico</span>
					<UserRound className={`${!isEmpresa ? "" : "text-transparent"}`} />
				</button>
				<button
					className={`${isEmpresa ? "themeBtnAccent" : ""} py-2 flex-1 flex items-center justify-between px-6`}
					onClick={() => setIsEmpresa(true)}
				>
					<Warehouse className={`${isEmpresa ? "" : "text-transparent"}`} />
					<span>Empresa</span>
					<span></span>
				</button>
			</div>
			{isEmpresa ? <Empresas /> : <FormTecnico />}
		</section>
	)
}
