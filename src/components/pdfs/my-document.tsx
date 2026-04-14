import { Document, Font } from "@react-pdf/renderer"
import Page1 from "./page-1"
import Page2 from "./page-2"
import Page3 from "./page-3"
import {
	ClimaType,
	CroquisType,
	Part1DataType,
	Part3DataType,
	PuntoType,
	SectorType,
} from "@/lib/types"
import { TecnicoType } from "db/tecnicos/schema"
import { EmpresaType } from "db/empresas/schema"
import { InstrumentoType } from "db/instrumentos/schema"

Font.register({
	family: "Roboto",
	src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
})

export const MyDocument = ({
	tecnico,
	empresa,
	instrumento,
	part1Data,
	sector,
	clima,
	croquis,
	puntos,
	part3Data,
}: {
	tecnico: TecnicoType
	empresa: EmpresaType
	instrumento: InstrumentoType
	part1Data: Part1DataType
	sector: SectorType
	clima: ClimaType
	croquis: CroquisType
	puntos: PuntoType[]
	part3Data: Part3DataType
}) => (
	<Document>
		<Page1
			tecnico={tecnico}
			empresa={empresa}
			instrumento={instrumento}
			sector={sector}
			clima={clima}
		/>
		<Page2 />
		<Page3 />
	</Document>
)
