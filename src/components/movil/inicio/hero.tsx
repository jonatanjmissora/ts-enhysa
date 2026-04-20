import { Link } from "@tanstack/react-router"
import { FilePlus } from "lucide-react"

export default function MovilHero() {
	return (
		<div className="flex justify-between items-center flex-col mt-[70px] h-[550px] relative overflow-visible">
			<p className="text-4xl font-semibold text-center tracking-wider text-pretty px-6 text-shadow-lg">
				Tus Informes de iluminación y protocolo.
			</p>
			<img
				src="/movil-hero.webp"
				alt="logo EnHySa"
				className="absolute opacity-75 top-6 -left-6 -right-6 w-screen h-[500px] bottom-0 -z-10 max-w-none mask-t-from-50% mask-b-from-80%"
			/>
			<Link
				to="/new-report2"
				className="flex items-center gap-2 p-6 py-4 textM font-semibold rounded-xl themeBtnAccent  my-shadow w-full sm:w-auto justify-center"
			>
				<FilePlus className="sm:size-5 2xl:size-6 text-foreground/70" />
				Nuevo Reporte
			</Link>
		</div>
	)
}
