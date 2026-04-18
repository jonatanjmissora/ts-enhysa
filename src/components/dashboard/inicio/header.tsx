import { Link } from "@tanstack/react-router"
import { FilePlus } from "lucide-react"

export default function InicioHeader() {
	return (
		<div className="flex justify-between items-center flex-col sm:flex-row gap-10 sm:gap-0">
			<div className="flex flex-col gap-4 sm:gap-2">
				<h2 className="text-3xl sm:text-[20px] 2xl:text-2xl text-center textXL sm:text-left ">
					Panel de Control
				</h2>
				<p className="sm:text-base 2xl:text-xl tracking-wider text-foreground/50 text-center sm:text-left text-pretty">
					Gestiona tus informes de iluminación y protocolo.
				</p>
			</div>
			<Link
				to="/new-report"
				className="flex items-center gap-2 sm:text-base 2xl:text-xl tracking-wide p-6 py-4 text-foreground rounded-xl themeBtnAccent shadow w-full sm:w-auto justify-center"
			>
				<FilePlus className="sm:size-5 2xl:size-6 text-foreground/70" />
				Nuevo Protocolo
			</Link>
		</div>
	)
}
