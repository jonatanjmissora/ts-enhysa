import { PuntoType } from "@/lib/types"
import { DeletePuntoAlertDialog } from "./delete-punto-alert"

export default function PuntosList({
	puntos,
	setPuntos,
}: {
	puntos: PuntoType[]
	setPuntos: (puntos: PuntoType[]) => void
}) {
	return (
		<div className="flex flex-col justify-between items-center gap-6 w-full">
			<div className="w-full grid grid-cols-[1fr_1fr_0.5fr] gap-4 place-items-center sm:text-base 2xl:text-lg sm:font-semibold 2xl:font-bold italic tracking-wider border-b border-foreground/15 py-1">
				<span>nombre</span>
				<span>valor</span>
				<span></span>
			</div>
			{puntos.length === 0 ? (
				<div className="w-full grid grid-cols-[1fr_1fr_0.5fr] gap-4 place-items-center">
					<span className="text-amber-400 sm:text-base 2xl:text-lg">
						no hay puntos. . .
					</span>
					<span></span>
					<span></span>
				</div>
			) : (
				<div className="flex flex-col gap-2 w-full">
					{puntos.map((punto, index) => (
						<Punto
							key={punto?.nombre}
							punto={punto}
							puntos={puntos}
							setPuntos={setPuntos}
							index={index}
						/>
					))}
				</div>
			)}
		</div>
	)
}

const Punto = ({
	punto,
	puntos,
	setPuntos,
	index,
}: {
	punto: PuntoType
	puntos: PuntoType[]
	setPuntos: (puntos: PuntoType[]) => void
	index: number
}) => {
	return (
		<div className="w-full grid grid-cols-[1fr_1fr_0.5fr] gap-4 place-items-center">
			<span className="rounded-lg bg-background py-2 w-full text-center 2xl:text-lg">
				punto-{index + 1}
			</span>
			<input
				type="number"
				className={`rounded-lg py-2 w-full text-center 2xl:text-lg ${punto.valor === 0 ? "bg-amber-400/25" : "bg-background"}`}
				value={punto.valor || ""}
				placeholder="Ej. 1,23"
				onChange={e => {
					const newPuntos = [...puntos].map(p =>
						p?.nombre === punto.nombre
							? { ...p, valor: Number(e.target.value) }
							: p
					)
					setPuntos(newPuntos)
				}}
			/>
			<DeletePuntoAlertDialog
				punto={punto}
				puntos={puntos}
				setPuntos={setPuntos}
				setOpenValue={() => {}}
			/>
		</div>
	)
}
