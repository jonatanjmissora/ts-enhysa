import { RulerDimensionLine } from "lucide-react"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Dispatch, SetStateAction, Suspense } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { part2DataQueryOptions } from "queries/new-report/part2/nrpart2-query"
import { Part2DataType } from "db/new-report/part2/schema"
import { Label } from "@/components/ui/label"
import DeletePart2DataAlert from "./delete-area"
import MovilCreateAreaAlert from "./create-area"
import MovilEditAreaAlert from "./editar-area"

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
			<Suspense fallback={<Part2DataSkeleton />}>
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

	return (
		<article className="w-full flex flex-col justify-center items-center">
			{!part2Data ? (
				<div className="w-full pt-10 flex flex-col gap-4 items-center justify-center textM text-sm sm:text-base italic">
					<p>Agregue una nueva area de trabajo.</p>
				</div>
			) : (
				<AreaAccordion part2Data={part2Data} />
			)}

			<MovilCreateAreaAlert />

			<div className="flex items-center gap-2 w-11/12">
				<button
					onClick={() => setReportStep?.(1)}
					className="card py-2 px-4 my-20 flex items-center justify-center gap-2 w-1/2 textM text-sm bg-accent my-shadow"
				>
					Volver
				</button>

				<button
					onClick={() => setReportStep?.(3)}
					className={`w-1/2 themeBtnBackground py-2 rounded-lg textL text-sm sm:text-base my-shadow ${part2Data && part2Data.length > 0 ? "" : "opacity-20 cursor-not-allowed shadow-none"} `}
					disabled={!part2Data || part2Data.length === 0}
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
						<Part2DataArea area={area} />
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}

function Part2DataSkeleton() {
	return (
		<div className="w-full pt-10 flex flex-col gap-2 items-center justify-center textM text-sm sm:text-base italic">
			<span className="animate-pulse card py-2 w-5/6 mx-auto bg-accent/20 h-8 shadow-none justify-center">
				. . .
			</span>
			<span className="animate-pulse card py-2 w-5/6 mx-auto bg-accent/20 h-8 shadow-none justify-center">
				. . .
			</span>
		</div>
	)
}

function Part2DataArea({ area }: { area: Part2DataType }) {
	const celdasMedidas = area.puntos.filter(punto => punto > 0)
	const uniformidad = Math.ceil(
		celdasMedidas.reduce((acc, valor) => acc + valor, 0) /
			celdasMedidas.length /
			2
	)

	return (
		<div className="w-full card border-0 bg-accent sm:bg-background flex flex-col justify-center items-center p-0 py-10">
			<div className="w-5/6 grid grid-cols-2 gap-3 border-b border-foreground/10 pb-2">
				<Label className="textL text-sm place-content-end">Nombre : </Label>
				<span className="textL text-sm">{area.nombre.toUpperCase()}</span>

				<Label className="place-content-end textL text-sm">Tipo : </Label>
				<span className="text-left textL text-sm">
					{area.tipo.toUpperCase()}
				</span>
			</div>
			<div className="w-5/6 grid grid-cols-2 gap-3 border-b border-foreground/10 py-2">
				<Label className="place-content-end textL text-sm">ilum. Tipo :</Label>
				<span className="text-left textL text-sm">
					{area.iluminacionTipo.toUpperCase()}
				</span>

				<Label className="place-content-end textL text-sm">
					ilum. Fuente :{" "}
				</Label>
				<span className="text-left textL text-sm">
					{area.iluminacionFuente.toUpperCase()}
				</span>

				<Label className="place-content-end textL text-sm">
					iluminación :{" "}
				</Label>
				<span className="text-left textL text-sm">
					{area.iluminacion.toUpperCase()}
				</span>

				<Label className="place-content-end textL text-sm">Valor Req. : </Label>
				<span className="text-left textL text-sm">
					{area.valorRequerido.toUpperCase()} lm
				</span>

				<Label className="place-content-end textL text-sm">
					Observaciones :{" "}
				</Label>
				<span className="text-left textL text-sm">
					{area.observaciones.toUpperCase()}
				</span>
			</div>
			<div className="w-5/6 grid grid-cols-2 gap-3 border-b border-foreground/10 py-2">
				<Label className="place-content-end textL text-sm">Largo : </Label>
				<span className="text-left textL text-sm">
					{area.largo.toFixed(0)} mts.
				</span>

				<Label className="place-content-end textL text-sm">Ancho : </Label>
				<span className="text-left textL text-sm">
					{area.ancho.toFixed(0)} mts.
				</span>

				<Label className="place-content-end textL text-sm">Alto : </Label>
				<span className="text-left textL text-sm">
					{area.alto.toFixed(0)} mts.
				</span>

				<Label className="place-content-end textL text-sm">
					Celdas medidas :{" "}
				</Label>
				<span className="text-left textL text-sm">
					{celdasMedidas.length}/{area.puntos.length}
				</span>
			</div>
			<div className="w-5/6 grid grid-cols-2 gap-3 border-b border-foreground/10 py-2">
				{area.puntos.map((punto, index) => (
					<div
						key={index}
						className={`flex gap-2 justify-center items-center ${punto > 0 ? "bg-background" : "bg-accent"} p-1 rounded-sm`}
					>
						<Label className="textL text-sm text-foreground/50">
							Punto {index + 1} :{" "}
						</Label>
						<span className="textL text-sm">{punto.toFixed(0)} lm</span>
					</div>
				))}
			</div>

			<div className="w-full flex justify-center items-center gap-2 mt-4">
				<span className="text-left textL text-sm italic">
					Uniformidad de iluminancia:
				</span>
				<span className="text-left textL text-sm font-bold">{uniformidad}</span>
			</div>

			<div className="w-5/6 flex gap-4 justify-betwen items-center h-20 mt-10">
				<DeletePart2DataAlert area={area} />
				<MovilEditAreaAlert area={area} />
			</div>
		</div>
	)
}
