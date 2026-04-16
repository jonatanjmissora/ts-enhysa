import { Textarea } from "@/components/ui/textarea"
import { List, Notebook, Search } from "lucide-react"
import { Part3DataType } from "@/lib/types"

export default function NewReportPart3Observaciones({
	part3Data,
	setPart3Data,
}: {
	part3Data: Part3DataType
	setPart3Data: (data: Part3DataType) => void
}) {
	return (
		<div className="w-full flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<label
					htmlFor="observaciones"
					className="font-semibold tracking-wider 2xl:text-lg flex items-center gap-3"
				>
					<Search size={16} color="orange" /> Observaciones
				</label>
				<Textarea
					id="observaciones"
					placeholder={`Las observaciones generales de toda la medición, en base a todos los sectores descriptos. "Sin observaciónes" quedará por defecto si no completa este campo.`}
					className="w-full bg-background min-h-40 p-4"
					value={part3Data.observacion}
					onChange={e =>
						setPart3Data({ ...part3Data, conclusion: e.target.value })
					}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label
					htmlFor="conclusion"
					className="font-semibold tracking-wider 2xl:text-lg flex items-center gap-3"
				>
					<Notebook size={16} color="orange" /> Conclusiones
				</label>
				<Textarea
					id="conclusion"
					placeholder="Escriba su mensaje aqui."
					className="w-full bg-background min-h-40 p-4"
					value={part3Data.conclusion}
					onChange={e =>
						setPart3Data({ ...part3Data, conclusion: e.target.value })
					}
				/>
			</div>

			<div className="flex flex-col gap-2">
				<label
					htmlFor="recomendaciones"
					className="font-semibold tracking-wider 2xl:text-lg flex items-center gap-3"
				>
					<List size={16} color="orange" /> Recomendaciones
				</label>
				<Textarea
					id="recomendacion"
					placeholder="Escriba su mensaje aqui."
					className="w-full bg-background min-h-40 p-4"
					value={part3Data.recomendacion}
					onChange={e =>
						setPart3Data({ ...part3Data, recomendacion: e.target.value })
					}
				/>
			</div>
		</div>
	)
}
