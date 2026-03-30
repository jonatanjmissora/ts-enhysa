import { useRef, useState } from "react"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Lightbulb, Trash, Trash2 } from "lucide-react"
import type { PuntosType } from "@/routes/_protected/new-report"

export default function PuntosAlertDialog({
	cantidad_filas,
	cantidad_columnas,
	celdasSeleccionadas,
	puntos,
	setPuntos,
	isCroquis,
}: {
	cantidad_filas: number
	cantidad_columnas: number
	celdasSeleccionadas: string[]
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
	isCroquis: boolean
}) {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<div className="w-full flex justify-end">
					<button
						className={`w-full py-1 bg-background border border-foreground/20 text-center sm:text-base 2xl:text-lg  hover:bg-background/75 ${!isCroquis ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
						disabled={!isCroquis}
					>
						Inserte Punto
					</button>
				</div>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-30 px-40">
				<CroquisElement
					cantidad_filas={cantidad_filas}
					cantidad_columnas={cantidad_columnas}
					setOpen={setOpen}
					celdasSeleccionadas={celdasSeleccionadas}
					puntos={puntos}
					setPuntos={setPuntos}
				/>
			</AlertDialogContent>
		</AlertDialog>
	)
}

const CroquisElement = ({
	cantidad_filas,
	cantidad_columnas,
	setOpen,
	celdasSeleccionadas,
	puntos,
	setPuntos,
}: {
	cantidad_filas: number
	cantidad_columnas: number
	setOpen: (value: boolean) => void
	celdasSeleccionadas: string[]
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
}) => {
	return (
		<div className="flex flex-col gap-4 items-center justify-center">
			<div className="flex gap-10 items-center relative">
				<div className="relative flex-1">
					<p className="absolute left-0 -top-20 border-b border-foreground/50 py-1 text-center w-full my-4 text-foreground/50 tracking-widest">
						Ancho {cantidad_columnas}m
					</p>
					<div className="absolute -left-30 top-0 h-full w-max px-2 border-r border-foreground/50 py-1 text-center mx-4 flex items-center text-foreground/50  tracking-widest">
						<div className="flex flex-col">
							<span>Largo</span>
							<span>{cantidad_filas}m</span>
						</div>
					</div>
					<CeldasGrid
						cantidad_filas={cantidad_filas}
						cantidad_columnas={cantidad_columnas}
						celdasSeleccionadas={celdasSeleccionadas}
						puntos={puntos}
						setPuntos={setPuntos}
					/>
				</div>
				<PuntosList puntos={puntos} setPuntos={setPuntos} />
			</div>
			<p>
				Seleccione el punto-{puntos[0] === null ? "1" : puntos.length + 1} de
				medicion dentro del plano.
			</p>
			<Button
				variant="theme"
				className="bg-background px-20"
				onClick={() => {
					setOpen(false)
				}}
			>
				Listo
			</Button>
		</div>
	)
}

export function CeldasGrid({
	cantidad_filas,
	cantidad_columnas,
	celdasSeleccionadas,
	puntos,
	setPuntos,
}: {
	cantidad_filas: number
	cantidad_columnas: number
	celdasSeleccionadas: string[]
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
}) {
	const gridRef = useRef<HTMLButtonElement | null>(null)
	const getKey = (row: number, col: number) => `${row}-${col}`
	const cellSize = 60

	const setPuntoOnGrid = (e: React.MouseEvent<HTMLButtonElement>) => {
		const grid = gridRef.current
		if (!grid) return

		const rect = grid.getBoundingClientRect()

		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		// Add punto to puntos array
		const newPunto = {
			nombre: `punto-${puntos[0] === null ? 1 : puntos.length + 1}`,
			valor: 0,
			valorX: x,
			valorY: y,
			cumple: false,
		}
		if (puntos[0] === null) {
			setPuntos([newPunto])
		} else {
			setPuntos([...puntos, newPunto])
		}
	}

	return (
		<button
			className="grid relative cursor-pointer"
			onClick={setPuntoOnGrid}
			ref={gridRef}
			style={{
				gridTemplateColumns: `repeat(${cantidad_columnas}, ${cellSize}px)`,
			}}
		>
			{Array.from({ length: cantidad_filas }).map((_, row) =>
				Array.from({ length: cantidad_columnas }).map((_, col) => (
					<div
						key={col * row}
						style={{
							height: `${cellSize}px`,
							width: `${cellSize}px`,
						}}
						className={`border border-black/50 ${
							celdasSeleccionadas.includes(getKey(row, col)) && "bg-cyan-500/50"
						} flex items-center justify-center`}
					></div>
				))
			)}

			{puntos[0] !== null && (
				<div>
					{puntos.map((punto, index) => (
						<div
							key={punto?.nombre || index}
							className="absolute"
							style={{
								top: `${punto?.valorY ? punto.valorY - 14 : 0}px`,
								left: `${punto?.valorX ? punto.valorX - 14 : 0}px`,
							}}
						>
							<div className="relative cardBackground size-10 rounded-full justify-center">
								<Lightbulb className="absolute top-1 left-1 text-amber-400 rotate-180" />
								<span className="absolute bottom-1 right-1 text-sm text-amber-400 flex items-center justify-center">
									{index + 1}
								</span>
							</div>
						</div>
					))}
				</div>
			)}
		</button>
	)
}

const PuntosList = ({
	puntos,
	setPuntos,
}: {
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
}) => {
	return (
		<div className="flex flex-col gap-2">
			<p className="text-lg tracking-wide text-foreground/50 italic border-b border-foreground/50 px-1">
				puntos
			</p>
			{puntos[0] !== null &&
				puntos.map((punto, index) => (
					<div className="flex items-center gap-2" key={`punto-${index}`}>
						<label htmlFor={`punto-${index}`}>p{index + 1}</label>
						<input
							id={`punto-${index}`}
							type="number"
							className="px-2 py-1 bg-background rounded-sm  w-20 text-center"
							onChange={e => {
								const newPuntos = [...puntos]
								const actualPunto = newPuntos.find(
									p => p.nombre === punto?.nombre
								)
								if (actualPunto) {
									actualPunto.valor = Number(e.target.value)
									console.log(actualPunto)
								}
								setPuntos(newPuntos)
							}}
						/>
						<Trash2 size={16} className="text-red-700/50" />
					</div>
				))}
		</div>
	)
}
