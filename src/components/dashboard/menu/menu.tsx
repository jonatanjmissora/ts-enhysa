import { FileChartColumn, FilePlus, Home, UserRound } from "lucide-react"
import User from "./user"
import { Link } from "@tanstack/react-router"

export default function DashboardMenu() {
	return (
		<div className="flex flex-col justify-between h-screen fixed top-0 left-0 sm:w-[22dvw] 2xl:w-1/4 bg-accent">
			<div className="flex flex-col mx-6">
				<div className="flex items-center gap-3 py-10 px-4">
					<img src="/EnHySa_logo.webp" alt="logo EnHySa" className="size-20" />

					<p className="sm:text-[1.6rem] 2xl:text-4xl font-bold tracking-widest dark:text-shadow-lg/50">
						EnHySa App
					</p>
				</div>
				<nav>
					<ul className="flex flex-col sm:gap-2 2xl:gap-4">
						<Link
							to="/"
							className="flex items-center gap-4 sm:text-lg 2xl:text-xl font-semibold tracking-wider p-4 rounded-lg hover:bg-background/50 transition-colors cursor-pointer"
							activeProps={{ className: "themeBtnBackground  my-shadow" }}
						>
							<Home className="sm:size-6 2xl:size-7" />
							Inicio
						</Link>
						<Link
							to="/new-report2"
							className="flex items-center gap-4 sm:text-lg 2xl:text-xl font-semibold tracking-wider p-4 rounded-lg hover:bg-background/50 transition-colors cursor-pointer"
							activeProps={{ className: "themeBtnBackground  my-shadow" }}
						>
							<FilePlus className="sm:size-6 2xl:size-7" />
							Nuevo Proyecto
						</Link>
						<Link
							to="/reports"
							className="flex items-center gap-4 sm:text-lg 2xl:text-xl font-semibold tracking-wider p-4 rounded-lg hover:bg-background/50 transition-colors cursor-pointer"
							activeProps={{ className: "themeBtnBackground  my-shadow" }}
						>
							<FileChartColumn className="sm:size-6 2xl:size-7" />
							Mis Informes
						</Link>
						<Link
							to="/profile2"
							className="flex items-center gap-4 sm:text-lg 2xl:text-xl font-semibold tracking-wider p-4 rounded-lg hover:bg-background/50 transition-colors cursor-pointer"
							activeProps={{ className: "themeBtnBackground  my-shadow" }}
						>
							<UserRound className="sm:size-6 2xl:size-7" />
							Perfil
						</Link>
					</ul>
				</nav>
			</div>

			<footer className="border-t-[1.5px] sm:pb-0 2xl:pb-4">
				<User />
			</footer>
		</div>
	)
}
