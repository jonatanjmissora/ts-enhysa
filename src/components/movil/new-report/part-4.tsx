import { Label } from "@/components/ui/label"
import { ChartAreaInteractive } from "./chart"
import { useSuspenseQuery } from "@tanstack/react-query"
import { ListChecks } from "lucide-react"
import { part2DataQueryOptions } from "queries/new-report/part2/nrpart2-query"
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react"
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select"
import { Link } from "@tanstack/react-router"

export default function MovilPart4Data({
	setReportStep,
}: {
	setReportStep: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
}) {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0)
		}
	}, [])

	return (
		<Suspense fallback={<Part4DataSkeleton />}>
			<Part4Data setReportStep={setReportStep} />
		</Suspense>
	)
}

function Part4Data({
	setReportStep,
}: {
	setReportStep: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
}) {
	const { data: areas } = useSuspenseQuery(part2DataQueryOptions)
	const [areaId, setAreaId] = useState(areas?.[0]?.id || "")

	if (!areas) {
		return (
			<span className="textL text-sm italic">No hay datos para graficar</span>
		)
	}

	const areaData = areas.find(area => area.id === areaId)

	if (!areaData) {
		return (
			<span className="textL text-sm italic">No hay datos para graficar</span>
		)
	}

	const puntosWithValue = areaData?.puntos?.filter(punto => punto > 0)
	if (!puntosWithValue || puntosWithValue.length === 0)
		return <span>No hay datos</span>
	const uniformidad = Math.ceil(
		puntosWithValue?.reduce((acc, valor) => acc + valor, 0) /
			puntosWithValue?.length /
			2
	)

	return (
		<article className="w-full flex flex-col justify-center items-center">
			<div className="flex items-center justify-between w-full rounded border-b border-pink-500/25 m-10 sm:border-none sm:bg-pink-500/15">
				<div className="textXL py-2 flex items-center gap-8 justify-between w-full sm:w-max">
					Resumen <ListChecks className="sm:size-7 2xl:size-9" />
				</div>
			</div>
			<Label className="textL text-xl mr-auto">Area</Label>
			<Select value={areaId} onValueChange={setAreaId}>
				<SelectTrigger
					className="w-full rounded-lg gap-8"
					aria-label="Select a value"
				>
					<SelectValue placeholder="Seleccione Area" />
				</SelectTrigger>
				<SelectContent className="p-2 w-full">
					{areas.map(area => (
						<SelectItem key={area.id} value={area.id} className="p-4">
							{area.nombre.toUpperCase()} - {area.tipo.toUpperCase()}
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			<ChartAreaInteractive area={areaData} />

			<div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 w-5/6 mx-aut my-10">
				<span>Uniformidad : </span>
				<span>{uniformidad}</span>

				<span>Valor Mínimo : </span>
				<span>{minValue(puntosWithValue)} lux</span>

				<span>Valor Máximo : </span>
				<span>{maxValue(puntosWithValue)} lux</span>

				<span>Puntos Medidos : </span>
				<span>{puntosWithValue.length}</span>

				<span>Valor Requerido : </span>
				<span>{areaData.valorRequerido} lux</span>

				<span>Cumplen valor requerido : </span>
				<span>
					{puntosWithValue.every(
						punto => punto >= Number(areaData.valorRequerido)
					)
						? "SI"
						: "NO"}
				</span>
			</div>

			<div className="flex flex-row justify-center gap-5 sm:gap-10 items-center w-full mx-auto mt-10 p-0">
				<button
					type="button"
					onClick={() => setReportStep(3)}
					className="card w-1/2 py-2 px-4 flex items-center justify-center gap-2 mx-auto textM text-sm bg-accent"
				>
					Volver
				</button>

				<Link
					to="/iluminacion/pdf"
					className="themeBtnBackground py-2 rounded-lg textL text-sm sm:text-base w-1/2 flex items-center justify-center"
				>
					<span>Generar PDF</span>
				</Link>
			</div>
		</article>
	)
}

function Part4DataSkeleton() {
	return (
		<div className="w-full pt-10 flex flex-col gap-2 items-center justify-center textM text-sm sm:text-base italic">
			<span className="animate-pulse card py-2 w-5/6 mx-auto bg-accent/20 h-8 shadow-none">
				CARGANDO
			</span>
		</div>
	)
}

function minValue(puntos: number[]) {
	return puntos.reduce((min, punto) => Math.min(min, punto), Infinity)
}

function maxValue(puntos: number[]) {
	return puntos.reduce((max, punto) => Math.max(max, punto), -Infinity)
}
