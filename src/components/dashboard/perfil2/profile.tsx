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
				defaultValue={["tecnico"]}
				className="flex flex-col gap-8"
			>
				<AccordionItem
					value="tecnico"
					className="border-b border-cyan-700 dark:border-cyan-600"
				>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center data-[state=open]:bg-cyan-500/50 dark:data-[state=open]:bg-cyan-900">
						<div className="flex items-center gap-2 textL">
							<UserRound className="size-6 text-cyan-700 dark:text-cyan-600" />
							Técnico responsable
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<ProfileTecnico />
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					value="empresa"
					className="border-b border-orange-700 dark:border-orange-600"
				>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center data-[state=open]:bg-orange-500/50 dark:data-[state=open]:bg-orange-900">
						<span className="flex items-center gap-3 textL">
							<Warehouse className="size-6 text-orange-700 dark:text-orange-600" />
							Empresa receptora
						</span>
					</AccordionTrigger>
					<AccordionContent>
						<ProfileEmpresas />
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					value="instrumento"
					className="border-b border-purple-700 dark:border-purple-600"
				>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center data-[state=open]:bg-purple-500/50 dark:data-[state=open]:bg-purple-900">
						<span className="flex items-center gap-3 textL">
							<Cpu className="size-6 text-purple-700 dark:text-purple-600" />{" "}
							Instrumento utilizado
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
