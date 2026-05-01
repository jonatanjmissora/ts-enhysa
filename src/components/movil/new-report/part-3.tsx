import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { useForm } from "@tanstack/react-form"
import { useSuspenseQuery } from "@tanstack/react-query"
import {
	defaultPart3Data,
	Part3DataFormType,
	part3DataFormValidator,
} from "db/new-report/part3/nrpart3-validator"
import { Database, List, Loader, NotebookPen, Search } from "lucide-react"
import { part3DataQueryOptions } from "queries/new-report/part3/nrpart3-query"
import { useCreatePart3Data } from "queries/new-report/part3/use-create-nrpart3"
import { useUpdateNrPart3 } from "queries/new-report/part3/use-update-nrpart3"
import { Dispatch, SetStateAction, Suspense } from "react"

export default function MovilPart3Data({
	setReportStep,
}: {
	setReportStep: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
}) {
	return (
		<Suspense fallback={<Part3DataSkelton />}>
			<Part3Data setReportStep={setReportStep} />
		</Suspense>
	)
}

function Part3Data({
	setReportStep,
}: {
	setReportStep: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
}) {
	const { data: part3Data } = useSuspenseQuery(part3DataQueryOptions)

	const { mutateAsync: createNRpart3, isPending, error } = useCreatePart3Data()
	const {
		mutateAsync: updateNRpart3,
		isPending: updatePending,
		error: updateError,
	} = useUpdateNrPart3()

	const actualPart3Data = (part3Data as Part3DataFormType) || defaultPart3Data

	const form = useForm({
		defaultValues: actualPart3Data,
		validators: {
			onSubmit: part3DataFormValidator,
		},
		onSubmit: async ({ value }) => {
			if (
				part3Data &&
				value.conclusion === part3Data.conclusion &&
				value.observacion === part3Data.observacion &&
				value.recomendacion === part3Data.recomendacion
			) {
				return setReportStep(4)
			} else {
				if (!part3Data) {
					const newPart3Data = {
						observacion: "Sin Observaciones",
						conclusion: "Análisis Pendiente",
						recomendacion: "Sin Recomendaciones",
					}
					const result = await createNRpart3({ data: newPart3Data })
					if (!result) {
						console.error("Error al crear part3Data", updateError)
					}
					return setReportStep(4)
				} else {
					const updatePart3Data = {
						...value,
						id: part3Data?.id ?? "",
						userId: part3Data?.userId ?? "",
					}

					const result = await updateNRpart3({ data: updatePart3Data })
					if (!result) {
						console.error("Error al editar part3Data", updateError)
					}
					return setReportStep(4)
				}
			}
		},
	})

	return (
		<article className="w-full flex flex-col justify-center items-center">
			<div className="flex items-center justify-between w-full px-5 rounded border-b border-pink-500/25 m-15 sm:mt-0 sm:border-none sm:bg-pink-500/15">
				<div className="textXL py-2 px-2 flex items-center gap-8 justify-between w-full sm:w-max">
					Finalizando <Database className="sm:size-7 2xl:size-9" />
				</div>
			</div>

			<form
				id="create-form"
				onSubmit={e => {
					e.preventDefault()
					form.handleSubmit()
				}}
				className="w-5/6 relative"
			>
				<FieldGroup className="gap-10">
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
									<textarea
										id={field.name}
										name={field.name}
										placeholder={`Conclusión final del reporte, análisis de los resultados de las mediciones, Conclusiones. En caso de no haber conclusiones, poner "Análisis Pendiente"`}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										className="bg-accent text-center textXS italic card p-4 justify-center h-30"
										onFocus={e => e.target.select()}
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
									<textarea
										id={field.name}
										name={field.name}
										placeholder={`Detalle general de las condiciones en las que tomamos las mediciones. En caso de no haber observaciones, poner "Sin Observaciones"`}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										className="bg-accent text-center textXS italic card p-4 justify-center h-30"
										onFocus={e => e.target.select()}
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
									<textarea
										id={field.name}
										name={field.name}
										placeholder={`Luego de realizar un análisis de los resultados de las mediciones, dar nuestro asesoramiento técnico, oportunidad de mejora, condiciones de mejora, cambios solicitados. En caso de no tener recomendaciones, poner "Sin Recomendaciones"`}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										className="bg-accent text-center textXS italic card p-4 justify-center h-45"
										onFocus={e => e.target.select()}
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

					<Field className="flex flex-row justify-center gap-5 sm:gap-10 items-center w-full mx-auto mt-10">
						<button
							type="submit"
							disabled={isPending || updatePending}
							className="themeBtnBackground py-2 rounded-lg textL text-sm sm:text-base"
						>
							{isPending || updatePending ? (
								<div className="flex gap-2 w-full justify-center items-center">
									Finalizando...{" "}
									<Loader className="animate-spin size-4"></Loader>
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

function Part3DataSkelton() {
	return (
		<article className="w-full flex flex-col justify-center items-center">
			<div className="flex items-center justify-between w-full px-5 rounded border-b border-pink-500/25 m-15 sm:mt-0 sm:border-none sm:bg-pink-500/15">
				<div className="textXL py-2 px-2 flex items-center gap-8 justify-between w-full sm:w-max">
					Finalizando <Database className="sm:size-7 2xl:size-9" />
				</div>
			</div>

			<div className="w-5/6 relative">
				<FieldGroup className="gap-10">
					<Field className="relative gap-1">
						<FieldLabel className="flex items-center gap-3 textL">
							<NotebookPen className="size-5 text-amber-500/70" />
							Conclusiónes Finales
						</FieldLabel>
						<textarea
							readOnly
							className="bg-accent text-center textXS italic card p-4 justify-center h-30 opacity-50 animate-pulse"
						/>
					</Field>

					<Field className="relative gap-1">
						<FieldLabel className="flex items-center gap-3 textL">
							<Search className="size-5 text-amber-500/70" />
							Observacion General
						</FieldLabel>
						<textarea className="bg-accent text-center textXS italic card p-4 justify-center h-30 opacity-50 animate-pulse" />
					</Field>

					<Field className="relative gap-1">
						<FieldLabel className="flex items-center gap-3 textL">
							<List className="size-5 text-amber-500/70" />
							Recomendaciones Generales
						</FieldLabel>
						<textarea className="bg-accent text-center textXS italic card p-4 justify-center h-45 opacity-50 animate-pulse" />
					</Field>

					<Field className="flex flex-row justify-center gap-5 sm:gap-10 items-center w-5/6 mx-auto mt-10">
						<button
							type="submit"
							className="themeBtnBackground py-2 rounded-lg textL text-sm sm:text-base"
						>
							<span>Finalizar Reporte</span>
						</button>
					</Field>
				</FieldGroup>
			</div>
		</article>
	)
}
