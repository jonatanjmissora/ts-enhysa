import { Plus, Trash2 } from "lucide-react"
import type { PuntosType } from "./main"
import PuntosAlertDialog from "./puntos-alert-dialog"

export default function PuntosMedicion({
	cantidadFilas,
	cantidadColumnas,
	celdasSeleccionadas,
	puntos,
	setPuntos,
}: {
	cantidadFilas: number
	cantidadColumnas: number
	celdasSeleccionadas: string[]
	puntos: PuntosType[]
	setPuntos: (puntos: PuntosType[]) => void
}) {
	return (
		<div className="flex-1 bg-accent rounded-xl p-6 flex flex-col justify-center gap-8 shadow-xl ring ring-foreground/20">
			<div className="flex justify-between items-center gap-6 mx-auto">
				<div className="flex items-center gap-3 ">
					<div className="bg-orange-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						3
					</div>
					<span className="text-xl font-semibold tracking-wider">
						Punto de medición
					</span>
				</div>

				<PuntosAlertDialog
					cantidad_filas={cantidadFilas}
					cantidad_columnas={cantidadColumnas}
					celdasSeleccionadas={celdasSeleccionadas}
					puntos={puntos}
					setPuntos={setPuntos}
				/>
			</div>
			<div className="flex flex-col gap-3 w-3/4 mx-auto">
				<div className="w-full grid grid-cols-[1fr_1fr_20px] gap-4 place-items-center text-xl font-bold italic tracking-wider border-b border-foreground/20 pb-2">
					<span>nombre</span>
					<span>valor</span>
					<span></span>
				</div>
				{puntos[0] === null ? (
					<div className="w-full grid grid-cols-[1fr_1fr_20px] gap-4 place-items-center">
						<span>no hay punto</span>
						<span></span>
						<span></span>
					</div>
				) : (
					puntos.map(punto => (
						<Punto
							key={punto?.nombre}
							nombre={punto?.nombre || ""}
							valor={punto?.valor || 0}
						/>
					))
				)}
			</div>
		</div>
	)
}

const Punto = ({ nombre, valor }: { nombre: string; valor: number }) => {
	return (
		<div className="w-full grid grid-cols-[1fr_1fr_20px] gap-4 place-items-center">
			<input
				type="text"
				className="rounded-lg bg-background py-1 w-full text-center"
				value={nombre}
			/>
			<input
				type="number"
				className="rounded-lg bg-background py-1 w-full text-center"
				value={valor}
			/>
			<Trash2 size={20} className="text-red-600/40 cursor-pointer" />
		</div>
	)
}
