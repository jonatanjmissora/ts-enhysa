import { PuntosType } from "@/routes/_protected/new-report"
import CroquisAlertDialog from "./croquis-alert-dialog"
import { Lightbulb, RulerDimensionLine, Upload } from "lucide-react"
import NewReportPart2Observaciones from "./observaciones"
import NewReportPart2Clima from "./clima"
import NewReportPart2Locacion from "./locacion"
import PuntosAlertDialog from "./puntos-alert-dialog"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip"

export function Croquis({
	nombre,
	cantidadFilas,
	cantidadColumnas,
	celdasSeleccionadas,
	setCeldasSeleccionadas,
	setComponentStep,
	puntos,
	setPuntos,
}: {
	nombre: string
	cantidadFilas: number
	cantidadColumnas: number
	celdasSeleccionadas: string[]
	setCeldasSeleccionadas: (value: string[]) => void
	setComponentStep: (value: number) => void
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
}) {
	return (
		<div className="cardAccent flex-col p-10 px-14 gap-6">
			<div className="flex justify-between items-center gap-6 w-full">
				<div className="flex items-center gap-3 ">
					<div className="bg-purple-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<RulerDimensionLine className="size-6" />
					</div>
					<span className="w-full sm:text-xl 2xl:text-2xl font-semibold tracking-wider py-2">
						Croquis del {nombre}
					</span>
				</div>
				<CroquisAlertDialog
					cantidad_filas={cantidadFilas}
					cantidad_columnas={cantidadColumnas}
					celdasSeleccionadas={celdasSeleccionadas}
					setCeldasSeleccionadas={setCeldasSeleccionadas}
					setComponentStep={setComponentStep}
				/>
			</div>

			<div className="relative sm:h-100 2xl:h-120 sm:w-full 2xl:w-3/4 mx-auto flex items-center justify-center bg-white/5 rounded-lg">
				{celdasSeleccionadas.length === 0 ? (
					<div>
						<span className="bg-background p-4 rounded/xl shadow-xl text-pretty">
							Aqui se coloca el croquis del plano a medir
						</span>
						<img
							src="/plano.webp"
							alt="plano"
							className="absolute inset-0 z-1 h-full w-full object-cover opacity-40"
						/>
					</div>
				) : (
					<div className="relative">
						<p className="absolute left-0 -top-20 border-b border-white py-1 text-center w-full my-4 text-foreground/50 tracking-widest">
							Largo {cantidadColumnas}m
						</p>
						<div className="absolute -left-30 top-0 h-full w-max px-2 border-r border-white py-1 text-center mx-4 flex items-center text-foreground/50  tracking-widest">
							<div className="flex flex-col">
								<span>Ancho</span>
								<span>{cantidadFilas}m</span>
							</div>
						</div>
						<CeldasGridWithPuntos
							cantidad_filas={cantidadFilas}
							cantidad_columnas={cantidadColumnas}
							celdasSeleccionadas={celdasSeleccionadas}
							puntos={puntos}
						/>
					</div>
				)}
				<div className="absolute bottom-0 left-0">
					<PuntosAlertDialog
						cantidad_filas={cantidadFilas}
						cantidad_columnas={cantidadColumnas}
						celdasSeleccionadas={celdasSeleccionadas}
						puntos={puntos}
						setPuntos={setPuntos}
					/>
				</div>
			</div>

			<p className="sm:w-full 2xl:w-3/4 py-6 mx-auto italic text-center tracking-wider text-foreground/50 sm:text-sm 2xl:text-xl">
				El indice del Local (RI) es un valor numerico que representa la
				geometria del recinto para calculos luminotécnicos.
			</p>

			<div className="sm:w-full 2xl:w-3/4 relative h-30 mx-auto cardBackground flex items-center justify-center">
				<div className="w-[90%] h-[60%] italic text-foreground/50 tracking-wider text-lg flex items-center justify-center gap-4 border-3 border-dashed border-foreground/10 rounded-lg">
					<Upload size={20} />
					<span>Ingresar imagenes del lugar</span>
				</div>
				<input
					type="file"
					className="absolute inset-0 opacity-0 cursor-pointer"
				/>
			</div>

			<div className="sm:w-full 2xl:w-3/4 mx-auto border-b border-foreground/20 flex items-center gap-6">
				<NewReportPart2Locacion />
			</div>

			<div className="sm:w-full 2xl:w-3/4 mx-auto border-b border-foreground/20 flex items-center gap-6">
				<NewReportPart2Observaciones />
			</div>

			<NewReportPart2Clima />
		</div>
	)
}

export function CeldasGridWithPuntos({
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
									<div className="relative cardBackground size-10 rounded-full justify-center">
										<Lightbulb className="absolute top-1 left-1 text-amber-400 rotate-180" />
										<span className="absolute bottom-1 right-1 text-sm text-amber-400 flex items-center justify-center">
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
