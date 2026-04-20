import { Link } from "@tanstack/react-router"

export default function Footer() {
	const actualYear = new Date().getFullYear()

	return (
		<article className="mt-40 p-6 border-t border-foreground/20 flex flex-col justify-center gap-3 bg-green-900 relative overflow-hidden text-shadow-lg/50">
			<img
				src="/EnHySa_logo.webp"
				alt="logo EnHySa"
				className="absolute z-10 -top-20 -right-20 size-80 -rotate-15 opacity-20"
			/>
			<p className="textL">Mapa del sitio</p>
			<ul className="p-4 flex flex-col gap-2">
				<Link to="/">Inicio</Link>
				<Link to="/new-report2">Nuevo Proyecto</Link>
				<Link to="/reports">Mis Informes</Link>
				<Link to="/profile">Mi Perfil</Link>
				<Link to="/pricing">Suscripción</Link>
			</ul>
			<p className="text-xs w-full text-center">
				© {actualYear} Enhysa. Todos los derechos reservados.
			</p>
		</article>
	)
}
