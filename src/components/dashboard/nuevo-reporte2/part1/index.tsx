
import {Accordion} from "@/components/ui/accordion"
import {Part1DataType} from "@/routes/_protected/new-report2"
import { TextTooltip } from "@/components/layout/text-tooltip"
import TecnicoAccordionItem from "./tecnico-accordion-item"
import EmpresasAccordionItem from "./empresas-accordeon-item"
import InstrumentosAccordionItem from "./instrumentos-accordeon-item"
import Clima from "./clima"
import { Dispatch, SetStateAction } from "react"

export default function Part1Data({part1Data, setPart1Data}: {part1Data: Part1DataType, setPart1Data: Dispatch<SetStateAction<Part1DataType>>}) {
    return (
        <article className="w-full my-10 sm:my-4 relative">
            <TextTooltip
                text={"Datos obtenidos a través del perfil."}
                className={"-top-8 right-0"}
            />
            <Accordion
                type="single"
                collapsible
                defaultValue=""
                className="flex flex-col gap-8"
            >
                <TecnicoAccordionItem />

                <EmpresasAccordionItem part1Data={part1Data} setPart1Data={setPart1Data} />

                <InstrumentosAccordionItem part1Data={part1Data} setPart1Data={setPart1Data} />
            </Accordion>

            <Clima part1Data={part1Data} setPart1Data={setPart1Data} />
           
        </article>
    )
}