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
import { Dispatch, SetStateAction, useState } from "react"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import CreateNewAreaAlert from "./create-area"
import { Part2DataType } from "@/routes/_protected/new-report2"

export default function Part2Data({setReportStep, setPart2Data, part2Data}: {setReportStep?: Dispatch<SetStateAction<1 | 2 | 3 | 4>>, setPart2Data: (data: Part2DataType) => void, part2Data: Part2DataType} ) {
	return (
		<article className="w-full flex flex-col justify-center items-center">
			<div className="flex items-center justify-between w-full px-5 rounded border-b border-orange-500/25 mt-15 sm:mt-0 sm:border-none sm:bg-orange-500/15">
				<div className="w-full textXL py-3 flex items-center justify-between gap-8">
					<span>Areas </span>
					<RulerDimensionLine className="sm:size-7 2xl:size-9" />
				</div>
			</div>
			
			<AreaAccordion areas={[]} />

			<CreateNewAreaAlert />
			
			<div className="flex items-center gap-2 w-full">
			<button onClick={() => setReportStep && setReportStep(1)} className="card py-2 px-4 my-20 flex items-center justify-center gap-2 mx-auto w-5/6 sm:w-1/3 textM text-sm sm:text-base bg-accent sm:hidden">
				Volver
			</button>
			
			<button onClick={() => setReportStep && setReportStep(3)} className="card py-2 px-4 my-20 flex items-center justify-center gap-2 mx-auto w-5/6 sm:w-1/3 textM text-sm sm:text-base bg-accent sm:hidden">
				Siguiente
			</button>
			</div>
		</article>
	)
}



const AreaAccordion = ({areas}: {areas: any}) => {
	if (areas.length === 0) return (
		<div className="w-full pt-10 flex items-center justify-center textM text-sm sm:text-base italic">
			<p>Agregue una nueva area de trabajo.</p>
		</div>
	)
	return (
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