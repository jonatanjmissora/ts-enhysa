import { Save } from "lucide-react"
import { useEffect, useState } from "react"
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function NewReportPart2({
	actualStep,
	setActualStep,
}: {
	actualStep: number
	setActualStep: (step: number) => void
}) {
	const [cantidadFilas, setCantidadFilas] = useState<number>(0)
	const [cantidadColumnas, setCantidadColumnas] = useState<number>(0)

	return (
		<main
			className={`${actualStep === 2 ? "flex-1" : "hidden"} p-20 sm:py-10 2xl:py-20 flex flex-col sm:gap-6 2xl:gap-10 justify-center`}
		>
			<p className="text-xl font-semibold tracking-wider">
				Calculo de Indice de Local ( RI )
			</p>

			<div className="flex items-strech gap-10">
				<div className="flex-1 bg-accent rounded-xl p-6 flex flex-col justify-center items-center gap-4 shadow-xl ring ring-foreground/20">
					<span className="text-xl font-semibold tracking-wide py-4">
						Dimensiones del Local (M)
					</span>
					<div className="flex flex-col gap-2">
						<div className="flex items-center justify-center gap-6">
							<div className="font-semibold bg-blue-500/70 rounded-full py-1 px-3">
								L
							</div>
							<span>Largo (m)</span>
							<input
								type="number"
								className="w-80 bg-background py-1 px-4 rounded-lg text-center"
								placeholder="Ej. 10.00"
								value={cantidadFilas}
								onChange={e => setCantidadFilas(Number(e.target.value))}
							/>
						</div>
						<div className="flex items-center justify-center gap-6">
							<div className="font-semibold bg-blue-500/70 rounded-full py-1 px-3">
								w
							</div>
							<span>Ancho (m)</span>
							<input
								type="number"
								className="w-80 bg-background py-1 px-4 rounded-lg text-center"
								placeholder="Ej. 8.00"
								value={cantidadColumnas}
								onChange={e => setCantidadColumnas(Number(e.target.value))}
							/>
						</div>
						<div className="flex items-center justify-center gap-6">
							<div className="font-semibold bg-blue-500/70 rounded-full py-1 px-3">
								H
							</div>
							<span>Altura (m)</span>
							<input
								type="number"
								className="w-80 bg-background py-1 px-4 rounded-lg text-center"
								placeholder="Ej. 2,50"
							/>
						</div>
					</div>
				</div>

				<div className="flex-1 bg-accent rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-xl ring ring-foreground/20">
					<div className="relative w-90 h-60 bg-foreground/60 cursor-pointer">
						<img
							src="/plano.webp"
							alt="plano"
							className="absolute inset-0 z-1 h-full w-full object-cover opacity-40"
						/>
						<CroquisAlertDialog
							cantidad_filas={cantidadFilas}
							cantidad_columnas={cantidadColumnas}
						/>
					</div>
					<p className="italic text-center tracking-wider text-foreground/50 sm:text-sm 2xl:text-xl text-pretty px-6">
						El indice del Local (RI) es un valor numerico que representa la
						geometria del recinto para calculos luminotexnicos.
					</p>
				</div>
			</div>

			<div className="flex items-strech gap-10">
				<div className="flex-1 bg-blue-700/30 rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-xl ring ring-foreground/20">
					<p className="text-xl font-semibold tracking-wide">
						Resultado RI (Redondeado)
					</p>
					<p className="text-4xl font-bold tracking-wide">
						2.00 <span className="text-base">INDICE</span>
					</p>
					<div className="h-px w-full bg-background"></div>
					<div className="flex items-center justify-center gap-12">
						<span>Valor calculado : 1.78</span>
						<button className="text-sm bg-background text-foreground rounded px-2 py-1 hover:bg-background/80 cursor-pointer">
							calc applied
						</button>
					</div>
				</div>

				<div className="flex-1 bg-orange-700/20 rounded-xl p-4 flex flex-col items-center justify-center gap-12 border-dotted border-2 border-foreground/20">
					<p className="italic text-center tracking-wider text-foreground/50 sm:text-lg 2xl:text-xl text-pretty">
						FORMULA APLICADA
					</p>
					<p className="sm:text-2xl 2xl:text-4xl font-semibold">
						RI = (L x W) / (H x (L + W))
					</p>
					<p className="sm:text-sm 2xl:text-base tracking-wider text-foreground/50">
						L = Longitud W = Ancho H = Altura
					</p>
				</div>
			</div>
			<button
				onClick={() => setActualStep(3)}
				type="button"
				className="flex items-center gap-4 themeBtnAccent justify-center rounded-xl shadow-xl text-lg text-foreground tracking-wide px-6 py-4 cursor-pointer m-0"
			>
				<Save className="size-6" />
				Guardar y Continuar
			</button>
		</main>
	)
}

