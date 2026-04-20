import { Notebook, RulerDimensionLine } from "lucide-react"
import Part2Iluminacion from "./part-2-iluminacion"
import Part2Plano from "./part-2-plano"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion"

export default function Part2Data() {
	return (
		<article className="w-full flex flex-col justify-center items-center">
			<div className="flex items-center justify-between w-full px-5 rounded bg-orange-500/25">
				<div className="textXL py-3 flex items-center gap-8">
					Areas <RulerDimensionLine className="sm:size-7 2xl:size-9" />
				</div>
				<button className="card bg-background py-2 px-4 rounded-lg">
					+ Nueva Area
				</button>
			</div>

			<Accordion
				type="single"
				collapsible
				defaultValue=""
				className="flex flex-col gap-8 w-full"
			>
				<AccordionItem
					value="plantaalta"
					className="border-b border-foreground/5 last:border-b-0"
				>
					<AccordionTrigger className="flex px-10 w-full border-b border-foreground/10 items-center">
						<div className="flex items-center gap-2">
							<Notebook className="size-6" />
							PLANTA BAJA - DEPOSITO
						</div>
					</AccordionTrigger>
					<AccordionContent className="">
						<div className="w-full card border-0 bg-accent sm:bg-background flex flex-col justify-center items-center gap-20 p-0 sm:p-8 pb-20">
							<NombreArea />
							<Part2Iluminacion />
							<Part2Plano />
						</div>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					value="plantabaja"
					className="border-b border-foreground/5 last:border-b-0"
				>
					<AccordionTrigger className="flex px-10 w-full border-b border-foreground/10 items-center">
						<div className="flex items-center gap-2">
							<Notebook className="size-6" />
							PLANTA ALTA - OFICINAS
						</div>
					</AccordionTrigger>
					<AccordionContent className="">
						<div className="w-full card border-0 bg-accent sm:bg-background flex flex-col justify-center items-center gap-20 p-0 sm:p-8 pb-20">
							<NombreArea />
							<Part2Iluminacion />
							<Part2Plano />
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<button className="card bg-background py-2 px-4 rounded-lg my-20 flex items-center justify-center gap-2 mx-auto w-full sm:w-1/3 textL">
				+ Agregar Area
			</button>
		</article>
	)
}

const NombreArea = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-3/4 mt-10">
			<div className="flex flex-col gap-1">
				<label className="tracking-wider" htmlFor="matricula">
					Nombre del Sector
				</label>
				<input
					id="matricula"
					className="card sm:bg-accent bg-background py-2 px-4 rounded-lg text-center"
					placeholder="N° Matrícula "
					defaultValue="Planta Baja"
					readOnly
				/>
			</div>
			<div className="flex flex-col gap-1">
				<label className="tracking-wider" htmlFor="matricula">
					Tipo de Sector
				</label>
				<input
					id="matricula"
					className="card sm:bg-accent bg-background py-2 px-4 rounded-lg text-center"
					placeholder="N° Matrícula "
					defaultValue="Oficinas"
					readOnly
				/>
			</div>
		</div>
	)
}
