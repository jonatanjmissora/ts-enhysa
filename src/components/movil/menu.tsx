import { Link } from "@tanstack/react-router"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import User from "../dashboard/menu/user"

export default function MovilMenu() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<header
				className={`w-full fixed top-0 left-0 right-0 h-18 z-50 flex items-center justify-between p-4 dark:bg-green-900 bg-green-700 text-gray-50 ${isOpen ? "" : "shadow-[0px_2px_2px_rgb(0,0,0,0.4)]"}`}
			>
				<Link to="/" className="flex items-center gap-3">
					<img
						src="/EnHySa_logo.webp"
						alt="logo EnHySa"
						className="size-10 drop-shadow-sm/90"
					/>

					<p className="textXL text-shadow-lg/50">EnHySa App</p>
				</Link>
				<button onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? (
						<X className="size-7 drop-shadow-md/90" />
					) : (
						<Menu className="size-7 drop-shadow-md/90" />
					)}
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
			className={`flex flex-col justify-between items-center fixed inset-0 w-screen h-screen dark:bg-green-900 bg-green-700 z-40 ${isOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-500 text-gray-50`}
		>
			<div className="h-18"></div>

			<ul className="flex flex-col gap-5 textXL flex-1 items-center justify-center text-shadow-lg/50 w-5/6">
				<Link
					to="/"
					onClick={() => setIsOpen(!isOpen)}
					resetScroll={true}
					className="w-full py-2 text-center"
				>
					Inicio
				</Link>
				<Link
					to="/new-report2"
					onClick={() => setIsOpen(!isOpen)}
					resetScroll={true}
					className="w-full py-2 text-center"
				>
					Nuevo Proyecto
				</Link>
				<Link
					to="/reports"
					onClick={() => setIsOpen(!isOpen)}
					resetScroll={true}
					className="w-full py-2 text-center"
				>
					Mis Informes
				</Link>
				<Link
					to="/profile2"
					onClick={() => setIsOpen(!isOpen)}
					resetScroll={true}
					className="w-full py-2 text-center"
				>
					Mi Perfil
				</Link>
				<Link
					to="/pricing"
					onClick={() => setIsOpen(!isOpen)}
					resetScroll={true}
					className="w-full py-2 text-center"
				>
					Suscripción
				</Link>
			</ul>
			<User />
			<div className="h-3"></div>
		</div>
	)
}
