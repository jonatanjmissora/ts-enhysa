import { Suspense } from "react"
import SkeltonTecnicoForm from "./skelton-tecnico-form"
import { useSuspenseQuery } from "@tanstack/react-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import CreateTecnico from "./create-tecnico"
import EditTecnico from "./edit-tecnico"

export default function ProfileTecnico() {
	return (
		<Suspense fallback={<SkeltonTecnicoForm />}>
			<Tecnico />
		</Suspense>
	)
}

const Tecnico = () => {
	const { data: tecnico } = useSuspenseQuery(tecnicoQueryOptions)
	if (!tecnico) return <TecnicoVacio />

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
						value={tecnico.nombre.toUpperCase()}
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
						value={tecnico.telefono}
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
						value={tecnico.cargo.toUpperCase()}
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
						value={tecnico.localidad.toUpperCase()}
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
						value={tecnico.matricula}
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label>Matrícula Digital</Label>
					<div className="card p-2 bg-background sm:bg-accent text-sm h-full min-h-9"></div>
				</div>

				<div className="flex-1 flex flex-col gap-1">
					<Label>Firma Digital</Label>
					<div className="card p-2 bg-background sm:bg-accent text-sm h-full min-h-9"></div>
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
			<EditTecnico tecnico={tecnico} />
		</div>
	)
}

const TecnicoVacio = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-4 m-10 mx-0 sm:mx-10">
			<p className="text-center w-full text-pretty textM text-base sm:text-base italic text-foreground/70">
				Todavia no tiene sus datos cargados.
			</p>
			<CreateTecnico />
		</div>
	)
}
