import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Notebook, SearchAlert } from "lucide-react"

export default function NewReportPart2Observaciones() {
	return (
		<Accordion type="single" collapsible defaultValue="" className="w-full">
			<AccordionItem value="conclusion">
				<AccordionTrigger>
					<span className="font-semibold tracking-wider 2xl:text-lg flex items-center gap-3">
						<Notebook size={16} color="orange" /> Conclusiones
					</span>
				</AccordionTrigger>
				<AccordionContent>
					<Textarea
						placeholder="Escriba su mensaje aqui."
						className="w-full bg-background h-40"
					/>
				</AccordionContent>
			</AccordionItem>
			<Separator />
			<AccordionItem value="recomendacion">
				<AccordionTrigger>
					<span className="font-semibold tracking-wider 2xl:text-lg flex items-center gap-3">
						<SearchAlert size={16} color="orange" /> Recomendaciones
					</span>
				</AccordionTrigger>
				<AccordionContent>
					<Textarea
						placeholder="Escriba su mensaje aqui."
						className="w-full bg-background h-40"
					/>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
