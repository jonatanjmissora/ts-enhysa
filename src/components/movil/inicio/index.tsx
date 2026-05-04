import MovilHero from "./iluminacion/hero"
import MovilRecientes from "./iluminacion/recientes"
import InicioPlan from "@/components/dashboard/inicio/plan"
import MovilInicioTags from "./iluminacion/tags"
import Footer from "../footer"
import { useEffect, useState } from "react"
import MovilHeroGeneral from "./hero"
import WorkingOnIt from "@/components/layout/working-on-it"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { PROTOCOLOS } from "@/lib/constants"
import { Link } from "@tanstack/react-router"

export default function MovilIndex() {
	return (
		<article className="flex-1 flex flex-col gap-30 px-0 min-h-[130svh] mt-20">
			<div className="flex justify-between items-center flex-col mt-[70px] h-[550px] relative overflow-visible px-6">
				<p className="text-4xl font-semibold text-center tracking-wider text-pretty px-3 dark:text-shadow-lg">
					Selecciona tu nuevo informe.
				</p>
				<img
					src="/movil-hero.webp"
					alt="logo EnHySa"
					className="absolute opacity-75 top-6 left-0 w-screen h-[500px] bottom-0 -z-10 max-w-none mask-t-from-50% mask-b-from-80%"
				/>
				<Select>
					<SelectTrigger className="flex items-center gap-2 p-6 textM font-semibold rounded-xl themeBtnAccent  my-shadow w-full sm:w-auto justify-center dark:text-shadow-lg/50">
						<SelectValue placeholder="Selecciona un protocolo" />
					</SelectTrigger>
					<SelectContent>
						{PROTOCOLOS.map(protocolo => (
							<SelectItem
								key={protocolo.id}
								value={protocolo.id}
								className="text-right! text-nowrap! flex justify-start! py-2 truncate"
							>
								<Link to={protocolo.link}>{protocolo.title}</Link>
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<span className="text-pretty px-6 textL text-sm italic text-foreground/60">
				Elige entre un monton de nuestros protocolos y genera tu informe en
				minutos. Te permitira tomar datos en obra para generar tus informes de
				calculo y planos. Listos para entregar y guardar en la nube.
			</span>

			<Footer />
		</article>
	)
}

// const [protocoloId, setProtocoloId] = useState<string | null>(null)

// return (
// 	<section className="w-full pt-18 overflow-visible">
// 		{!protocoloId && <MovilHeroGeneral setProtocoloId={setProtocoloId} />}

// 		{protocoloId === "iluminacion" && <IluminacionSection />}

// 		{protocoloId !== "iluminacion" && protocoloId !== null && (
// 			<WorkingOnIt setProtocoloId={setProtocoloId} />
// 		)}

// 		<Footer />
// 	</section>
// )
// }

// function IluminacionSection() {
// 	useEffect(() => {
// 		if (typeof window !== "undefined") {
// 			window.scrollTo(0, 0)
// 		}
// 	}, [])
// 	return (
// 		<div className="flex-1 flex flex-col gap-30 px-6">
// 			<MovilHero />

// 			<MovilInicioTags />

// 			<div className="flex gap-30 flex-col sm:flex-row">
// 				<MovilRecientes />
// 				<InicioPlan />
// 			</div>
// 		</div>
// 	)
// }
