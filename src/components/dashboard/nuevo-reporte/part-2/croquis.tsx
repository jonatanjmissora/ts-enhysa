import { useEffect, useRef, useState } from "react"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
} from "@/components/ui/alert-dialog"
import {
	Lightbulb,
	MousePointer,
	Paintbrush,
	RulerDimensionLine,
	ThumbsUp,
} from "lucide-react"
import { toast } from "sonner"
import { getMinimoMedicionesFrom } from "@/lib/utils"

export type PuntosType = {
	nombre: string
	valor: number
	valorX: number
	valorY: number
	cumple: boolean
}

export default function CroquisComponent({
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
	celdasSeleccionadas: number[]
	setCeldasSeleccionadas: (celdas: number[]) => void
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
}) {
	const totalCeldas = cantidadColumnas * cantidadFilas
	const cantidadMedicionesMinimas = getMinimoMedicionesFrom(
		cantidadFilas,
		cantidadColumnas,
		cantidadAltura
	)

	return (
		<article className="cardAccent flex-col p-10 px-14 gap-6 flex-1">
			<div className="flex w-full items-center border-b border-foreground/20">
				<div className="flex items-center gap-3 flex-1">
					<div className="bg-purple-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<RulerDimensionLine className="size-6" />
					</div>
					<span className="w-full sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2">
						Croquis del plano
					</span>
				</div>
				<p className="flex-1 text-right text-sm text-foreground/70 py-1">
					{nombre || "Depósito"}
				</p>
			</div>
			<div className="flex flex-col gap-4 sm:w-[440px] 2xl:w-[600px]">
				<div className="min-h-[400px] h-max w-full overflow-auto bg-background shadow rounded-lg ring ring-foreground/5 py-10  relative">
					<span className="text-amber-500/50 absolute bottom-2 right-2">
						Faltan tomar un mínimo de{" "}
						{cantidadMedicionesMinimas - puntos.length} medición(es)
					</span>
					<div className="w-max h-max p-20 m-auto ">
						<CroquisGrid
							cantidadFilas={cantidadFilas}
							cantidadColumnas={cantidadColumnas}
							celdasSeleccionadas={celdasSeleccionadas}
							puntos={puntos || []}
						/>
					</div>
				</div>

				<div className="flex gap-4 items-center w-full">
					<div className="flex-1">
						{totalCeldas === 0 ? (
							<button
								className="cardBackground w-full py-3  sm:text-base 2xl:text-lg cursor-pointer hover:bg-background/75 text-center"
								onClick={() =>
									toast.warning("Establece las medidas del plano primero.")
								}
							>
								<span className="flex items-center gap-2 w-full justify-center">
									Dibujar Croquis <Paintbrush size={16} />
								</span>
							</button>
						) : (
							<AlertPaintCroquis
								cantidadFilas={cantidadFilas}
								cantidadColumnas={cantidadColumnas}
								celdasSeleccionadas={celdasSeleccionadas}
								setCeldasSeleccionadas={setCeldasSeleccionadas}
							/>
						)}
					</div>
					<div className="flex-1">
						{celdasSeleccionadas.length === 0 ? (
							<button
								className="cardBackground w-full py-3  sm:text-base 2xl:text-lg cursor-pointer hover:bg-background/75 text-center"
								onClick={() => toast.warning("Dibuja el croquis primero.")}
							>
								<span className="flex items-center gap-2 w-full justify-center">
									Colocar Puntos <MousePointer size={16} />
								</span>
							</button>
						) : (
							<AlertPointsCroquis
								cantidadFilas={cantidadFilas}
								cantidadColumnas={cantidadColumnas}
								cantidadMedicionesMinimas={cantidadMedicionesMinimas}
								celdasSeleccionadas={celdasSeleccionadas}
								puntos={puntos}
								setPuntos={setPuntos}
							/>
						)}
					</div>
				</div>
			</div>
		</article>
	)
}

function CroquisGrid({
	cantidadFilas,
	cantidadColumnas,
	celdasSeleccionadas,
	puntos,
}: {
	cantidadFilas: number
	cantidadColumnas: number
	celdasSeleccionadas: number[]
	puntos: PuntosType[]
}) {
	const totalCeldas = cantidadColumnas * cantidadFilas
	return (
		<div
			className="grid relative"
			style={{
				gridTemplateColumns: `repeat(${cantidadColumnas}, minmax(0, 1fr))`,
				gridTemplateRows: `repeat(${cantidadFilas}, minmax(0, 1fr))`,
			}}
		>
			{totalCeldas !== 0 && (
				<Cotas
					cantidadColumnas={cantidadColumnas}
					cantidadFilas={cantidadFilas}
				/>
			)}
			{Array.from({ length: totalCeldas }).map((_, i) => {
				return (
					<div
						key={Math.random()}
						className={`border border-gray-400 size-20 ${celdasSeleccionadas.includes(i) ? "bg-blue-500" : ""}`}
					/>
				)
			})}
			{puntos?.map((punto, index) => (
				<Punto key={punto.nombre ?? index} punto={punto} index={index} />
			))}
		</div>
	)
}

