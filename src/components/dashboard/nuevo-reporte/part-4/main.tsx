import { MyDocument } from "@/components/pdfs/my-document"
import {
	ClimaType,
	CroquisType,
	Part1DataType,
	Part3DataType,
	PuntoType,
	SectorType,
} from "@/lib/types"
import { PDFViewer } from "@react-pdf/renderer"
import { useSuspenseQuery } from "@tanstack/react-query"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { instrumentosQueryOptions } from "queries/instrumentos/instrumentos-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { Suspense } from "react"

export default function NewReportPart4({
	actualStep,
	part1Data,
	sector,
	clima,
	croquis,
	puntos,
	part3Data,
}: {
	actualStep: number
	part1Data: Part1DataType
	sector: SectorType
	clima: ClimaType
	croquis: CroquisType
	puntos: PuntoType[]
	part3Data: Part3DataType
}) {
	return (
		<main
			className={`${actualStep === 4 ? "flex-1" : "hidden"} p-20 sm:py-10 2xl:py-20 flex flex-col gap-10 justify-center`}
		>
			<Suspense fallback={<div>Cargando...</div>}>
				<Report
					part1Data={part1Data}
					sector={sector}
					clima={clima}
					croquis={croquis}
					puntos={puntos}
					part3Data={part3Data}
				/>
			</Suspense>
		</main>
	)
}

const Report = ({
	part1Data,
	sector,
	clima,
	croquis,
	puntos,
	part3Data,
}: {
	part1Data: Part1DataType
	sector: SectorType
	clima: ClimaType
	croquis: CroquisType
	puntos: PuntoType[]
	part3Data: Part3DataType
}) => {
	const { data: tecnico } = useSuspenseQuery(tecnicoQueryOptions)
	const { data: empresas } = useSuspenseQuery(empresasQueryOptions)
	const { data: instrumentos } = useSuspenseQuery(instrumentosQueryOptions)

	if (!tecnico || !empresas || !instrumentos) {
		return <h2>Imposible elaborar el informe, faltan datos.</h2>
	}

	return (
		<PDFViewer width="100%" height="100%" className="min-h-[300dvh] w-full">
			<MyDocument
				tecnico={tecnico}
				empresa={empresas[part1Data.empresaIndex]}
				instrumento={instrumentos[part1Data.instrumentoIndex]}
				part1Data={part1Data}
				sector={sector}
				clima={clima}
				croquis={croquis}
				puntos={puntos}
				part3Data={part3Data}
			/>
		</PDFViewer>
	)
}
