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

export default function NuevoReporteEmpresa() {
	return (
		<Suspense fallback={<Skelton />}>
			<NuevoReporteEmpresaContent />
		</Suspense>
	)
}

function NuevoReporteEmpresaContent() {
	const { data: empresas } = useSuspenseQuery(empresasQueryOptions)
	const [actualEmpresa, setActualEmpresa] = useState<EmpresaType | null>(
		empresas?.[0] ?? null
	)
	return (
		<div className="flex flex-col gap-2 flex-1">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="bg-teal-700/75 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<Warehouse className="size-6" />
					</div>
					<span className="text-xl font-semibold tracking-wider">Empresa</span>
				</div>
				<Select
					defaultValue={actualEmpresa?.id.toString() ?? ""}
					onValueChange={value =>
						setActualEmpresa(
							empresas?.find(e => e.id.toString() === value) ?? null
						)
					}
				>
					<SelectTrigger className="w-full max-w-48">
						<SelectValue placeholder="Seleccione Empresa" />
					</SelectTrigger>
					<SelectContent position="popper">
						<SelectGroup>
							<SelectLabel>Empresas</SelectLabel>
							{empresas?.map(empresa => (
								<SelectItem key={empresa.id} value={empresa.id.toString()}>
									{empresa.razonSocial}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<article className="dark:bg-(--dark-teal-opa) bg-(--teal-opa) rounded-xl p-6 flex-1 flex flex-col gap-6 text-lg shadow-xl ring ring-foreground/20 relative">
				<TextTooltip text={"Datos obtenidos a través del perfil."} />
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="razon-social">
							Razón Social
						</label>
						<input
							id="razon-social"
							placeholder="Nombre de la empresa"
							className="bg-background py-2 px-4 rounded-lg text-center"
							defaultValue={actualEmpresa?.razonSocial ?? ""}
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
							placeholder="00-00000000-0"
							defaultValue={actualEmpresa?.cuit ?? ""}
							readOnly
						/>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label className="font-semibold" htmlFor="direccion">
						Dirección
					</label>
					<input
						id="direccion"
						className="bg-background py-2 px-4 rounded-lg text-center"
						placeholder="Calle, Altura"
						defaultValue={actualEmpresa?.direccion ?? ""}
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="font-semibold" htmlFor="cant-empleados">
						Localidad
					</label>
					<input
						id="localidad"
						placeholder="Ciudad, Provincia, Pais"
						className="bg-background py-2 px-4 rounded-lg text-center"
						defaultValue={actualEmpresa?.localidad ?? ""}
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
					<SelectTrigger className="w-full max-w-48 text-center">
						<SelectValue placeholder=". . ." />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Fruits</SelectLabel>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<article className="dark:bg-(--dark-teal-opa) bg-(--teal-opa) rounded-xl p-6 flex-1 flex flex-col gap-6 text-lg shadow-xl ring ring-foreground/20">
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="cuit">
							CUIT
						</label>
						<input
							id="cuit"
							className="bg-background py-2 px-4 rounded-lg text-center animate-pulse"
							defaultValue=". . ."
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="razon-social">
							Razón Social
						</label>
						<input
							id="razon-social"
							className="bg-background py-2 px-4 rounded-lg text-center animate-pulse"
							defaultValue=". . ."
						/>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label className="font-semibold" htmlFor="direccion">
						Dirección
					</label>
					<input
						id="direccion"
						className="bg-background py-2 px-4 rounded-lg text-center animate-pulse"
						defaultValue=". . ."
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="font-semibold" htmlFor="cant-empleados">
						Localidad
					</label>
					<input
						id="localidad"
						className="bg-background py-2 px-4 rounded-lg text-center animate-pulse"
						defaultValue=". . ."
					/>
				</div>
			</article>
		</div>
	)
}
