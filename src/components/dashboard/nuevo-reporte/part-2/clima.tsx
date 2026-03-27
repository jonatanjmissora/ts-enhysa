import { Sun } from "lucide-react"

export default function NewReportPart2Clima() {
	return (
		<div className="sm:w-full 2xl:w-3/4 mx-auto flex justify-between items-center text-lg font-semibold py-6">
			<div className="flex items-center gap-2">
				Clima:
				<span className="italic text-foreground/50">Soleado</span>{" "}
				<Sun size={20} />
			</div>
			<div className="flex items-center gap-2">
				Humedad:
				<span className="italic text-foreground/50">60%</span>
			</div>
			<div className="flex items-center gap-2">
				Temperatura:
				<span className="italic text-foreground/50">25°C</span>
			</div>
		</div>
	)
}
