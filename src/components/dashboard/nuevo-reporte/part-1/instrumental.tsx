import { Cpu } from "lucide-react"
import { Suspense, useState } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { instrumentosQueryOptions } from "queries/instrumentos/instrumentos-query"
import { InstrumentoType } from "db/instrumentos/schema"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Field, FieldGroup } from "@/components/ui/field"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { TextTooltip } from "@/components/layout/text-tooltip"
import { sortedByNombre } from "@/lib/utils"

export default function NuevoReporteInstrumento() {
	return (
		<Suspense fallback={<Skelton />}>
			<NuevoReporteInstrumentoContent />
		</Suspense>
	)
}

function NuevoReporteInstrumentoContent() {
	const { data: instrumentos } = useSuspenseQuery(instrumentosQueryOptions)
	const sortedInstrumentos = sortedByNombre(instrumentos || [])
	const [actualInstrumento, setActualInstrumento] =
		useState<InstrumentoType | null>(sortedInstrumentos[0] ?? null)

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="bg-orange-700/75 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<Cpu className="size-6" />
					</div>
					<span className="text-xl font-semibold tracking-wider">
						Instrumental
					</span>
				</div>
				<Select
					defaultValue={actualInstrumento?.id.toString() ?? ""}
					onValueChange={value =>
						setActualInstrumento(
							sortedInstrumentos.find(i => i.id.toString() === value) ?? null
						)
					}
				>
					<SelectTrigger className="w-full max-w-48">
						<SelectValue placeholder="Seleccione Instrumental" />
					</SelectTrigger>
					<SelectContent position="popper">
						<SelectGroup>
							<SelectLabel>Instrumental</SelectLabel>
							{instrumentos?.map(instrumento => (
								<SelectItem
									key={instrumento.id}
									value={instrumento.id.toString()}
								>
									{instrumento.nombre.toUpperCase()} - {instrumento.marca} -{" "}
									{instrumento.modelo}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<article className="card dark:bg-(--dark-orange-opa) bg-(--orange-opa) flex-col gap-4 text-lg relative flex-1">
				<TextTooltip text={"Datos obtenidos a través del perfil."} />
				<div className="grid grid-cols-2 gap-4 w-full">
					<div className="flex flex-col gap-2 w-full">
						<label className="font-semibold" htmlFor="nombre">
							Nombre
						</label>
						<input
							id="nombre"
							className="bg-background py-2 px-4 rounded-lg text-center"
							value={actualInstrumento?.nombre.toUpperCase() ?? ""}
							readOnly
							placeholder="Ej. Luxometro"
						/>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<label className="font-semibold" htmlFor="marca">
							Marca
						</label>
						<input
							id="marca"
							className="bg-background py-2 px-4 rounded-lg text-center"
							value={actualInstrumento?.marca ?? ""}
							readOnly
							placeholder="Ej. Extech"
						/>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<label className="font-semibold" htmlFor="modelo">
							Modelo
						</label>
						<input
							id="modelo"
							className="bg-background py-2 px-4 rounded-lg text-center"
							value={actualInstrumento?.modelo ?? ""}
							readOnly
							placeholder="LT3000"
						/>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<label className="font-semibold" htmlFor="fechaCalibracion">
							Fecha de calibración
						</label>
						<input
							id="fechaCalibracion"
							className="bg-background py-2 px-4 rounded-lg text-center"
							value={actualInstrumento?.fechaCalibracion ?? ""}
							readOnly
							placeholder="12-10-2025"
						/>
					</div>
					<FieldGroup className="flex flex-row items-center justify-center gap-4 w-full pt-4">
						<Field orientation="horizontal" className="flex justify-center">
							<Checkbox
								id="cert-checkbox"
								name="cert-checkbox"
								className="dark:bg-background"
								checked={
									actualInstrumento?.imagenes &&
									actualInstrumento.imagenes.length > 0
								}
							/>
							<Label htmlFor="cert-checkbox" className="sm:text-lg 2xl:text-xl">
								imagen certificado
							</Label>
						</Field>
					</FieldGroup>
				</div>
			</article>
		</div>
	)
}

const Skelton = () => {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="bg-orange-700/75 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<Cpu className="size-6" />
					</div>
					<span className="text-xl font-semibold tracking-wider">
						Instrumental
					</span>
				</div>
				<Select>
					<SelectTrigger className="w-full max-w-48">
						<SelectValue placeholder="Seleccione Instrumental" />
					</SelectTrigger>
					<SelectContent position="popper">
						<SelectGroup>
							<SelectLabel>Instrumental</SelectLabel>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<article className="card dark:bg-(--dark-orange-opa) bg-(--orange-opa) flex-col gap-4 text-lg relative flex-1">
				<TextTooltip text={"Datos obtenidos a través del perfil."} />
				<div className="grid grid-cols-2 gap-4 w-full">
					<div className="flex flex-col gap-2 w-full">
						<label className="font-semibold" htmlFor="nombre">
							Nombre
						</label>
						<input
							id="nombre"
							className="bg-background py-2 px-4 rounded-lg text-center"
							readOnly
							placeholder=". . ."
						/>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<label className="font-semibold" htmlFor="marca">
							Marca
						</label>
						<input
							id="marca"
							className="bg-background py-2 px-4 rounded-lg text-center"
							readOnly
							placeholder=". . ."
						/>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<label className="font-semibold" htmlFor="modelo">
							Modelo
						</label>
						<input
							id="modelo"
							className="bg-background py-2 px-4 rounded-lg text-center"
							readOnly
							placeholder=". . ."
						/>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<label className="font-semibold" htmlFor="fechaCalibracion">
							Fecha de calibración
						</label>
						<input
							id="fechaCalibracion"
							className="bg-background py-2 px-4 rounded-lg text-center"
							readOnly
							placeholder=". . ."
						/>
					</div>
					<FieldGroup className="flex flex-row items-center justify-center gap-4 w-full pt-4">
						<Field orientation="horizontal" className="flex justify-center">
							<Checkbox
								id="cert-checkbox"
								name="cert-checkbox"
								className="dark:bg-background"
							/>
							<Label htmlFor="cert-checkbox" className="sm:text-lg 2xl:text-xl">
								imagen certificado
							</Label>
						</Field>
					</FieldGroup>
				</div>
			</article>
		</div>
	)
}
