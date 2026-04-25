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
import { Cloud, CloudRain, CloudSun, Sun } from "lucide-react"
import { Dispatch, SetStateAction, Suspense } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { instrumentosQueryOptions } from "queries/instrumentos/instrumentos-query"
import { Part1DataType } from "@/routes/_protected/new-report2"

export default function MovilPart1Data({setReportStep, part1Data, setPart1Data}: {setReportStep: Dispatch<SetStateAction<1 | 2 | 3 | 4>>, setPart1Data: (data: Part1DataType) => void, part1Data: Part1DataType} ) {
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
				<Suspense fallback={
					<div className="w-5/6 mx-auto px-6 py-2 card justify-center bg-accent textXS animate-pulse">
						. . .
					</div>
					}>
					<Tecnico />
				</Suspense>
			</div>

			<div className="flex flex-col gap-3 relative">
				<span className="flex items-center gap-3">
					<Warehouse className="size-6" />
					Empresa receptora
				</span>
				<Suspense fallback={
					<div className="w-5/6 mx-auto px-6 py-2 card justify-center bg-accent textXS animate-pulse">
						. . .
					</div>
					}>
					<Empresas />
				</Suspense>
				
			</div>

			<div className="flex flex-col gap-3 relative">
				<span className="flex items-center gap-3">
					<Cpu className="size-6" /> Instrumento utilizado
				</span>
				<Suspense fallback={
					<div className="w-5/6 mx-auto px-6 py-2 card justify-center bg-accent textXS animate-pulse">
						. . .
					</div>
					}>
					<Instrumentos />
				</Suspense>
			</div>

			<Clima />

			<div className="w-5/6 mx-auto my-10">
				<button
					onClick={() => setReportStep(2)}
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
		<span className="w-5/6 mx-auto px-6 py-2 card justify-center bg-accent textXS">
					{tecnico?.nombre?.toUpperCase() || "SIN DATOS"}
				</span>
	)
}

function Empresas () {
	const { data: empresas } = useSuspenseQuery(empresasQueryOptions)
	return (
		<div className="w-5/6 mx-auto">
					<Select defaultValue={empresas?.[0]?.razonSocial.toUpperCase() || ""}>
						<SelectTrigger
							className="w-full mx-auto px-6 py-2 text-right dark:bg-accent text-xs tracking-widest"
							onClick={e => e.stopPropagation()}
						>
							<SelectValue
								placeholder="Seleccione Empresa"
								className="text-right"
							/>
						</SelectTrigger>
						<SelectContent position="popper">
							<SelectGroup >
								<SelectLabel>Empresas</SelectLabel>

								{empresas?.map(empresa => (
									<SelectItem key={empresa.id} value={empresa.razonSocial.toUpperCase()} className="justify-center">
										{empresa.razonSocial.toUpperCase()}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
	)
}

function Instrumentos () {
	const { data: instrumentos } = useSuspenseQuery(instrumentosQueryOptions)
	return (
		<div className="w-5/6 mx-auto">
					<Select defaultValue={instrumentos?.[0]?.nombre.toUpperCase() || ""}>
						<SelectTrigger
							className="w-full mx-auto px-6 py-2 text-right dark:bg-accent text-xs tracking-widest"
							onClick={e => e.stopPropagation()}
						>
							<SelectValue
								placeholder="Seleccione Instrumento"
								className="text-center"
							/>
						</SelectTrigger>
						<SelectContent position="popper">
							<SelectGroup>
								<SelectLabel>Instrumentos</SelectLabel>

								{instrumentos?.map(instrumento => (
									<SelectItem key={instrumento.id} value={instrumento.nombre.toUpperCase()}>
										{instrumento.nombre.toUpperCase()}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
	)
}

function Clima() {
	return (
<div className="grid grid-cols-1 gap-8 w-full ">
				<div className="flex flex-col gap-1 w-5/6 mx-auto">
					<Label className="tracking-wider" htmlFor="matricula">
						Clima
					</Label>
					<Select defaultValue="soleado">
						<SelectTrigger className="w-full dark:bg-accent bg-accent">
							<SelectValue />
						</SelectTrigger>
						<SelectContent className="w-full p-2 px-6">
							<SelectGroup>
								<SelectLabel>Estado del clima</SelectLabel>
								<SelectItem value="soleado">
									<Sun size={12} />
									Soleado
								</SelectItem>
								<SelectItem value="numblado">
									<Cloud size={12} />
									Nublado
								</SelectItem>
								<SelectItem value="templado">
									<CloudSun size={12} />
									Templado
								</SelectItem>
								<SelectItem value="lluvioso">
									<CloudRain size={12} />
									Lluvioso
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className="flex flex-col gap-1 w-5/6 mx-auto">
					<Label className="tracking-wider" htmlFor="matricula">
						Humedad
					</Label>
					<Select defaultValue="60">
						<SelectTrigger className="w-full dark:bg-accent bg-accent">
							<SelectValue />
						</SelectTrigger>
						<SelectContent className="w-full p-2">
							<SelectGroup>
								<SelectLabel>Humedad</SelectLabel>
								<SelectItem value="60">60%</SelectItem>
								<SelectItem value="70">70%</SelectItem>
								<SelectItem value="80">80%</SelectItem>
								<SelectItem value="90">90%</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className="flex flex-col gap-1 w-5/6 mx-auto">
					<Label className="tracking-wider" htmlFor="matricula">
						Temperatura
					</Label>
					<Select defaultValue="20">
						<SelectTrigger className="w-full dark:bg-accent bg-accent">
							<SelectValue />
						</SelectTrigger>
						<SelectContent className="w-full p-2">
							<SelectGroup>
								<SelectLabel>Tempreatura</SelectLabel>
								<SelectItem value="10">10°C</SelectItem>
								<SelectItem value="20">20°C</SelectItem>
								<SelectItem value="30">30°C</SelectItem>
								<SelectItem value="40">40°C</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
	)
}
