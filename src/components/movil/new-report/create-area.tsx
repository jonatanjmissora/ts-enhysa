import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MovilCreateArea() {
	return (
		<article>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-3/4 mt-10">
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="matricula">
						Nombre del Sector
					</Label>
					<Input
						id="matricula"
						placeholder="N° Matrícula "
						defaultValue="Planta Baja"
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="matricula">
						Tipo de Sector
					</Label>
					<Input
						id="matricula"
						placeholder="N° Matrícula "
						defaultValue="Oficinas"
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
			</div>
		</article>
	)
}
