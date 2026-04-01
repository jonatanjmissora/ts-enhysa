import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import EmpresasList from "./empresas-list"
import { EmpresaFormAlertDialog } from "./empresas-form"

export default function Empresas() {
	return (
		<article className="w-3/4 flex flex-col gap-8 items-center">
			<div className="w-full flex flex-col items-end">
				<div className="flex items-center justify-between py-1 border-b border-foreground/20 w-full">
					<span className="sm:text-lg 2xl:text-2xl font-semibold tracking-wider">
						Empresas
					</span>
					<EmpresaFormAlertDialog>
						<Button
							type="button"
							variant="outline"
							className="flex items-center justify-center cursor-pointer"
						>
							<Plus />
						</Button>
					</EmpresaFormAlertDialog>
				</div>
				<span className="sm:text-sm 2xl:text-base text-foreground/50 tracking-widest">
					empresa
				</span>
			</div>
			<div className="w-full grid grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr_1fr] gap-2 p-3 text-center tracking-widest font-semibold italic">
				<span>Razón social</span>
				<span>Direccion</span>
				<span>Localidad</span>
				<span>Provincia</span>
				<span>CP</span>
				<span>CUIT</span>
			</div>
			<EmpresasList />
		</article>
	)
}
