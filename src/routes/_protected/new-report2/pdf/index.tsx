import LoadingMovil from "@/components/layout/loading-movil"
import { MyDocument } from "@/components/pdfs/my-document"
import { PDFViewer } from "@react-pdf/renderer"
import { useSuspenseQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { instrumentosQueryOptions } from "queries/instrumentos/instrumentos-query"
import { part1DataQueryOptions } from "queries/new-report/part1/nrpart1-query"
import { part2DataQueryOptions } from "queries/new-report/part2/nrpart2-query"
import { part3DataQueryOptions } from "queries/new-report/part3/nrpart3-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"

import { Suspense } from "react"

export const Route = createFileRoute("/_protected/new-report2/pdf/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<Suspense fallback={<LoadingMovil />}>
			<PDFContent />
		</Suspense>
	)
}

function PDFContent() {
	const { data: tecnico } = useSuspenseQuery(tecnicoQueryOptions)
	const { data: empresas } = useSuspenseQuery(empresasQueryOptions)
	const { data: instrumentos } = useSuspenseQuery(instrumentosQueryOptions)
	const { data: part1Data } = useSuspenseQuery(part1DataQueryOptions)
	const { data: part2Data } = useSuspenseQuery(part2DataQueryOptions)
	const { data: part3Data } = useSuspenseQuery(part3DataQueryOptions)

	const empresaSelected = empresas?.find(
		empresa => empresa.id === part1Data?.empresaId
	)
	const instrumentoSelected = instrumentos?.find(
		instrumento => instrumento.id === part1Data?.instrumentoId
	)

	if (
		!tecnico ||
		!empresaSelected ||
		!instrumentoSelected ||
		!part1Data ||
		!part2Data ||
		!part3Data
	)
		return (
			<span className="italic textL text-sm text-foreground/50">
				Imposible generar el documento. Faltan datos!
			</span>
		)

	return (
		<PDFViewer width="100%" height="100%" className="min-h-screen w-full mt-30">
			<MyDocument
				tecnico={tecnico}
				empresa={empresaSelected}
				instrumento={instrumentoSelected}
				part1Data={part1Data}
				part2Data={part2Data}
				part3Data={part3Data}
			/>
		</PDFViewer>
	)
}
