import { Link } from "@tanstack/react-router"
import { FilePlus, Loader } from "lucide-react"
import { useState } from "react"

export default function MovilHero() {
	const [loading, setLoading] = useState(false)

	return (
		<article className="flex-1 flex flex-col gap-30 mt-35">
			<div className="flex justify-between items-center flex-col h-[550px] relative overflow-visible">
				<div className="text-center flex flex-col gap-1">
					<p className="text-[26px] font-semibold text-center tracking-wider text-pretty dark:text-shadow-lg">
						Protocolo de Iluminación
					</p>
					<p className="text-[26px] font-semibold text-center tracking-wider text-pretty dark:text-shadow-lg">
						Res 84/12 SRT.
					</p>
				</div>
				<img
					src="/movil-hero-light-meter.webp"
					alt="logo EnHySa"
					className="absolute opacity-75 top-6 left-0 w-screen h-[500px] bottom-0 -z-10 max-w-none mask-t-from-50% mask-b-from-80%"
				/>
				<Link
					resetScroll={true}
					to="/iluminacion/new-report"
					onClick={() => {
						setLoading(true)
					}}
					className="flex items-center gap-2 p-6 py-4 textM font-semibold rounded-xl themeBtnAccent  my-shadow w-5/6 mx-auto sm:w-auto justify-center dark:text-shadow-lg/50"
				>
					{loading ? (
						<>
							<span>Cargando...</span>
							<Loader className="size-5 animate-spin text-foreground/70" />
						</>
					) : (
						<>
							<span>Nuevo Reporte</span>
							<FilePlus className="sm:size-5 2xl:size-6 text-foreground/70" />
						</>
					)}
				</Link>
			</div>
		</article>
	)
}