function AlertPaintCroquis({
	cantidadFilas,
	cantidadColumnas,
	celdasSeleccionadas,
	setCeldasSeleccionadas,
}: {
	cantidadFilas: number
	cantidadColumnas: number
	celdasSeleccionadas: number[]
	setCeldasSeleccionadas: (value: number[]) => void
}) {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<button className="cardBackground w-full py-3  sm:text-base 2xl:text-lg cursor-pointer hover:bg-background/75 text-center">
					{celdasSeleccionadas.length === 0 ? (
						<span className="flex items-center gap-2 w-full justify-center">
							Dibujar Croquis <Paintbrush size={16} />
						</span>
					) : (
						<span className="flex items-center gap-2 w-full justify-center">
							Modificar Croquis <Paintbrush size={16} />
						</span>
					)}
				</button>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-30 px-40">
				<CroquisGridToPaint
					cantidadFilas={cantidadFilas}
					cantidadColumnas={cantidadColumnas}
					celdasSeleccionadas={celdasSeleccionadas}
					setCeldasSeleccionadas={setCeldasSeleccionadas}
					setOpen={setOpen}
				/>
			</AlertDialogContent>
		</AlertDialog>
	)
}

function CroquisGridToPaint({
	cantidadFilas,
	cantidadColumnas,
	celdasSeleccionadas,
	setCeldasSeleccionadas,
	setOpen,
}: {
	cantidadFilas: number
	cantidadColumnas: number
	celdasSeleccionadas: number[]
	setCeldasSeleccionadas: (value: number[]) => void
	setOpen: (value: boolean) => void
}) {
	const totalCeldas = cantidadColumnas * cantidadFilas
	const [isMouseDown, setIsMouseDown] = useState(false)
	const agregarCelda = (index: number) => {
		if (celdasSeleccionadas.includes(index)) {
			setCeldasSeleccionadas(
				celdasSeleccionadas.filter(celda => celda !== index)
			)
		} else {
			setCeldasSeleccionadas([...celdasSeleccionadas, index])
		}
	}
	useEffect(() => {
		const handleMouseUp = () => setIsMouseDown(false)

		window.addEventListener("mouseup", handleMouseUp)
		return () => window.removeEventListener("mouseup", handleMouseUp)
	}, [])

	return (
		<>
			<div className="max-h-[500px] h-max sm:w-[600px] 2xl:w-[800px] overflow-auto bg-accent shadow rounded-lg ring ring-foreground/10">
				<div className="w-max h-max p-20 mx-auto">
					<div
						className="grid relative"
						style={{
							gridTemplateColumns: `repeat(${cantidadColumnas}, minmax(0, 1fr))`,
							gridTemplateRows: `repeat(${cantidadFilas}, minmax(0, 1fr))`,
						}}
					>
						<Cotas
							cantidadColumnas={cantidadColumnas}
							cantidadFilas={cantidadFilas}
						/>
						{Array.from({ length: totalCeldas }).map((_, index) => {
							return (
								<button
									key={Math.random()}
									onMouseDown={() => {
										setIsMouseDown(true)
										agregarCelda(index)
									}}
									onMouseEnter={() => {
										if (isMouseDown) {
											agregarCelda(index)
										}
									}}
									className={`border border-gray-400 size-20 cursor-pointer ${celdasSeleccionadas.includes(index) ? "bg-blue-500" : ""}`}
								/>
							)
						})}
					</div>
				</div>
			</div>
			<button
				onClick={() => setOpen(false)}
				className="cardBackground px-4 py-3 cursor-pointer w-1/2 mx-auto justify-center tracking-widest font-semibold gap-4 mt-10"
			>
				Listo
				<ThumbsUp size={16} />
			</button>
		</>
	)
}

