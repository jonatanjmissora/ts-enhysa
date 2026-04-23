import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSuspenseQuery } from "@tanstack/react-query"
import { InstrumentoType } from "db/instrumentos/schema"
import { Pencil, Ellipsis } from "lucide-react"
import { instrumentosQueryOptions } from "queries/instrumentos/instrumentos-query"
import { Suspense } from "react"
import DeleteInstrumento from "./delete-instrumento"

export default function ProfileInstrumentos() {
	return (
		<Suspense
			fallback={
				<span className="p-20 text-foreground/70">
					Cargando Instrumentos ...
				</span>
			}
		>
			<InstrumentosList />
		</Suspense>
	)
}
function InstrumentosList() {
	const { data: instrumentos } = useSuspenseQuery(instrumentosQueryOptions)

	if (!instrumentos || instrumentos.length === 0) return <InstrumentosVacios />

	return (
		<Accordion
			type="single"
			collapsible
			defaultValue=""
			className="flex flex-col gap-2 w-11/12 mx-auto py-4"
		>
			{instrumentos.map(instrumento => (
				<AccordionItem
					key={instrumento.id}
					value={instrumento.id}
					className="border-b border-foreground/10 last:border-b-0"
				>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center">
						<div className="flex items-center gap-2 textM text-sm sm:text-base w-60 sm:w-max truncate">
							{instrumento.nombre.toUpperCase()} -{" "}
							{instrumento.modelo.toUpperCase()}
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<Instrumento instrumento={instrumento} />
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}

const Instrumento = ({ instrumento }: { instrumento: InstrumentoType }) => {
	return (
		<div className="bg-accent sm:bg-background py-10 sm:p-10 flex items-center justify-center flex-col relative border border-purple-700 dark:border-purple-600">
			<DeleteInstrumento instrumento={instrumento} />
			<Ellipsis className="sm:hidden block absolute top-4 right-5 size-6 cursor-pointer text-foreground/50" />
			<div className="grid-cols-1 grid sm:grid-cols-2 gap-8 w-5/6 my-10">
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="marca">
						Marca
					</Label>
					<Input
						id="marca"
						placeholder="Marca"
						value={instrumento.marca.toUpperCase()}
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="cargo">
						Modelo
					</Label>
					<Input
						id="modelo"
						placeholder="Modelo"
						value={instrumento.modelo.toUpperCase()}
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="serie">
						Nro Serie
					</Label>
					<Input
						id="serie"
						placeholder="Serie"
						value={instrumento.serie}
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="calibracion">
						Calibración
					</Label>
					<Input
						id="calibracion"
						placeholder="Calibracion"
						value={instrumento.fechaCalibracion}
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label>Imágenes</Label>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/luxometro.jpg" alt="luxometro" className="size-20" />
					</div>
				</div>

				<div className="flex flex-col gap-1">
					<Label>Certificado</Label>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/calibracion.webp" alt="luxometro" className="size-20" />
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

function InstrumentosVacios() {
	return (
		<p className="py-10 text-center w-full text-pretty textM italic text-foreground/70">
			Todavia no tiene instrumentos cargados.
		</p>
	)
}
