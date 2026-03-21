import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function NuevoReportePersona() {
	return (
		<div className="flex flex-col gap-2 flex-1">
			<div className="flex items-center gap-2">
				<div className="bg-accent text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
					1
				</div>
				<span className="text-lg font-semibold tracking-wider">Persona</span>
			</div>
			<article className="bg-accent rounded-xl p-6 flex-1 flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<Label className="font-semibold" htmlFor="nombre-completo">
						Nombre Completo
					</Label>
					<Input
						id="nombre-completo"
						className="dark:bg-background"
						placeholder="Ingrese el nombre y apellido"
					/>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col gap-2">
						<Label className="font-semibold" htmlFor="matricula">
							Matrícula
						</Label>
						<Input
							id="matricula"
							className="dark:bg-background"
							placeholder="N° Matrícula "
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Label className="font-semibold" htmlFor="cargo">
							Cargo
						</Label>
						<Input
							id="cargo"
							className="dark:bg-background"
							placeholder="Ej. Seguridad e Higiene"
						/>
					</div>
				</div>
				<Input id="foto" className="dark:bg-background h-20" type="file" />
			</article>
		</div>
	)
}
