export default function NuevoReportePersona() {
	return (
		<div className="flex flex-col gap-2 flex-1">
			<div className="flex items-center gap-2">
				<div className="bg-accent text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
					1
				</div>
				<span className="text-xl font-semibold tracking-wider">Persona</span>
			</div>
			<article className="bg-accent rounded-xl p-6 flex-1 flex flex-col gap-6 text-lg">
				<div className="flex flex-col gap-2">
					<label className="font-semibold" htmlFor="nombre-completo">
						Nombre Completo
					</label>
					<input
						id="nombre-completo"
						className="bg-background py-2 px-4 rounded-lg"
						placeholder="Ingrese el nombre y apellido"
					/>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="matricula">
							Matrícula
						</label>
						<input
							id="matricula"
							className="bg-background py-2 px-4 rounded-lg"
							placeholder="N° Matrícula "
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="cargo">
							Cargo
						</label>
						<input
							id="cargo"
							className="bg-background py-2 px-4 rounded-lg"
							placeholder="Ej. Seguridad e Higiene"
						/>
					</div>
				</div>
				<input
					id="foto"
					className="bg-background h-20 py-2 px-4 rounded-lg"
					type="file"
				/>
			</article>
		</div>
	)
}
