import { Part2DataType, Part3DataType } from "@/lib/types2"
import { Part1DataType } from "db/new-report/part1/schema"
import { Dispatch, SetStateAction } from "react"

export default function Final({
	setReportStep,
	part1Data,
	part2Data,
	part3Data,
}: {
	setReportStep: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
	part1Data: Part1DataType
	part2Data: Part2DataType
	part3Data: Part3DataType
}) {
	return (
		<section className="w-5/6 mx-auto mt-10 flex flex-col gap-10">
			<div className="flex flex-col gap-2">
				<p>PART1</p>

				<div>
					<p>EmpresaId: {part1Data.empresaId}</p>
					<p>InstrumentoId: {part1Data.instrumentoId}</p>
					<p>Clima: {part1Data.clima}</p>
				</div>
			</div>

			<p>PART2</p>
			<p>{JSON.stringify(part2Data)}</p>

			<p>PART3</p>
			<p>{JSON.stringify(part3Data)}</p>

			<button
				className="w-1/2 mx-auto bg-blue-500 py-2 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-600 transition-all"
				onClick={() => setReportStep(1)}
			>
				Volver al inicio
			</button>
		</section>
	)
}
