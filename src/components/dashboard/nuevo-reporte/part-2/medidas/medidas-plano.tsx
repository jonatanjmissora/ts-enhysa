import { Box, Equal, EqualApproximately } from "lucide-react"
import { getIndiceDeLocal, getIndiceRedondeo } from "@/lib/utils"
import { AlertPaintCroquis } from "./paint-croquis"
import { CroquisType, PuntoType } from "@/lib/types"

export default function MedidasPlano({
	nombre,
	croquis,
	setCroquis,
	setPuntos,
}: {
	nombre: string
	croquis: CroquisType
	setCroquis: (croquis: CroquisType) => void
	setPuntos: (puntos: PuntoType[]) => void
}) {
	const hayValores =
		croquis.ancho !== 0 && croquis.largo !== 0 && croquis.altura !== 0

	return (
		<div className="card bg-accent flex-col gap-6">
			<div className="flex items-center w-full border-b border-foreground/20">
				<div className="flex items-center gap-3 flex-1">
					<div className="bg-blue-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<Box className="size-6" />
					</div>
					<span className="w-full sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2">
						Dimensiones
					</span>
				</div>
				<p className="flex-1 text-right text-sm text-foreground/70 py-1">
					{nombre || "Depósito"}
				</p>
			</div>
			<div className="flex flex-col gap-3 w-full mx-auto sm:text-base 2xl:text-xl">
				<div className="flex gap-6">
					<div className="font-semibold bg-blue-500/70 rounded-full py-1 px-3 w-8 flex items-center justify-center">
						L
					</div>
					<span className="w-50">Largo (m)</span>
					<input
						type="number"
						className="w-40 bg-background py-1 px-4 rounded-lg text-center"
						placeholder="Ej. 10.00"
						value={croquis.largo === 0 ? "" : croquis.largo}
						onChange={e => {
							setCroquis({
								...croquis,
								largo: Number(e.target.value),
							})
							setPuntos([])
						}}
					/>
				</div>
				<div className="flex items-center gap-6">
					<div className="font-semibold bg-blue-500/70 rounded-full py-1 px-3 w-8 flex items-center justify-center">
						W
					</div>
					<span className="w-50">Ancho (m)</span>
					<input
						type="number"
						className="w-40 bg-background py-1 px-4 rounded-lg text-center"
						placeholder="Ej. 8.00"
						value={croquis.ancho === 0 ? "" : croquis.ancho}
						onChange={e => {
							setCroquis({
								...croquis,
								ancho: Number(e.target.value),
							})
							setPuntos([])
						}}
					/>
				</div>
				<div className="flex items-center gap-6">
					<div className="font-semibold bg-blue-500/70 rounded-full py-1 px-3 w-8 flex items-center justify-center">
						H
					</div>
					<span className="w-50">Altura montaje (m)</span>
					<input
						type="number"
						className="w-40 bg-background py-1 px-4 rounded-lg text-center"
						placeholder="Ej. 2,50"
						value={croquis.altura === 0 ? "" : croquis.altura}
						onChange={e => {
							setCroquis({
								...croquis,
								altura: Number(e.target.value),
							})
							setPuntos([])
						}}
					/>
				</div>
			</div>

			{hayValores && (
				<AlertPaintCroquis croquis={croquis} setCroquis={setCroquis} />
			)}

			{croquis.celdasSeleccionadas.length > 0 && <Formula croquis={croquis} />}
		</div>
	)
}

const Formula = ({ croquis }: { croquis: CroquisType }) => {
	const indiceDeLocal = getIndiceDeLocal(
		croquis.largo,
		croquis.ancho,
		croquis.altura
	)

	const indiceRedondeo = getIndiceRedondeo(indiceDeLocal)

	return (
		<div className="flex flex-col gap-4 w-full p-6 rounded-lg cardBackground bg-background/75 items-start relative">
			<div className="flex flex-col gap-2 justify-center items-center w-full">
				<span className="w-full italic font-semibold text-foreground/50 tracking-widest border-b border-foreground/10">
					Indice del local{" "}
				</span>
				<div className="flex justify-end items-center gap-3">
					<div className="flex flex-col">
						<span className="p-1 border-b border-foreground/50 w-full text-center px-10">
							{croquis.largo} * {croquis.ancho}
						</span>
						<span className="p-1 text-center">
							{croquis.altura} * ( {croquis.largo} + {croquis.ancho} )
						</span>
					</div>
					<Equal size={16} />
					<span className="italic font-semibold text-lg tracking-widest">
						{indiceDeLocal.toFixed(2)}
					</span>
					<EqualApproximately size={16} />
					<span className="text-2xl bg-teal-500/50 px-4 py-1 rounded-lg">
						{indiceRedondeo}
					</span>
				</div>
			</div>

			<div className="w-full flex gap-2 items-center justify-center">
				<span className="text-2xl bg-pink-500/50 px-4 py-1 rounded-lg">
					{indiceRedondeo >= 4 ? "36" : (indiceRedondeo + 2) ** 2}
				</span>
				<span className="italic tracking-wilder text-foreground/50">
					Mínimo número de mediciones
				</span>
			</div>
			<span className="tracking-widest italic font semibold text-foreground/50 border-t border-foreground/10 p1-2 w-full text-right sm:text-xs 2xl:text-sm">
				Res. 84/2012 S.R.T.
			</span>
		</div>
	)
}
