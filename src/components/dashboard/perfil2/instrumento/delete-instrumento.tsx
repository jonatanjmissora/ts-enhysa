import { Button } from "@/components/ui/button"
import { useForm } from "@tanstack/react-form"
import { useRouter } from "@tanstack/react-router"
import { instrumentoIdValidator } from "db/instrumentos/instrumento-validator"
import { InstrumentoType } from "db/instrumentos/schema"
import { Loader, Trash2 } from "lucide-react"
import { useDeleteInstrumento } from "queries/instrumentos/use-delete-instrumento"
import { toast } from "sonner"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { useState } from "react"

export default function DeleteInstrumento({
	instrumento,
}: {
	instrumento: InstrumentoType
}) {
	const [open, setOpen] = useState(false)
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<Trash2 className="sm:block hidden absolute sm:top-4 sm:right-15 size-6 cursor-pointer text-red-600/50" />
			</AlertDialogTrigger>
			<AlertDialogContent className="py-20 px-10 bg-accent/90 backdrop-blur-xl">
				<AlertDialogTitle></AlertDialogTitle>
				<AlertDialogDescription></AlertDialogDescription>
				<DeleteInstrumentoForm instrumento={instrumento} setOpen={setOpen} />
			</AlertDialogContent>
		</AlertDialog>
	)
}

function DeleteInstrumentoForm({
	instrumento,
	setOpen,
}: {
	instrumento: InstrumentoType
	setOpen: (open: boolean) => void
}) {
	const {
		mutateAsync: deleteInstrumentoMutation,
		error,
		isPending,
	} = useDeleteInstrumento(instrumento.id)

	const router = useRouter()
	const form = useForm({
		defaultValues: {
			id: instrumento.id,
		},
		validators: {
			onSubmit: instrumentoIdValidator,
		},
		onSubmit: async ({ value }) => {
			const result = await deleteInstrumentoMutation({ data: { id: value.id } })

			if (!result) {
				console.error("Error al eliminar el instrumento", error)
				toast.error("Error al eliminar el instrumento")
			}
			toast.success("Instrumento eliminado exitosamente")
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
				¿Estás seguro de borrar {instrumento.nombre.toUpperCase()}?
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
					className="w-1/2 cursor-pointer my-shadow"
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
