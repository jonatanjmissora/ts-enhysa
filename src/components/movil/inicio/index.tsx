import MovilHero from "./iluminacion/hero"
import MovilRecientes from "./iluminacion/recientes"
import InicioPlan from "@/components/dashboard/inicio/plan"
import MovilInicioTags from "./iluminacion/tags"
import Footer from "../footer"
import { useState } from "react"
import MovilHeroGeneral from "./hero"

export default function MovilIndex() {
	const [protocoloId, setProtocoloId] = useState<string | null>(null)

	return (
		<section className="w-full pt-18 overflow-visible">
			{!protocoloId && <MovilHeroGeneral setProtocoloId={setProtocoloId} />}

			{protocoloId === "iluminacion" && <IluminacionSection />}

			{protocoloId !== "iluminacion" && protocoloId !== null && (
				<WorkingOnIt setProtocoloId={setProtocoloId} />
			)}

			<Footer />
		</section>
	)
}

function IluminacionSection() {
	return (
		<div className="flex-1 flex flex-col gap-30 px-6">
			<MovilHero />

			<MovilInicioTags />

			<div className="flex gap-30 flex-col sm:flex-row">
				<MovilRecientes />
				<InicioPlan />
			</div>
		</div>
	)
}

function WorkingOnIt({
	setProtocoloId,
}: {
	setProtocoloId: (protocoloId: string | null) => void
}) {
	return (
		<div className="flex items-center flex-col mt-[70px] h-svh relative overflow-visible">
			<p className="text-xl font-semibold text-center tracking-wider text-pretty dark:text-shadow-lg">
				Proximamente en nuevas actualizaciones. Estamos trabajando para ello.
				Disculpe las molestias.
			</p>
			<img
				src="/working-on-it.webp"
				alt="logo EnHySa"
				className="absolute opacity-75 top-20 left-0 w-screen object-contain h-[300px] bottom-0 -z-10 max-w-none mask-t-from-50% mask-b-from-80%"
			/>
			<button
				onClick={() => setProtocoloId(null)}
				className="mt-[45svh] flex items-center gap-2 px-10 py-2 textM text-sm font-semibold rounded-xl themeBtnAccent  my-shadow mx-auto justify-center dark:text-shadow-lg/50"
			>
				Volver
			</button>
		</div>
	)
}
