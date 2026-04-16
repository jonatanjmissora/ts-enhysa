import { useRef } from "react"
import { CroquisType, defaultPunto, PuntoType } from "@/lib/types"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip"

export const CELDASIZE = "70px"

export default function CroquisGrid({
	croquis,
	puntos,
	setActualPunto,
	setOpenValue,
}: {
	croquis: CroquisType
	puntos: PuntoType[]
	setActualPunto: (punto: PuntoType) => void
	setOpenValue: (value: "new" | "edit" | false) => void
}) {
	const gridRef = useRef<HTMLButtonElement>(null)
	const totalCeldas = croquis.largo * croquis.ancho

	const setXYPoint = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gridRef.current) return
		const rect = gridRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		const newActualPunto = {
			...defaultPunto,
			nombre: `${x}-${y}`,
			valorX: x,
			valorY: y,
		}
		setActualPunto(newActualPunto)
		setOpenValue("new")
	}

	return (
		<div className="w-max h-max p-20 m-auto ">
			<button
				className="grid relative"
				ref={gridRef}
				style={{
					gridTemplateColumns: `repeat(${croquis.ancho}, minmax(0, 1fr))`,
					gridTemplateRows: `repeat(${croquis.largo}, minmax(0, 1fr))`,
				}}
				onClick={e => {
					setXYPoint(e)
				}}
			>
				<Cotas cantidadColumnas={croquis.ancho} cantidadFilas={croquis.largo} />
				{Array.from({ length: totalCeldas }).map((_, i) => {
					return (
						<div
							key={i}
							className={`border border-gray-400 size-[70px] ${croquis.celdasSeleccionadas.includes(i) ? " bg-blue-500" : ""}`}
						/>
					)
				})}
				{puntos?.map((punto, index) => (
					<Punto
						key={punto.valorX - punto.valorY}
						punto={punto}
						index={index}
						onClick={() => {
							setActualPunto(punto)
							setOpenValue("edit")
						}}
					/>
				))}
			</button>
		</div>
	)
}

const Punto = ({
	punto,
	index,
	onClick,
}: {
	punto: PuntoType
	index: number
	onClick?: (punto: PuntoType) => void
}) => {
	return (
		<button
			className="absolute punto cursor-pointer"
			style={{
				top: `${punto?.valorY ? punto.valorY - 18 : 0}px`,
				left: `${punto?.valorX ? punto.valorX - 18 : 0}px`,
			}}
			onClick={e => {
				e.stopPropagation() // 🔥 clave
				onClick?.(punto)
			}}
		>
			<Tooltip>
				<TooltipTrigger asChild>
					<div
						className={`cardBackground bg-amber-600 ring ring-black/20 size-10 rounded-lg justify-center`}
					>
						<span className="italic">{punto.valor}</span>
					</div>
				</TooltipTrigger>
				<TooltipContent>
					<div className="flex flex-col gap-1 text-base">
						<p>punto-{index + 1}</p>
					</div>
				</TooltipContent>
			</Tooltip>
		</button>
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
