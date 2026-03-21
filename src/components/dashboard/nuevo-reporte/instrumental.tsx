import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function NuevoReporteInstrumental() {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<div className="bg-accent text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
					3
				</div>
				<span className="text-lg font-semibold tracking-wider">
					Instrumental
				</span>
			</div>
			<article className="bg-accent rounded-xl p-6 flex-1 flex flex-col gap-4">
				<p className="text-lg font-semibold">Datos del Luxómetro</p>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col gap-2">
						<Label className="font-semibold" htmlFor="marca">
							Marca / Modelo
						</Label>
						<Input
							id="marca"
							className="dark:bg-background"
							placeholder="Ej. Extech LT3000"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Label className="font-semibold" htmlFor="serie">
							Número de Serie
						</Label>
						<Input
							id="serie"
							className="dark:bg-background"
							placeholder="S/N 123456"
						/>
					</div>
				</div>
				<Input
					id="certificado"
					className="dark:bg-background h-30"
					type="file"
				/>
			</article>
		</div>
	)
}
