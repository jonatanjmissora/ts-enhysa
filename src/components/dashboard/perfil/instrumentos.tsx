import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import InstrumentalList from "./instrumentos-list"
import { CreateEmpresaForm } from "./create-empresa-form"
import { useQuery } from "@tanstack/react-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { toast } from "sonner"
import { Suspense } from "react"

export default function Instrumentos() {
	const { data: tecnico } = useQuery(tecnicoQueryOptions)

	return (
		<article className="w-3/4 flex flex-col gap-4 items-center">
			<div className="w-full flex flex-col items-end">
				<div className="flex items-center justify-between py-1 border-b border-foreground/20 w-full">
					<span className="sm:text-lg 2xl:text-2xl font-semibold tracking-wider">
						Instrumental
					</span>
					{tecnico ? (
						<CreateEmpresaForm>
							<Button
								type="button"
								variant="ghost"
								className="flex items-center justify-center cursor-pointer bg-orange-700/50 dark:bg-orange-700/55 hover:bg-orange-700/75  dark:hover:bg-orange-700/75"
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
					instrumento
				</span>
			</div>
			<div className="pt-10 w-full grid grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-2 p-3 text-center tracking-widest font-semibold italic">
				<span>Nombre</span>
				<span>Marca</span>
				<span>Modelo</span>
				<span>Fecha certificación</span>
				<span></span>
			</div>
			<Suspense fallback={<InstrumentalSkelton />}>
				<InstrumentalList tecnico={tecnico ?? null} />
			</Suspense>
		</article>
	)
}

const InstrumentalSkelton = () => {
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
