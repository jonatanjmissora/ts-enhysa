import { useState } from "react"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function CroquisAlertDialog({
	cantidad_filas,
	cantidad_columnas,
	celdasSeleccionadas,
	setCeldasSeleccionadas,
	setIsCroquis,
}: {
	cantidad_filas: number
	cantidad_columnas: number
	celdasSeleccionadas: string[]
	setCeldasSeleccionadas: (value: string[]) => void
	setIsCroquis: (value: boolean) => void
}) {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<button className="w-full py-1 bg-background border border-foreground/20 text-center sm:text-base 2xl:text-lg cursor-pointer hover:bg-background/75">
					{celdasSeleccionadas.length === 0
						? "Dibujar Croquis"
						: "Modificar Croquis"}
				</button>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-30 px-40">
				<CroquisElement
					cantidad_filas={cantidad_filas}
					cantidad_columnas={cantidad_columnas}
					setOpen={setOpen}
					celdasSeleccionadas={celdasSeleccionadas}
					setCeldasSeleccionadas={setCeldasSeleccionadas}
					setIsCroquis={setIsCroquis}
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
	setCeldasSeleccionadas,
	setIsCroquis,
}: {
	cantidad_filas: number
	cantidad_columnas: number
	setOpen: (value: boolean) => void
	celdasSeleccionadas: string[]
	setCeldasSeleccionadas: (value: string[]) => void
	setIsCroquis: (value: boolean) => void
}) => {
	const [division, setDivision] = useState<0.5 | 1>(1)
	const modificarDivision = (signo: "+" | "-") => {
		if (division === 1 && signo === "+") {
			setDivision(0.5)
			setCeldasSeleccionadas([])
		} else if (division === 0.5 && signo === "-") {
			setDivision(1)
			setCeldasSeleccionadas([])
		}
	}

	return (
		<div className="flex flex-col gap-4 items-center justify-center">
			<div className="flex gap-6 items-end relative">
				<div className="border-4 border-foreground/50 relative w-full">
					<p className="absolute left-0 -top-20 border-b border-white py-1 text-center w-full my-4 text-foreground/50 tracking-widest">
						Ancho {cantidad_columnas}m
					</p>
					<div className="absolute -left-30 top-0 h-full w-max px-2 border-r border-white py-1 text-center mx-4 flex items-center text-foreground/50  tracking-widest">
						<div className="flex flex-col">
							<span>Largo</span>
							<span>{cantidad_filas}m</span>
						</div>
					</div>
					<CeldasGrid
						activeCroquis={true}
						cantidad_filas={cantidad_filas}
						cantidad_columnas={cantidad_columnas}
						setCeldasSeleccionadas={setCeldasSeleccionadas}
						celdasSeleccionadas={celdasSeleccionadas}
						division={division}
						setIsCroquis={setIsCroquis}
					/>
				</div>
				<div className="absolute bottom-0 -right-24 flex flex-col gap-2">
					<span className="text-xs tracking-wide text-foreground/50">
						division (m)
					</span>
					<div className="text-xs size-15 border border-black flex items-center justify-center text-foreground/50">
						{division} x {division}
					</div>
					<button
						className="cardBackground px-1 py-0  text-2xl font-bold flex items-center justify-center cursor-pointer"
						onClick={() => modificarDivision("+")}
					>
						+
					</button>
					<button
						className="cardBackground px-1 py-0  text-2xl font-bold flex items-center justify-center cursor-pointer"
						onClick={() => modificarDivision("-")}
					>
						-
					</button>
				</div>
			</div>
			<p>Seleccione las cuadriculas que mas se adapten al croquis del plano.</p>
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
	activeCroquis,
	cantidad_filas,
	cantidad_columnas,
	setCeldasSeleccionadas,
	celdasSeleccionadas,
	division,
	setIsCroquis,
}: {
	activeCroquis: boolean
	cantidad_filas: number
	cantidad_columnas: number
	setCeldasSeleccionadas: (value: string[]) => void
	celdasSeleccionadas: string[]
	division: 0.5 | 1
	setIsCroquis: (value: boolean) => void
}) {
	const [isMouseDown, setIsMouseDown] = useState(false)
	const getKey = (row: number, col: number) => `${row}-${col}`

	const agregarCelda = (row: number, col: number) => {
		const key = getKey(row, col)

		setCeldasSeleccionadas(prev => {
			if (prev.includes(key)) {
				if (prev[0] !== null) setIsCroquis(false)
				else setIsCroquis(true)
				return prev.filter(celda => celda !== key)
			}
			setIsCroquis(true)
			return [...prev, key]
		})
	}
	useEffect(() => {
		const handleMouseUp = () => setIsMouseDown(false)

		window.addEventListener("mouseup", handleMouseUp)
		return () => window.removeEventListener("mouseup", handleMouseUp)
	}, [])
	const cellSize = division ? 60 * division : 60
	const gridObj = {
		0.5: { columns: cantidad_columnas * 2, rows: cantidad_filas * 2 },
		1: { columns: cantidad_columnas, rows: cantidad_filas },
	}

	return (
		<div
			className="grid relative"
			style={{
				gridTemplateColumns: `repeat(${cantidad_columnas}, ${cellSize}px)`,
			}}
		>
			{Array.from({ length: gridObj[division].rows }).map((_, row) =>
				Array.from({ length: gridObj[division].columns }).map((_, col) =>
					activeCroquis ? (
						<button
							key={col * row}
							onMouseDown={() => {
								setIsMouseDown(true)
								agregarCelda(row, col)
							}}
							onMouseEnter={() => {
								if (isMouseDown) {
									agregarCelda(row, col)
								}
							}}
							style={{
								height: `${cellSize}px`,
								width: `${cellSize}px`,
							}}
							className={`border border-black/50 ${
								celdasSeleccionadas.includes(getKey(row, col)) &&
								"bg-cyan-500/50"
							} flex items-center justify-center`}
						></button>
					) : (
						<div
							key={col * row}
							style={{
								height: `${cellSize}px`,
								width: `${cellSize}px`,
							}}
							className={`border border-black/50 ${
								celdasSeleccionadas.includes(getKey(row, col)) &&
								"bg-cyan-500/50"
							} flex items-center justify-center`}
						></div>
					)
				)
			)}
		</div>
	)
}
