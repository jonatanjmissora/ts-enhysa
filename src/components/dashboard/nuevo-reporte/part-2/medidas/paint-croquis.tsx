import { Paintbrush, ThumbsUp } from "lucide-react"
import { useEffect, useState } from "react"
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { CroquisType } from "@/lib/types"

export function AlertPaintCroquis({
	croquis,
	setCroquis,
}: {
	croquis: CroquisType
	setCroquis: (croquis: CroquisType) => void
}) {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<button className="cardBackground w-full py-3  sm:text-base 2xl:text-lg cursor-pointer hover:bg-background/75 text-center">
					{croquis.celdasSeleccionadas.length === 0 ? (
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
				<AlertDialogTitle></AlertDialogTitle>
				<CroquisGridToPaint
					croquis={croquis}
					setCroquis={setCroquis}
					setOpen={setOpen}
				/>
			</AlertDialogContent>
		</AlertDialog>
	)
}

function CroquisGridToPaint({
	croquis,
	setCroquis,
	setOpen,
}: {
	croquis: CroquisType
	setCroquis: (croquis: CroquisType) => void
	setOpen: (value: boolean) => void
}) {
	const totalCeldas = croquis.ancho * croquis.largo
	const [isMouseDown, setIsMouseDown] = useState(false)
	const agregarCelda = (index: number) => {
		if (croquis.celdasSeleccionadas.includes(index)) {
			setCroquis({
				...croquis,
				celdasSeleccionadas: croquis.celdasSeleccionadas.filter(
					celda => celda !== index
				),
			})
		} else {
			setCroquis({
				...croquis,
				celdasSeleccionadas: [...croquis.celdasSeleccionadas, index],
			})
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
							gridTemplateColumns: `repeat(${croquis.ancho}, minmax(0, 1fr))`,
							gridTemplateRows: `repeat(${croquis.largo}, minmax(0, 1fr))`,
						}}
					>
						<Cotas
							cantidadColumnas={croquis.ancho}
							cantidadFilas={croquis.largo}
						/>
						{Array.from({ length: totalCeldas }).map((_, index) => {
							return (
								<button
									key={index}
									onMouseDown={() => {
										setIsMouseDown(true)
										agregarCelda(index)
									}}
									onMouseEnter={() => {
										if (isMouseDown) {
											agregarCelda(index)
										}
									}}
									className={`border border-gray-400 size-20 cursor-pointer ${croquis.celdasSeleccionadas.includes(index) ? "bg-blue-500" : ""}`}
								/>
							)
						})}
					</div>
				</div>
			</div>
			<button
				onClick={() => {
					window.scrollTo({
						top: 100,
						behavior: "smooth", // Use 'auto' for an instant jump
					})
					setOpen(false)
				}}
				className="cardBackground px-4 py-3 cursor-pointer w-1/2 mx-auto justify-center tracking-widest font-semibold gap-4 mt-10"
			>
				Listo
				<ThumbsUp size={16} />
			</button>
		</>
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
