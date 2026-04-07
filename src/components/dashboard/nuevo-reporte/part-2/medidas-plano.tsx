import { Box, Info, X } from "lucide-react"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PuntosType } from "./croquis"

export default function MedidasPlano({
	nombre,
	setNombre,
	cantidadFilas,
	cantidadColumnas,
	cantidadAltura,
	setCantidadFilas,
	setCantidadColumnas,
	setCantidadAltura,
	setCeldasSeleccionadas,
	setPuntos,
}: {
	nombre: string
	setNombre: (nombre: string) => void
	cantidadFilas: number
	cantidadColumnas: number
	cantidadAltura: number
	setCantidadFilas: (value: number) => void
	setCantidadColumnas: (value: number) => void
	setCantidadAltura: (value: number) => void
	setCeldasSeleccionadas: (value: number[]) => void
	setPuntos: (puntos: PuntosType[]) => void
}) {
	const indiceDeLocal =
		(cantidadFilas * cantidadColumnas) /
		(cantidadAltura * (cantidadFilas + cantidadColumnas))

	const hayValores =
		cantidadFilas !== 0 && cantidadColumnas !== 0 && cantidadAltura !== 0
	const indiceRedondeo =
		Math.abs(indiceDeLocal % 1) > 0
			? Math.trunc(indiceDeLocal) + 1
			: Math.trunc(indiceDeLocal)
	const minimoNumeroCeldas =
		indiceRedondeo === 1
			? "entre 7 y 10"
			: indiceRedondeo === 2
				? "entre 13 y 20"
				: indiceRedondeo === 3
					? "entre 23 y 30"
					: "entre 30 y 40"
	console
	return (
		<div className="cardAccent flex-col p-10 px-14 gap-6">
			<div className="flex items-center w-full border-b border-foreground/20">
				<div className="flex items-center gap-3 flex-1">
					<div className="bg-blue-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<Box className="size-6" />
					</div>
					<span className="w-full sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2">
						Dimensiones
					</span>
				</div>
				<p className="flex-1 text-right text-sm text-foreground/70 py-1">
					{nombre || "Depósito"}
				</p>
			</div>
			<div className="flex flex-col gap-3 w-full mx-auto">
				<div className="flex gap-6">
					<div className="font-semibold bg-blue-500/70 rounded-full py-1 px-3 w-8 flex items-center justify-center">
						N
					</div>
					<span className="w-30">Nombre</span>
					<input
						type="text"
						className="w-40 bg-background py-1 px-4 rounded-lg text-center"
						placeholder="Ej. Depósito"
						value={nombre}
						onChange={e => {
							setNombre(e.target.value)
						}}
					/>
				</div>
				<div className="flex gap-6">
					<div className="font-semibold bg-blue-500/70 rounded-full py-1 px-3 w-8 flex items-center justify-center">
						L
					</div>
					<span className="w-30">Largo (m)</span>
					<input
						type="number"
						className="w-40 bg-background py-1 px-4 rounded-lg text-center"
						placeholder="Ej. 10.00"
						value={cantidadFilas === 0 ? "" : cantidadFilas}
						onChange={e => {
							setCantidadFilas(Number(e.target.value))
							setCeldasSeleccionadas([])
							setPuntos([])
						}}
					/>
				</div>
				<div className="flex items-center gap-6">
					<div className="font-semibold bg-blue-500/70 rounded-full py-1 px-3 w-8 flex items-center justify-center">
						w
					</div>
					<span className="w-30">Ancho (m)</span>
					<input
						type="number"
						className="w-40 bg-background py-1 px-4 rounded-lg text-center"
						placeholder="Ej. 8.00"
						value={cantidadColumnas === 0 ? "" : cantidadColumnas}
						onChange={e => {
							setCantidadColumnas(Number(e.target.value))
							setCeldasSeleccionadas([])
							setPuntos([])
						}}
					/>
				</div>
				<div className="flex items-center gap-6">
					<div className="font-semibold bg-blue-500/70 rounded-full py-1 px-3 w-8 flex items-center justify-center">
						H
					</div>
					<span className="w-30">Altura montaje (m)</span>
					<input
						type="number"
						className="w-40 bg-background py-1 px-4 rounded-lg text-center"
						placeholder="Ej. 2,50"
						value={cantidadAltura === 0 ? "" : cantidadAltura}
						onChange={e => {
							setCantidadAltura(Number(e.target.value))
							setCeldasSeleccionadas([])
						}}
					/>
				</div>
			</div>

			{hayValores && (
				<div className="flex flex-col gap-0 w-full p-6 rounded-lg cardBackground bg-background/75 items-start relative">
					<FormulaAlertDialog
						cantidadFilas={cantidadFilas}
						cantidadColumnas={cantidadColumnas}
						cantidadAltura={cantidadAltura}
						indiceDeLocal={indiceDeLocal}
						indiceRedondeo={indiceRedondeo}
						minimoNumeroCeldas={minimoNumeroCeldas}
					/>

					<div className="flex gap-2">
						<span className="text-2xl bg-teal-500/50 px-4 py-1 rounded-lg">
							{indiceRedondeo}
						</span>
						<span className="italic tracking-wilder text-foreground/50">
							Indice de local
						</span>
					</div>
					<div className="w-full flex gap-2 items-end justify-end">
						<span className="italic tracking-wilder text-foreground/50">
							Minimo numero de celdas
						</span>
						<span className="text-2xl bg-pink-500/50 px-4 py-1 rounded-lg">
							{indiceRedondeo >= 4 ? "36" : (indiceRedondeo + 2) ** 2}
						</span>
					</div>
				</div>
			)}
		</div>
	)
}

