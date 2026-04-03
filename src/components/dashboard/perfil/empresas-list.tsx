import { Button } from "@/components/ui/button"
import { CreateEmpresaForm } from "./create-empresa-form"
import { TecnicoType } from "db/tecnicos/schema"
import { toast } from "sonner"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { useQuery } from "@tanstack/react-query"

export default function EmpresasList({
	tecnico,
}: {
	tecnico: TecnicoType | null
}) {
	const { data: empresas, isLoading } = useQuery(empresasQueryOptions)

	if (isLoading) {
		return <article>loading...</article>
	}

	if (!empresas) {
		return <NoEmpresas tecnico={tecnico} />
	}

	return <article>{JSON.stringify(empresas, null, 2)}</article>
}

const NoEmpresas = ({ tecnico }: { tecnico: TecnicoType | null }) => {
	return (
		<article className="flex flex-col gap-4 text-foreground/50 sm:text-lg 2xl:text-xl tracking-wide py-20">
			<p>No tiene ninguna empresa asociada a su cuenta.</p>
			<div className="flex items-center justify-center gap-2">
				<span>Por favor ingrese una nueva</span>
				{tecnico ? (
					<CreateEmpresaForm>
						<Button
							className="text-foreground/50 sm:text-lg 2xl:text-xl tracking-wide cursor-pointer"
							variant="outline"
						>
							empresa
						</Button>
					</CreateEmpresaForm>
				) : (
					<Button
						onClick={() =>
							toast.info("Completa los datos del técnico primero.")
						}
						className="text-foreground/50 sm:text-lg 2xl:text-xl tracking-wide cursor-pointer"
						variant="outline"
					>
						empresa
					</Button>
				)}
			</div>
		</article>
	)
}
