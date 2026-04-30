import { RulerDimensionLine } from "lucide-react"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { Dispatch, SetStateAction, Suspense, useState } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { part2DataQueryOptions } from "queries/new-report/part2/nrpart2-query"
import { Part2DataType } from "db/new-report/part2/schema"
import MovilCreateArea from "./create-area"

export default function MovilPart2Data({
	setReportStep,
}: {
	setReportStep?: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
}) {
	return (
		<section>
			<div className="flex items-center justify-between w-full px-5 rounded border-b border-orange-500/25 mt-15 sm:mt-0 sm:border-none sm:bg-orange-500/15">
				<div className="w-full textXL py-3 flex items-center justify-between gap-8">
					<span>Areas </span>
					<RulerDimensionLine className="sm:size-7 2xl:size-9" />
				</div>
			</div>
			<Suspense fallback={<span className="animate-pulse">Cargando...</span>}>
				<Part2Data setReportStep={setReportStep} />
			</Suspense>
		</section>
	)
}

function Part2Data({
	setReportStep,
}: {
	setReportStep?: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
}) {
	const { data: part2Data } = useSuspenseQuery(part2DataQueryOptions)
	const [open, setOpen] = useState(false)

	return (
		<article className="w-full flex flex-col justify-center items-center">
			{!part2Data ? (
				<div className="w-full pt-10 flex flex-col gap-4 items-center justify-center textM text-sm sm:text-base italic">
					<p>Agregue una nueva area de trabajo.</p>
				</div>
			) : (
				<AreaAccordion part2Data={part2Data} />
			)}

			<AlertDialog open={open} onOpenChange={setOpen}>
				<AlertDialogTrigger asChild className="hover:bg-accent">
					<button className="card py-2 px-4 my-10 flex items-center justify-center gap-2 mx-auto w-5/6 sm:w-1/3 textM text-sm sm:text-base sm:bg-background bg-accent cursor-pointer">
						<span className="">+ Nueva Area</span>
					</button>
				</AlertDialogTrigger>
				<AlertDialogContent className="p-6 py-12 pb-40 sm:p-20 sm:py-15 2xl:py-20 bg-accent/80 backdrop-blur-xl w-full sm:w-1/2 h-screen sm:h-[95dvh] overflow-auto">
					<AlertDialogTitle className="h-max sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2 border-b border-foreground/20 w-full mb-10">
						Nueva Area
					</AlertDialogTitle>
					<AlertDialogDescription className="text-center">
						<MovilCreateArea />
					</AlertDialogDescription>
				</AlertDialogContent>
			</AlertDialog>

			<div className="flex items-center gap-2 w-full">
				<button
					onClick={() => setReportStep?.(1)}
					className="card py-2 px-4 my-20 flex items-center justify-center gap-2 mx-auto w-5/6 textM text-sm  bg-accent"
				>
					Volver
				</button>

				<button
					onClick={() => setReportStep?.(3)}
					className={`card py-2 px-4 my-20 flex items-center justify-center gap-2 mx-auto w-5/6  textM text-sm  ${!!part2Data ? "opacity-30 cursor-not-allowed" : "bg-accent"} `}
					disabled={!!part2Data}
				>
					Siguiente
				</button>
			</div>
		</article>
	)
}

const AreaAccordion = ({ part2Data }: { part2Data: Part2DataType[] }) => {
	return (
		<Accordion
			type="single"
			collapsible
			defaultValue=""
			className="flex flex-col gap-2 w-full mt-5"
		>
			{part2Data.map(area => (
				<AccordionItem
					key={area.id}
					value={area.id}
					className="border-b border-foreground/5 last:border-b-0"
				>
					<AccordionTrigger className="flex px-10 w-full border-b border-foreground/10 items-center">
						<div className="flex items-center gap-2 textXS">
							{`${area.nombre.toUpperCase()} - ${area.tipo.toUpperCase()}`}
						</div>
					</AccordionTrigger>
					<AccordionContent className="">
						<div className="w-full card border-0 bg-accent sm:bg-background flex flex-col justify-center items-center gap-20 p-0 sm:p-8 pb-20">
							MOSTRAR ACA UN MODAL
						</div>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
