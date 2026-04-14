import { TextTooltip } from "@/components/layout/text-tooltip"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { useSuspenseQuery } from "@tanstack/react-query"
import { UserRound } from "lucide-react"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { Suspense } from "react"

export default function NuevoReportePersona() {
	return (
		<Suspense fallback={<Skelton />}>
			<NuevoReportePersonaContent />
		</Suspense>
	)
}

function NuevoReportePersonaContent() {
	const { data: tecnico } = useSuspenseQuery(tecnicoQueryOptions)

	return (
		<div className="flex flex-col gap-2 flex-1">
			<div className="flex items-center gap-2">
				<div className="bg-blue-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
					<UserRound className="size-6" />
				</div>
				<span className="sm:text-lg 2xl:text-2xl font-semibold tracking-wider">
					Persona
				</span>
			</div>
			<article className="card dark:bg-(--dark-blue-opa) bg-(--blue-opa) flex-col gap-4 sm:text-base 2xl:text-xl relative flex-1">
				<TextTooltip text={"Datos obtenidos a través del perfil."} />
				<div className="flex flex-col gap-1 w-full">
					<label className="tracking-wider" htmlFor="nombre-completo">
						Nombre Completo
					</label>
					<input
						id="nombre-completo"
						className="bg-background py-2 px-4 rounded-lg text-center"
						placeholder="Ingrese el nombre y apellido"
						defaultValue={tecnico?.nombre.toUpperCase() || ""}
						readOnly
					/>
				</div>
				<div className="grid grid-cols-2 gap-4 w-full">
					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="matricula">
							Matrícula
						</label>
						<input
							id="matricula"
							className="bg-background py-2 px-4 rounded-lg text-center"
							placeholder="N° Matrícula "
							defaultValue={tecnico?.matricula || ""}
							readOnly
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="cargo">
							Cargo
						</label>
						<input
							id="cargo"
							className="bg-background py-2 px-4 rounded-lg text-center"
							placeholder="Ej. Seguridad e Higiene"
							defaultValue={tecnico?.cargo || ""}
							readOnly
						/>
					</div>
				</div>
				<FieldGroup className="flex flex-row items-center justify-center gap-4 w-full pt-4">
					<Field orientation="horizontal" className="flex justify-center">
						<Checkbox
							id="terms-checkbox"
							name="terms-checkbox"
							className="dark:bg-background"
							checked={tecnico?.firmaImg !== ""}
						/>
						<Label htmlFor="terms-checkbox" className="tracking-wider">
							firma digital
						</Label>
					</Field>
					<Field orientation="horizontal" className="flex justify-center">
						<Checkbox
							id="terms-checkbox"
							name="terms-checkbox"
							className="dark:bg-background"
							checked={tecnico?.membrete !== ""}
						/>
						<Label htmlFor="terms-checkbox" className="tracking-wider">
							pie de página
						</Label>
					</Field>
				</FieldGroup>
			</article>
		</div>
	)
}

const Skelton = () => {
	return (
		<div className="flex flex-col gap-2 flex-1">
			<div className="flex items-center gap-2">
				<div className="bg-blue-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
					<UserRound className="size-6" />
				</div>
				<span className="text-xl font-semibold tracking-wider">Persona</span>
			</div>
			<article className="card dark:bg-(--dark-blue-opa) bg-(--blue-opa) flex-col gap-4 text-lg relative flex-1">
				<TextTooltip text={"Datos obtenidos a través del perfil."} />
				<div className="flex flex-col gap-2 w-full">
					<label className="font-semibold" htmlFor="nombre-completo">
						Nombre Completo
					</label>
					<input
						id="nombre-completo"
						className="bg-background py-2 px-4 rounded-lg text-center"
						placeholder=". . ."
						readOnly
					/>
				</div>
				<div className="grid grid-cols-2 gap-4 w-full">
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="matricula">
							Matrícula
						</label>
						<input
							id="matricula"
							className="bg-background py-2 px-4 rounded-lg text-center"
							placeholder=". . ."
							readOnly
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="cargo">
							Cargo
						</label>
						<input
							id="cargo"
							className="bg-background py-2 px-4 rounded-lg text-center"
							placeholder=". . ."
							readOnly
						/>
					</div>
				</div>
				<FieldGroup className="flex flex-row items-center justify-center gap-4 w-full pt-4">
					<Field orientation="horizontal" className="flex justify-center">
						<Checkbox
							id="terms-checkbox"
							name="terms-checkbox"
							className="dark:bg-background"
						/>
						<Label htmlFor="terms-checkbox" className="sm:text-lg 2xl:text-xl">
							firma digital
						</Label>
					</Field>
					<Field orientation="horizontal" className="flex justify-center">
						<Checkbox
							id="terms-checkbox"
							name="terms-checkbox"
							className="dark:bg-background"
						/>
						<Label htmlFor="terms-checkbox" className="sm:text-lg 2xl:text-xl">
							pie de página
						</Label>
					</Field>
				</FieldGroup>
			</article>
		</div>
	)
}
