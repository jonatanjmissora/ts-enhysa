import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil } from "lucide-react"

export default function SkeltonTecnicoForm() {
	return (
		<div className="bg-accent sm:bg-background py-10 sm:p-10 flex items-center justify-center flex-col relative border border-cyan-700 dark:border-cyan-600">
			<div className="grid-cols-1 grid sm:grid-cols-2 gap-8 w-5/6 my-10">
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="nombre">
						Nombre Completo
					</Label>
					<Input
						id="nombre"
						placeholder="Nombre Completo"
						value=". . ."
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="telefono">
						Teléfono
					</Label>
					<Input
						id="telefono"
						placeholder="000-0000000"
						value=". . ."
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<Label className="tracking-wider" htmlFor="cargo">
						Cargo
					</Label>
					<Input
						id="cargo"
						placeholder="Ej Técnico SeH"
						value=". . ."
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<Label className="tracking-wider" htmlFor="localidad">
						Localidad
					</Label>
					<Input
						id="localidad"
						placeholder="Ej. Bahia Blanca"
						value=". . ."
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<Label className="tracking-wider" htmlFor="matricula">
						Matrícula
					</Label>
					<Input
						id="matricula"
						placeholder="00-00000"
						value=". . ."
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label>Matrícula Digital</Label>
					<div className="card p-2 bg-background sm:bg-accent text-sm h-full"></div>
				</div>

				<div className="flex-1 flex flex-col gap-1">
					<Label>Firma Digital</Label>
					<div className="card p-2 bg-background sm:bg-accent text-sm h-full"></div>
				</div>

				<div className="flex-1 flex flex-col gap-1">
					<Label>Pie de Página</Label>
					<div className="flex flex-col gap-[0.5px]">
						<Input
							placeholder="Nombre Completo..."
							readOnly
							className="bg-background sm:bg-accent text-center"
						/>

						<Input
							placeholder="Matricula..."
							readOnly
							className="bg-background sm:bg-accent text-center"
						/>
					</div>
				</div>
			</div>
			<div className="sm:block hidden my-10 w-1/4 ml-auto">
				<button className="card bg-background sm:bg-accent rounded-lg cursor-pointer textM text-sm sm:text-base py-2 w-full justify-center gap-4 ml-auto">
					<Pencil className="size-6 text-foreground/70" />
					Editar
				</button>
			</div>
		</div>
	)
}
