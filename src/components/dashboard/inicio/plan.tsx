import { Button } from "@/components/ui/button"
import { CheckCircle, Shield } from "lucide-react"

export default function InicioPlan() {
	return (
		<div className="flex-1 sm:p-6 2xl:p-10 bg-accent border border-border rounded-xl text-lg relative">
			<p className="font-semibold sm:text-base 2xl:text-2xl tracking-wider">
				Tu Suscripción
			</p>
			<p className="font-semibold sm:pt-6 2xl:pt-10 sm:text-2xl 2xl:text-4xl tracking-wider">
				Plan Profesional
			</p>
			<p className="sm:text-sm 2xl:text-base tracking-wider text-foreground/50">
				Expira en 245 días
			</p>

			<div className="flex flex-col gap-2 sm:py-4 2xl:py-10">
				<div className="flex items-center gap-2">
					<CheckCircle size={10} />
					<p className="sm:text-sm 2xl:text-base">Informes ilimitados</p>
				</div>
				<div className="flex items-center gap-2">
					<CheckCircle size={10} />
					<p className="sm:text-sm 2xl:text-base">Croquis dinamico avanzado</p>
				</div>
				<div className="flex items-center gap-2">
					<CheckCircle size={10} />
					<p className="sm:text-sm 2xl:text-base">Analisis con IA</p>
				</div>
				<div className="flex items-center gap-2">
					<CheckCircle size={10} />
					<p className="sm:text-sm 2xl:text-base">Soporte prioritario</p>
				</div>
			</div>
			<Button className="rounded-xl bg-background text-foreground sm:text-lg 2xl:text-2xl w-full sm:py-6 2xl:py-7 tracking-widest shadow-xl hover:bg-background/80 cursor-pointer">
				Gestionar Plan
			</Button>

			<Shield
				className="absolute top-10 right-10 sm:size-34 2xl:size-44"
				opacity={0.1}
			/>
		</div>
	)
}
