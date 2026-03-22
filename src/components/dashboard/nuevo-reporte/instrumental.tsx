export default function NuevoReporteInstrumental() {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<div className="bg-accent text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
					3
				</div>
				<span className="text-xl font-semibold tracking-wider">
					Instrumental
				</span>
			</div>
			<article className="bg-accent rounded-xl p-6 flex-1 flex flex-col gap-6 text-lg">
				<p className="text-lg font-semibold">Datos del Luxómetro</p>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="marca">
							Marca / Modelo
						</label>
						<input
							id="marca"
							className="bg-background py-2 px-4 rounded-lg"
							placeholder="Ej. Extech LT3000"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="serie">
							Número de Serie
						</label>
						<input
							id="serie"
							className="bg-background py-2 px-4 rounded-lg"
							placeholder="S/N 123456"
						/>
					</div>
				</div>
				<input
					id="certificado"
					className="bg-background py-2 px-4 rounded-lg"
					type="file"
				/>
			</article>
		</div>
	)
}
