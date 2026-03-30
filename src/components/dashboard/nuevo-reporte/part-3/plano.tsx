import type { PuntosType } from "@/routes/_protected/new-report"
import { Lightbulb, RulerDimensionLine } from "lucide-react"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip"

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
	celdasSeleccionadas: string[]
}) {
	return (
		<div className="flex-1 cardAccent flex flex-col gap-6 justify-center p-10 py-15">
			<div className="w-full flex items-center gap-3">
				<div className="bg-purple-600/75 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
					<RulerDimensionLine className="size-6" />
				</div>
				<span className="sm:text-lg 2xl:text-xl font-semibold tracking-wider py-2">
					Plano de {nombre}
				</span>
			</div>
			<div className="flex-1 flex items-center">
				<CeldasGridWithPuntosFinal
					cantidad_filas={cantidadFilas}
					cantidad_columnas={cantidadColumnas}
					celdasSeleccionadas={celdasSeleccionadas}
					puntos={puntos}
				/>
			</div>
		</div>
	)
}

export function CeldasGridWithPuntosFinal({
	cantidad_filas,
	cantidad_columnas,
	celdasSeleccionadas,
	puntos,
}: {
	cantidad_filas: number
	cantidad_columnas: number
	celdasSeleccionadas: string[]
	puntos: PuntosType[]
}) {
	const getKey = (row: number, col: number) => `${row}-${col}`
	const cellSize = 60
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
							<Tooltip>
								<TooltipTrigger asChild>
									<div
										className={`relative cardBackground size-10 rounded-full justify-center ${
											punto?.cumple ? "text-green-600" : "text-red-600"
										}`}
									>
										<Lightbulb className="rotate-180 absolute top-1 left-1" />
										<span className="absolute bottom-1 right-1 text-sm flex items-center justify-center">
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
			)}
		</div>
	)
}
