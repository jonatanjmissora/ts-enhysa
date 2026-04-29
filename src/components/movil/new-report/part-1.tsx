import { TextTooltip } from "@/components/layout/text-tooltip"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Cpu, UserRound, Warehouse } from "lucide-react"
import { Dispatch, SetStateAction, Suspense, useEffect } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { instrumentosQueryOptions } from "queries/instrumentos/instrumentos-query"
import { Part1DataType } from "@/routes/_protected/new-report2"
import { updateClima } from "@/lib/utils"
import { CLIMA, HUMEDAD, TEMPERATURA } from "@/lib/constants"

export default function MovilPart1Data({
	setReportStep,
	part1Data,
	setPart1Data,
}: {
	setReportStep: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
	setPart1Data: Dispatch<SetStateAction<Part1DataType>>
	part1Data: Part1DataType
}) {
	return (
		<article className="w-full my-20 sm:my-4 flex flex-col gap-8">
			<div className="flex flex-col gap-3 relative">
				<TextTooltip
					text={"Datos obtenidos a través del perfil."}
					className={"top-0 right-0"}
				/>
				<div className="flex items-center gap-2">
					<UserRound className="size-6" />
					Técnico responsable
				</div>
				<Suspense
					fallback={
						<div className="w-5/6 mx-auto px-6 py-2 card justify-center bg-accent textXS animate-pulse">
							. . .
						</div>
					}
				>
					<Tecnico />
				</Suspense>
			</div>

			<div className="flex flex-col gap-3 relative">
				<span className="flex items-center gap-3">
					<Warehouse className="size-6" />
					Empresa receptora
				</span>
				<Suspense
					fallback={
						<div className="w-5/6 mx-auto px-6 py-2 card justify-center bg-accent textXS animate-pulse">
							. . .
						</div>
					}
				>
					<Empresas part1Data={part1Data} setPart1Data={setPart1Data} />
				</Suspense>
			</div>

			<div className="flex flex-col gap-3 relative">
				<span className="flex items-center gap-3">
					<Cpu className="size-6" /> Instrumento utilizado
				</span>
				<Suspense
					fallback={
						<div className="w-5/6 mx-auto px-6 py-2 card justify-center bg-accent textXS animate-pulse">
							. . .
						</div>
					}
				>
					<Instrumentos part1Data={part1Data} setPart1Data={setPart1Data} />
				</Suspense>
			</div>

			<Clima part1Data={part1Data} setPart1Data={setPart1Data} />

			<div className="w-5/6 mx-auto my-10">
				<button
					onClick={() => {
						console.log("PART1 : ", part1Data)
						setReportStep(2)
					}}
					className="card p-2 px-6 w-1/2 ml-auto justify-center textM text-sm sm:text-base bg-accent"
				>
					Siguiente
				</button>
			</div>
		</article>
	)
}

function Tecnico() {
	const { data: tecnico } = useSuspenseQuery(tecnicoQueryOptions)
	return (
		<span className="w-5/6 mx-auto px-6 py-2 card justify-end bg-accent textXS">
			{tecnico?.nombre?.toUpperCase() || "SIN DATOS"}
		</span>
	)
}

