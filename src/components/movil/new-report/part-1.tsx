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

export default function MovilPart1Data() {
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
				<span className="w-5/6 mx-auto px-6 py-2 card justify-center bg-accent textXS">
					MISSORA JONATAN
				</span>
			</div>

			<div className="flex flex-col gap-3 relative">
				<span className="flex items-center gap-3">
					<Warehouse className="size-6" />
					Empresa receptora
				</span>
				<div className="w-5/6 mx-auto">
					<Select defaultValue="telefonica">
						<SelectTrigger
							className="w-full mx-auto px-6 py-2 text-right dark:bg-accent text-xs tracking-widest"
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

			<div className="flex flex-col gap-3 relative">
				<span className="flex items-center gap-3">
					<Cpu className="size-6" /> Instrumento utilizado
				</span>

				<div className="w-5/6 mx-auto">
					<Select defaultValue="luxometro1">
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

								<SelectItem value="luxometro1">LUXOMETRO-1</SelectItem>
								<SelectItem value="luxometro2">LUXOMETRO-2</SelectItem>
								<SelectItem value="luxometro3">LUXOMETRO-3</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>

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
		</article>
	)
}
