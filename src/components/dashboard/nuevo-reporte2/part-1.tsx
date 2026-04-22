import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
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
import { TextTooltip } from "../../layout/text-tooltip"
import { Input } from "../../ui/input"

export default function Part1Data() {
	return (
		<article className="w-full my-10 sm:my-4 relative">
			<TextTooltip
				text={"Datos obtenidos a través del perfil."}
				className={"-top-8 right-0"}
			/>
			<Accordion
				type="single"
				collapsible
				defaultValue=""
				className="flex flex-col gap-8"
			>
				<AccordionItem
					value="tecnico"
					className="border-b border-foreground/10 relative"
				>
					<div className="absolute top-2  left-1/2">
						<span className="w-60 px-6 py-2 card bg-background textXS ring ring-foreground/10 dark:ring-foreground/7">
							MISSORA JONATAN
						</span>
					</div>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full items-center justify-between">
						<div className="flex items-center gap-2">
							<UserRound className="size-6" />
							Técnico responsable
						</div>
						<span className="flex-1 ml-auto text-right">ver</span>
					</AccordionTrigger>
					<AccordionContent>
						<Tecnico />
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					value="empresa"
					className="border-b border-foreground/10 relative"
				>
					<div className="absolute top-2  left-1/2">
						<Select defaultValue="telefonica">
							<SelectTrigger
								className="w-60"
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
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center justify-between">
						<span className="flex items-center gap-3">
							<Warehouse className="size-6" />
							Empresa receptora
						</span>
						<span className="flex-1 ml-auto text-right">ver</span>
					</AccordionTrigger>
					<AccordionContent>
						<Empresa />
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					value="instrumento"
					className="border-b border-foreground/10 relative"
				>
					<div className="absolute sm:top-2 sm:left-1/2 left-0 top-13 ">
						<Select defaultValue="luxometro1">
							<SelectTrigger className="w-60 px-6 py-1 card dark:bg-background">
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
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center justify-between">
						<span className="flex items-center gap-3 w-full sm:w-max">
							<Cpu className="size-6" /> Instrumento utilizado
						</span>
						<span className="flex-1 ml-auto text-right">ver</span>
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
					<label className="tracking-wider" htmlFor="matricula">
						Nombre
					</label>
					<Input
						id="matricula"
						placeholder="N° Matrícula "
						defaultValue="MISSORA JONATAN"
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="cargo">
						Cargo
					</label>
					<Input
						id="cargo"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="Técnico en Seguridad e Higiene"
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<p className="tracking-wider text-left">firma digital</p>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/firma.png" alt="firma-digital" className="size-20" />
					</div>
				</div>

				<div className="flex flex-col gap-1">
					<p className="tracking-wider text-left">pie de página</p>
					<span className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						SeH MISSORA JONATAN
					</span>
					<span className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						MAT 1234523
					</span>
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
					<label className="tracking-wider" htmlFor="razon-social">
						Razón Social
					</label>
					<Input
						id="razon-social"
						placeholder="Nombre de la empresa"
						value="TELEFONICA S.A"
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
						value="30-58114785-2"
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
						value="BERUTI 70"
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
						value="BAHIA BLANCA"
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
						value="8000"
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
						value="BUENOS AIRES"
						readOnly
						className="bg-accent"
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
					<label className="tracking-wider" htmlFor="matricula">
						Marca
					</label>
					<Input
						id="matricula"
						placeholder="N° Matrícula "
						defaultValue="LUXIS"
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="cargo">
						Modelo
					</label>
					<Input
						id="cargo"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="EXO-4000"
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="cargo">
						Nro Serie
					</label>
					<Input
						id="serie"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="12858752"
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="cargo">
						Calibración
					</label>
					<Input
						id="fecha"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="12/10/25"
						readOnly
						className="bg-accent"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<p className="tracking-wider text-left">Imágenes</p>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/luxometro.jpg" alt="luxometro" className="size-20" />
					</div>
				</div>

				<div className="flex flex-col gap-1">
					<p className="tracking-wider text-left">Certificado</p>
					<div className="card bg-background sm:bg-accent py-2 px-4 rounded-lg flex items-center justify-center">
						<img src="/calibracion.webp" alt="luxometro" className="size-20" />
					</div>
				</div>
			</div>
		</div>
	)
}
