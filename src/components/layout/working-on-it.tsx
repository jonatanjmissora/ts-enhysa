import { Link } from "@tanstack/react-router"
import { useEffect } from "react"

export default function WorkingOnIt() {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0)
		}
	}, [])

	return (
		<div className="flex items-center flex-col mt-[70px] h-svh relative overflow-visible">
			<p className="text-xl font-semibold text-center tracking-wider text-pretty dark:text-shadow-lg">
				Proximamente en nuevas actualizaciones. Estamos trabajando para ello.
				Disculpe las molestias.
			</p>
			<img
				src="/working-on-it.webp"
				alt="logo EnHySa"
				className="absolute opacity-75 top-20 left-0 w-screen object-contain h-[300px] bottom-0 -z-10 max-w-none mask-t-from-50% mask-b-from-80%"
			/>
			<Link
				to="/"
				className="mt-[45svh] flex items-center gap-2 px-10 py-2 textM text-sm font-semibold rounded-xl themeBtnAccent  my-shadow mx-auto justify-center dark:text-shadow-lg/50"
			>
				Volver
			</Link>
		</div>
	)
}
