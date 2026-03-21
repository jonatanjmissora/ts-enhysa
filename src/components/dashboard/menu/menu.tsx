import { FileChartColumn, FilePlus, Home, UserIcon } from "lucide-react"
import User from "./user"
import { Link } from "@tanstack/react-router"

export default function DashboardMenu() {
	return (
		<div className="flex h-full flex-col justify-between">
			<div className="flex flex-col gap-4 m-6">
				<div className="flex items-center gap-3 py-10 px-4">
					<img
						src="./public/EnHySa_logo.webp"
						alt="logo EnHySa"
						className="size-20"
					/>

					<p className="text-4xl font-bold tracking-widest">EnHySa App</p>
				</div>
				<nav>
					<ul className="flex flex-col gap-4">
						<Link
							to="/"
							className="flex items-center gap-4 text-xl font-semibold tracking-wider p-4 rounded-lg hover:bg-background/50 transition-colors cursor-pointer"
							activeProps={{ className: "bg-background" }}
						>
							<Home size={24} />
							Inicio
						</Link>
						<Link
							to="/new-project"
							className="flex items-center gap-4 text-xl font-semibold tracking-wider p-4 rounded-lg hover:bg-background/50 transition-colors cursor-pointer"
							activeProps={{ className: "bg-background shadow-xl" }}
						>
							<FilePlus size={24} />
							Nuevo Proyecto
						</Link>
						<Link
							to="/reports"
							className="flex items-center gap-4 text-xl font-semibold tracking-wider p-4 rounded-lg hover:bg-background/50 transition-colors cursor-pointer"
							activeProps={{ className: "bg-background shadow-xl" }}
						>
							<FileChartColumn size={24} />
							Mis Informes
						</Link>
						<Link
							to="/profile"
							className="flex items-center gap-4 text-xl font-semibold tracking-wider p-4 rounded-lg hover:bg-background/50 transition-colors cursor-pointer"
							activeProps={{ className: "bg-background shadow-xl" }}
						>
							<UserIcon size={24} />
							Perfil
						</Link>
					</ul>
				</nav>
			</div>

			<footer className="border-t-2 border-background pb-4">
				<User />
			</footer>
		</div>
	)
}
