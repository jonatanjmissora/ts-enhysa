export default function MedidasPlano({
	cantidadFilas,
	cantidadColumnas,
	cantidadAltura,
	setCantidadFilas,
	setCantidadColumnas,
	setCantidadAltura,
	setComponentStep,
	setCeldasSeleccionadas,
}: {
	cantidadFilas: number
	cantidadColumnas: number
	cantidadAltura: number
	setCantidadFilas: (value: number) => void
	setCantidadColumnas: (value: number) => void
	setCantidadAltura: (value: number) => void
	setComponentStep: (value: number) => void
	setCeldasSeleccionadas: (value: string[]) => void
}) {
	return (
		<div className="flex-1 bg-accent rounded-xl p-6 flex flex-col justify-center gap-8 shadow-xl ring ring-foreground/20">
			<div className="flex items-center gap-3 w-3/4 mx-auto">
				<div className="bg-blue-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
					1
				</div>
				<span className="text-xl font-semibold tracking-wider">
					Dimensiones del Local (m)
				</span>
			</div>
			<div className="flex flex-col gap-3 w-3/4 mx-auto">
				<div className="flex gap-6">
					<div className="font-semibold bg-blue-500/70 rounded-full py-1 px-3 w-8 flex items-center justify-center">
						L
					</div>
					<span className="w-30">Largo (m)</span>
					<input
						type="number"
						className="w-80 bg-background py-1 px-4 rounded-lg text-center"
						placeholder="Ej. 10.00"
						value={cantidadFilas === 0 ? "" : cantidadFilas}
						onChange={e => {
							setCantidadFilas(Number(e.target.value))
							setCeldasSeleccionadas([])
							setComponentStep(1)
						}}
					/>
				</div>
				<div className="flex items-center gap-6">
					<div className="font-semibold bg-blue-500/70 rounded-full py-1 px-3 w-8 flex items-center justify-center">
						w
					</div>
					<span className="w-30">Ancho (m)</span>
					<input
						type="number"
						className="w-80 bg-background py-1 px-4 rounded-lg text-center"
						placeholder="Ej. 8.00"
						value={cantidadColumnas === 0 ? "" : cantidadColumnas}
						onChange={e => {
							setCantidadColumnas(Number(e.target.value))
							setCeldasSeleccionadas([])
							setComponentStep(1)
						}}
					/>
				</div>
				<div className="flex items-center gap-6">
					<div className="font-semibold bg-blue-500/70 rounded-full py-1 px-3 w-8 flex items-center justify-center">
						H
					</div>
					<span className="w-30">Altura (m)</span>
					<input
						type="number"
						className="w-80 bg-background py-1 px-4 rounded-lg text-center"
						placeholder="Ej. 2,50"
						value={cantidadAltura === 0 ? "" : cantidadAltura}
						onChange={e => {
							setCantidadAltura(Number(e.target.value))
							setCeldasSeleccionadas([])
							setComponentStep(1)
						}}
					/>
				</div>
			</div>
			<button
				className={`cardBackground px-4 text-center py-2 fle justify-center w-1/2 mx-auto ${
					cantidadFilas === 0 || cantidadColumnas === 0 || cantidadAltura === 0
						? "opacity-50 cursor-not-allowed"
						: "cursor-pointer"
				}`}
				disabled={
					cantidadFilas === 0 || cantidadColumnas === 0 || cantidadAltura === 0
				}
				onClick={() => setComponentStep(2)}
			>
				Siguiente
			</button>
		</div>
	)
}
