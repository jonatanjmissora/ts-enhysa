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
import { useState } from "react"

type EstadoType = "soleado" | "nublado" | "templado" | "lluvioso"
type HumedadType = "60" | "70" | "80" | "90"
type TemperaturaType = "10" | "15" | "20" | "25" | "30" | "35"
type clima = {
	estado: EstadoType
	humedad: HumedadType
	temperatura: TemperaturaType
}

export default function NewReportPart2Clima() {
	const [clima, setClima] = useState<clima>({
		estado: "soleado",
		humedad: "60",
		temperatura: "20",
	})

	return (
		<div className="sm:w-full w-full mx-auto flex sm:flex-col 2xl:flex-row gap-2 justify-between items-center font-semibold py-6">
			<div className="w-full flex gap-3 items-center">
				<label htmlFor="clima" className="w-1/2">
					Clima
				</label>
				<Select
					defaultValue={clima.estado}
					onValueChange={(value: EstadoType) =>
						setClima(prev => ({ ...prev, estado: value }))
					}
				>
					<SelectTrigger className="w-full justify-center gap-3 sm:text-base 2xl:text-xl dark:bg-background rounded-lg py-[1.15rem] dark:hover:bg-background/75">
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
					onValueChange={(value: HumedadType) =>
						setClima(prev => ({ ...prev, humedad: value }))
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
					onValueChange={(value: TemperaturaType) =>
						setClima(prev => ({ ...prev, temperatura: value }))
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
