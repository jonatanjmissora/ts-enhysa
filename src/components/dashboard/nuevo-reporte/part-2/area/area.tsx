import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Box } from "lucide-react"

export default function Area({
	nombre,
	setNombre,
	sector,
	setSector,
	tipoIluminacion,
	setTipoIluminacion,
	tipoFuente,
	setTipoFuente,
	iluminacion,
	setIluminacion,
	valorRequerido,
	setValorRequerido,
	observaciones,
	setObservaciones,
}: {
	nombre: string
	setNombre: (nombre: string) => void
	sector: string
	setSector: (sector: string) => void
	tipoIluminacion: string
	setTipoIluminacion: (tipoIluminacion: string) => void
	tipoFuente: string
	setTipoFuente: (tipoFuente: string) => void
	iluminacion: string
	setIluminacion: (iluminacion: string) => void
	observaciones: string
	setObservaciones: (observaciones: string) => void
	valorRequerido: string
	setValorRequerido: (valorRequerido: string) => void
}) {
	return (
		<div className="card bg-accent flex-col gap-6">
			<div className="flex items-center w-full border-b border-foreground/20">
				<div className="flex items-center gap-3 flex-1">
					<div className="bg-blue-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<Box className="size-6" />
					</div>
					<span className="w-full sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2">
						Sector
					</span>
				</div>
				<p className="flex-1 text-right text-sm text-foreground/70 py-1">
					{nombre || "Depósito"}
				</p>
			</div>
			<div className="flex flex-col gap-3 w-full mx-auto sm:text-base 2xl:text-xl">
				<div className="flex gap-6">
					<label className="w-1/2" htmlFor="nombre-sector">
						Nombre del Sector
					</label>
					<input
						id="nombre-sector"
						type="text"
						className="w-1/2 bg-background py-1 px-4 rounded-lg text-center"
						placeholder="Ej. Sector A"
						value={nombre ?? ""}
						onChange={e => {
							setNombre(e.target.value)
						}}
					/>
				</div>
				<div className="flex items-center gap-6">
					<label className="w-1/2" htmlFor="sector-tipo">
						Sector Tipo
					</label>
					<input
						id="sector-tipo"
						type="text"
						className="w-1/2 bg-background py-1 px-4 rounded-lg text-center"
						placeholder="Ej. Sector A"
						value={sector ?? ""}
						onChange={e => {
							setSector(e.target.value)
						}}
					/>
				</div>
				<div className="w-full flex items-center gap-6">
					<label htmlFor="tipo-iluminacion" className="w-1/2">
						Tipo de Iluminación
					</label>
					<div className="w-1/2">
						<Select
							defaultValue={tipoIluminacion}
							onValueChange={value => setTipoIluminacion(value)}
						>
							<SelectTrigger className="w-full justify-center gap-3 sm:text-base 2xl:text-xl dark:bg-background rounded-lg py-[1.15rem] dark:hover:bg-background/75">
								<SelectValue />
							</SelectTrigger>
							<SelectContent className="w-full p-2 px4">
								<SelectGroup>
									<SelectLabel>Tipo de Iluminación</SelectLabel>
									<SelectItem value="natural">Natural</SelectItem>
									<SelectItem value="artificial">Artificial</SelectItem>
									<SelectItem value="mixta">Mixta</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="w-full flex items-center gap-6">
					<label htmlFor="tipo-fuente" className="w-1/2">
						Tipo de Fuente
					</label>
					<div className="w-1/2">
						<Select
							defaultValue={tipoFuente}
							onValueChange={value => setTipoFuente(value)}
						>
							<SelectTrigger className="w-full justify-center gap-3 sm:text-base 2xl:text-xl dark:bg-background rounded-lg py-[1.15rem] dark:hover:bg-background/75">
								<SelectValue />
							</SelectTrigger>
							<SelectContent className="w-full p-2 px4">
								<SelectGroup>
									<SelectLabel>Tipo de Fuente</SelectLabel>
									<SelectItem value="incandescente">Incandescente</SelectItem>
									<SelectItem value="descarga">Descarga</SelectItem>
									<SelectItem value="mixta">Mixta</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="w-full flex items-center gap-6">
					<label htmlFor="iluminacion-general" className="w-1/2">
						Iluminación
					</label>
					<div className="w-1/2">
						<Select
							defaultValue={iluminacion}
							onValueChange={value => setIluminacion(value)}
						>
							<SelectTrigger className="w-full justify-center gap-3 sm:text-base 2xl:text-xl dark:bg-background rounded-lg py-[1.15rem] dark:hover:bg-background/75">
								<SelectValue />
							</SelectTrigger>
							<SelectContent className="w-full p-2 px4">
								<SelectGroup>
									<SelectLabel>Iluminación</SelectLabel>
									<SelectItem value="general">General</SelectItem>
									<SelectItem value="localizada">Localizada</SelectItem>
									<SelectItem value="mixta">Mixta</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="w-full flex items-center gap-6">
					<label htmlFor="valor-requerido" className="w-1/2">
						Valor Requerido
					</label>
					<div className="w-1/2">
						<Select
							defaultValue={valorRequerido}
							onValueChange={value => setValorRequerido(value)}
						>
							<SelectTrigger className="w-full justify-center gap-3 sm:text-base 2xl:text-xl dark:bg-background rounded-lg py-[1.15rem] dark:hover:bg-background/75">
								<SelectValue />
							</SelectTrigger>
							<SelectContent className="w-full p-2 px4">
								<SelectGroup>
									<SelectLabel>Valor Requerido</SelectLabel>
									<SelectItem value="100">100 lum</SelectItem>
									<SelectItem value="200">200 lum</SelectItem>
									<SelectItem value="300">300 lum</SelectItem>
									<SelectItem value="750">750 lum</SelectItem>
									<SelectItem value="1500">1.500 lum</SelectItem>
									<SelectItem value="3000">3.000 lum</SelectItem>
									<SelectItem value="5000">5.000 lum</SelectItem>
									<SelectItem value="10000">10.000 lum</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="w-full flex flex-col items-center gap-1">
					<label htmlFor="observaciones" className="w-full">
						Observaciones
					</label>
					<Textarea
						id="observaciones"
						value={observaciones}
						onChange={e => setObservaciones(e.target.value)}
						className="w-full"
					/>
				</div>
			</div>
		</div>
	)
}
