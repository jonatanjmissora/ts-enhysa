import {
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { useSuspenseQuery } from "@tanstack/react-query"
import { Part1DataType } from "db/new-report/part1/schema"
import { Warehouse } from "lucide-react"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { Suspense, useEffect, Dispatch, SetStateAction } from "react"

export default function EmpresasAccordionItem({
	part1Data,
	setPart1Data,
}: {
	part1Data: Part1DataType
	setPart1Data: Dispatch<SetStateAction<Part1DataType>>
}) {
	return (
		<AccordionItem
			value="empresa"
			className="border-b border-foreground/10 relative"
		>
			<Suspense
				fallback={
					<span className="absolute top-2 left-1/2 w-60 px-6 py-2 card bg-background textXS ring ring-foreground/10 dark:ring-foreground/7 justify-end animate-pulse">
						. . .
					</span>
				}
			>
				<EmpresasSuspended part1Data={part1Data} setPart1Data={setPart1Data} />
			</Suspense>
			<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center justify-between">
				<span className="flex items-center gap-3">
					<Warehouse className="size-6" />
					Empresa receptora
				</span>
				<span className="flex-1 ml-auto text-right">ver</span>
			</AccordionTrigger>
			<AccordionContent>
				<Empresa part1Data={part1Data} />
			</AccordionContent>
		</AccordionItem>
	)
}

function EmpresasSuspended({
	part1Data,
	setPart1Data,
}: {
	part1Data: Part1DataType
	setPart1Data: Dispatch<SetStateAction<Part1DataType>>
}) {
	const { data: empresas } = useSuspenseQuery(empresasQueryOptions)
	if (!empresas) return
	const actualEmpresaId = part1Data.empresaId || empresas?.[0].id
	const empresa = empresas.find(empresa => empresa.id === actualEmpresaId)
	useEffect(() => {
		if (empresa?.id) {
			setPart1Data(prev => ({ ...prev, empresaId: empresa.id }))
		}
	}, [])
	return (
		<div className="absolute top-2 left-1/2">
			<Select
				defaultValue={part1Data.empresaId || empresas?.[0].id || ""}
				onValueChange={value =>
					setPart1Data(prev => ({ ...prev, empresaId: value }))
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
						<SelectLabel>Empresas</SelectLabel>

						{empresas?.map(empresa => (
							<SelectItem key={empresa.id} value={empresa.id}>
								{empresa.razonSocial.toUpperCase()}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}

const Empresa = ({ part1Data }: { part1Data: Part1DataType }) => {
	const { data: empresas } = useSuspenseQuery(empresasQueryOptions)
	if (!empresas) return
	const actualEmpresaId = part1Data.empresaId || empresas?.[0].id
	const empresa = empresas.find(empresa => empresa.id === actualEmpresaId)

	return (
		<div className="bg-accent sm:bg-background py-10 sm:p-10 flex items-center justify-center">
			<div className="grid-cols-1 grid sm:grid-cols-2 gap-8 w-5/6">
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="razon-social">
						Razón Social
					</label>
					<Input
						id="razon-social"
						placeholder="Nombre de la empresa"
						value={empresa?.razonSocial.toUpperCase()}
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="cuit">
						CUIT
					</label>
					<Input
						id="cuit"
						placeholder="00-00000000-0"
						value={empresa?.cuit}
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label className="tracking-wider" htmlFor="direccion">
						Dirección
					</label>
					<Input
						id="direccion"
						placeholder="Calle, Altura"
						value={empresa?.direccion.toUpperCase()}
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label className="tracking-wider" htmlFor="cant-empleados">
						Localidad
					</label>
					<Input
						id="localidad"
						placeholder="Ciudad, Provincia, Pais"
						value={empresa?.localidad.toUpperCase()}
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label className="tracking-wider" htmlFor="cant-empleados">
						CP
					</label>
					<Input
						id="codigoPostal"
						placeholder="Ciudad, Provincia, Pais"
						value={empresa?.codigoPostal}
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label className="tracking-wider" htmlFor="cant-empleados">
						Provincia
					</label>
					<Input
						id="provincia"
						placeholder="Ciudad, Provincia, Pais"
						value={empresa?.provincia.toUpperCase()}
						readOnly
						className="bg-accent"
					/>
				</div>
			</div>
		</div>
	)
}
