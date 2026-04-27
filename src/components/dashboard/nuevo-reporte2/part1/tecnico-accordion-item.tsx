import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { useSuspenseQuery } from "@tanstack/react-query";
import { UserRound } from "lucide-react";
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query";
import { Suspense } from "react";

export default function TecnicoAccordionItem() {
	return (
		<AccordionItem
                    value="tecnico"
                    className="border-b border-foreground/10 relative"
                >
                    <div className="absolute top-2 left-1/2">
                        <Suspense fallback={<span className="w-60 px-6 py-2 card bg-background textXS ring ring-foreground/10 dark:ring-foreground/7 justify-end animate-pulse">
                            . . .
                        </span>}>
                            <TecnicoSuspended />
                        </Suspense>
                    </div>
                    <AccordionTrigger className="flex px-5 w-11/12 sm:w-full items-center justify-between">
                        <div className="flex items-center gap-2">
                            <UserRound className="size-6" />
                            Técnico responsable
                        </div>
                        <span className="flex-1 ml-auto text-right">ver</span>
                    </AccordionTrigger>
                    <AccordionContent>
                        <Tecnico/>
                    </AccordionContent>
                </AccordionItem>
	)
}

function TecnicoSuspended() {
    const { data: tecnico } = useSuspenseQuery(tecnicoQueryOptions)
    return (
        <span className="w-60 px-6 py-2 card bg-background textXS ring ring-foreground/10 dark:ring-foreground/7 justify-end">
            {tecnico?.nombre?.toUpperCase() || "SIN DATOS"}
        </span>
    )
}

function Tecnico() {
    const { data: tecnico } = useSuspenseQuery(tecnicoQueryOptions)
    return (
        <div className="bg-accent sm:bg-background py-10 sm:p-10 flex items-center justify-center">
            <div className="grid-cols-1 grid sm:grid-cols-2 gap-8 w-5/6">
                <div className="flex flex-col gap-1">
                    <label className="tracking-wider" htmlFor="nombre">
                        Nombre Completo
                    </label>
                    <Input
                        id="nombre"
                        placeholder="Nombre Completo"
                        defaultValue={tecnico?.nombre?.toUpperCase()}
                        readOnly
                        className="bg-accent"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="tracking-wider" htmlFor="cargo">
                        Cargo
                    </label>
                    <Input
                        id="cargo"
                        placeholder="Ej. Seguridad e Higiene"
                        defaultValue={tecnico?.cargo?.toUpperCase()}
                        readOnly
                        className="bg-accent"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="tracking-wider text-left">firma digital</p>
                    <div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
                        <img src="/firma.png" alt="firma-digital" className="size-20" />
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="tracking-wider text-left">pie de página</p>
                    <span className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
                        {tecnico?.cargo?.toUpperCase()} {tecnico?.nombre?.toUpperCase()}
                    </span>
                    <span className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
                        MAT {tecnico?.matricula}
                    </span>
                </div>
            </div>
        </div>
    )
}