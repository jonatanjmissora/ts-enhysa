export default function NuevoReporteEmpresa() {
	return (
		<div className="flex flex-col gap-2 flex-1">
			<div className="flex items-center gap-2">
				<div className="bg-accent text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
					2
				</div>
				<span className="text-xl font-semibold tracking-wider">Empresa</span>
			</div>
			<article className="bg-accent rounded-xl p-6 flex-1 flex flex-col gap-6 text-lg">
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="cuit">
							CUIT
						</label>
						<input
							id="cuit"
							className="bg-background py-2 px-4 rounded-lg"
							placeholder="00-00000000-0"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="razon-social">
							Razón Social
						</label>
						<input
							id="razon-social"
							className="bg-background py-2 px-4 rounded-lg"
							placeholder="Nombre de la empresa"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label className="font-semibold" htmlFor="direccion">
						Dirección
					</label>
					<input
						id="direccion"
						className="bg-background py-2 px-4 rounded-lg"
						placeholder="Calle, Altura, Ciudad"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="font-semibold" htmlFor="cant-empleados">
						Cantidad de empleados
					</label>
					<input
						id="cant-empleados"
						placeholder="Ej. 25"
						className="bg-background py-2 px-4 rounded-lg"
					/>
				</div>
			</article>
		</div>
	)
}
