import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"

export default function NewReportPart2Observaciones() {
	return (
		<Accordion type="single" collapsible defaultValue="" className="w-full">
			<AccordionItem value="shipping">
				<AccordionTrigger>
					<span className="font-semibold tracking-wider">Observaciones</span>
				</AccordionTrigger>
				<AccordionContent>
					<Textarea
						placeholder="Escriba su mensaje aqui."
						className="w-full bg-background"
					/>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
