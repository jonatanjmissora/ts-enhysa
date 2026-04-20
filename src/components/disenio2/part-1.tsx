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

export default function Part1Data() {
	return (
		<article className="w-full my-10 sm:my-4">
			<Accordion
				type="single"
				collapsible
				defaultValue=""
				className="flex flex-col gap-8"
			>
				<AccordionItem
					value="tecnico"
					className="border-b border-foreground/10"
				>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center">
						<div className="w-80 flex items-center gap-2">
							<UserRound className="size-6" />
							Técnico responsable
						</div>
						<span className="w-60 px-6 py-2 card bg-background rounded-lg textXS">
							MISSORA JONATAN
						</span>
					</AccordionTrigger>
					<AccordionContent>
						<Tecnico />
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					value="empresa"
					className="border-b border-foreground/10"
				>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center">
						<span className="w-80 flex items-center gap-3">
							<Warehouse className="size-6" />
							Empresa receptora
						</span>
						<Select defaultValue="telefonica">
							<SelectTrigger className="w-60 px-6 py-1 card dark:bg-background rounded-lg">
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
					</AccordionTrigger>
					<AccordionContent>
						<Empresa />
					</AccordionContent>
				</AccordionItem>

				<AccordionItem
					value="instrumento"
					className="border-b border-foreground/10"
				>
					<AccordionTrigger className="flex px-5 w-11/12 sm:w-full flex-wrap items-center">
						<span className="w-80 flex items-center gap-3">
							<Cpu className="size-6" /> Instrumento utilizado
						</span>
						<Select defaultValue="luxometro1">
							<SelectTrigger className="w-60 px-6 py-1 card dark:bg-background rounded-lg">
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
						Matrícula
					</label>
					<input
						id="matricula"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						placeholder="N° Matrícula "
						defaultValue="MISSORA JONATAN"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="cargo">
						Cargo
					</label>
					<input
						id="cargo"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="Técnico en Seguridad e Higiene"
						readOnly
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
					<input
						id="razon-social"
						placeholder="Nombre de la empresa"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						value="TELEFONICA S.A"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="cuit">
						CUIT
					</label>
					<input
						id="cuit"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						placeholder="00-00000000-0"
						value="30-58114785-2"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label className="tracking-wider" htmlFor="direccion">
						Dirección
					</label>
					<input
						id="direccion"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						placeholder="Calle, Altura"
						value="BERUTI 70"
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
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						value="BAHIA BLANCA"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label className="tracking-wider" htmlFor="cant-empleados">
						CP
					</label>
					<input
						id="codigoPostal"
						placeholder="Ciudad, Provincia, Pais"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						value="8000"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label className="tracking-wider" htmlFor="cant-empleados">
						Provincia
					</label>
					<input
						id="provincia"
						placeholder="Ciudad, Provincia, Pais"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
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
					<label className="tracking-wider" htmlFor="matricula">
						Marca
					</label>
					<input
						id="matricula"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						placeholder="N° Matrícula "
						defaultValue="LUXIS"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="cargo">
						Modelo
					</label>
					<input
						id="cargo"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="EXO-4000"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="cargo">
						Nro Serie
					</label>
					<input
						id="serie"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="12858752"
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="tracking-wider" htmlFor="cargo">
						Calibración
					</label>
					<input
						id="fecha"
						className="card bg-background sm:bg-accent py-2 px-4 rounded-lg text-center"
						placeholder="Ej. Seguridad e Higiene"
						defaultValue="12/10/25"
						readOnly
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
