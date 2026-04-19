import { Link } from "@tanstack/react-router"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import User from "../dashboard/menu/user"

export default function MovilMenu() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<header
				className={`w-full fixed top-0 left-0 right-0 h-18 z-50 flex items-center justify-between p-4 bg-green-900 ${isOpen ? "shadow-[0px_2px_2px_rgb(0,0,0,0.4)]" : ""}`}
			>
				<div className="flex items-center gap-3">
					<img src="/EnHySa_logo.webp" alt="logo EnHySa" className="size-10" />

					<p className="textXL text-shadow-lg/50">EnHySa App</p>
				</div>
				<button onClick={() => setIsOpen(!isOpen)}>
					{!isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
				</button>
			</header>
			<MovilMenuContent isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	)
}

const MovilMenuContent = ({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean
	setIsOpen: (open: boolean) => void
}) => {
	return (
		<div
			className={`flex flex-col justify-between items-center fixed inset-0 w-screen h-screen bg-green-900 z-40 ${isOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-500`}
		>
			<div className="h-18"></div>

			<ul className="p-4 flex flex-col gap-10 textXL flex-1 items-center justify-center">
				<Link to="/" onClick={() => setIsOpen(!isOpen)} resetScroll={true}>
					Inicio
				</Link>
				<Link
					to="/new-report"
					onClick={() => setIsOpen(!isOpen)}
					resetScroll={false}
				>
					Nuevo Proyecto
				</Link>
				<Link
					to="/reports"
					onClick={() => setIsOpen(!isOpen)}
					resetScroll={true}
				>
					Mis Informes
				</Link>
				<Link
					to="/profile"
					onClick={() => setIsOpen(!isOpen)}
					resetScroll={true}
				>
					Mi Perfil
				</Link>
				<Link
					to="/pricing"
					onClick={() => setIsOpen(!isOpen)}
					resetScroll={true}
				>
					Suscripción
				</Link>
			</ul>
			<User />
		</div>
	)
}
