import { Suspense } from "react"
import SkeltonTecnicoForm from "./skelton-tecnico-form"
import { useSuspenseQuery } from "@tanstack/react-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import EditTecnicoForm from "./edit-tecnico-form"
import CreateTecnicoForm from "./create-tecnico-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

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
		<div className="bg-accent sm:bg-background py-10 sm:p-10 flex items-center justify-center flex-col relative border border-orange-700 dark:border-orange-600">
			<div className="grid-cols-1 grid sm:grid-cols-2 gap-8 w-5/6 my-10">
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="nombre">
						Nombre Completo
					</Label>
					<Input
						id="nombre"
						placeholder="Nombre de la empresa"
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
						placeholder="Calle, Altura"
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
						placeholder="Ciudad, Provincia, Pais"
						value={tecnico.localidad.toUpperCase()}
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				{/* <div className="flex flex-col gap-1 w-full">
					<Label className="tracking-wider" htmlFor="codigoPostal">
						CP
					</Label>
					<Input
						id="codigoPostal"
						placeholder="Ciudad, Provincia, Pais"
						value={empresa.codigoPostal}
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<Label className="tracking-wider" htmlFor="provincia">
						Provincia
					</Label>
					<Input
						id="provincia"
						placeholder="Ciudad, Provincia, Pais"
						value={empresa.provincia.toUpperCase()}
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<Label htmlFor="horarios">Horarios</Label>
					<Input
						id="horarios"
						placeholder="Lun a Vie 8:00 a 16:00"
						value={empresa.horarios.toUpperCase()}
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div> */}
				<div className="flex flex-col gap-1">
					<Label>Logo</Label>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/telefonica.png" alt="luxometro" className="size-20" />
					</div>
				</div>
			</div>
			{/* <EditEmpresa empresa={empresa} /> */}
		</div>
	)
}

const TecnicoVacio = () => {
	return (
		<p className="m-10 text-center w-full text-pretty textM italic text-foreground/70">
			Todavia no tiene sus datos cargados.
		</p>
	)
}
