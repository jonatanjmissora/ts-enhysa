import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSuspenseQuery } from "@tanstack/react-query"
import { EmpresaType } from "db/empresas/schema"
import { Ellipsis, Pencil } from "lucide-react"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { Suspense } from "react"
import DeleteEmpresa from "./delete-empresa"

export default function ProfileEmpresas() {
	return (
		<Suspense
			fallback={
				<span className="p-20 text-foreground/70">Cargando Empresas ...</span>
			}
		>
			<EmpresasList />
		</Suspense>
	)
}

function EmpresasList() {
	const { data: empresas } = useSuspenseQuery(empresasQueryOptions)

	if (!empresas || empresas.length === 0) return <EmpresasVacias />

	return (
		<Accordion
			type="single"
			collapsible
			defaultValue=""
			className="flex flex-col gap-2 w-11/12 mx-auto py-4"
		>
			{empresas.map(empresa => (
				<AccordionItem
					key={empresa.id}
					value={empresa.id}
					className="border-b border-foreground/10 last:border-b-0"
				>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center">
						<div className="flex items-center gap-2 textM text-sm sm:text-base w-60 sm:w-max truncate">
							{empresa.razonSocial.toUpperCase()} -{" "}
							{empresa.direccion.toUpperCase()} - {empresa.cuit}
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<Empresa empresa={empresa} />
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}

const Empresa = ({ empresa }: { empresa: EmpresaType }) => {
	return (
		<div className="bg-accent sm:bg-background py-10 sm:p-10 flex items-center justify-center flex-col relative border border-orange-700 dark:border-orange-600">
			<DeleteEmpresa empresa={empresa} />
			<Ellipsis className="sm:hidden block absolute top-4 right-5 size-6 cursor-pointer text-foreground/50" />
			<div className="grid-cols-1 grid sm:grid-cols-2 gap-8 w-5/6 my-10">
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="razon-social">
						Razón Social
					</Label>
					<Input
						id="razon-social"
						placeholder="Nombre de la empresa"
						value={empresa.razonSocial.toUpperCase()}
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="cuit">
						CUIT
					</Label>
					<Input
						id="cuit"
						placeholder="00-00000000-0"
						value={empresa.cuit}
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<Label className="tracking-wider" htmlFor="direccion">
						Dirección
					</Label>
					<Input
						id="direccion"
						placeholder="Calle, Altura"
						value={empresa.direccion.toUpperCase()}
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
						value={empresa.localidad.toUpperCase()}
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
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
				</div>
				<div className="flex flex-col gap-1">
					<Label>Logo</Label>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/telefonica.png" alt="luxometro" className="size-20" />
					</div>
				</div>
			</div>
			<div className="sm:block hidden my-10 w-5/6">
				<button className="card bg-background sm:bg-accent rounded-lg cursor-pointer textM py-2 w-2/3 sm:w-1/4 justify-center gap-4 ml-auto">
					<Pencil className="size-6 text-foreground/70" />
					Editar
				</button>
			</div>
		</div>
	)
}

function EmpresasVacias() {
	return (
		<p className="m-10 text-center w-full text-pretty textM italic text-foreground/70">
			Todavia no tiene empresas cargadas.
		</p>
	)
}
