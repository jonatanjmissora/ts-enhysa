import { PuntosType } from "./main"
import CroquisAlertDialog, { CeldasGrid } from "./croquis-alert-dialog"

export function Croquis({
	cantidadFilas,
	cantidadColumnas,
	celdasSeleccionadas,
	setCeldasSeleccionadas,
	setComponentStep,
	puntos,
	setPuntos,
}: {
	cantidadFilas: number
	cantidadColumnas: number
	celdasSeleccionadas: string[]
	setCeldasSeleccionadas: (value: string[]) => void
	setComponentStep: (value: number) => void
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
}) {
	return (
		<div className="flex-1 bg-accent rounded-xl p-6 flex flex-col justify-center gap-4 shadow-xl ring ring-foreground/20">
			<div className="flex justify-between items-center gap-6 w-3/4 mx-auto">
				<div className="flex items-center gap-3 ">
					<div className="bg-purple-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						3
					</div>
					<span className="text-xl font-semibold tracking-wider">
						Croquis del Plano
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
			<div className="relative h-120 bg-foreground/60 w-3/4 mx-auto flex items-center justify-center">
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
					<CeldasGrid
						activeCroquis={false}
						cantidad_filas={cantidadFilas}
						cantidad_columnas={cantidadColumnas}
						setCeldasSeleccionadas={setCeldasSeleccionadas}
						celdasSeleccionadas={celdasSeleccionadas}
						division={1}
					/>
				)}
			</div>
			<p className="italic text-center tracking-wider text-foreground/50 sm:text-sm 2xl:text-xl text-pretty px-6">
				El indice del Local (RI) es un valor numerico que representa la
				geometria del recinto para calculos luminotexnicos.
			</p>
		</div>
	)
}
