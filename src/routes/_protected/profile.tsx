import { getUserInfo } from "@/lib/utils"
import { createFileRoute, useLoaderData } from "@tanstack/react-router"
import { Pencil } from "lucide-react"
import { useState } from "react"

export const Route = createFileRoute("/_protected/profile")({
	component: RouteComponent,
})

function RouteComponent() {
	const { session } = useLoaderData({ from: "__root__" })
	const { avatar, fullName } = getUserInfo(session)
	const [editMode, setEditMode] = useState(false)

	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="flex flex-col gap-2 relative">
				<div className="flex justify-between items-center">
					<div></div>
					<div className="absolute -top-10 left-10">
						{avatar ? (
							<img
								src={avatar}
								alt="User avatar"
								className="sm:size-20 2xl:size-24 rounded-sm"
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
					<button className="text-foreground/50 px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer dark:bg-accent dark:hover:bg-accent/50">
						<Pencil className="size-5" />
						Editar
					</button>
				</div>
				<article className="bg-accent rounded-xl flex flex-col gap-6 text-lg p-10">
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
		</div>
	)
}
