import { InputFiles } from "@/components/layout/input-files"

import { Box, Equal, EqualApproximately, Trash2 } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Part2Plano() {
	const [planoFiles, setPlanoFiles] = useState<File[]>([])

	return (
		<div className="w-full">
			<div className="flex items-center justify-between border-b border-orange-700/70 dark:border-orange-300/25 mb-10 w-11/12 mx-auto">
				<div className="textL py-2 px-3 flex items-center gap-8 justify-between w-full sm:w-max">
					Plano{" "}
					<Box className="sm:size-7 2xl:size-9 text-orange-700/70 dark:text-orange-300/75" />
				</div>
			</div>

			<div className="flex flex-col items-center gap-8 w-full">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-3/4">
					<div className="flex flex-col gap-1">
						<Label className="tracking-wider" htmlFor="matricula">
							Largo (m)
						</Label>
						<Input
							id="matricula"
							placeholder="N° Matrícula "
							defaultValue="Ej. 4"
							readOnly
							className="bg-background sm:bg-accent"
						/>
					</div>

					<div className="flex flex-col gap-1">
						<Label className="tracking-wider" htmlFor="matricula">
							Ancho (m)
						</Label>
						<Input
							id="matricula"
							placeholder="N° Matrícula "
							defaultValue="Ej. 6"
							readOnly
							className="bg-background sm:bg-accent"
						/>
					</div>

					<div className="flex flex-col gap-1">
						<Label className="tracking-wider" htmlFor="matricula">
							Alto del montaje (m)
						</Label>
						<Input
							id="matricula"
							placeholder="N° Matrícula "
							defaultValue="Ej. 2"
							readOnly
							className="bg-background sm:bg-accent"
						/>
					</div>
				</div>

				<div className="w-11/12 sm:w-3/4 py-4 card sm:bg-accent bg-background flex items-center justify-center flex-col">
					<InputFiles
						text="Imágenes del plano a medir."
						files={planoFiles}
						setFiles={setPlanoFiles}
						editMode={true}
					/>
				</div>

				<div className="sm:w-3/4 flex flex-col items-stretch justify-between sm:p-6 gap-3">
					<div className="w-full flex sm:flex-row flex-col">
						<div className="flex flex-col gap-2 justify-center items-center flex-1">
							<span className="w-full italic font-semibold text-foreground/50 tracking-widest border-b border-foreground/10">
								Indice del local{" "}
							</span>
							<div className="flex justify-end items-center gap-3 py-4 text-xs sm:text-base">
								<div className="flex flex-col">
									<span className="p-1 border-b border-foreground/50 w-full text-center sm:px-10">
										4 * 6
									</span>
									<span className="p-1 text-center">2 * ( 4 + 6 )</span>
								</div>
								<Equal size={16} />
								<span className="italic font-semibold text-xs sm:text-lg tracking-widest">
									0.83
								</span>
								<EqualApproximately size={16} />
								<span className="text-xl sm:text-2xl bg-teal-500/50 px-4 py-1 rounded-lg">
									1
								</span>
							</div>
						</div>

						<div className="flex-1 flex flex-col gap-2 items-center justify-end">
							<span className="text-2xl sm:text-3xl font-semibold bg-pink-500/50 px-4 py-1 rounded-lg">
								9
							</span>
							<span className="italic textXS">Número de mediciones</span>
						</div>
					</div>

					<span className="italic  border-t border-foreground/10 py-2 w-full text-right textXS text-foreground/50">
						Res. 84/2012 S.R.T.
					</span>
				</div>

				<div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 w-full sm:w-3/4 card sm:bg-accent bg-background rounded-none sm:rounded-lg sm:p-8 p-0 ">
					<Croquis />
					<PuntosList />
				</div>
			</div>
		</div>
	)
}

const Croquis = () => {
	const PUNTOS = ["301", "299", "300", "287", "293", "*", "*", "*", "*"]

	return (
		<div className="w-full grid grid-cols-3 relative">
			{Array.from({ length: 3 }).map((_, i) => (
				<div key={i} className="flex flex-col">
					{Array.from({ length: 3 }).map((_, j) => (
						<div
							key={j}
							className="h-34 border border-foreground/30 flex items-center justify-center"
						>
							<div className="flex flex-col gap-1 items-center justify-center">
								<span className="italic tracking-widest text-xs">
									punto-{i * 3 + j + 1}
								</span>
								<span className="w-15 text-xl font-semibold py-1 px-3 card bg-accent sm:bg-background justify-center items-center">
									{PUNTOS[i * 3 + j]}
								</span>
							</div>
						</div>
					))}
				</div>
			))}
		</div>
	)
}

const PuntosList = () => {
	const PUNTOS = ["301", "299", "300", "287", "293", "*", "*", "*", "*"]

	return (
		<div className="p-2 sm:p-0 w-full sm:w-1/4  min-h-full grid grid-cols-2 sm:grid-cols-1 justify-between sm:gap-2 gap-4">
			{PUNTOS.map((p, i) => (
				<div
					key={i}
					className="px-2 sm:px-0 w-full flex items-center justify-between py-1 border-b border-foreground/10"
				>
					<span className="text-sm italic tracking-widest">punto-{i + 1}</span>
					<span className="text-sm font-semibold">{p}</span>
					<Trash2 size={14} className="text-destructive" />
				</div>
			))}
		</div>
	)
}
