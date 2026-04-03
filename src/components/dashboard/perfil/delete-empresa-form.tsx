import { Button } from "@/components/ui/button"
import { useForm } from "@tanstack/react-form"
import { useRouter } from "@tanstack/react-router"
import { empresaIdValidator } from "db/empresas/empresa-validator"
import { EmpresaType } from "db/empresas/schema"
import { Loader } from "lucide-react"
import { useDeleteEmpresa } from "queries/empresas/use-delete-empresa"
import { toast } from "sonner"

export default function DeleteEmpresaForm({
	empresa,
	setIsMenuOpen,
}: {
	empresa: EmpresaType
	setIsMenuOpen: (open: boolean) => void
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
			className="flex flex-col items-center justify-center gap-2"
			onSubmit={e => {
				e.preventDefault()
				form.handleSubmit()
			}}
		>
			<p className="text-xl font-semibold text-center">
				¿Estás seguro de borrar {empresa.razonSocial}?
			</p>

			<p className="text-center opacity-50 text-xs balance">
				Esta acción no se puede deshacer. Esto eliminará permanentemente el dato
				de nuestros servidores.
			</p>

			<div className="flex justify-center items-center gap-2">
				<Button
					type="button"
					variant="ghost"
					onClick={() => setIsMenuOpen(false)}
				>
					Cancelar
				</Button>
				<Button type="submit" disabled={isPending}>
					{isPending ? (
						<div className="flex gap-2">
							Eliminando... <Loader className="animate-spin"></Loader>
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
