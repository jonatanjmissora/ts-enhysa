import { useRef } from "react"
import { Lightbulb } from "lucide-react"
import { CroquisType, PuntoType } from "@/lib/types"

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
	const celdasSize = 20

	const setXYPoint = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gridRef.current) return
		const rect = gridRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		const newActualPunto = {
			nombre: `${x}-${y}`,
			valor: 0,
			valorX: x,
			valorY: y,
			cumple: false,
			created: Date.now(),
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
							className={`border border-gray-400 size-${celdasSize} ${croquis.celdasSeleccionadas.includes(i) ? "bg-blue-500" : ""}`}
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
				top: `${punto?.valorY ? punto.valorY - 14 : 0}px`,
				left: `${punto?.valorX ? punto.valorX - 14 : 0}px`,
			}}
			onClick={e => {
				e.stopPropagation() // 🔥 clave
				onClick?.(punto)
			}}
		>
			<div className="relative cardBackground size-10 rounded-full justify-center">
				<Lightbulb className="size-6 absolute top-1 left-1 text-amber-400 rotate-180" />
				<span className="absolute bottom-1 w-4 right-1 text-sm text-amber-400 flex items-center justify-center">
					{index + 1}
				</span>
			</div>
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