function AlertPointsCroquis({
	cantidadFilas,
	cantidadColumnas,
	celdasSeleccionadas,
	cantidadMedicionesMinimas,
	puntos,
	setPuntos,
}: {
	cantidadFilas: number
	cantidadColumnas: number
	cantidadMedicionesMinimas: number
	celdasSeleccionadas: number[]
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
}) {
	const [open, setOpen] = useState(false)
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<button className="cardBackground w-full py-3  sm:text-base 2xl:text-lg cursor-pointer hover:bg-background/75 text-center">
					<span className="flex items-center gap-2 w-full justify-center">
						Colocar Puntos <MousePointer size={16} />
					</span>
				</button>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-30 px-40">
				<CroquisGridToPoint
					cantidadFilas={cantidadFilas}
					cantidadColumnas={cantidadColumnas}
					cantidadMedicionesMinimas={cantidadMedicionesMinimas}
					celdasSeleccionadas={celdasSeleccionadas}
					setOpen={setOpen}
					puntos={puntos}
					setPuntos={setPuntos}
				/>
			</AlertDialogContent>
		</AlertDialog>
	)
}

function CroquisGridToPoint({
	cantidadFilas,
	cantidadColumnas,
	cantidadMedicionesMinimas,
	celdasSeleccionadas,
	setOpen,
	puntos,
	setPuntos,
}: {
	cantidadFilas: number
	cantidadColumnas: number
	cantidadMedicionesMinimas: number
	celdasSeleccionadas: number[]
	setOpen: (value: boolean) => void
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
}) {
	const gridRef = useRef<HTMLButtonElement>(null)
	const totalCeldas = cantidadFilas * cantidadColumnas
	const setXYPoint = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gridRef.current) return
		const rect = gridRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		// Add punto to puntos array
		const newPunto = {
			nombre: `punto-${puntos === null ? 1 : puntos.length + 1}`,
			valor: 0,
			valorX: x,
			valorY: y,
			cumple: false,
		}
		if (!puntos) {
			setPuntos([newPunto])
		} else {
			setPuntos([...puntos, newPunto])
		}
	}
	return (
		<>
			<div className="max-h-[500px] h-max sm:w-[600px] 2xl:w-[800px] overflow-auto bg-accent shadow rounded-lg ring ring-foreground/10">
				<div className="w-max h-max p-20 mx-auto relative">
					<span className="text-amber-500/50 absolute bottom-2 right-2">
						Faltan tomar un mínimo de{" "}
						{cantidadMedicionesMinimas - puntos.length} medición(es)
					</span>
					<button
						className="grid relative cursor-pointer"
						ref={gridRef}
						style={{
							gridTemplateColumns: `repeat(${cantidadColumnas}, minmax(0, 1fr))`,
							gridTemplateRows: `repeat(${cantidadFilas}, minmax(0, 1fr))`,
						}}
						onClick={e => {
							setXYPoint(e)
						}}
					>
						<Cotas
							cantidadColumnas={cantidadColumnas}
							cantidadFilas={cantidadFilas}
						/>
						{Array.from({ length: totalCeldas }).map((_, i) => {
							return (
								<div
									key={Math.random()}
									className={`border border-gray-400 size-20 ${celdasSeleccionadas.includes(i) ? "bg-blue-500" : ""}`}
								/>
							)
						})}
						{puntos?.map((punto, index) => (
							<Punto key={punto.nombre ?? index} punto={punto} index={index} />
						))}
					</button>
				</div>
			</div>
			<button
				onClick={() => setOpen(false)}
				className="cardBackground px-4 py-3 cursor-pointer w-1/2 mx-auto justify-center tracking-widest font-semibold gap-4 mt-10"
			>
				Listo
				<ThumbsUp size={16} />
			</button>
		</>
	)
}

const Punto = ({ punto, index }: { punto: PuntosType; index: number }) => {
	return (
		<div
			className="absolute"
			style={{
				top: `${punto?.valorY ? punto.valorY - 14 : 0}px`,
				left: `${punto?.valorX ? punto.valorX - 14 : 0}px`,
			}}
		>
			<div className="relative cardBackground size-10 rounded-full justify-center">
				<Lightbulb className="size-6 absolute top-1 left-1 text-amber-400 rotate-180" />
				<span className="absolute bottom-1 w-4 right-1 text-sm text-amber-400 flex items-center justify-center">
					{index + 1}
				</span>
			</div>
		</div>
	)
}

function Cotas({
	cantidadColumnas,
	cantidadFilas,
}: {
	cantidadColumnas: number
	cantidadFilas: number
}) {
	return (
		<>
			<span className="absolute -top-14 left-0 right-0 border-b-[1.5px] border-foreground/30 flex justify-center py-1 text-semibold tracking-widest italic text-foreground/50">
				Ancho {cantidadColumnas}m
			</span>
			<div className="absolute top-0 bottom-0 -left-18 border-r-[1.5px] border-foreground/30 flex flex-col justify-center items-center px-1 text-semibold tracking-widest italic text-foreground/50">
				Largo <span>{cantidadFilas}m</span>
			</div>
		</>
	)
}
