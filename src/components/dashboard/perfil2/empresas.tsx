import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
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
					<label className="tracking-wider" htmlFor="razon-social">
						Razón Social
					</label>
					<input
						id="razon-social"
						placeholder="Nombre de la empresa"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						value="TELEFONICA S.A"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="cuit">
						CUIT
					</label>
					<input
						id="cuit"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						placeholder="00-00000000-0"
						value="30-58114785-2"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label className="tracking-wider" htmlFor="direccion">
						Dirección
					</label>
					<input
						id="direccion"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						placeholder="Calle, Altura"
						value="BERUTI 70"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label className="tracking-wider" htmlFor="cant-empleados">
						Localidad
					</label>
					<input
						id="localidad"
						placeholder="Ciudad, Provincia, Pais"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						value="BAHIA BLANCA"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label className="tracking-wider" htmlFor="cant-empleados">
						CP
					</label>
					<input
						id="codigoPostal"
						placeholder="Ciudad, Provincia, Pais"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						value="8000"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label className="tracking-wider" htmlFor="cant-empleados">
						Provincia
					</label>
					<input
						id="provincia"
						placeholder="Ciudad, Provincia, Pais"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						value="BUENOS AIRES"
						readOnly
					/>
				</div>
			</div>
			<div className=" my-10 w-5/6">
				<button className="card bg-background rounded-lg cursor-pointer textM py-2 w-2/3 sm:w-1/4 justify-center gap-4 ml-auto">
					<Pencil className="size-6 text-foreground/70" />
					Editar
				</button>
			</div>
		</div>
	)
}
