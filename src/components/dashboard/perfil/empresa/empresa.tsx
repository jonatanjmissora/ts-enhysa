import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import EmpresasList from "./empresas-list"
import { CreateEmpresaForm } from "./create-empresa-form"
import { useQuery } from "@tanstack/react-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { toast } from "sonner"
import { Suspense } from "react"
import { TextTooltip } from "@/components/layout/text-tooltip"

export default function Empresas() {
	const { data: tecnico } = useQuery(tecnicoQueryOptions)

	return (
		<article className="w-3/4 flex flex-col gap-4 items-center">
			<div className="w-full flex flex-col items-end">
				<div className="flex items-center justify-between py-1 border-b border-foreground/20 w-full">
					<span className="sm:text-lg 2xl:text-2xl font-semibold tracking-wider">
						Empresas
					</span>
					{tecnico ? (
						<CreateEmpresaForm>
							<Button
								type="button"
								variant="ghost"
								className="flex items-center justify-center cursor-pointer bg-teal-500/50 dark:bg-teal-500/75 hover:bg-teal-500/75  dark:hover:bg-teal-500"
							>
								<Plus className="size-6" />
							</Button>
						</CreateEmpresaForm>
					) : (
						<Button
							onClick={() =>
								toast.info("Completa los datos del técnico primero.")
							}
							type="button"
							variant="outline"
							className="flex items-center justify-center cursor-pointer"
						>
							<Plus />
						</Button>
					)}
				</div>
				<span className="sm:text-sm 2xl:text-base text-foreground/50 tracking-widest">
					empresa
				</span>
			</div>
			<div className="pt-10 w-full grid grid-cols-[1.5fr_1.5fr_1fr_1fr_1.5fr] gap-2 p-3 text-center tracking-widest font-semibold italic relative">
				<span>Razón social</span>
				<span>Dirección</span>
				<span>Localidad</span>
				<span>Provincia</span>
				<TextTooltip
					text={
						"Complete los datos de la empresa destino del informe. Estará accesible en todos los reportes nuevos."
					}
					className="top-10"
				/>
			</div>
			<Suspense fallback={<EmpresaSkelton />}>
				<EmpresasList tecnico={tecnico ?? null} />
			</Suspense>
		</article>
	)
}

const EmpresaSkelton = () => {
	return (
		<div className="flex flex-col gap-2 w-full">
			<div className="w-full h-15 cardAccent animate-pulse">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="w-full h-15 cardAccent animate-pulse">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	)
}
