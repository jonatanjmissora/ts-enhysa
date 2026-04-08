import { Database } from "lucide-react"
import { PuntosType } from "./croquis"
import { useState } from "react"
import { Trash2 } from "lucide-react"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function PuntosList({
	nombre,
	puntos,
	setPuntos,
}: {
	nombre: string
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
}) {
	return (
		<article className="cardAccent flex-col p-10 px-14 gap-6 flex-1">
			<div className="flex w-full items-end border-b border-foreground/20">
				<div className="flex items-center gap-3 w-full">
					<div className="bg-orange-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<Database className="size-6" />
					</div>
					<span className="w-full sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2">
						Punto(s) de medición
					</span>
				</div>
				<p className="ml-auto text-sm text-foreground/70 py-1">
					{nombre || "Depósito"}
				</p>
			</div>

			<div className="flex flex-col justify-between items-center gap-6 w-full">
				<div className="w-full grid grid-cols-[1fr_1fr_0.5fr] gap-4 place-items-center sm:text-base 2xl:text-lg sm:font-semibold 2xl:font-bold italic tracking-wider">
					<span>nombre</span>
					<span>valor</span>
					<span></span>
				</div>
				{!puntos ? (
					<div className="w-full grid grid-cols-[1fr_1fr_0.5fr] gap-4 place-items-center">
						<span className="text-amber-400">no hay puntos. . .</span>
						<span></span>
						<span></span>
					</div>
				) : (
					puntos.map(punto => (
						<Punto
							key={punto?.nombre}
							nombre={punto?.nombre || ""}
							valor={punto?.valor || 0}
							puntos={puntos}
							setPuntos={setPuntos}
						/>
					))
				)}
			</div>
		</article>
	)
}

const Punto = ({
	nombre,
	valor,
	puntos,
	setPuntos,
}: {
	nombre: string
	valor: number
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
}) => {
	const [inputValue, setInputValue] = useState(valor)

	return (
		<div className="w-full grid grid-cols-[1fr_1fr_0.5fr] gap-4 place-items-center">
			<span className="rounded-lg bg-background py-1 w-full text-center">
				{nombre}
			</span>
			<input
				type="number"
				className={`rounded-lg py-1 w-full text-center ${inputValue === 0 ? "bg-amber-400/25" : "bg-background"}`}
				value={inputValue || ""}
				placeholder="Ej. 1,23"
				onChange={e => {
					if (!puntos) return
					setInputValue(Number(e.target.value))
					const nuevosPuntos = puntos.map(punto => {
						if (punto?.nombre === nombre) {
							return {
								...punto,
								valor: Number(e.target.value),
								cumple: Number(e.target.value) >= 1,
							}
						}
						return punto
					})
					setPuntos(nuevosPuntos)
				}}
			/>
			<DeletePuntoAlertDialog
				nombre={nombre}
				puntos={puntos}
				setPuntos={setPuntos}
			/>
		</div>
	)
}

export function DeletePuntoAlertDialog({
	nombre,
	puntos,
	setPuntos,
}: {
	nombre: string
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
}) {
	const [open, setOpen] = useState(false)

	const eliminarPunto = () => {
		if (!puntos) return
		const nuevosPuntos = puntos.filter(punto => punto?.nombre !== nombre)
		setPuntos(nuevosPuntos)
		setOpen(false)
	}

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<Trash2
					size={20}
					className="text-red-600/40 cursor-pointer hover:text-red-600 ml-auto"
				/>
			</AlertDialogTrigger>
			<AlertDialogContent className="py-20 px-10 bg-red-900/10 backdrop-blur-xl">
				<AlertDialogTitle className="text-center">
					¿Estás seguro de que quieres eliminar {nombre} ?
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center"></AlertDialogDescription>
				<div className="flex justify-end gap-4">
					<Button
						variant="outline"
						className="cursor-pointer"
						onClick={() => {
							setOpen(false)
						}}
					>
						Cancelar
					</Button>
					<Button className="cursor-pointer" onClick={eliminarPunto}>
						Confirmar
					</Button>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}
