import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"
import { ChevronRight, FileChartColumn } from "lucide-react"

export default function InicioRecientes() {
	return (
		<div className="p-3 py-12 flex-1 sm:p-6 2xl:p-10 flex-col gap-3 2xl:gap-6 card bg-accent rounded-lg items-start">
			<header className="textXL pb-2">Protocolos Recientes</header>
			<div className="p-2 sm:px-6 sm:py-4 2xl:px-6 2xl:py-6 cardBackground justify-between w-full">
				<div className="flex gap-4 items-center">
					<FileChartColumn className="size-8 sm:size-10 2xl:size-14 text-foreground/70 p-1 sm:p-2 bg-accent rounded-lg shadow-xl" />
					<div className="flex flex-col gap-1">
						<p className="sm:text-sm 2xl:text-lg font-semibold w-60 truncate sm:w-full">
							Empresa Metalurgica SA - Planta A
						</p>
						<p className="text-xs sm:text-sm 2xl:text-base text-foreground/50">
							Realizado el 15/05/2024
						</p>
					</div>
				</div>
				<div className="hidden sm:flex items-center gap-4">
					<Button className="bg-accent text-foreground hover:bg-accent/80">
						Cumple
					</Button>
					<ChevronRight size={24} className="cursor-pointer" />
				</div>
			</div>

			<div className="p-2 sm:px-6 sm:py-4 2xl:px-6 2xl:py-6 cardBackground justify-between w-full">
				<div className="flex gap-4 items-center">
					<FileChartColumn className="size-8 sm:size-10 2xl:size-14 text-foreground/70 p-1 sm:p-2 bg-accent rounded-lg shadow-xl" />
					<div className="flex flex-col gap-1">
						<p className="sm:text-sm 2xl:text-lg font-semibold w-60 truncate sm:w-full">
							Empresa Metalurgica SA - Planta A
						</p>
						<p className="text-xs sm:text-sm 2xl:text-base text-foreground/50">
							Realizado el 15/05/2024
						</p>
					</div>
				</div>
				<div className="hidden sm:flex items-center gap-4">
					<Button className="bg-accent text-foreground hover:bg-accent/80">
						Cumple
					</Button>
					<ChevronRight size={24} className="cursor-pointer" />
				</div>
			</div>
			<div className="p-2 sm:px-6 sm:py-4 2xl:px-6 2xl:py-6 cardBackground justify-between w-full">
				<div className="flex gap-4 items-center">
					<FileChartColumn className="size-8 sm:size-10 2xl:size-14 text-foreground/70 p-1 sm:p-2 bg-accent rounded-lg shadow-xl" />
					<div className="flex flex-col gap-1">
						<p className="sm:text-sm 2xl:text-lg font-semibold w-60 truncate sm:w-full">
							Empresa Metalurgica SA - Planta A
						</p>
						<p className="text-xs sm:text-sm 2xl:text-base text-foreground/50">
							Realizado el 15/05/2024
						</p>
					</div>
				</div>
				<div className="hidden sm:flex items-center gap-4">
					<Button className="bg-accent text-foreground hover:bg-accent/80">
						Cumple
					</Button>
					<ChevronRight size={24} className="cursor-pointer" />
				</div>
			</div>

			<Link
				to="/reports"
				className=" text-sm text-foreground/70 hover:underline py-2 border-t border-foreground/10 w-full text-right"
			>
				Ver todos
			</Link>
		</div>
	)
}
