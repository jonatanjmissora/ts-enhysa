import { Warehouse } from "lucide-react"
import { Suspense, useState } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { EmpresaType } from "db/empresas/schema"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { TextTooltip } from "@/components/layout/text-tooltip"
import { sortedByRazonSocial } from "@/lib/utils"

export default function NuevoReporteEmpresa() {
	return (
		<Suspense fallback={<Skelton />}>
			<NuevoReporteEmpresaContent />
		</Suspense>
	)
}

function NuevoReporteEmpresaContent() {
	const { data: empresas } = useSuspenseQuery(empresasQueryOptions)
	const sortedEmpresas = sortedByRazonSocial(empresas ?? [])
	const [actualEmpresa, setActualEmpresa] = useState<EmpresaType | null>(
		sortedEmpresas[0] ?? null
	)
	return (
		<div className="flex flex-col gap-2 flex-1">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="bg-teal-700/75 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<Warehouse className="size-6" />
					</div>
					<span className="sm:text-lg 2xl:text-2xl font-semibold tracking-wider">
						Empresa
					</span>
				</div>
				<Select
					defaultValue={actualEmpresa?.id.toString() ?? ""}
					onValueChange={value =>
						setActualEmpresa(
							sortedEmpresas.find(e => e.id.toString() === value) ?? null
						)
					}
				>
					<SelectTrigger className="w-full max-w-48">
						<SelectValue placeholder="Seleccione Empresa" />
					</SelectTrigger>
					<SelectContent position="popper">
						<SelectGroup>
							<SelectLabel>Empresas</SelectLabel>
							{sortedEmpresas.map(empresa => (
								<SelectItem key={empresa.id} value={empresa.id.toString()}>
									{empresa.razonSocial.toUpperCase()}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<article className="card dark:bg-(--dark-teal-opa) bg-(--teal-opa) flex-col gap-4 sm:text-base 2xl:text-xl relative flex-1">
				<TextTooltip text={"Datos obtenidos a través del perfil."} />
				<div className="grid grid-cols-2 gap-4 w-full">
					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="razon-social">
							Razón Social
						</label>
						<input
							id="razon-social"
							placeholder="Nombre de la empresa"
							className="bg-background py-2 px-4 rounded-lg text-center"
							value={actualEmpresa?.razonSocial.toUpperCase() ?? ""}
							readOnly
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="cuit">
							CUIT
						</label>
						<input
							id="cuit"
							className="bg-background py-2 px-4 rounded-lg text-center"
							placeholder="00-00000000-0"
							value={actualEmpresa?.cuit ?? ""}
							readOnly
						/>
					</div>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label className="tracking-wider" htmlFor="direccion">
						Dirección
					</label>
					<input
						id="direccion"
						className="bg-background py-2 px-4 rounded-lg text-center"
						placeholder="Calle, Altura"
						value={actualEmpresa?.direccion ?? ""}
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label className="tracking-wider" htmlFor="cant-empleados">
						Localidad
					</label>
					<input
						id="localidad"
						placeholder="Ciudad, Provincia, Pais"
						className="bg-background py-2 px-4 rounded-lg text-center"
						value={actualEmpresa?.localidad ?? ""}
						readOnly
					/>
				</div>
			</article>
		</div>
	)
}

const Skelton = () => {
	return (
		<div className="flex flex-col gap-2 flex-1">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="bg-teal-700/75 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<Warehouse className="size-6" />
					</div>
					<span className="text-xl font-semibold tracking-wider">Empresa</span>
				</div>
				<Select>
					<SelectTrigger className="w-full max-w-48">
						<SelectValue placeholder="Seleccione Empresa" />
					</SelectTrigger>
					<SelectContent position="popper">
						<SelectGroup>
							<SelectLabel>Empresas</SelectLabel>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<article className="card dark:bg-(--dark-teal-opa) bg-(--teal-opa) flex-col gap-4 text-lg relative flex-1">
				<TextTooltip text={"Datos obtenidos a través del perfil."} />
				<div className="grid grid-cols-2 gap-4 w-full">
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="razon-social">
							Razón Social
						</label>
						<input
							id="razon-social"
							placeholder=". . ."
							className="bg-background py-2 px-4 rounded-lg text-center"
							readOnly
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="cuit">
							CUIT
						</label>
						<input
							id="cuit"
							className="bg-background py-2 px-4 rounded-lg text-center"
							placeholder=". . ."
							readOnly
						/>
					</div>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<label className="font-semibold" htmlFor="direccion">
						Dirección
					</label>
					<input
						id="direccion"
						className="bg-background py-2 px-4 rounded-lg text-center"
						placeholder=". . ."
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<label className="font-semibold" htmlFor="cant-empleados">
						Localidad
					</label>
					<input
						id="localidad"
						placeholder=". . ."
						className="bg-background py-2 px-4 rounded-lg text-center"
						readOnly
					/>
				</div>
			</article>
		</div>
	)
}