export function FormulaAlertDialog({
	cantidadFilas,
	cantidadColumnas,
	cantidadAltura,
	indiceDeLocal,
	indiceRedondeo,
	minimoNumeroCeldas,
}: {
	cantidadFilas: number
	cantidadColumnas: number
	cantidadAltura: number
	indiceDeLocal: number
	indiceRedondeo: number
	minimoNumeroCeldas: string
}) {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild className="hover:bg-accent/50 rounded-full">
				<Info
					size={14}
					className="absolute top-3 right-3 cursor-pointer text-foreground/50"
				/>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-20 bg-background/50 backdrop-blur-xl">
				<Button
					className="cursor-pointer absolute top-4 right-4"
					variant="ghost"
					onClick={() => setOpen(false)}
				>
					<X className="size-8" />
				</Button>
				<AlertDialogTitle className="text-center flex flex-col gap-6">
					<div className="flex gap-2 justify-center items-center">
						<span className="italic font-semibold text-lg tracking-widest">
							Indice del local ={" "}
						</span>
						<div className="flex flex-col">
							<span className="p-2 border-b border-foreground/50">
								{cantidadFilas} * {cantidadColumnas}
							</span>
							<span>
								{cantidadAltura} * ( {cantidadFilas} + {cantidadColumnas} )
							</span>
						</div>
						<span className="italic font-semibold text-lg tracking-widest">
							= {indiceDeLocal.toFixed(2)}
						</span>
					</div>
					<span className=" bg-teal-500/50 p-4 rounded-lg">
						Indice Redondeado (IR) = {indiceRedondeo}
					</span>
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center">
					<div className="flex flex-col gap-10">
						<div className="flex flex-col p-4 gap-2 items-center justify-center pt-6 text-sm bg-pink-500/50 rounded-lg">
							<span>Número mínimo de puntos de medición</span>
							<span>
								N = (IR + 2)² = {(indiceRedondeo + 2) ** 2} ={" "}
								{minimoNumeroCeldas}
							</span>
						</div>
						<span className="tracking-widest italic font semibold text-foreground/50 border-t border-foreground/10 pt-2 w-full text-right">
							Res. 84/2012 S.R.T.
						</span>
					</div>
				</AlertDialogDescription>
			</AlertDialogContent>
		</AlertDialog>
	)
}
