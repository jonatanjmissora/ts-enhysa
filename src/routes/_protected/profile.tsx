import { Textarea } from "@/components/ui/textarea"
import { USER } from "@/lib/mock/user"
import { getUserInfo } from "@/lib/utils"
import { createFileRoute, useLoaderData } from "@tanstack/react-router"
import { Pencil, Save, Upload } from "lucide-react"
import { useState } from "react"

export const Route = createFileRoute("/_protected/profile")({
	component: RouteComponent,
})

function RouteComponent() {
	const { session } = useLoaderData({ from: "__root__" })
	const { avatar, fullName } = getUserInfo(session)
	const [editMode, setEditMode] = useState(false)

	return (
		<div className="flex justify-center items-center min-h-screen p-20">
			<div className="flex flex-col gap-2 relative w-1/2">
				<div className="flex justify-between items-center">
					<div></div>
					<div className="absolute -top-10 -left-10">
						{avatar ? (
							<img
								src={avatar}
								alt="User avatar"
								className="sm:size-30 2xl:size-24 rounded-sm"
							/>
						) : (
							<div className="bg-accent p-2 rounded-full">
								{fullName?.charAt(0).toUpperCase()}
							</div>
						)}
					</div>
					<div>
						<p>{fullName.toUpperCase()}</p>
					</div>
					<button
						className="text-foreground/50 px-4 py-2 rounded-lg cursor-pointer themeBtnAccent"
						onClick={() => setEditMode(prev => !prev)}
					>
						{editMode ? (
							<div className="flex items-center gap-2 w-20">
								<Save className="size-5" />
								Guardar
							</div>
						) : (
							<div className="flex items-center gap-2 w-20">
								<Pencil className="size-5" />
								Editar
							</div>
						)}
					</button>
				</div>
				<article className="flex flex-col items-stretch gap-6 text-lg p-10 cardAccent">
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="nombre-completo">
							Nombre Completo
						</label>
						<input
							id="nombre-completo"
							className="bg-background py-2 px-4 rounded-lg"
							placeholder="Ingrese el nombre y apellido"
							defaultValue={USER.name}
							readOnly={!editMode}
						/>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="flex flex-col gap-2">
							<label className="font-semibold" htmlFor="dni">
								DNI
							</label>
							<input
								id="dni"
								className="bg-background py-2 px-4 rounded-lg"
								placeholder="N° Documento "
								defaultValue={USER.dni}
								readOnly={!editMode}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label className="font-semibold" htmlFor="telefono">
								Teléfono
							</label>
							<input
								id="telefono"
								className="bg-background py-2 px-4 rounded-lg"
								placeholder="Ej. 000-0000000"
								defaultValue={USER.telefono}
								readOnly={!editMode}
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
							placeholder="Ingrese la dirección"
							defaultValue={USER.direccion}
							readOnly={!editMode}
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
								readOnly={!editMode}
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
								readOnly={!editMode}
							/>
						</div>
					</div>
					<div className="relative w-full h-30 mx-auto cardBackground flex items-center justify-center">
						<div className="w-[90%] h-[60%] italic text-foreground/50 tracking-wider text-lg flex items-center justify-center gap-4 border-3 border-dashed border-foreground/10 rounded-lg">
							<Upload size={20} />
							<span>Ingresar foto de matricula</span>
						</div>
						<input
							name="matricula-photo"
							type="file"
							className="absolute inset-0 opacity-0 cursor-pointer"
						/>
					</div>

					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="signature">
							Firma
						</label>
						<div className="relative w-full h-30 mx-auto cardBackground flex items-center justify-center">
							<div className="w-[90%] h-[60%] italic text-foreground/50 tracking-wider text-lg flex items-center justify-center gap-4 border-3 border-dashed border-foreground/10 rounded-lg">
								<Upload size={20} />
								<span>Ingresar firma digital</span>
							</div>
							<input
								name="signature"
								type="file"
								className="absolute inset-0 opacity-0 cursor-pointer"
							/>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="footer">
							Pie de pagina para reportes
						</label>
						<Textarea
							name="footer"
							className="bg-background py-2 px-4 rounded-lg"
							placeholder="Ingrese el pied de pagina"
							defaultValue={USER.footer}
							readOnly={!editMode}
						/>
					</div>
				</article>
			</div>
		</div>
	)
}
