import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Cpu, UserRound, Warehouse } from "lucide-react"
import ProfileTecnico from "./tecnico"
import ProfileEmpresas from "./empresas"
import ProfileInstrumentos from "./instrumentos"

export default function Profile() {
	return (
		<article className="w-full my-10 sm:my-4">
			<Accordion
				type="multiple"
				defaultValue={["tecnico", "empresa", "instrumento"]}
				className="flex flex-col gap-8"
			>
				<AccordionItem
					value="tecnico"
					className="border-b border-foreground/10"
				>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center">
						<div className="flex items-center gap-2 textL">
							<UserRound className="size-6" />
							Técnico responsable
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<ProfileTecnico />
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					value="empresa"
					className="border-b border-foreground/10"
				>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center">
						<span className="flex items-center gap-3 textL">
							<Warehouse className="size-6" />
							Empresa receptora
						</span>
					</AccordionTrigger>
					<AccordionContent>
						<ProfileEmpresas />
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					value="instrumento"
					className="border-b border-foreground/10"
				>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center">
						<span className="flex items-center gap-3 textL">
							<Cpu className="size-6" /> Instrumento utilizado
						</span>
					</AccordionTrigger>
					<AccordionContent>
						<ProfileInstrumentos />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</article>
	)
}
