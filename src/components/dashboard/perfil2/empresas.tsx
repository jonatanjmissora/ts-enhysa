import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, Trash2 } from "lucide-react"

export default function ProfileEmpresas() {
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
						Empresa 1 - direccion 1 - cuit 1
					</div>
				</AccordionTrigger>
				<AccordionContent>
					<Empresa />
				</AccordionContent>
			</AccordionItem>

			<AccordionItem
				value="empresa"
				className="border-b border-foreground/10 last:border-b-0"
			>
				<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center">
					<span className="flex items-center gap-3 textL w-60 truncate">
						Empresa 1 - direccion 1 - cuit 1
					</span>
				</AccordionTrigger>
				<AccordionContent>
					<Empresa />
				</AccordionContent>
			</AccordionItem>

			<AccordionItem
				value="instrumento"
				className="border-b border-foreground/10 last:border-b-0"
			>
				<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center">
					<span className="flex items-center gap-3 textL w-60 truncate">
						Empresa 1 - direccion 1 - cuit 1
					</span>
				</AccordionTrigger>
				<AccordionContent>
					<Empresa />
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

const Empresa = () => {
	return (
		<div className="bg-accent sm:bg-background py-10 sm:p-10 flex items-center justify-center flex-col relative">
			<Trash2 className="absolute bottom-22 left-10 sm:top-4 sm:right-10 size-6 cursor-pointer text-red-600/50" />
			<div className="grid-cols-1 grid sm:grid-cols-2 gap-8 w-5/6">
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="razon-social">
						Razón Social
					</Label>
					<Input
						id="razon-social"
						placeholder="Nombre de la empresa"
						value="TELEFONICA S.A"
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
						value="30-58114785-2"
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
						value="BERUTI 70"
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<Label className="tracking-wider" htmlFor="cant-empleados">
						Localidad
					</Label>
					<Input
						id="localidad"
						placeholder="Ciudad, Provincia, Pais"
						value="BAHIA BLANCA"
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<Label className="tracking-wider" htmlFor="cant-empleados">
						CP
					</Label>
					<Input
						id="codigoPostal"
						placeholder="Ciudad, Provincia, Pais"
						value="8000"
						readOnly
						className="bg-background sm:bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<Label className="tracking-wider" htmlFor="cant-empleados">
						Provincia
					</Label>
					<Input
						id="provincia"
						placeholder="Ciudad, Provincia, Pais"
						value="BUENOS AIRES"
						readOnly
						className="bg-background sm:bg-accent"
					/>
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
