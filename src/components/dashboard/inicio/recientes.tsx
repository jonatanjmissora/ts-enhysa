import { Button } from "@/components/ui/button"
import { ChevronRight, FileChartColumn } from "lucide-react"

export default function InicioRecientes() {
	return (
		<div className="flex-1 sm:p-6 2xl:p-10 flex-col sm:gap-3 2xl:gap-6 cardAccent items-start">
			<header className="sm:text-xl 2xl:text-2xl tracking-wider sm:pb-4 2xl:pb-0">
				Protocolos Recientes
			</header>
			<div className="px-6 sm:py-4 2xl:py-6 cardBackground justify-between w-full">
				<div className="flex gap-4 items-center">
					<FileChartColumn className="sm:size-10 2xl:size-14 text-foreground/70 p-2 bg-accent rounded-lg shadow-xl" />
					<div className="flex flex-col gap-0">
						<p className="sm:text-sm 2xl:text-lg font-semibold">
							Empresa Metalurgica SA - Planta A
						</p>
						<p className="sm:text-sm 2xl:text-base text-foreground/50">
							Realizado el 15/05/2024
						</p>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Button className="bg-accent text-foreground hover:bg-accent/80">
						Cumple
					</Button>
					<ChevronRight size={24} className="cursor-pointer" />
				</div>
			</div>

			<div className="px-6 sm:py-4 2xl:py-6 cardBackground justify-between w-full">
				<div className="flex sm:gap-2 2xl:gap-4 items-center">
					<FileChartColumn className="sm:size-10 2xl:size-14 text-foreground/70 p-2 bg-accent rounded-lg shadow-xl" />
					<div className="flex flex-col gap-0">
						<p className="sm:text-sm 2xl:text-lg font-semibold">
							Empresa Metalurgica SA - Planta A
						</p>
						<p className="sm:text-sm 2xl:text-base text-foreground/50">
							Realizado el 15/05/2024
						</p>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Button className="bg-accent text-foreground hover:bg-accent/80">
						Cumple
					</Button>
					<ChevronRight size={24} className="cursor-pointer" />
				</div>
			</div>

			<div className="px-6 sm:py-4 2xl:py-6 cardBackground justify-between w-full">
				<div className="flex gap-4 items-center">
					<FileChartColumn className="sm:size-10 2xl:size-14 text-foreground/70 p-2 bg-accent rounded-lg shadow-xl" />
					<div className="flex flex-col gap-0">
						<p className="sm:text-sm 2xl:text-lg font-semibold">
							Empresa Metalurgica SA - Planta A
						</p>
						<p className="sm:text-sm 2xl:text-base text-foreground/50">
							Realizado el 15/05/2024
						</p>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Button className="bg-accent text-foreground hover:bg-accent/80">
						Cumple
					</Button>
					<ChevronRight size={24} className="cursor-pointer" />
				</div>
			</div>
		</div>
	)
}
