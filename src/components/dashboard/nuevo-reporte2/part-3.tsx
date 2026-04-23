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
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export const Part3Data = () => {
	return (
		<article className="w-full flex flex-col justify-center items-center">
			<div className="flex items-center justify-between w-full mb-10 px-5 rounded bg-pink-500/25">
				<div className="textXL py-2 px-2 flex items-center gap-8 justify-between w-full sm:w-max">
					Información <Database className="sm:size-7 2xl:size-9" />
				</div>
			</div>

			<div className="flex flex-col items-center gap-8 w-full">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full sm:w-3/4">
					<div className="flex flex-col gap-1 sm:w-full w-5/6 mx-auto">
						<Label className="tracking-wider" htmlFor="matricula">
							Clima
						</Label>
						<Select defaultValue="soleado">
							<SelectTrigger className="w-full">
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

					<div className="flex flex-col gap-1 sm:w-full w-5/6 mx-auto">
						<Label className="tracking-wider" htmlFor="matricula">
							Humedad
						</Label>
						<Select defaultValue="60">
							<SelectTrigger className="w-full">
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

					<div className="flex flex-col gap-1 sm:w-full w-5/6 mx-auto">
						<Label className="tracking-wider" htmlFor="matricula">
							Temperatura
						</Label>
						<Select defaultValue="20">
							<SelectTrigger className="w-full">
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

				<div className="flex flex-col gap-2 w-full sm:w-3/4">
					<Label
						className="tracking-wider sm:text-base 2xl:text-xl flex items-center gap-4"
						htmlFor="observacion"
					>
						<Search className="size-5 text-amber-500/70" />
						Observacion General
					</Label>
					<textarea
						id="observacion"
						className={`card bg-accent sm:bg-background px-4 text-center min-h-30 sm:min-h-24 italic text-foreground/40 tracking-wider py-6 textXS`}
						placeholder="Observación "
						defaultValue={`Detalle general de las condiciones en las que tomamos las mediciones. En caso de no haber observaciones, poner "Sin Observaciones"`}
						readOnly
					/>
				</div>

				<div className="flex flex-col gap-2 w-full sm:w-3/4">
					<Label
						className="tracking-wider sm:text-base 2xl:text-xl flex items-center gap-4"
						htmlFor="conclusion"
					>
						<NotebookPen className="size-5 text-amber-500/70" />
						Conclusiónes Finales
					</Label>
					<textarea
						id="conclusion"
						className={`card bg-accent sm:bg-background px-4 text-center min-h-30 sm:min-h-24 italic text-foreground/40 tracking-wider py-6 textXS`}
						placeholder="Conclusión"
						defaultValue={`Conclusión final del reporte, análisis de los resultados de las mediciones, Conclusiones. En caso de no haber conclusiones, poner "Análisis Pendiente"`}
						readOnly
					/>
				</div>

				<div className="flex flex-col gap-2 w-full sm:w-3/4">
					<Label
						className="tracking-wider sm:text-base 2xl:text-xl flex items-center gap-4"
						htmlFor="recomendacion"
					>
						<List className="size-5 text-amber-500/70" />
						Recomendaciones Generales
					</Label>
					<textarea
						id="recomendacion"
						className={`card bg-accent sm:bg-background px-4 text-center min-h-30 sm:min-h-24 italic text-foreground/40 tracking-wider py-6 textXS`}
						placeholder="Recomendación"
						defaultValue={`Luego de realizar un análisis de los resultados de las mediciones, dar nuestro asesoramiento técnico, oportunidad de mejora, condiciones de mejora, cambios solicitados. En caso de no tener recomendaciones, poner "Sin Recomendaciones"`}
						readOnly
					/>
				</div>
			</div>
		</article>
	)
}
