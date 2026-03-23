import { PreferencesMenu } from "@/components/layout/preferences-menu"
import { createFileRoute } from "@tanstack/react-router"
import {
	Ban,
	CheckCircle2,
	Clock,
	Download,
	FileChartColumn,
	Trash2,
} from "lucide-react"

export const Route = createFileRoute("/_protected/reports")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<section className="min-h-screen flex flex-col">
			<header className="sm:text-base 2xl:text-xl font-semibold tracking-wider sm:h-20 2xl:h-24 px-20 bg-accent border border-background flex justify-between items-center">
				<span>Protocolo de Iluminación Res 84/12 SRT</span>
				<PreferencesMenu />
			</header>
			<article className="flex flex-col gap-10 py-10 px-20">
				<div className="flex justify-between items-center">
					<p className=" text-2xl font-semibold">Reportes y Protocolos</p>
					<div className="flex items-center justify-center gap-4">
						<span className="text-xl">Filtros</span>
						<FileChartColumn className="sm:size-8 2xl:size-10 text-blue-600/50 cursor-pointer hover:text-blue-600 transition-colors" />
						<CheckCircle2 className="sm:size-8 2xl:size-10 text-green-500/50 cursor-pointer hover:text-green-500 transition-colors" />
						<Ban className="sm:size-8 2xl:size-10 text-red-500/50 cursor-pointer hover:text-red-500 transition-colors" />
						<Clock className="sm:size-8 2xl:size-10 text-amber-500/50 cursor-pointer hover:text-amber-500 transition-colors" />
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<div className="px-6 sm:py-4 2xl:py-6 cardAccent justify-between w-full">
						<div className="flex gap-4 items-center">
							<FileChartColumn className="sm:size-8 2xl:size-10 text-blue-700/70" />
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
							<Download className="sm:size-6 2xl:size-8 text-foreground/70 cursor-pointer hover:text-foreground transition-colors" />
							<Trash2 className="sm:size-6 2xl:size-8 text-red-700/70 cursor-pointer hover:text-foreground transition-colors" />
						</div>
					</div>

					<div className="px-6 sm:py-4 2xl:py-6 cardAccent justify-between w-full">
						<div className="flex gap-4 items-center">
							<FileChartColumn className="sm:size-8 2xl:size-10 text-blue-700/70" />
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
							<Download className="sm:size-6 2xl:size-8 text-foreground/70 cursor-pointer hover:text-foreground transition-colors" />
							<Trash2 className="sm:size-6 2xl:size-8 text-red-700/70 cursor-pointer hover:text-foreground transition-colors" />
						</div>
					</div>

					<div className="px-6 sm:py-4 2xl:py-6 cardAccent justify-between w-full">
						<div className="flex gap-4 items-center">
							<CheckCircle2 className="sm:size-8 2xl:size-10 text-red-700/70" />
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
							<Download className="sm:size-6 2xl:size-8 text-foreground/70 cursor-pointer hover:text-foreground transition-colors" />
							<Trash2 className="sm:size-6 2xl:size-8 text-red-700/70 cursor-pointer hover:text-foreground transition-colors" />
						</div>
					</div>

					<div className="px-6 sm:py-4 2xl:py-6 cardAccent justify-between w-full">
						<div className="flex gap-4 items-center">
							<FileChartColumn className="sm:size-8 2xl:size-10 text-blue-700/70" />
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
							<Download className="sm:size-6 2xl:size-8 text-foreground/70 cursor-pointer hover:text-foreground transition-colors" />
							<Trash2 className="sm:size-6 2xl:size-8 text-red-700/70 cursor-pointer hover:text-foreground transition-colors" />
						</div>
					</div>

					<div className="px-6 sm:py-4 2xl:py-6 cardAccent justify-between w-full">
						<div className="flex gap-4 items-center">
							<Clock className="sm:size-8 2xl:size-10 text-amber-700/70" />
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
							<Download className="sm:size-6 2xl:size-8 text-foreground/70 cursor-pointer hover:text-foreground transition-colors" />
							<Trash2 className="sm:size-6 2xl:size-8 text-red-700/70 cursor-pointer hover:text-foreground transition-colors" />
						</div>
					</div>

					<div className="px-6 sm:py-4 2xl:py-6 cardAccent justify-between w-full">
						<div className="flex gap-4 items-center">
							<FileChartColumn className="sm:size-8 2xl:size-10 text-blue-700/70" />
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
							<Download className="sm:size-6 2xl:size-8 text-foreground/70 cursor-pointer hover:text-foreground transition-colors" />
							<Trash2 className="sm:size-6 2xl:size-8 text-red-700/70 cursor-pointer hover:text-foreground transition-colors" />
						</div>
					</div>
				</div>
			</article>
		</section>
	)
}
