import { Label } from "@/components/ui/label"
import { ChartAreaInteractive } from "./chart"
import { useSuspenseQuery } from "@tanstack/react-query"
import { ListChecks } from "lucide-react"
import { part2DataQueryOptions } from "queries/new-report/part2/nrpart2-query"
import { Suspense, useState } from "react"
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select"

export default function MovilPart4Data() {
	return (
		<Suspense fallback={<Part4DataSkeleton />}>
			<Part4Data />
		</Suspense>
	)
}

function Part4Data() {
	const { data: areas } = useSuspenseQuery(part2DataQueryOptions)
	const [areaId, setAreaId] = useState(areas?.[0]?.id || "")

	if (!areas) {
		return (
			<span className="textL text-sm italic">No hay datos para graficar</span>
		)
	}

	return (
		<article className="w-full flex flex-col justify-center items-center">
			<div className="flex items-center justify-between w-full px-5 rounded border-b border-pink-500/25 m-15 sm:mt-0 sm:border-none sm:bg-pink-500/15">
				<div className="textXL py-2 px-2 flex items-center gap-8 justify-between w-full sm:w-max">
					Resumen <ListChecks className="sm:size-7 2xl:size-9" />
				</div>
			</div>
			<Label className="textL text-xl mr-auto pb-2">Area</Label>
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

			<ChartAreaInteractive area={areas.find(area => area.id === areaId)} />
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
