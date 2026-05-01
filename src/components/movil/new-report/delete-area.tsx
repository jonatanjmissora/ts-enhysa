import { Button } from "@/components/ui/button"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { useState } from "react"
import { Trash2, Loader } from "lucide-react"
import { useDeleteNRpart2 } from "queries/new-report/part2/use-delete-empresa"
import { useForm } from "@tanstack/react-form"
import { nrPart2IdValidator } from "db/new-report/part2/nrpart2-validator"
import { useRouter } from "@tanstack/react-router"
import { toast } from "sonner"
import { Part2DataType } from "db/new-report/part2/schema"

export default function DeletePart2DataAlert({
	area,
}: {
	area: Part2DataType
}) {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild className="hover:bg-accent">
				<Button variant={"destructive"} className="my-shadow">
					<Trash2 className="size-4 " />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-8 sm:p-20 sm:py-15 2xl:py-20 bg-accent/80 backdrop-blur-xl w-full sm:w-1/2 min-h-[50dvh]">
				<AlertDialogTitle className="h-max sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2 border-b border-foreground/20 w-full mb-10">
					Eliminar Empresa
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center">
					<DeletePart2DataForm area={area} setOpen={setOpen} />
				</AlertDialogDescription>
			</AlertDialogContent>
		</AlertDialog>
	)
}

function DeletePart2DataForm({
	area,
	setOpen,
}: {
	area: Part2DataType
	setOpen: (open: boolean) => void
}) {
	const {
		mutateAsync: deleteAreaMutation,
		error,
		isPending,
	} = useDeleteNRpart2(area.id)

	const router = useRouter()
	const form = useForm({
		defaultValues: {
			id: area.id,
		},
		validators: {
			onSubmit: nrPart2IdValidator,
		},
		onSubmit: async ({ value }) => {
			const result = await deleteAreaMutation({ data: { id: value.id } })

			if (!result) {
				console.error("Error al eliminar el area", error)
				toast.error("Error al eliminar el area")
				return
			}
			toast.success("Area eliminada exitosamente")
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
				¿Estás seguro de borrar {area.nombre.toUpperCase()}?
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
						<div className="flex gap-2 items-center justify-center">
							Eliminando... <Loader className="animate-spin size-4"></Loader>
						</div>
					) : (
						"Eliminar"
					)}
				</Button>
			</div>
			{error && (
				<p className="text-red-500 text-xs">Error al eliminar la empresa</p>
			)}
		</form>
	)
}
