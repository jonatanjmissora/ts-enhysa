import { Button } from "@/components/ui/button"
import { CreateEmpresaForm } from "./create-empresa-form"
import { TecnicoType } from "db/tecnicos/schema"
import { toast } from "sonner"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { useSuspenseQuery } from "@tanstack/react-query"
import { EmpresaType } from "db/schema"
import { Ellipsis } from "lucide-react"
import { useState } from "react"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Pencil, Trash2 } from "lucide-react"
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import DeleteEmpresaForm from "./delete-empresa-form"

export default function EmpresasList({
	tecnico,
}: {
	tecnico: TecnicoType | null
}) {
	const { data: empresas } = useSuspenseQuery(empresasQueryOptions)
	console.log("EMPRESAS", empresas)

	if (!empresas || empresas.length === 0) {
		return <NoEmpresas tecnico={tecnico} />
	}

	return (
		<article className="flex flex-col gap-2 w-full">
			{empresas.map(empresa => (
				<Empresa key={empresa.id} empresa={empresa} />
			))}
		</article>
	)
}

const Empresa = ({ empresa }: { empresa: EmpresaType }) => {
	return (
		<div className="w-full grid grid-cols-[1.5fr_1.5fr_1fr_1fr_1.5fr] gap-2 p-3 text-center tracking-widest text-foreground/75 cardAccent">
			<span>{empresa.razonSocial}</span>
			<span>{empresa.direccion}</span>
			<span>{empresa.localidad}</span>
			<span>{empresa.provincia}</span>
			<div className="w-full flex justify-end px-4 cursor-pointer">
				<EmpresaDropdownMenu empresa={empresa} />
			</div>
		</div>
	)
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

const EmpresaDropdownMenu = ({ empresa }: { empresa: EmpresaType }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	return (
		<DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="cursor-pointer">
					<Ellipsis size={14} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-28 2xl:w-40 p-4 text-xs 2xl:text-base"
				align="end"
			>
				<DropdownMenuGroup>
					{/* <Link to={`/admin/pagos/edit-pago`} search={{ id: item.id }}>
						<Button variant="ghost">
							<Pencil size={14} />
							Editar
						</Button>
					</Link> */}
					Editar
					<DropdownMenuSeparator />
					<DeleteEmpresaAlertDialog
						empresa={empresa}
						setIsMenuOpen={setIsMenuOpen}
					/>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export function DeleteEmpresaAlertDialog({
	empresa,
	setIsMenuOpen,
}: {
	empresa: EmpresaType
	setIsMenuOpen: (open: boolean) => void
}) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="ghost">
					<Trash2 size={14} />
					Borrar
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="py-20 px-10 bg-accent/50 backdrop-blur-xl">
				<AlertDialogTitle></AlertDialogTitle>
				<AlertDialogDescription></AlertDialogDescription>
				<DeleteEmpresaForm empresa={empresa} setIsMenuOpen={setIsMenuOpen} />
			</AlertDialogContent>
		</AlertDialog>
	)
}