export function CroquisAlertDialog({
	cantidad_filas,
	cantidad_columnas,
}: {
	cantidad_filas: number
	cantidad_columnas: number
}) {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<span className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent p-4 py-2 text-center text-xl">
					Croquis del Plano
				</span>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-30 px-40">
				<Croquis
					cantidad_filas={cantidad_filas}
					cantidad_columnas={cantidad_columnas}
					setOpen={setOpen}
				/>
			</AlertDialogContent>
		</AlertDialog>
	)
}

const Croquis = ({
	cantidad_filas,
	cantidad_columnas,
	setOpen,
}: {
	cantidad_filas: number
	cantidad_columnas: number
	setOpen: (value: boolean) => void
}) => {
	const [celdasSeleccionadas, setCeldasSeleccionadas] = useState<string[]>([])
	const [isMouseDown, setIsMouseDown] = useState(false)
	const getKey = (row: number, col: number) => `${row}-${col}`

	const agregarCelda = (row: number, col: number) => {
		const key = getKey(row, col)

		setCeldasSeleccionadas(prev => {
			if (prev.includes(key)) return prev
			return [...prev, key]
		})
	}
	useEffect(() => {
		const handleMouseUp = () => setIsMouseDown(false)

		window.addEventListener("mouseup", handleMouseUp)
		return () => window.removeEventListener("mouseup", handleMouseUp)
	}, [])
	const [division, setDivision] = useState<0.5 | 1 | 2>(1)
	const modificarDivision = (signo: "+" | "-") => {
		if (signo === "+") {
			if (division === 1) {
				setDivision(0.5)
			} else {
				if (division === 0.5) return
				setDivision(1)
			}
		} else {
			if (division === 1) {
				setDivision(2)
			} else {
				if (division === 2) return
				setDivision(1)
			}
		}
	}

	return (
		<div className="flex flex-col gap-4 items-center justify-center">
			<div className="flex gap-6 items-end relative">
				<div className="border-4 border-foreground/50 relative w-max">
					<p className="absolute left-0 -top-20 border-b border-white py-1 text-center w-full my-4 text-foreground/50 tracking-widest">
						Largo {cantidad_columnas}m
					</p>
					<div className="absolute -left-30 top-0 h-full w-max px-2 border-r border-white py-1 text-center mx-4 flex items-center text-foreground/50  tracking-widest">
						<div className="flex flex-col">
							<span>Ancho</span>
							<span>{cantidad_filas}m</span>
						</div>
					</div>
					<div className="flex flex-col">
						{Array.from({ length: cantidad_filas }).map((_, row) => (
							<div key={row} className="flex">
								{Array.from({ length: cantidad_columnas }).map((_, col) => (
									<button
										key={col}
										onMouseDown={() => {
											setIsMouseDown(true)
											agregarCelda(row, col)
										}}
										onMouseEnter={() => {
											if (isMouseDown) {
												agregarCelda(row, col)
											}
										}}
										className={`w-20 h-20 border ${
											celdasSeleccionadas.includes(getKey(row, col))
												? "bg-cyan-500"
												: "border-black"
										} flex items-center justify-center`}
									>
										{row + 1},{col + 1}
									</button>
								))}
							</div>
						))}
					</div>
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
				onClick={() => setOpen(false)}
			>
				Listo
			</Button>
		</div>
	)
}
