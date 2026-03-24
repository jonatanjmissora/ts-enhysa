import { LoginForm } from "@/components/login-form"
import { RegisterForm } from "@/components/register-form"
import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { PreferencesMenu } from "@/components/layout/preferences-menu"

export const Route = createFileRoute("/login/")({
	component: RouteComponent,
})

function RouteComponent() {
	const [activeForm, setActiveForm] = useState<"login" | "register">("login")
	const authPosition =
		activeForm === "login" ? "translate-x-0" : "-translate-x-[50dvw]"

	return (
		<section className="w-screen h-screen flex items-center relative overflow-hidden">
			<img
				src="./wall1.webp"
				alt=""
				className="absolute inset-0 h-screen w-screen object-cover object-bottom"
			/>
			<div className="absolute inset-0 bg-linear-to-b from-background/75 to-transparent"></div>
			<div
				className={`absolute top-0 left-0 w-[150dvw] h-full flex justify-between items-center ${authPosition} transition-transform duration-500 ease-in-out`}
			>
				{/* LEFT */}
				<div className="bg-linear-to-b dark:from-background/80 dark:to-background/70 from-(--gray-300)/80 to-(--gray-100)/70 w-[55dvw] h-[150dvh] absolute -left-40 -bottom-60 -rotate-25 shadow-2xl"></div>
				<LoginForm setActiveForm={setActiveForm} />

				{/* CENTER */}
				<div className="bg-linear-to-b dark:from-background/80 dark:to-background/70 from-(--gray-300)/80 to-(--gray-100)/70 w-140 h-[200dvh] absolute left-225 -bottom-80 -rotate-25 shadow-2xl"></div>
				<div className="absolute left-250 top-1/2 translate-y-[-50%] z-10 flex flex-col gap-3 justify-center items-center">
					<img src="/logo2.png" alt="" className="w-50" />
					<h1 className="text-8xl font-bold tracking-widest text-green-700">
						EnHySa
					</h1>
					<p className="text-xl italic text-center tracking-wider w-[80%] text-pretty text-foreground/75">
						Gestiona tus informes de iluminación y protocolo.
					</p>
				</div>
				{/* RIGHT */}
				<div className="bg-linear-to-b dark:from-background/80 dark:to-background/70 from-(--gray-300)/80 to-(--gray-100)/70 w-[55dvw] h-[150dvh] absolute -right-30 -bottom-30 -rotate-25 shadow-2xl"></div>
				<RegisterForm setActiveForm={setActiveForm} />
			</div>
			<div className="absolute top-4 left-4">
				<PreferencesMenu />
			</div>
		</section>
	)
}
