import { Button } from "@/components/ui/button"
import { ChevronRight, FileChartColumn } from "lucide-react"

export default function InicioRecientes() {
	return (
		<div className="flex-1 p-10 bg-accent border border-border rounded-xl flex flex-col gap-6">
			<header className="text-2xl tracking-wider">Protocolos Recientes</header>
			<div className="p-6 bg-background border border-border rounded-xl flex justify-between items-center shadow-xl">
				<div className="flex gap-4 items-center">
					<FileChartColumn className="size-14 text-foreground/70 p-2 bg-accent rounded-lg shadow-xl" />
					<div className="flex flex-col gap-0">
						<p className="text-lg font-semibold">
							Empresa Metalurgica SA - Planta A
						</p>
						<p className="text-foreground/50">Realizado el 15/05/2024</p>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Button className="bg-accent text-foreground hover:bg-accent/80">
						Cumple
					</Button>
					<ChevronRight size={24} className="cursor-pointer" />
				</div>
			</div>

			<div className="p-6 bg-background border border-border rounded-xl flex justify-between items-center shadow-xl">
				<div className="flex gap-4 items-center">
					<FileChartColumn className="size-14 text-foreground/70 p-2 bg-accent rounded-lg shadow-xl" />
					<div className="flex flex-col gap-0">
						<p className="text-lg font-semibold">
							Empresa Metalurgica SA - Planta A
						</p>
						<p className="text-foreground/50">Realizado el 15/05/2024</p>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Button className="bg-accent text-foreground hover:bg-accent/80">
						Cumple
					</Button>
					<ChevronRight size={24} className="cursor-pointer" />
				</div>
			</div>

			<div className="p-6 bg-background border border-border rounded-xl flex justify-between items-center shadow-xl">
				<div className="flex gap-4 items-center">
					<FileChartColumn className="size-14 text-foreground/70 p-2 bg-accent rounded-lg shadow-xl" />
					<div className="flex flex-col gap-0">
						<p className="text-lg font-semibold">
							Empresa Metalurgica SA - Planta A
						</p>
						<p className="text-foreground/50">Realizado el 15/05/2024</p>
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
