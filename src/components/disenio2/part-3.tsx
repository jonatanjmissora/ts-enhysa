import {
	Cloud,
	CloudRain,
	CloudSun,
	Database,
	List,
	NotebookPen,
	Search,
	Sun,
} from "lucide-react"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../ui/select"

export const Part3Data = () => {
	return (
		<article className="w-full flex flex-col justify-center items-center">
			<div className="flex items-center justify-between w-full mb-10 px-5 rounded bg-pink-500/25">
				<div className="textXL py-2 flex items-center gap-8">
					Información <Database className="sm:size-7 2xl:size-9" />
				</div>
			</div>

			<div className="flex flex-col items-center gap-8 w-full">
				<div className="grid grid-cols-3 gap-8 w-3/4">
					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="matricula">
							Clima
						</label>
						<Select defaultValue="soleado">
							<SelectTrigger className="p-6 w-full justify-between gap-3 sm:text-base 2xl:text-xl dark:bg-background rounded-lg  dark:hover:bg-background/75">
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

					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="matricula">
							Humedad
						</label>
						<Select defaultValue="60">
							<SelectTrigger className="p-6 w-full justify-between gap-3 sm:text-base 2xl:text-xl dark:bg-background rounded-lg  dark:hover:bg-background/75">
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

					<div className="flex flex-col gap-1">
						<label className="tracking-wider" htmlFor="matricula">
							Temperatura
						</label>
						<Select defaultValue="20">
							<SelectTrigger className="p-6 w-full justify-between gap-3 sm:text-base 2xl:text-xl dark:bg-background rounded-lg dark:hover:bg-background/75">
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

				<div className="flex flex-col gap-2 w-3/4">
					<label
						className="tracking-wider sm:text-base 2xl:text-xl flex items-center gap-4"
						htmlFor="matricula"
					>
						<Search className="size-5 text-amber-500/70" />
						Observacion General
					</label>
					<textarea
						id="matricula"
						className={`card bg-background px-4 rounded-lg text-center min-h-24 italic text-foreground/40 tracking-wider py-6 textXS`}
						placeholder="N° Matrícula "
						defaultValue="Detalle general del estado del terreno de medición, condiciones generales, etc. En caso de no haber observaciones, dejar este campo en blanco."
						readOnly
					/>
				</div>

				<div className="flex flex-col gap-2 w-3/4">
					<label
						className="tracking-wider sm:text-base 2xl:text-xl flex items-center gap-4"
						htmlFor="matricula"
					>
						<NotebookPen className="size-5 text-amber-500/70" />
						Conclusiónes Finales
					</label>
					<textarea
						id="matricula"
						className={`card bg-background px-4 rounded-lg text-center min-h-24 italic text-foreground/40 tracking-wider py-6 textXS`}
						placeholder="N° Matrícula "
						defaultValue="Conclusión final del reporte, detalles observados, etc. En caso de no haber conclusiones, dejar este campo en blanco."
						readOnly
					/>
				</div>

				<div className="flex flex-col gap-2 w-3/4">
					<label
						className="tracking-wider sm:text-base 2xl:text-xl flex items-center gap-4"
						htmlFor="matricula"
					>
						<List className="size-5 text-amber-500/70" />
						Recomendaciones Generales
					</label>
					<textarea
						id="matricula"
						className={`card bg-background px-4 rounded-lg text-center min-h-24 italic text-foreground/40 tracking-wider py-6 textXS`}
						placeholder="N° Matrícula "
						defaultValue="Recomendaciones generales luego de efectuar las mediciones, sin especificaciones técnicas. En caso de no haber recomendaciones, dejar este campo en blanco."
						readOnly
					/>
				</div>
			</div>
		</article>
	)
}
