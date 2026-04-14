import { Cloud, CloudRain, CloudSun, Sun } from "lucide-react"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { ClimaType } from "@/lib/types"

export default function NewReportPart2Clima({
	clima,
	setClima,
}: {
	clima: ClimaType
	setClima: (clima: ClimaType) => void
}) {
	return (
		<div className="sm:w-full w-full flex sm:flex-col 2xl:flex-row gap-2 justify-between items-center font-semibold py-6">
			<div className="w-full flex gap-3 items-center">
				<label htmlFor="clima" className="w-1/2">
					Clima
				</label>
				<Select
					value={clima.estado}
					onValueChange={value =>
						setClima({ ...clima, estado: value as ClimaType["estado"] })
					}
				>
					<SelectTrigger className="w-full justify-center gap-3 sm:text-sm 2xl:text-base dark:bg-background rounded-lg py-[1.15rem] dark:hover:bg-background/75">
						<SelectValue />
					</SelectTrigger>
					<SelectContent className="w-full p-2 px4">
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

			<div className="w-full flex gap-3 items-center">
				<label htmlFor="clima" className="w-1/2">
					Humedad
				</label>
				<Select
					defaultValue={clima.humedad}
					onValueChange={value =>
						setClima({ ...clima, humedad: value as ClimaType["humedad"] })
					}
				>
					<SelectTrigger className="w-full justify-center gap-3 sm:text-base 2xl:text-xl dark:bg-background rounded-lg py-[1.15rem] dark:hover:bg-background/75">
						<SelectValue />
					</SelectTrigger>
					<SelectContent className="w-full p-2 px4">
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
			<div className="w-full flex gap-3 items-center">
				<label htmlFor="clima" className="w-1/2">
					Temperatura
				</label>
				<Select
					defaultValue={clima.temperatura.toString()}
					onValueChange={value =>
						setClima({
							...clima,
							temperatura: value as ClimaType["temperatura"],
						})
					}
				>
					<SelectTrigger className="w-full justify-center gap-3 sm:text-base 2xl:text-xl dark:bg-background rounded-lg py-[1.15rem] dark:hover:bg-background/75">
						<SelectValue />
					</SelectTrigger>
					<SelectContent className="w-full p-2 px4">
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
	)
}
