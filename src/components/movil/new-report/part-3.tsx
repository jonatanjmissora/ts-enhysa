import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "@tanstack/react-form"
import { Database, List, Loader, NotebookPen, Search } from "lucide-react"

export default function MovilPart3Data({
	setReportStep,
}: {
	setReportStep: (step: 1 | 2 | 3 | 4) => void
}) {
	const form =
		useForm(
			// {
			// 	defaultValues: defaultPart3Data,
			// 	validators: {
			// 		onSubmit: part2DataFormValidator,
			// 	},
			// 	onSubmit: async ({ value }) => {
			// 		setPuntosError(null)
			// 		if (puntos.every(punto => punto === 0))
			// 			return setPuntosError("Debe agregar al menos un punto de medición")
			// 		const newArea: Part2DataWPuntosType = {
			// 			...value,
			// 			puntos,
			// 			imagenes: [],
			// 		}
			// 		console.log("newArea", newArea)
			// 		const result = await createNRpart2({ data: newArea })
			// 		if (!result) {
			// 			console.error("Error al crear part2Data", error)
			// 		}
			// 	},
			// }
		)

	return (
		<article className="w-full flex flex-col justify-center items-center">
			<div className="flex items-center justify-between w-full px-5 rounded border-b border-pink-500/25 m-15 sm:mt-0 sm:border-none sm:bg-pink-500/15">
				<div className="textXL py-2 px-2 flex items-center gap-8 justify-between w-full sm:w-max">
					Resumen <Database className="sm:size-7 2xl:size-9" />
				</div>
			</div>

			<form
				id="create-form"
				onSubmit={e => {
					e.preventDefault()
					form.handleSubmit()
				}}
				className="w-full my-5 sm:my-4 flex flex-col gap-8 relative"
			>
				<FieldGroup className="gap-5">
					<form.Field
						name="conclusion"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel
										htmlFor={field.name}
										className="flex items-center gap-3 textL"
									>
										<NotebookPen className="size-5 text-amber-500/70" />
										Conclusiónes Finales
									</FieldLabel>
									<Textarea
										id={field.name}
										name={field.name}
										defaultValue={`Conclusión final del reporte, análisis de los resultados de las mediciones, Conclusiones. En caso de no haber conclusiones, poner "Análisis Pendiente"`}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										className="bg-background sm:bg-accent text-right text-sm"
									/>
									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors}
											className="text-xs 2xl:text-sm absolute -bottom-4 left-0"
										/>
									)}
								</Field>
							)
						}}
					/>

					<form.Field
						name="observacion"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel
										htmlFor={field.name}
										className="flex items-center gap-3 textL"
									>
										<Search className="size-5 text-amber-500/70" />
										Observacion General
									</FieldLabel>
									<Textarea
										id={field.name}
										name={field.name}
										defaultValue={`Detalle general de las condiciones en las que tomamos las mediciones. En caso de no haber observaciones, poner "Sin Observaciones"`}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										className="bg-background sm:bg-accent text-right text-sm"
									/>
									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors}
											className="text-xs 2xl:text-sm absolute -bottom-4 left-0"
										/>
									)}
								</Field>
							)
						}}
					/>

					<form.Field
						name="recomendacion"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel
										htmlFor={field.name}
										className="flex items-center gap-3 textL"
									>
										<List className="size-5 text-amber-500/70" />
										Recomendaciones Generales
									</FieldLabel>
									<Textarea
										id={field.name}
										name={field.name}
										defaultValue={`Luego de realizar un análisis de los resultados de las mediciones, dar nuestro asesoramiento técnico, oportunidad de mejora, condiciones de mejora, cambios solicitados. En caso de no tener recomendaciones, poner "Sin Recomendaciones"`}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										className="bg-background sm:bg-accent text-right text-sm"
									/>
									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors}
											className="text-xs 2xl:text-sm absolute -bottom-4 left-0"
										/>
									)}
								</Field>
							)
						}}
					/>

					<Field className="flex flex-row justify-center gap-5 sm:gap-10 items-center w-5/6 mx-auto mt-10">
						<button
							type="submit"
							disabled={isPending || updatePending}
							className="themeBtnBackground py-2 rounded-lg textL text-sm sm:text-base"
						>
							{isPending || updatePending ? (
								<div className="flex gap-2 w-full justify-center items-center">
									Finalizar... <Loader className="animate-spin size-4"></Loader>
								</div>
							) : (
								<span>Finalizar Reporte</span>
							)}
						</button>
					</Field>

					{error && (
						<p className="text-center italic textXS text-red-500/70">
							{error.message}
						</p>
					)}
					{updateError && (
						<p className="text-center italic textXS text-red-500/70">
							{updateError.message}
						</p>
					)}
					<form.Subscribe
						selector={state => state.errors}
						children={errors =>
							errors.length > 0 && (
								<span className="text-red-500/70 italic w-full text-center ">
									Faltan campos por completar
								</span>
							)
						}
					/>
				</FieldGroup>
			</form>
		</article>
	)
}
