import { Sun } from "lucide-react"

export default function NewReportPart2Clima() {
	return (
		<div className="sm:w-full w-full mx-auto flex sm:flex-col 2xl:flex-row gap-2 justify-between items-center font-semibold py-6">
			<div className="flex items-center gap-2">
				Clima:
				<span className="italic text-foreground/50">Soleado</span>{" "}
				<Sun size={20} />
			</div>
			<div className="flex sm:justify-evenly 2xl:justify-between 2xl:pl-4 gap-2 sm:w-full">
				<div className="flex items-center gap-2 ">
					Humedad:
					<span className="italic text-foreground/50">60%</span>
				</div>
				<div className="flex items-center gap-2">
					Temperatura:
					<span className="italic text-foreground/50">25°C</span>
				</div>
			</div>
		</div>
	)
}
