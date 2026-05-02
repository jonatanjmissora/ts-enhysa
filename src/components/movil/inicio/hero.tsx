import { Select } from "@/components/ui/select"
import {
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { PROTOCOLOS } from "@/lib/constants"

export default function MovilHeroGeneral({
	setProtocoloId,
}: {
	setProtocoloId: (protocoloId: string | null) => void
}) {
	return (
		<article className="flex-1 flex flex-col gap-30 px-6 min-h-[130svh]">
			<div className="flex justify-between items-center flex-col mt-[70px] h-[550px] relative overflow-visible">
				<p className="text-4xl font-semibold text-center tracking-wider text-pretty px-3 dark:text-shadow-lg">
					Selecciona tu nuevo informe.
				</p>
				<img
					src="/movil-hero.webp"
					alt="logo EnHySa"
					className="absolute opacity-75 top-6 -left-6 -right-6 w-screen h-[500px] bottom-0 -z-10 max-w-none mask-t-from-50% mask-b-from-80%"
				/>
				<Select
					onValueChange={value => {
						setProtocoloId(value as string)
					}}
				>
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
								{protocolo.title}
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
		</article>
	)
}
