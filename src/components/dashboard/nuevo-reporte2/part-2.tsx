import { Notebook, RulerDimensionLine } from "lucide-react"
import Part2Iluminacion from "./part-2-iluminacion"
import Part2Plano from "./part-2-plano"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Part2Data() {
	return (
		<article className="w-full flex flex-col justify-center items-center">
			<div className="flex items-center justify-between w-full px-5 rounded bg-orange-500/25">
				<div className="textXL py-3 flex items-center gap-8">
					Areas <RulerDimensionLine className="sm:size-7 2xl:size-9" />
				</div>
				<button className="card bg-background py-2 px-6 my-shadow">
					+ Nueva Area
				</button>
			</div>

			<Accordion
				type="single"
				collapsible
				defaultValue=""
				className="flex flex-col gap-2 w-full mt-5"
			>
				<AccordionItem
					value="plantaalta"
					className="border-b border-foreground/5 last:border-b-0"
				>
					<AccordionTrigger className="flex px-10 w-full border-b border-foreground/10 items-center">
						<div className="flex items-center gap-2 textXS">
							<Notebook className="size-4" />
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
						<div className="flex items-center gap-2 textXS">
							<Notebook className="size-4" />
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

			<button className="card bg-background py-2 px-4 my-20 flex items-center justify-center gap-2 mx-auto w-5/6 sm:w-1/3 textL">
				+ Agregar Area
			</button>
		</article>
	)
}

const NombreArea = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-3/4 mt-10">
			<div className="flex flex-col gap-1">
				<Label className="tracking-wider" htmlFor="matricula">
					Nombre del Sector
				</Label>
				<Input
					id="matricula"
					placeholder="N° Matrícula "
					defaultValue="Planta Baja"
					readOnly
					className="bg-background sm:bg-accent"
				/>
			</div>
			<div className="flex flex-col gap-1">
				<Label className="tracking-wider" htmlFor="matricula">
					Tipo de Sector
				</Label>
				<Input
					id="matricula"
					placeholder="N° Matrícula "
					defaultValue="Oficinas"
					readOnly
					className="bg-background sm:bg-accent"
				/>
			</div>
		</div>
	)
}
