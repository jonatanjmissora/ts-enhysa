import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { PuntoType } from "@/lib/types"

export function DeletePuntoAlertDialog({
	punto,
	puntos,
	setPuntos,
	setOpenValue,
}: {
	punto: PuntoType
	puntos: PuntoType[]
	setPuntos: (puntos: PuntoType[]) => void
	setOpenValue: (value: "new" | "edit" | false) => void
}) {
	const [open, setOpen] = useState(false)

	const eliminarPunto = () => {
		if (!punto) return
		const newPuntos = [...puntos].filter(p => p.nombre !== punto.nombre)
		setPuntos(newPuntos)
		setOpenValue(false)
		setOpen(false)
	}

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<Trash2 className="size-8 text-red-500/40 cursor-pointer" />
			</AlertDialogTrigger>
			<AlertDialogContent className="py-20 px-10 bg-red-900/10 backdrop-blur-xl">
				<AlertDialogTitle className="text-center">
					¿Estás seguro de que quieres eliminar este punto?
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center"></AlertDialogDescription>
				<div className="flex justify-end gap-4">
					<button
						className="cursor-pointer card py-1 justify-center"
						onClick={() => {
							setOpen(false)
						}}
					>
						Cancelar
					</button>
					<Button className="cursor-pointer my-shadow" onClick={eliminarPunto}>
						Confirmar
					</Button>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}
