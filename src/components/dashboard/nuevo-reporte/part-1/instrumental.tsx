import { InputFiles } from "@/components/layout/input-files"
import { Cpu } from "lucide-react"
import { useState } from "react"

export default function NuevoReporteInstrumental() {
	const [instrumentoFiles, setInstrumentoFiles] = useState<File[]>([])

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<div className="bg-orange-700/75 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
					<Cpu className="size-6" />
				</div>
				<span className="text-xl font-semibold tracking-wider">
					Instrumental
				</span>
			</div>
			<article className="dark:bg-(--dark-orange-opa) bg-(--orange-opa) rounded-xl p-6 flex-1 flex flex-col gap-6 text-lg shadow-xl ring ring-foreground/20">
				<p className="text-lg font-semibold">Datos del Luxómetro</p>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="marca">
							Marca / Modelo
						</label>
						<input
							id="marca"
							className="bg-background py-2 px-4 rounded-lg"
							placeholder="Ej. Extech LT3000"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold" htmlFor="serie">
							Número de Serie
						</label>
						<input
							id="serie"
							className="bg-background py-2 px-4 rounded-lg"
							placeholder="S/N 123456"
						/>
					</div>
				</div>
				<div className="relative w-full min-h-30 mx-auto cardBackground flex items-center justify-center">
					<InputFiles
						text="Imágenes del certificado del instrumental."
						files={instrumentoFiles}
						setFiles={setInstrumentoFiles}
					/>
				</div>
			</article>
		</div>
	)
}
