import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

export default function NewReportPart2Locacion() {
	return (
		<Accordion type="single" collapsible defaultValue="" className="w-full">
			<AccordionItem value="shipping">
				<AccordionTrigger>
					<span className="text-lg font-semibold">Locación</span>
				</AccordionTrigger>
				<AccordionContent>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d8073.749836555969!2d-62.262004517867744!3d-38.721112665276884!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sus!4v1774626084167!5m2!1ses!2sus"
						width="600"
						height="450"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="google maps location"
						className="w-full h-80 object-cover"
					/>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
