import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2, Pencil } from "lucide-react"

export default function ProfileInstrumentos() {
	return (
		<Accordion
			type="single"
			collapsible
			defaultValue=""
			className="flex flex-col gap-2 w-11/12 mx-auto py-4"
		>
			<AccordionItem
				value="tecnico"
				className="border-b border-foreground/10 last:border-b-0"
			>
				<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center">
					<div className="flex items-center gap-2 textL w-60 truncate">
						Instrumento 1 - modelo 1
					</div>
				</AccordionTrigger>
				<AccordionContent>
					<Instrumento />
				</AccordionContent>
			</AccordionItem>

			<AccordionItem
				value="empresa"
				className="border-b border-foreground/10 last:border-b-0"
			>
				<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center">
					<span className="flex items-center gap-3 textL w-60 truncate">
						Instrumento 1 - modelo 1
					</span>
				</AccordionTrigger>
				<AccordionContent>
					<Instrumento />
				</AccordionContent>
			</AccordionItem>

			<AccordionItem
				value="instrumento"
				className="border-b border-foreground/10 last:border-b-0"
			>
				<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center">
					<span className="flex items-center gap-3 textL w-60 truncate">
						Instrumento 1 - modelo 1
					</span>
				</AccordionTrigger>
				<AccordionContent>
					<Instrumento />
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

const Instrumento = () => {
	return (
		<div className="bg-accent sm:bg-background py-10 sm:p-10 flex items-center justify-center flex-col relative">
			<Trash2 className="absolute bottom-22 left-10 sm:top-4 sm:right-10 size-6 cursor-pointer text-red-600/50" />
			<div className="grid-cols-1 grid sm:grid-cols-2 gap-8 w-5/6">
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="matricula">
						Marca
					</Label>
					<Input
						id="matricula"
						placeholder="N° Matrícula "
						defaultValue="LUXIS"
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="cargo">
						Modelo
					</Label>
					<Input
						id="cargo"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="EXO-4000"
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="cargo">
						Nro Serie
					</Label>
					<Input
						id="serie"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="12858752"
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="cargo">
						Calibración
					</Label>
					<Input
						id="fecha"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="12/10/25"
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<p className="tracking-wider text-left">Imágenes</p>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/luxometro.jpg" alt="luxometro" className="size-20" />
					</div>
				</div>

				<div className="flex flex-col gap-1">
					<p className="tracking-wider text-left">Certificado</p>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/calibracion.webp" alt="luxometro" className="size-20" />
					</div>
				</div>
			</div>
			<div className=" my-10 w-5/6">
				<button className="card bg-background sm:bg-accent rounded-lg cursor-pointer textM py-2 w-2/3 sm:w-1/4 justify-center gap-4 ml-auto">
					<Pencil className="size-6 text-foreground/70" />
					Editar
				</button>
			</div>
		</div>
	)
}
