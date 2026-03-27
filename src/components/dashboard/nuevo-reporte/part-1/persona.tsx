import { USER } from "@/lib/mock/user"
import { UserRound } from "lucide-react"

export default function NuevoReportePersona() {
	return (
		<div className="flex flex-col gap-2 flex-1">
			<div className="flex items-center gap-2">
				<div className="bg-blue-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
					<UserRound className="size-6" />
				</div>
				<span className="text-xl font-semibold tracking-wider">Persona</span>
			</div>
			<article className="dark:bg-(--dark-blue-opa) bg-(--blue-opa) rounded-xl p-6 flex-1 flex flex-col gap-6 text-lg shadow-xl ring ring-foreground/20">
				<div className="flex flex-col gap-2">
					<label className="font-semibold" htmlFor="nombre-completo">
						Nombre Completo
					</label>
					<input
						id="nombre-completo"
						className="bg-background py-2 px-4 rounded-lg"
						placeholder="Ingrese el nombre y apellido"
						defaultValue={USER.name}
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
							defaultValue={USER.matricula}
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
							defaultValue={USER.cargo}
						/>
					</div>
				</div>
				<div className="bg-background h-20 py-2 px-4 rounded-lg flex items-center justify-center">
					<p className="text-center text-foreground/50 italic">
						Foto de la matricula
					</p>
				</div>
			</article>
		</div>
	)
}