function Empresas({
	part1Data,
	setPart1Data,
}: {
	part1Data: Part1DataType
	setPart1Data: Dispatch<SetStateAction<Part1DataType>>
}) {
	const { data: empresas } = useSuspenseQuery(empresasQueryOptions)
	const actualEmpresa =
		empresas?.find(empresa => empresa.id === part1Data.empresaId) || empresas[0]
	useEffect(() => {
		if (actualEmpresa) {
			setPart1Data(prev => ({ ...prev, empresaId: actualEmpresa.id }))
		}
	}, [actualEmpresa, setPart1Data])
	if (!empresas || empresas?.length === 0) return
	return (
		<div className="w-5/6 mx-auto">
			<Select
				defaultValue={actualEmpresa?.id || ""}
				onValueChange={e => {
					const newPart1Data = { ...part1Data }
					setPart1Data({ ...newPart1Data, empresaId: e })
				}}
			>
				<SelectTrigger className="w-full mx-auto px-6 py-2 text-right dark:bg-accent text-xs tracking-widest">
					<SelectValue
						placeholder="Seleccione Empresa"
						className="text-right"
					/>
				</SelectTrigger>
				<SelectContent position="popper">
					<SelectGroup>
						<SelectLabel>Empresas</SelectLabel>

						{empresas?.map(empresa => (
							<SelectItem
								key={empresa.id}
								value={empresa.id}
								className="justify-center"
							>
								{empresa.razonSocial.toUpperCase()}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}

function Instrumentos({
	part1Data,
	setPart1Data,
}: {
	part1Data: Part1DataType
	setPart1Data: Dispatch<SetStateAction<Part1DataType>>
}) {
	const { data: instrumentos } = useSuspenseQuery(instrumentosQueryOptions)
	if (!instrumentos || instrumentos?.length === 0) return
	const actualInstrumento =
		instrumentos?.find(
			instrumento => instrumento.id === part1Data.instrumentoId
		) || instrumentos[0]
	useEffect(() => {
		if (actualInstrumento) {
			setPart1Data(prev => ({ ...prev, instrumentoId: actualInstrumento.id }))
		}
	}, [actualInstrumento, setPart1Data])
	return (
		<div className="w-5/6 mx-auto">
			<Select
				defaultValue={actualInstrumento?.id || ""}
				onValueChange={e => {
					const newPart1Data = { ...part1Data }
					setPart1Data({ ...newPart1Data, instrumentoId: e })
				}}
			>
				<SelectTrigger className="w-full mx-auto px-6 py-2 text-right dark:bg-accent text-xs tracking-widest">
					<SelectValue
						placeholder="Seleccione Instrumento"
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

function Clima({
	part1Data,
	setPart1Data,
}: {
	part1Data: Part1DataType
	setPart1Data: Dispatch<SetStateAction<Part1DataType>>
}) {
	const inicialClima = part1Data.clima || "SOLEADO-60-10"
	return (
		<div className="grid grid-cols-1 gap-8 w-full ">
			<div className="flex flex-col gap-1 w-5/6 mx-auto">
				<Label className="tracking-wider" htmlFor="matricula">
					Clima
				</Label>
				<Select
					defaultValue={part1Data.clima.split("-")[0] || CLIMA[0]}
					onValueChange={e =>
						setPart1Data(prev => {
							const newClima = updateClima(part1Data.clima, 0, e)
							return {
								...prev,
								clima: newClima,
							}
						})
					}
				>
					<SelectTrigger className="w-full dark:bg-accent bg-accent">
						<SelectValue />
					</SelectTrigger>
					<SelectContent className="w-full p-2 px-6">
						<SelectGroup>
							<SelectLabel>Estado del clima</SelectLabel>
							{CLIMA.map(clima => (
								<SelectItem key={clima} value={clima}>
									{clima.toUpperCase()}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>

			<div className="flex flex-col gap-1 w-5/6 mx-auto">
				<Label className="tracking-wider" htmlFor="matricula">
					Humedad
				</Label>
				<Select
					defaultValue={part1Data.clima.split("-")[1] || HUMEDAD[0]}
					onValueChange={e =>
						setPart1Data(prev => {
							const newClima = updateClima(part1Data.clima, 1, e)
							return {
								...prev,
								clima: newClima,
							}
						})
					}
				>
					<SelectTrigger className="w-full dark:bg-accent bg-accent">
						<SelectValue />
					</SelectTrigger>
					<SelectContent className="w-full p-2">
						<SelectGroup>
							<SelectLabel>Humedad</SelectLabel>
							{HUMEDAD.map(humedad => (
								<SelectItem key={humedad} value={humedad}>
									{humedad}%
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>

			<div className="flex flex-col gap-1 w-5/6 mx-auto">
				<Label className="tracking-wider" htmlFor="matricula">
					Temperatura
				</Label>
				<Select
					defaultValue={part1Data.clima.split("-")[2] || TEMPERATURA[1]}
					onValueChange={e =>
						setPart1Data(prev => {
							const newClima = updateClima(part1Data.clima, 2, e)
							return {
								...prev,
								clima: newClima,
							}
						})
					}
				>
					<SelectTrigger className="w-full dark:bg-accent bg-accent">
						<SelectValue />
					</SelectTrigger>
					<SelectContent className="w-full p-2">
						<SelectGroup>
							<SelectLabel>Tempreatura</SelectLabel>
							{TEMPERATURA.map(temperatura => (
								<SelectItem key={temperatura} value={temperatura}>
									{temperatura}°C
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
