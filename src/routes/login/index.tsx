import { LoginForm } from "@/components/login-form"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/login/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<section className="w-full h-screen flex items-center relative overflow-hidden">
			<img
				src="./wall1.webp"
				alt=""
				className="absolute inset-0 w-full h-full object-contian"
			/>
			<div className="absolute inset-0 bg-linear-to-b from-white/75 to-transparent"></div>
			<div className="bg-linear-to-b from-white/80 to-white/70 w-2/3 h-[200dvh] absolute -left-1/4 -bottom-80 -rotate-25 shadow-2xl"></div>
			<div className="bg-linear-to-b from-white/70 via-white/50 to-transparent w-140 h-[200dvh] absolute right-45 -bottom-80 -rotate-25 shadow-2xl"></div>
			<div className="absolute right-80 top-24 z-10 flex flex-col gap-3 justify-center items-center">
				<div className=" flex gap-4 items-center justify-center">
					<img src="./logo2.png" alt="" className="w-30" />
					<h1 className="text-7xl font-bold tracking-widest text-green-700">
						EnHySa
					</h1>
				</div>
				<p className="text-lg italic text-center tracking-wider w-[80%] text-pretty text-accent/75">
					Gestiona tus informes de iluminación y protocolo.
				</p>
			</div>
			<LoginForm />
		</section>
	)
}
