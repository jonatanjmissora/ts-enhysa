import type { PuntosType } from "@/routes/_protected/new-report"
import CroquisAlertDialog from "./croquis-alert-dialog"
import { Database, Lightbulb, RulerDimensionLine, Trash2 } from "lucide-react"
import PuntosAlertDialog from "./puntos-alert-dialog"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip"

import { useState } from "react"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function Croquis({
	nombre,
	cantidadFilas,
	cantidadColumnas,
	cantidadAltura,
	celdasSeleccionadas,
	setCeldasSeleccionadas,
	puntos,
	setPuntos,
}: {
	nombre: string
	cantidadFilas: number
	cantidadColumnas: number
	cantidadAltura: number
	celdasSeleccionadas: string[]
	setCeldasSeleccionadas: (value: string[]) => void
	puntos: PuntosType[] | null
	setPuntos: (puntos: PuntosType[] | null) => void
}) {
	const valoresValidos =
		cantidadFilas !== 0 && cantidadColumnas !== 0 && cantidadAltura !== 0
	const [isCroquis, setIsCroquis] = useState<boolean>(false)

	return (
		<div className="cardAccent flex-col p-10 px-14 gap-6 flex-1">
			<div className="flex w-full items-end border-b border-foreground/20">
				<div className="flex items-center gap-3 w-full">
					<div className="bg-purple-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<RulerDimensionLine className="size-6" />
					</div>
					<span className="w-full sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2">
						Croquis del plano
					</span>
				</div>
				<p className="ml-auto text-sm text-foreground/70 py-1">
					{nombre || "Depósito"}
				</p>
			</div>

			<div className="flex flex-col w-full">
				<div className="flex justify-between items-center w-full">
					<div className="w-full flex items-center gap-2">
						<CroquisAlertDialog
							cantidad_filas={cantidadFilas}
							cantidad_columnas={cantidadColumnas}
							celdasSeleccionadas={celdasSeleccionadas}
							setCeldasSeleccionadas={setCeldasSeleccionadas}
							setIsCroquis={setIsCroquis}
						/>
					</div>
					<PuntosAlertDialog
						cantidad_filas={cantidadFilas}
						cantidad_columnas={cantidadColumnas}
						celdasSeleccionadas={celdasSeleccionadas}
						puntos={puntos}
						setPuntos={setPuntos}
						isCroquis={isCroquis}
					/>
				</div>

				<div className="relative h-120 w-full flex items-center justify-center bg-white/5 p-10">
					{!valoresValidos ? (
						<div>
							<span className="bg-background p-4 rounded/xl shadow-xl text-pretty">
								Aqui se coloca el croquis del plano a medir
							</span>
							<img
								src="/plano.webp"
								alt="plano"
								className="absolute inset-0 z-1 h-full w-full object-cover opacity-25"
							/>
						</div>
					) : (
						<div className="relative">
							<p className="absolute left-6 right-0 -top-13 border-b border-foreground/40 py-1 text-center my-4 text-foreground/40 tracking-widest">
								Ancho {cantidadColumnas}m
							</p>
							<div className="absolute -left-20 top-6 bottom-10 px-2 border-r border-foreground/40 py-1 text-center mx-4 flex items-center text-foreground/40  tracking-widest">
								<div className="flex flex-col">
									<span>Largo</span>
									<span>{cantidadFilas}m</span>
								</div>
							</div>
							<div className="sm:w-[20dvw] 2xl:w-[25dvw] h-100 overflow-auto flex items-center justify-center">
								<CeldasGridWithPuntos
									cantidad_filas={cantidadFilas}
									cantidad_columnas={cantidadColumnas}
									celdasSeleccionadas={celdasSeleccionadas}
									puntos={puntos}
								/>
							</div>
						</div>
					)}
				</div>
			</div>

			<p className="sm:w-full 2xl:w-3/4 py-6 mx-auto italic text-center tracking-wider text-foreground/50 sm:text-sm 2xl:text-base">
				El indice del Local (RI) es un valor numerico que representa la
				geometria del recinto para calculos luminotécnicos.
			</p>

			<div className="flex flex-col justify-between items-center gap-3 w-full">
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

				<PuntosAlertDialog
					cantidad_filas={cantidadFilas}
					cantidad_columnas={cantidadColumnas}
					celdasSeleccionadas={celdasSeleccionadas}
					puntos={puntos}
					setPuntos={setPuntos}
					isCroquis={isCroquis}
				/>
			</div>

			<div className="flex flex-col justify-between items-center gap-6 w-full">
				<div className="w-full grid grid-cols-[1fr_1fr_0.5fr] gap-4 place-items-center sm:text-base 2xl:text-lg sm:font-semibold 2xl:font-bold italic tracking-wider border-b border-foreground/20 pb-2">
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
		</div>
	)
}

export function CeldasGridWithPuntos({
	cantidad_filas,
	cantidad_columnas,
	celdasSeleccionadas,
	puntos,
}: {
	cantidad_filas: number
	cantidad_columnas: number
	celdasSeleccionadas: string[]
	puntos: PuntosType[] | null
}) {
	const getKey = (row: number, col: number) => `${row}-${col}`
	const cellSize = 40
	return (
		<div
			className="grid relative"
			style={{
				gridTemplateColumns: `repeat(${cantidad_columnas}, ${cellSize}px)`,
			}}
		>
			{Array.from({ length: cantidad_filas }).map((_, row) =>
				Array.from({ length: cantidad_columnas }).map((_, col) => (
					<div
						key={Math.random()}
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
			{puntos?.map((punto, index) => (
				<div
					key={Math.random()}
					className="absolute"
					style={{
						top: `${punto?.valorY ? punto.valorY - 14 : 0}px`,
						left: `${punto?.valorX ? punto.valorX - 14 : 0}px`,
					}}
				>
					<Tooltip>
						<TooltipTrigger asChild>
							<div className="relative cardBackground size-10 rounded-full justify-center">
								<Lightbulb className="absolute top-1 left-1 text-amber-400 rotate-180" />
								<span className="absolute bottom-1 right-1 text-sm text-amber-400 flex items-center justify-center">
									{index + 1}
								</span>
							</div>
						</TooltipTrigger>
						<TooltipContent>
							<div className="flex flex-col gap-1">
								<p>nombre: {punto?.nombre}</p>
								<p>valor: {punto?.valor}</p>
							</div>
						</TooltipContent>
					</Tooltip>
				</div>
			))}
		</div>
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
	puntos: PuntosType[] | null
	setPuntos: (puntos: PuntosType[] | null) => void
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
	puntos: PuntosType[] | null
	setPuntos: (puntos: PuntosType[] | null) => void
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
