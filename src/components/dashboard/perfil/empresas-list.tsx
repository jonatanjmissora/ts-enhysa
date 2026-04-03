import { Button } from "@/components/ui/button"
import { EmpresaFormAlertDialog } from "./create-empresa-form"

export default function EmpresasList() {
	const empresas = []

	if (empresas.length === 0) {
		return <NoEmpresas />
	}

	return <div>empresas-list</div>
}

const NoEmpresas = () => {
	return (
		<div className="flex flex-col gap-4 text-foreground/50 sm:text-lg 2xl:text-xl tracking-wide py-20">
			<p>No tiene ninguna empresa asociada a su cuenta.</p>
			<div className="flex items-center justify-center gap-2">
				<span>Por favor ingrese una nueva</span>
				<EmpresaFormAlertDialog>
					<Button
						className="text-foreground/50 sm:text-lg 2xl:text-xl tracking-wide cursor-pointer"
						variant="outline"
					>
						empresa
					</Button>
				</EmpresaFormAlertDialog>
			</div>
		</div>
	)
}
