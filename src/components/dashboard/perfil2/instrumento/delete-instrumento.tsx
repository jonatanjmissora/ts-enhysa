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
	setIsMenuOpen,
}: {
	instrumento: InstrumentoType
	setIsMenuOpen?: (open: boolean) => void
}) {
	const [open, setOpen] = useState(false)
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild className="hover:bg-accent">
				<div>
					<Trash2 className="sm:block hidden absolute sm:top-4 sm:right-15 size-6 cursor-pointer text-red-600/50" />
					<div className="w-full sm:hidden flex items-center gap-2 justify-center">
						<Trash2 size={14} className="text-destructive-foreground" />
						Borrar
					</div>
				</div>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-8 sm:p-20 sm:py-15 2xl:py-20 bg-accent/80 backdrop-blur-xl w-full sm:w-1/2 min-h-[50dvh]">
				<AlertDialogTitle className="h-max sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2 border-b border-foreground/20 w-full mb-10">
					Eliminar Instrumento
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center">
					<DeleteInstrumentoForm
						instrumento={instrumento}
						setOpen={setOpen}
						setIsMenuOpen={setIsMenuOpen}
					/>
				</AlertDialogDescription>
			</AlertDialogContent>
		</AlertDialog>
	)
}

function DeleteInstrumentoForm({
	instrumento,
	setOpen,
	setIsMenuOpen,
}: {
	instrumento: InstrumentoType
	setOpen: (open: boolean) => void
	setIsMenuOpen?: (open: boolean) => void
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
			if (setIsMenuOpen) setIsMenuOpen(false)
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
				¿Estás seguro de borrar {instrumento.nombre}?
			</p>

			<p className="text-center opacity-50 sm:text-sm 2xl:text-base text-pretty w-3/4 mb-8">
				Esta acción no se puede deshacer. Esto eliminará permanentemente el dato
				de nuestros servidores.
			</p>

			<div className="flex justify-center items-center gap-2 w-full">
				<button
					type="button"
					onClick={() => {
						setOpen(false)
						if (setIsMenuOpen) setIsMenuOpen(false)
					}}
					className="w-1/2 cursor-pointer card p-[5px] justify-center my-shadow"
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
				<p className="text-red-500 text-xs">Error al eliminar el instrumento</p>
			)}
		</form>
	)
}
