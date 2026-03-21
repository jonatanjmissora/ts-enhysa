import { Button } from "@/components/ui/button"
import { CheckCircle, Shield } from "lucide-react"

export default function InicioPlan() {
	return (
		<div className="flex-1 p-10 bg-accent border border-border rounded-xl text-lg relative">
			<p className="font-semibold text-2xl tracking-wider">Tu Suscripción</p>
			<p className="font-semibold pt-10 text-4xl tracking-wider">
				Plan Profesional
			</p>
			<p className="tracking-wider text-foreground/50">Expira en 245 días</p>

			<div className="flex flex-col gap-2 py-10">
				<div className="flex items-center gap-2">
					<CheckCircle size={10} />
					<p>Informes ilimitados</p>
				</div>
				<div className="flex items-center gap-2">
					<CheckCircle size={10} />
					<p>Croquis dinamico avanzado</p>
				</div>
				<div className="flex items-center gap-2">
					<CheckCircle size={10} />
					<p>Analisis con IA</p>
				</div>
				<div className="flex items-center gap-2">
					<CheckCircle size={10} />
					<p>Soporte prioritario</p>
				</div>
			</div>
			<Button className="rounded-xl bg-background text-foreground text-xl w-full py-7 tracking-widest shadow-xl hover:bg-background/80 cursor-pointer">
				Gestionar Plan
			</Button>

			<Shield className="absolute top-10 right-10" size={150} opacity={0.1} />
		</div>
	)
}
