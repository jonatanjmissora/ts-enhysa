import { Textarea } from "@/components/ui/textarea"
import { Notebook, SearchAlert } from "lucide-react"

export default function NewReportPart3Observaciones() {
	return (
		<div className="w-full flex flex-col gap-4">
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
				/>
			</div>

			<div className="flex flex-col gap-2">
				<label
					htmlFor="recomendaciones"
					className="font-semibold tracking-wider 2xl:text-lg flex items-center gap-3"
				>
					<SearchAlert size={16} color="orange" /> Recomendaciones
				</label>
				<Textarea
					id="recomendacion"
					placeholder="Escriba su mensaje aqui."
					className="w-full bg-background min-h-40 p-4"
				/>
			</div>
		</div>
	)
}
