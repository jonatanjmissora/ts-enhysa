import LoadingMovil from "@/components/layout/loading-movil"
import { MyDocument } from "@/components/pdfs/my-document"
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer"
import { useSuspenseQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { instrumentosQueryOptions } from "queries/instrumentos/instrumentos-query"
import { part1DataQueryOptions } from "queries/new-report/part1/nrpart1-query"
import { part2DataQueryOptions } from "queries/new-report/part2/nrpart2-query"
import { part3DataQueryOptions } from "queries/new-report/part3/nrpart3-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"

import { Suspense } from "react"
import { ClientOnly } from "@/components/layout/client-only"
import { Download } from "lucide-react"
import { TecnicoType } from "db/tecnicos/schema"
import {
	EmpresaType,
	InstrumentoType,
	Part1DataType,
	Part2DataType,
	Part3DataType,
} from "db/schema"

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
		<ClientOnly
			fallback={
				<span className="italic textL text-foreground/50 w-full h-[30svh] flex items-center justify-center">
					Cargando visor de PDF...
				</span>
			}
		>
			<DownloadBtn
				tecnico={tecnico}
				empresa={empresaSelected}
				instrumento={instrumentoSelected}
				part1Data={part1Data}
				part2Data={part2Data}
				part3Data={part3Data}
			/>

			<PDFViewer
				width="100%"
				height="100%"
				className="min-h-screen w-full"
				showToolbar={false}
			>
				<MyDocument
					tecnico={tecnico}
					empresa={empresaSelected}
					instrumento={instrumentoSelected}
					part1Data={part1Data}
					part2Data={part2Data}
					part3Data={part3Data}
				/>
			</PDFViewer>

			<DownloadBtn
				tecnico={tecnico}
				empresa={empresaSelected}
				instrumento={instrumentoSelected}
				part1Data={part1Data}
				part2Data={part2Data}
				part3Data={part3Data}
			/>
		</ClientOnly>
	)
}

function DownloadBtn({
	tecnico,
	empresa,
	instrumento,
	part1Data,
	part2Data,
	part3Data,
}: {
	tecnico: TecnicoType
	empresa: EmpresaType
	instrumento: InstrumentoType
	part1Data: Part1DataType
	part2Data: Part2DataType[]
	part3Data: Part3DataType
}) {
	return (
		<div className="w-full my-3 mb-1 justify-center items-center flex">
			<PDFDownloadLink
				document={
					<MyDocument
						tecnico={tecnico}
						empresa={empresa}
						instrumento={instrumento}
						part1Data={part1Data}
						part2Data={part2Data}
						part3Data={part3Data}
					/>
				}
				fileName={`${empresa.razonSocial}_${new Date().toLocaleDateString("it-IT")}.pdf`}
			>
				{({ loading }) => (
					<button className="themeBtnBackground py-1 px-6 rounded-lg text-xs tracking-widest">
						{loading ? (
							"Loading..."
						) : (
							<span className="flex items-center justify-center gap-2">
								<Download size={12} />
								DOWNLOAD
							</span>
						)}
					</button>
				)}
			</PDFDownloadLink>
		</div>
	)
}
