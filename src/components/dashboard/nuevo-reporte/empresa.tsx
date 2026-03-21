import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function NuevoReporteEmpresa() {
	return (
		<div className="flex flex-col gap-2 flex-1">
			<div className="flex items-center gap-2">
				<div className="bg-accent text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
					2
				</div>
				<span className="text-lg font-semibold tracking-wider">Empresa</span>
			</div>
			<article className="bg-accent rounded-xl p-6 flex-1 flex flex-col gap-4">
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col gap-2">
						<Label className="font-semibold" htmlFor="cuit">
							CUIT
						</Label>
						<Input
							id="cuit"
							className="dark:bg-background"
							placeholder="00-00000000-0"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Label className="font-semibold" htmlFor="razon-social">
							Razón Social
						</Label>
						<Input
							id="razon-social"
							className="dark:bg-background"
							placeholder="Nombre de la empresa"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<Label className="font-semibold" htmlFor="direccion">
						Dirección
					</Label>
					<Input
						id="direccion"
						className="dark:bg-background"
						placeholder="Calle, Altura, Ciudad"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<Label className="font-semibold" htmlFor="cant-empleados">
						Cantidad de empleados
					</Label>
					<Input
						id="cant-empleados"
						placeholder="Ej. 25"
						className="dark:bg-background"
					/>
				</div>
			</article>
		</div>
	)
}
