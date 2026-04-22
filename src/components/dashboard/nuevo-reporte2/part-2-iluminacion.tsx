import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

export default function Part2Iluminacion() {
	return (
		<div className="w-full">
			<div className="flex items-center justify-between border-b border-cyan-500 dark:border-cyan-300/25 mb-10 w-11/12 mx-auto">
				<div className="textL py-2 px-3 flex items-center gap-8 justify-between w-full sm:w-max">
					Iluminación{" "}
					<Lightbulb className="sm:size-7 2xl:size-9 text-cyan-500 dark:text-cyan-300/75" />
				</div>
			</div>

			<div className="flex flex-col items-center gap-8 w-full">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-3/4">
					<div className="flex flex-col gap-1">
						<Label className="tracking-wider" htmlFor="matricula">
							Tipo de iluminación
						</Label>
						<Select defaultValue="natural">
							<SelectTrigger className="w-full px-6 py-5 sm:bg-accent sm:dark:bg-accent">
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
						<Label className="tracking-wider" htmlFor="matricula">
							Tipo de Fuente
						</Label>
						<Select defaultValue="incandescente">
							<SelectTrigger className="w-full px-6 py-5 sm:bg-accent sm:dark:bg-accent">
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
						<Label className="tracking-wider" htmlFor="matricula">
							Iluminación
						</Label>
						<Select defaultValue="general">
							<SelectTrigger className="w-full px-6 py-5 sm:bg-accent sm:dark:bg-accent">
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
						<Label className="tracking-wider" htmlFor="matricula">
							Valor Requerido
						</Label>
						<Select defaultValue="300">
							<SelectTrigger className="w-full px-6 py-5 sm:bg-accent sm:dark:bg-accent">
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
						<Label className="tracking-wider" htmlFor="matricula">
							Observación
						</Label>
						<Input
							id="matricula"
							placeholder="N° Matrícula "
							defaultValue="Sin observación"
							readOnly
							className="bg-background sm:bg-accent py-5"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
