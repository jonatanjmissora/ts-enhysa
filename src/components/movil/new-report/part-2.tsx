import { Edit, Loader, RulerDimensionLine, Trash2 } from "lucide-react"
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
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useRouter } from "@tanstack/react-router"
import { useForm } from "@tanstack/react-form"
import { nrPart2IdValidator } from "db/new-report/part2/nrpart2-validator"
import { toast } from "sonner"
import { useDeleteNRpart2 } from "queries/new-report/part2/use-delete-empresa"

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
						<MovilCreateArea setOpen={setOpen} />
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
					className={`card py-2 px-4 my-20 flex items-center justify-center gap-2 mx-auto w-5/6  textM text-sm  ${part2Data && part2Data.length > 0 ? "bg-accent" : "opacity-30 cursor-not-allowed"} `}
					disabled={part2Data && part2Data.length > 0}
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
			<span className="animate-pulse card py-2 w-5/6 mx-auto bg-accent/20 h-8 shadow-none"></span>
			<span className="animate-pulse card py-2 w-5/6 mx-auto bg-accent/20 h-8 shadow-none"></span>
		</div>
	)
}

function Part2DataArea({ area }: { area: Part2DataType }) {
	const celdasMedidas = area.puntos.filter(punto => punto > 0)
	const uniformidad =
		celdasMedidas.reduce((acc, valor) => acc + valor, 0) /
		celdasMedidas.length /
		2

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
				<span className="text-left textL text-sm font-bold">
					{Math.ceil(uniformidad)}
				</span>
			</div>

			<div className="w-5/6 flex gap-4 justify-betwen items-center h-20 mt-10">
				<DeletePart2DataAlert area={area} />
				<button className="card py-2 px-4 my-20 flex items-center justify-center gap-2 w-max textM text-sm  bg-accent hover:bg-accent/90 ml-auto">
					<Edit className="size-4" />
					Editar
				</button>
			</div>
		</div>
	)
}

function DeletePart2DataAlert({ area }: { area: Part2DataType }) {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild className="hover:bg-accent">
				<Button variant={"destructive"} className="my-shadow">
					<Trash2 className="size-4 " />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-8 sm:p-20 sm:py-15 2xl:py-20 bg-accent/80 backdrop-blur-xl w-full sm:w-1/2 min-h-[50dvh]">
				<AlertDialogTitle className="h-max sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2 border-b border-foreground/20 w-full mb-10">
					Eliminar Empresa
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center">
					<DeletePart2DataForm area={area} setOpen={setOpen} />
				</AlertDialogDescription>
			</AlertDialogContent>
		</AlertDialog>
	)
}

function DeletePart2DataForm({
	area,
	setOpen,
}: {
	area: Part2DataType
	setOpen: (open: boolean) => void
}) {
	const {
		mutateAsync: deleteAreaMutation,
		error,
		isPending,
	} = useDeleteNRpart2(area.id)

	const router = useRouter()
	const form = useForm({
		defaultValues: {
			id: area.id,
		},
		validators: {
			onSubmit: nrPart2IdValidator,
		},
		onSubmit: async ({ value }) => {
			const result = await deleteAreaMutation({ data: { id: value.id } })

			if (!result) {
				console.error("Error al eliminar la empresa", error)
				toast.error("Error al eliminar la empresa")
			}
			toast.success("Empresa eliminada exitosamente")
			router.invalidate()
		},
	})

	return (
		<form
			id="create-form"
			className="flex flex-col items-center justify-center gap-6"
			onSubmit={e => {
				e.preventDefault()
				form.handleSubmit()
			}}
		>
			<p className="text-center sm:text-lg 2xl:text-2xl font-semibold">
				¿Estás seguro de borrar {area.nombre.toUpperCase()}?
			</p>

			<p className="text-center opacity-50 sm:text-sm 2xl:text-base text-pretty w-3/4 mb-8">
				Esta acción no se puede deshacer. Esto eliminará permanentemente el dato
				de nuestros servidores.
			</p>

			<div className="flex justify-center items-center gap-2 w-full">
				<button
					type="button"
					onClick={() => {
						setOpen(false)
					}}
					className="w-1/2 cursor-pointer card p-[5px] justify-center my-shadow"
				>
					Cancelar
				</button>
				<Button
					type="submit"
					disabled={isPending}
					className="w-1/2 cursor-pointer my-shadow"
				>
					{isPending ? (
						<div className="flex gap-2 items-center justify-center">
							Eliminando... <Loader className="animate-spin size-4"></Loader>
						</div>
					) : (
						"Eliminar"
					)}
				</Button>
			</div>
			{error && (
				<p className="text-red-500 text-xs">Error al eliminar la empresa</p>
			)}
		</form>
	)
}
