import { Button } from "@/components/ui/button"
import { useForm } from "@tanstack/react-form"
import { useRouter } from "@tanstack/react-router"
import { empresaIdValidator } from "db/empresas/empresa-validator"
import { EmpresaType } from "db/empresas/schema"
import { Loader, Trash2 } from "lucide-react"
import { useDeleteEmpresa } from "queries/empresas/use-delete-empresa"
import { toast } from "sonner"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { useState } from "react"

export function DeleteEmpresa({ empresa }: { empresa: EmpresaType }) {
	const [open, setOpen] = useState(false)
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<Trash2 className="sm:block hidden absolute sm:top-4 sm:right-15 size-6 cursor-pointer text-red-600/50" />
			</AlertDialogTrigger>
			<AlertDialogContent className="py-20 px-10 bg-accent/90 backdrop-blur-xl">
				<AlertDialogTitle></AlertDialogTitle>
				<AlertDialogDescription></AlertDialogDescription>
				<DeleteEmpresaForm empresa={empresa} setOpen={setOpen} />
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default function DeleteEmpresaForm({
	empresa,
	setOpen,
}: {
	empresa: EmpresaType
	setOpen: (open: boolean) => void
}) {
	const {
		mutateAsync: deleteEmpresaMutation,
		error,
		isPending,
	} = useDeleteEmpresa(empresa.id)

	const router = useRouter()
	const form = useForm({
		defaultValues: {
			id: empresa.id,
		},
		validators: {
			onSubmit: empresaIdValidator,
		},
		onSubmit: async ({ value }) => {
			const result = await deleteEmpresaMutation({ data: { id: value.id } })

			if (!result) {
				console.error("Error al eliminar la empresa", error)
				toast.error("Error al eliminar la empresa")
			}
			toast.success("Empresa eliminada exitosamente")
			router.invalidate()
		},
	})

	return (
		<form
			id="create-form"
			className="flex flex-col items-center justify-center gap-6"
			onSubmit={e => {
				e.preventDefault()
				form.handleSubmit()
			}}
		>
			<p className="text-center sm:text-lg 2xl:text-2xl font-semibold">
				¿Estás seguro de borrar {empresa.razonSocial.toUpperCase()}?
			</p>

			<p className="text-center opacity-50 sm:text-sm 2xl:text-base text-pretty w-3/4">
				Esta acción no se puede deshacer. Esto eliminará permanentemente el dato
				de nuestros servidores.
			</p>

			<div className="flex justify-center items-center gap-2 w-full">
				<button
					type="button"
					onClick={() => setOpen(false)}
					className="w-1/2 cursor-pointer card py-1 justify-center"
				>
					Cancelar
				</button>
				<Button
					type="submit"
					disabled={isPending}
					className="w-1/2 cursor-pointer card py-1"
				>
					{isPending ? (
						<div className="flex gap-2">
							Eliminando... <Loader className="animate-spin size-4"></Loader>
						</div>
					) : (
						"Eliminar"
					)}
				</Button>
			</div>
			{error && (
				<p className="text-red-500 text-xs">Error al eliminar el pago</p>
			)}
		</form>
	)
}
