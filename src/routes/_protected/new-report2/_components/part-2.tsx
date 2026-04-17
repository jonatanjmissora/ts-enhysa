import { Button } from "@/components/ui/button"
import { RulerDimensionLine } from "lucide-react"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

export default function Part2Data() {
	return (
		<article className="w-full flex flex-col justify-center items-center">
			<div className="flex items-center justify-between w-full">
				<div className="textXL py-2 px-3 flex items-center gap-8">
					Areas{" "}
					<RulerDimensionLine className="sm:size-8 2xl:size-10 text-amber-500/50" />
				</div>
				<span className="textL">Planta Baja</span>
				<Button variant="theme" className="tracking-widest">
					+ Nueva Area
				</Button>
			</div>
			<div className="w-full bg-background flex flex-col justify-center items-center gap-10 p-8">
				<div className="grid grid-cols-2 gap-8 w-2/3">
					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="matricula">
							Nombre del Sector
						</label>
						<input
							id="matricula"
							className="card bg-accent py-2 px-4 rounded-lg text-center"
							placeholder="N° Matrícula "
							defaultValue="Planta Baja"
							readOnly
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="matricula">
							Tipo de Sector
						</label>
						<input
							id="matricula"
							className="card bg-accent py-2 px-4 rounded-lg text-center"
							placeholder="N° Matrícula "
							defaultValue="Oficinas"
							readOnly
						/>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-8 w-2/3">
					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="matricula">
							Tipo de iluminación
						</label>
						<Select defaultValue="natural">
							<SelectTrigger className="w-full px-3 py-1 card bg-accent">
								<SelectValue
									placeholder="Seleccione Tipo"
									className="text-center"
								/>
							</SelectTrigger>
							<SelectContent position="popper">
								<SelectGroup>
									<SelectLabel>Tipos Iluminación</SelectLabel>

									<SelectItem value="natural">NATURAL</SelectItem>
									<SelectItem value="artificial">ARTIFICIAL</SelectItem>
									<SelectItem value="mixta">MIXTA</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="matricula">
							Tipo de Fuente
						</label>
						<Select defaultValue="incandescente">
							<SelectTrigger className="w-full px-3 py-1 card bg-accent">
								<SelectValue
									placeholder="Seleccione Tipo"
									className="text-center"
								/>
							</SelectTrigger>
							<SelectContent position="popper">
								<SelectGroup>
									<SelectLabel>Tipos Iluminación</SelectLabel>

									<SelectItem value="incandescente">INCANDESCANTE</SelectItem>
									<SelectItem value="desacrga">DESCARGA</SelectItem>
									<SelectItem value="mixta">MIXTA</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="matricula">
							Iluminación
						</label>
						<Select defaultValue="general">
							<SelectTrigger className="w-full px-3 py-1 card bg-accent">
								<SelectValue
									placeholder="Seleccione Tipo"
									className="text-center"
								/>
							</SelectTrigger>
							<SelectContent position="popper">
								<SelectGroup>
									<SelectLabel>Tipos Iluminación</SelectLabel>

									<SelectItem value="general">GENERAL</SelectItem>
									<SelectItem value="localizada">LOCALIZADA</SelectItem>
									<SelectItem value="mixta">MIXTA</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-8 w-2/3">
					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="matricula">
							Valor Requerido
						</label>
						<input
							id="matricula"
							className="card bg-accent py-2 px-4 rounded-lg text-center"
							placeholder="N° Matrícula "
							defaultValue="300 lum"
							readOnly
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="matricula">
							Observación
						</label>
						<input
							id="matricula"
							className="card bg-accent py-2 px-4 rounded-lg text-center"
							placeholder="N° Matrícula "
							defaultValue="Sin observación"
							readOnly
						/>
					</div>
				</div>
			</div>
		</article>
	)
}
