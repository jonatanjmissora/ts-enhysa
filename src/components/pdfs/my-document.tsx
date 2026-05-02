import { Document, Font } from "@react-pdf/renderer"
import Page1 from "./page-1"

import { TecnicoType } from "db/tecnicos/schema"
import { EmpresaType } from "db/empresas/schema"
import { InstrumentoType } from "db/instrumentos/schema"
import { getPuntosSortedByTimestamp } from "@/lib/utils"
import { Part1DataType } from "db/new-report/part1/schema"
import { Part2DataType } from "db/new-report/part2/schema"
import { Part3DataType } from "db/new-report/part3/schema"
import Page2 from "./page-2"
import Page3 from "./page-3"

Font.register({
	family: "Roboto",
	src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
})

export const MyDocument = ({
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
}) => {
	const membreteSupDerecho = [
		"Seguridad e Higiene en el trabajo",
		"Informe técnico - Medición de iluminación",
	]

	const [firstPunto, lastPunto] = getPuntosSortedByTimestamp(part2Data)
	const fecha = new Date(firstPunto).toLocaleDateString()
	const horaInicio = new Date(firstPunto)
		.toLocaleTimeString("it-IT")
		.substring(0, 5)
	const horaFin = new Date(lastPunto)
		.toLocaleTimeString("it-IT")
		.substring(0, 5)

	const actualFecha = new Date().toLocaleDateString()
	const nombreArchivo = `${empresa.razonSocial}_${actualFecha}`

	return (
		<Document title={nombreArchivo}>
			<Page1
				membreteSupDerecho={membreteSupDerecho}
				tecnico={tecnico}
				empresa={empresa}
				instrumento={instrumento}
				observaciones={part3Data.observacion}
				clima={`${part1Data.clima} - humedad: ${part1Data.humedad}% - temperatura: ${part1Data.temperatura}°C`}
				tiempo={{ fecha, horaInicio, horaFin }}
			/>
			{part2Data?.map(area => (
				<Page2
					key={area.id}
					empresa={empresa}
					area={area}
					membreteSupDerecho={membreteSupDerecho}
					tecnico={tecnico}
				/>
			))}
			<Page3
				empresa={empresa}
				part3Data={part3Data}
				membreteSupDerecho={membreteSupDerecho}
				tecnico={tecnico}
			/>
			{/*<Page4
				sector={sector}
				croquis={croquis}
				puntos={puntos}
				membreteSupDerecho={membreteSupDerecho}
				tecnico={tecnico}
			/> */}
		</Document>
	)
}
