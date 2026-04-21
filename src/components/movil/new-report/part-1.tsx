import { TextTooltip } from "@/components/layout/text-tooltip"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
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
import { Cpu, UserRound, Warehouse } from "lucide-react"

export default function MovilPart1Data() {
	return (
		<article className="w-full my-10 sm:my-4">
			<Accordion
				type="single"
				collapsible
				defaultValue=""
				className="flex flex-col gap-4"
			>
				<div className="flex flex-col gap-3 relative">
					<TextTooltip
						text={"Datos obtenidos a través del perfil."}
						className={"top-0 right-0"}
					/>
					<div className="flex items-center gap-2">
						<UserRound className="size-6" />
						Técnico responsable
					</div>
					<span className="w-5/6 mx-auto px-6 py-2 card justify-center bg-accent textXS">
						MISSORA JONATAN
					</span>
				</div>

				<AccordionItem
					value="tecnico"
					className="border-b border-foreground/10 relative mb-10"
				>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full items-center justify-between p-0 py-1">
						<span className="flex-1 ml-auto text-right text-sm">ver</span>
					</AccordionTrigger>
					<AccordionContent>
						<Tecnico />
					</AccordionContent>
				</AccordionItem>

				<div className="flex flex-col gap-3 relative">
					<TextTooltip
						text={"Datos obtenidos a través del perfil."}
						className={"top-0 right-0"}
					/>
					<span className="flex items-center gap-3">
						<Warehouse className="size-6" />
						Empresa receptora
					</span>
					<div className="w-5/6 mx-auto">
						<Select defaultValue="telefonica">
							<SelectTrigger
								className="w-full mx-auto px-6 py-2 justify-center dark:bg-accent text-xs tracking-widest"
								onClick={e => e.stopPropagation()}
							>
								<SelectValue
									placeholder="Seleccione Empresa"
									className="text-center"
								/>
							</SelectTrigger>
							<SelectContent position="popper">
								<SelectGroup>
									<SelectLabel>Empresas</SelectLabel>

									<SelectItem value="telefonica">TELEFONICA</SelectItem>
									<SelectItem value="fravega">FRAVEGA</SelectItem>
									<SelectItem value="codimat">CODIMAT</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
				<AccordionItem
					value="empresa"
					className="border-b border-foreground/10 relative mb-10"
				>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center justify-between  p-0 py-1">
						<span className="flex-1 ml-auto text-right text-sm">ver</span>
					</AccordionTrigger>
					<AccordionContent>
						<Empresa />
					</AccordionContent>
				</AccordionItem>

				<div className="flex flex-col gap-3 relative">
					<TextTooltip
						text={"Datos obtenidos a través del perfil."}
						className={"top-0 right-0"}
					/>
					<span className="flex items-center gap-3">
						<Cpu className="size-6" /> Instrumento utilizado
					</span>

					<div className="w-5/6 mx-auto">
						<Select defaultValue="luxometro1">
							<SelectTrigger
								className="w-full mx-auto px-6 py-2 justify-center dark:bg-accent text-xs tracking-widest"
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

									<SelectItem value="luxometro1">LUXOMETRO-1</SelectItem>
									<SelectItem value="luxometro2">LUXOMETRO-2</SelectItem>
									<SelectItem value="luxometro3">LUXOMETRO-3</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>

				<AccordionItem
					value="instrumento"
					className="border-b border-foreground/10 relative mb-10"
				>
					<div className="absolute sm:top-2 sm:left-1/2 left-0 top-13 "></div>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center justify-between  p-0 py-1">
						<span className="flex-1 ml-auto text-right text-sm">ver</span>
					</AccordionTrigger>
					<AccordionContent>
						<Instrumento />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</article>
	)
}

const Tecnico = () => {
	return (
		<div className="bg-accent sm:bg-background py-10 sm:p-10 flex items-center justify-center">
			<div className="grid-cols-1 grid sm:grid-cols-2 gap-8 w-5/6">
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="matricula">
						Nombre
					</Label>
					<Input
						id="matricula"
						placeholder="N° Matrícula "
						defaultValue="MISSORA JONATAN"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="cargo">
						Cargo
					</Label>
					<Input
						id="cargo"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="Técnico en Seguridad e Higiene"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label>Firma Digital</Label>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/firma.png" alt="firma-digital" className="size-20" />
					</div>
				</div>

				<div className="flex flex-col gap-1">
					<Label>Pie de Página</Label>
					<Input
						id="pie1"
						placeholder="N° Matrícula "
						defaultValue="SeH MISSORA JONATAN"
						readOnly
						className="text-center"
					/>
					<Input
						id="pie2"
						placeholder="N° Matrícula "
						defaultValue="MAT 1234523"
						readOnly
						className="text-center"
					/>
				</div>
			</div>
		</div>
	)
}

const Empresa = () => {
	return (
		<div className="bg-accent sm:bg-background py-10 sm:p-10 flex items-center justify-center">
			<div className="grid-cols-1 grid sm:grid-cols-2 gap-8 w-5/6">
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="razon-social">
						Razón Social
					</Label>
					<Input
						id="razon-social"
						placeholder="Nombre de la empresa"
						value="TELEFONICA S.A"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="cuit">
						CUIT
					</Label>
					<Input
						id="cuit"
						placeholder="00-00000000-0"
						value="30-58114785-2"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<Label className="tracking-wider" htmlFor="direccion">
						Dirección
					</Label>
					<Input
						id="direccion"
						placeholder="Calle, Altura"
						value="BERUTI 70"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<Label className="tracking-wider" htmlFor="cant-empleados">
						Localidad
					</Label>
					<Input
						id="localidad"
						placeholder="Ciudad, Provincia, Pais"
						value="BAHIA BLANCA"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<Label className="tracking-wider" htmlFor="cant-empleados">
						CP
					</Label>
					<Input
						id="codigoPostal"
						placeholder="Ciudad, Provincia, Pais"
						value="8000"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<Label className="tracking-wider" htmlFor="cant-empleados">
						Provincia
					</Label>
					<Input
						id="provincia"
						placeholder="Ciudad, Provincia, Pais"
						value="BUENOS AIRES"
						readOnly
					/>
				</div>
			</div>
		</div>
	)
}

const Instrumento = () => {
	return (
		<div className="bg-accent sm:bg-background py-10 sm:p-10 flex items-center justify-center">
			<div className="grid-cols-1 grid sm:grid-cols-2 gap-8 w-5/6">
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="matricula">
						Marca
					</Label>
					<Input
						id="matricula"
						placeholder="N° Matrícula "
						defaultValue="LUXIS"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="cargo">
						Modelo
					</Label>
					<Input
						id="cargo"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="EXO-4000"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="cargo">
						Nro Serie
					</Label>
					<Input
						id="serie"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="12858752"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="cargo">
						Calibración
					</Label>
					<Input
						id="fecha"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="12/10/25"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider">Imágenes</Label>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/luxometro.jpg" alt="luxometro" className="size-20" />
					</div>
				</div>

				<div className="flex flex-col gap-1">
					<Label className="tracking-wider">Certificado</Label>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/calibracion.webp" alt="luxometro" className="size-20" />
					</div>
				</div>
			</div>
		</div>
	)
}
