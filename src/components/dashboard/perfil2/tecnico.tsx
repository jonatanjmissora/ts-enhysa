import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2, Pencil } from "lucide-react"

export default function ProfileTecnico() {
	return (
		<div className="bg-accent sm:bg-background py-10 sm:p-10 flex items-center justify-center flex-col relative">
			<Trash2 className="absolute bottom-22 left-10 sm:top-4 sm:right-10 size-6 cursor-pointer text-red-600/50" />
			<div className="grid-cols-1 grid sm:grid-cols-2 gap-8 w-5/6">
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="matricula">
						Matrícula
					</Label>
					<Input
						id="matricula"
						placeholder="N° Matrícula "
						defaultValue="MISSORA JONATAN"
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="cargo">
						Cargo
					</Label>
					<Input
						id="cargo"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="Técnico en Seguridad e Higiene"
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label>Firma Digital</Label>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/firma.png" alt="firma-digital" className="size-20" />
					</div>
				</div>

				<div className="flex flex-col gap-1">
					<Label>Pie de Página</Label>
					<Input
						defaultValue="SeH MISSORA JONATAN"
						readOnly
						className="bg-background sm:bg-accent"
					/>
					<Input
						defaultValue="MAT 1234523"
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
			</div>

			<div className=" my-10 w-5/6">
				<button className="card bg-background sm:bg-accent rounded-lg cursor-pointer textM py-2 w-2/3 sm:w-1/4 justify-center gap-4 ml-auto">
					<Pencil className="size-6 text-foreground/70" />
					Editar
				</button>
			</div>
		</div>
	)
}
