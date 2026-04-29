import {
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Cpu } from "lucide-react"
import { Suspense, useEffect } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { instrumentosQueryOptions } from "queries/instrumentos/instrumentos-query"
import { Input } from "@/components/ui/input"
import { Dispatch, SetStateAction } from "react"
import { Part1DataType } from "db/new-report/part1/schema"

export default function InstrumentosAccordionItem({
	part1Data,
	setPart1Data,
}: {
	part1Data: Part1DataType
	setPart1Data: Dispatch<SetStateAction<Part1DataType>>
}) {
	return (
		<AccordionItem
			value="instrumento"
			className="border-b border-foreground/10 relative"
		>
			<Suspense
				fallback={
					<span className="absolute top-2 left-1/2 w-60 px-6 py-2 card bg-background textXS ring ring-foreground/10 dark:ring-foreground/7 justify-end animate-pulse">
						. . .
					</span>
				}
			>
				<InstrumentosSuspended
					part1Data={part1Data}
					setPart1Data={setPart1Data}
				/>
			</Suspense>

			<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center justify-between">
				<span className="flex items-center gap-3 w-full sm:w-max">
					<Cpu className="size-6" /> Instrumento utilizado
				</span>
				<span className="flex-1 ml-auto text-right">ver</span>
			</AccordionTrigger>
			<AccordionContent>
				<Instrumento part1Data={part1Data} />
			</AccordionContent>
		</AccordionItem>
	)
}

function InstrumentosSuspended({
	part1Data,
	setPart1Data,
}: {
	part1Data: Part1DataType
	setPart1Data: Dispatch<SetStateAction<Part1DataType>>
}) {
	const { data: instrumentos } = useSuspenseQuery(instrumentosQueryOptions)
	if (!instrumentos) return
	const actualInstrumentoId = part1Data.instrumentoId || instrumentos?.[0].id
	const instrumento = instrumentos.find(
		instrumento => instrumento.id === actualInstrumentoId
	)
	useEffect(() => {
		if (instrumento?.id) {
			setPart1Data(prev => ({ ...prev, instrumentoId: instrumento.id }))
		}
	}, [])
	return (
		<div className="absolute sm:top-2 sm:left-1/2 left-0 top-13 ">
			<Select
				defaultValue={part1Data.instrumentoId || instrumentos?.[0].id || ""}
				onValueChange={value =>
					setPart1Data(prev => ({ ...prev, instrumentoId: value }))
				}
			>
				<SelectTrigger className="w-60" onClick={e => e.stopPropagation()}>
					<SelectValue
						placeholder="Seleccione Empresa"
						className="text-center"
					/>
				</SelectTrigger>
				<SelectContent position="popper">
					<SelectGroup>
						<SelectLabel>Instrumentos</SelectLabel>

						{instrumentos?.map(instrumento => (
							<SelectItem key={instrumento.id} value={instrumento.id}>
								{instrumento.nombre.toUpperCase()}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}

const Instrumento = ({ part1Data }: { part1Data: Part1DataType }) => {
	const { data: instrumentos } = useSuspenseQuery(instrumentosQueryOptions)
	if (!instrumentos) return
	const actualInstrumentoId = part1Data.instrumentoId || instrumentos?.[0].id
	const instrumento = instrumentos.find(
		instrumento => instrumento.id === actualInstrumentoId
	)
	return (
		<div className="bg-accent sm:bg-background py-10 sm:p-10 flex items-center justify-center">
			<div className="grid-cols-1 grid sm:grid-cols-2 gap-8 w-5/6">
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="marca">
						Marca
					</label>
					<Input
						id="marca"
						placeholder="Marca"
						value={instrumento?.marca.toUpperCase()}
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="modelo">
						Modelo
					</label>
					<Input
						id="modelo"
						placeholder="Modelo"
						value={instrumento?.modelo.toUpperCase()}
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="serie">
						Nro Serie
					</label>
					<Input
						id="serie"
						placeholder="N° Serie"
						value={instrumento?.serie.toUpperCase()}
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="fecha">
						Calibración
					</label>
					<Input
						id="fecha"
						placeholder="dd/mm/aa"
						value={instrumento?.fechaCalibracion}
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<p className="tracking-wider text-left">Imágenes</p>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/luxometro.jpg" alt="luxometro" className="size-20" />
					</div>
				</div>

				<div className="flex flex-col gap-1">
					<p className="tracking-wider text-left">Certificado</p>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/calibracion.webp" alt="luxometro" className="size-20" />
					</div>
				</div>
			</div>
		</div>
	)
}
