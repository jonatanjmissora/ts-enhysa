import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import { getHalfMedia } from "@/lib/utils"
import type { PuntosType } from "@/routes/_protected/new-report"
import { Lightbulb, RulerDimensionLine } from "lucide-react"

export default function NewReportPart3Plano({
	puntos,
	nombre,
	cantidadFilas,
	cantidadColumnas,
	celdasSeleccionadas,
}: {
	puntos: PuntosType[]
	nombre: string
	cantidadFilas: number
	cantidadColumnas: number
	celdasSeleccionadas: number[]
}) {
	return (
		<div className="flex-1 cardAccent flex flex-col gap-6 justify-center p-10 py-15">
			<div className="flex items-center w-full border-b border-foreground/20">
				<div className="flex items-center gap-3 flex-1">
					<div className="bg-purple-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<RulerDimensionLine className="size-6" />
					</div>
					<span className="w-full sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2">
						Plano
					</span>
				</div>
				<p className="flex-1 text-right text-sm text-foreground/70 py-1">
					{nombre || "Depósito"}
				</p>
			</div>
			<div className="flex-1 flex items-center">
				<CroquisGrid
					cantidadFilas={cantidadFilas}
					cantidadColumnas={cantidadColumnas}
					celdasSeleccionadas={celdasSeleccionadas}
					puntos={puntos}
				/>
			</div>
		</div>
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
	const halfMedia = getHalfMedia(puntos)
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
				<Punto
					key={punto.nombre ?? index}
					punto={punto}
					index={index}
					halfMedia={halfMedia}
				/>
			))}
		</div>
	)
}

const Punto = ({
	punto,
	index,
	halfMedia,
}: {
	punto: PuntosType
	index: number
	halfMedia: number
}) => {
	return (
		<div
			key={punto?.nombre || index}
			className="absolute"
			style={{
				top: `${punto?.valorY ? punto.valorY - 14 : 0}px`,
				left: `${punto?.valorX ? punto.valorX - 14 : 0}px`,
			}}
		>
			<Tooltip>
				<TooltipTrigger asChild>
					<div
						className={`relative cardBackground size-10 rounded-full justify-center ${
							punto?.valor >= halfMedia ? "text-green-600" : "text-red-600"
						}`}
					>
						<Lightbulb className="rotate-180 size-6 absolute top-1 left-1" />
						<span className="absolute bottom-1 w-4 right-1 text-sm flex items-center justify-center">
							{index + 1}
						</span>
					</div>
				</TooltipTrigger>
				<TooltipContent>
					<div
						className={`flex flex-col gap-1 ${
							punto?.valor >= halfMedia ? "text-green-600" : "text-red-600"
						}`}
					>
						<p>nombre: {punto?.nombre}</p>
						<p>valor: {punto?.valor}</p>
					</div>
				</TooltipContent>
			</Tooltip>
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
