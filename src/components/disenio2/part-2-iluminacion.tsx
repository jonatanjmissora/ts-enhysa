import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Lightbulb } from "lucide-react"
import { Input } from "../ui/input"

export default function Part2Iluminacion() {
	return (
		<div className="w-full">
			<div className="flex items-center justify-between border-b border-cyan-300/25 mb-10 w-11/12 mx-auto">
				<div className="textL py-2 px-3 flex items-center gap-8">
					Iluminación{" "}
					<Lightbulb className="sm:size-7 2xl:size-9 text-cyan-300/75" />
				</div>
			</div>

			<div className="flex flex-col items-center gap-8 w-full">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-3/4">
					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="matricula">
							Tipo de iluminación
						</label>
						<Select defaultValue="natural">
							<SelectTrigger className="w-full px-6 py-1 card sm:dark:bg-accent dark:bg-background dark:h-10">
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
							<SelectTrigger className="w-full px-6 py-1 card sm:dark:bg-accent dark:bg-background dark:h-10">
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
							<SelectTrigger className="w-full px-6 py-1 card sm:dark:bg-accent dark:bg-background dark:h-10">
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

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-3/4">
					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="matricula">
							Valor Requerido
						</label>
						<Select defaultValue="300">
							<SelectTrigger className="w-full px-6 py-1 card sm:dark:bg-accent dark:bg-background dark:h-10">
								<SelectValue
									placeholder="Seleccione Tipo"
									className="text-center"
								/>
							</SelectTrigger>
							<SelectContent position="popper">
								<SelectGroup>
									<SelectLabel>Valores</SelectLabel>

									<SelectItem value="100">100 lum</SelectItem>
									<SelectItem value="200">200 lum</SelectItem>
									<SelectItem value="300">300 lum</SelectItem>
									<SelectItem value="750">750 lum</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="matricula">
							Observación
						</label>
						<Input
							id="matricula"
							placeholder="N° Matrícula "
							defaultValue="Sin observación"
							readOnly
							className="bg-accent"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
