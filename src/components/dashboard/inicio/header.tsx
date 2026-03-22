import { Link } from "@tanstack/react-router"
import { FilePlus } from "lucide-react"

export default function InicioHeader() {
	return (
		<div className="flex justify-between items-center">
			<div className="flex flex-col gap-2">
				<h2 className="text-4xl tracking-widest">Panel de Control</h2>
				<p className="text-xl tracking-wider text-foreground/50">
					Gestiona tus informes de iluminación y protocolo.
				</p>
			</div>
			<Link
				to="/new-report"
				className="flex items-center gap-2 text-xl tracking-wide p-6 py-4 bg-accent text-foreground hover:bg-accent/50 rounded-xl"
			>
				<FilePlus size={24} />
				Nuevo Protocolo
			</Link>
		</div>
	)
}
