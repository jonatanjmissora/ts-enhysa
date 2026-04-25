import { Database, List, NotebookPen, Search } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Dispatch, SetStateAction } from "react"
import { Part3DataType } from "@/routes/_protected/new-report2"

export default function Part3Data({setReportStep, part3Data, setPart3Data}: {setReportStep?: Dispatch<SetStateAction<1 | 2 | 3 | 4>>, part3Data: Part3DataType, setPart3Data: (data: Part3DataType) => void}) {
	return (
		<article className="w-full flex flex-col justify-center items-center">
			<div className="flex items-center justify-between w-full px-5 rounded border-b border-pink-500/25 m-15 sm:mt-0 sm:border-none sm:bg-pink-500/15">
				<div className="textXL py-2 px-2 flex items-center gap-8 justify-between w-full sm:w-max">
					Resumen <Database className="sm:size-7 2xl:size-9" />
				</div>
			</div>

			<div className="flex flex-col items-center gap-8 w-full">
				<div className="flex flex-col gap-2 w-full sm:w-3/4">
					<Label
						className="tracking-wider sm:text-base 2xl:text-xl flex items-center gap-4"
						htmlFor="observacion"
					>
						<Search className="size-5 text-amber-500/70" />
						Observacion General
					</Label>
					<textarea
						id="observacion"
						className={`card bg-accent sm:bg-background px-4 text-center min-h-30 sm:min-h-24 italic text-foreground/40 tracking-wider py-6 textXS`}
						placeholder="Observación "
						defaultValue={`Detalle general de las condiciones en las que tomamos las mediciones. En caso de no haber observaciones, poner "Sin Observaciones"`}
						readOnly
					/>
				</div>

				<div className="flex flex-col gap-2 w-full sm:w-3/4">
					<Label
						className="tracking-wider sm:text-base 2xl:text-xl flex items-center gap-4"
						htmlFor="conclusion"
					>
						<NotebookPen className="size-5 text-amber-500/70" />
						Conclusiónes Finales
					</Label>
					<textarea
						id="conclusion"
						className={`card bg-accent sm:bg-background px-4 text-center min-h-30 sm:min-h-24 italic text-foreground/40 tracking-wider py-6 textXS`}
						placeholder="Conclusión"
						defaultValue={`Conclusión final del reporte, análisis de los resultados de las mediciones, Conclusiones. En caso de no haber conclusiones, poner "Análisis Pendiente"`}
						readOnly
					/>
				</div>

				<div className="flex flex-col gap-2 w-full sm:w-3/4">
					<Label
						className="tracking-wider sm:text-base 2xl:text-xl flex items-center gap-4"
						htmlFor="recomendacion"
					>
						<List className="size-5 text-amber-500/70" />
						Recomendaciones Generales
					</Label>
					<textarea
						id="recomendacion"
						className={`card bg-accent sm:bg-background px-4 text-center min-h-30 sm:min-h-24 italic text-foreground/40 tracking-wider py-6 textXS`}
						placeholder="Recomendación"
						defaultValue={`Luego de realizar un análisis de los resultados de las mediciones, dar nuestro asesoramiento técnico, oportunidad de mejora, condiciones de mejora, cambios solicitados. En caso de no tener recomendaciones, poner "Sin Recomendaciones"`}
						readOnly
					/>
				</div>
			</div>
			<div className="flex items-center gap-2 w-full">
			<button onClick={() => setReportStep && setReportStep(2)} className="card py-2 px-4 my-20 flex items-center justify-center gap-2 mx-auto w-5/6 sm:w-1/3 textM text-sm sm:text-base bg-accent sm:hidden">
				Volver
			</button>
			<button onClick={() => setReportStep && setReportStep(4)} className="card py-2 px-4 my-20 flex items-center justify-center gap-2 mx-auto w-5/6 sm:w-1/3 textM text-sm sm:text-base bg-accent sm:hidden">
				Finalizar
			</button>
			</div>
		</article>
	)
}
