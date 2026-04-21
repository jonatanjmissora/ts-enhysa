import { Link } from "@tanstack/react-router"
import { CheckCircle, Shield } from "lucide-react"

export default function InicioPlan() {
	return (
		<div className="px-4 py-12 flex-1 sm:p-6 2xl:p-10 card bg-accent flex-col justify-between items-start text-lg relative">
			<div className="flex flex-col">
				<p className="textXL dark:text-shadow-lg/50">Tu Suscripción</p>
				<p className="textXL dark:text-shadow-lg/50">Plan Profesional</p>
				<p className="textM tracking-wider text-amber-700 dark:text-amber-500/50 dark:text-shadow-lg/50">
					Expira en 245 días
				</p>
			</div>

			<div className="pl-2 flex flex-col gap-3 sm:gap-4 py-4 2xl:py-10">
				<div className="flex items-center gap-2">
					<CheckCircle size={15} className="text-green-500/75" />
					<p className="textM">Informes ilimitados</p>
				</div>
				<div className="flex items-center gap-2">
					<CheckCircle size={15} className="text-green-500/75" />
					<p className="textM">Croquis dinamico avanzado</p>
				</div>
				<div className="flex items-center gap-2">
					<CheckCircle size={15} className="text-green-500/75" />
					<p className="textM">Analisis con IA</p>
				</div>
				<div className="flex items-center gap-2">
					<CheckCircle size={15} className="text-green-500/75" />
					<p className="textM">Soporte prioritario</p>
				</div>
			</div>
			<Link
				to="/pricing"
				className="flex items-center gap-2 p-6 py-2 sm:py-4 textM font-semibold rounded-xl themeBtnAccent   my-shadow w-full justify-center dark:text-shadow-lg/50 mt-10 sm:mt-0"
			>
				Gestionar Plan
			</Link>

			<Shield
				className="absolute top-0 right-0 -rotate-20  sm:top-10 sm:right-10 size-34 2xl:size-44 text-amber-700 dark:text-amber-500/50 drop-shadow-lg/90"
				opacity={0.5}
			/>
		</div>
	)
}
