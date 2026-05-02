import { CheckCircle, ClockComponent } from "@/components/layout/icons"
import { Link } from "@tanstack/react-router"

export default function MovilRecientes() {
	return (
		<div className="flex flex-col gap-4 p-3 py-12 flex-1 card bg-accent items-start">
			<header className="text-[22px] tracking-wider font-semibold pb-2 dark:text-shadow-lg/50">
				Protocolos Recientes
			</header>
			<div className="p-2 px-6 py-4 card bg-background ring-foreground/5 justify-between w-full">
				<div className="flex gap-4 items-center relative">
					<CheckCircle className="absolute -top-8 -right-13" />
					<div className="flex flex-col gap-1">
						<p className="textM font-semibold w-60 truncate">
							Empresa Metalurgica SA - Planta A
						</p>
						<p className="text-xs text-foreground/50">
							Realizado el 15/05/2024
						</p>
					</div>
				</div>
			</div>

			<div className="p-2 px-6 py-4 card bg-background justify-between w-full">
				<div className="flex gap-4 items-center relative">
					<CheckCircle className="absolute -top-8 -right-13" />
					<div className="flex flex-col gap-1">
						<p className="textM font-semibold w-60 truncate">
							Empresa Metalurgica SA - Planta A
						</p>
						<p className="text-xs text-foreground/50">
							Realizado el 15/05/2024
						</p>
					</div>
				</div>
			</div>

			<div className="p-2 px-6 py-4 card bg-background justify-between w-full">
				<div className="flex gap-4 items-center relative">
					<ClockComponent className="absolute -top-8 -right-13" />
					<div className="flex flex-col gap-1">
						<p className="textM font-semibold w-60 truncate">
							Empresa Metalurgica SA - Planta A
						</p>
						<p className="text-xs text-foreground/50">
							Realizado el 15/05/2024
						</p>
					</div>
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
