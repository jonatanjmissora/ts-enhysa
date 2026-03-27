import { PuntosType } from "@/routes/_protected/new-report"
import { Lightbulb } from "lucide-react"

export default function NewReportPart3Plano({
	puntos,
	cantidadFilas,
	cantidadColumnas,
	celdasSeleccionadas,
}: {
	puntos: PuntosType[]
	cantidadFilas: number
	cantidadColumnas: number
	celdasSeleccionadas: string[]
}) {
	return (
		<div className=" cardAccent flex flex-col items-center justify-center p-10 py-15">
			<p className="w-full sm:text-xl 2xl:text-2xl font-semibold tracking-wider py-2">
				Plano de muestreo
			</p>
			<CeldasGridWithPuntosFinal
				cantidad_filas={cantidadFilas}
				cantidad_columnas={cantidadColumnas}
				celdasSeleccionadas={celdasSeleccionadas}
				puntos={puntos}
			/>
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
			className="grid relative cursor-pointer"
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
						className={`border-none ${
							celdasSeleccionadas.includes(getKey(row, col)) && "bg-cyan-500"
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
						</div>
					))}
				</div>
			)}
		</div>
	)
}
