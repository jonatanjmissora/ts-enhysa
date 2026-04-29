import { TextTooltip } from "@/components/layout/text-tooltip"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Cpu, Loader, UserRound, Warehouse } from "lucide-react"
import { Dispatch, SetStateAction, Suspense } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { empresasQueryOptions } from "queries/empresas/empresas-query"
import { instrumentosQueryOptions } from "queries/instrumentos/instrumentos-query"
import { CLIMA, HUMEDAD, TEMPERATURA } from "@/lib/constants"
import { part1DataQueryOptions } from "queries/new-report/part1/nrpart1-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { useCreatePart1Data } from "queries/new-report/part1/use-create-nrpart1"
import { useForm } from "@tanstack/react-form"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
	defaultPart1Data,
	part1DataFormValidator,
} from "db/new-report/part1/nrpart1-validator"
import { checkPart1DataDiference } from "@/lib/utils"
import { useUpdateNrPart1 } from "queries/new-report/part1/use-update-nrpart1"

export default function MovilPart1Data({
	setReportStep,
}: {
	setReportStep: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
}) {
	return (
		<Suspense fallback={<Part1DataSkelton />}>
			<Part1Data setReportStep={setReportStep} />
		</Suspense>
	)
}

function Part1Data({
	setReportStep,
}: {
	setReportStep: Dispatch<SetStateAction<1 | 2 | 3 | 4>>
}) {
	const { data: part1Data } = useSuspenseQuery(part1DataQueryOptions)
	const { data: tecnico } = useSuspenseQuery(tecnicoQueryOptions)
	const { data: empresas } = useSuspenseQuery(empresasQueryOptions)
	const { data: instrumentos } = useSuspenseQuery(instrumentosQueryOptions)

	const actualDefaultPart1Data = {
		...defaultPart1Data,
		tecnicoNombre: tecnico?.nombre.toUpperCase() ?? "",
	}
	const actualPart1Data = part1Data || actualDefaultPart1Data

	const { mutateAsync: createNRpart1, isPending, error } = useCreatePart1Data()
	const {
		mutateAsync: updateNRpart1,
		isPending: updatePending,
		error: updateError,
	} = useUpdateNrPart1()

	const form = useForm({
		defaultValues: actualPart1Data,
		validators: {
			onSubmit: part1DataFormValidator,
		},
		onSubmit: async ({ value }) => {
			if (
				actualPart1Data.empresaId === "" ||
				actualPart1Data.instrumentoId === ""
			) {
				const result = await createNRpart1({ data: value })
				if (!result) {
					console.error("Error al crear part1Data", error)
				}
				setReportStep(2)
			} else {
				if (checkPart1DataDiference(value, actualPart1Data)) {
					setReportStep(2)
					return
				} else {
					const updatePart1Data = {
						...value,
						id: part1Data?.id || "",
						userId: part1Data?.userId || "",
					}

					const result = await updateNRpart1({ data: updatePart1Data })
					if (!result) {
						console.error("Error al editar part1Data", updateError)
					}
					setReportStep(2)
				}
			}
		},
	})

	return (
		<form
			id="create-form"
			onSubmit={e => {
				e.preventDefault()
				form.handleSubmit()
			}}
			className="w-full my-20 sm:my-4 flex flex-col gap-8 relative"
		>
			<TextTooltip
				text={"Datos obtenidos a través del perfil."}
				className={"-top-10 right-5"}
			/>

			<FieldGroup className="gap-5">
				<form.Field
					name="tecnicoNombre"
					children={field => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid
						return (
							<Field data-invalid={isInvalid} className="relative gap-1">
								<FieldLabel
									htmlFor={field.name}
									className="flex items-center gap-3 textL"
								>
									{" "}
									<UserRound className="size-6" />
									Técnico responsable
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									readOnly
									aria-invalid={isInvalid}
									className="bg-background sm:bg-accent text-right"
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
					name="empresaId"
					children={field => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid

						return (
							<Field data-invalid={isInvalid} className="relative gap-1">
								<FieldLabel
									htmlFor={field.name}
									className="flex items-center gap-3 textL"
								>
									<Warehouse className="size-6" />
									Empresa receptora
								</FieldLabel>

								<Select
									value={field.state.value || ""}
									onValueChange={value => field.handleChange(value)}
								>
									<SelectTrigger
										id={field.name}
										name={field.name}
										onBlur={field.handleBlur}
										aria-invalid={isInvalid}
										className="w-full"
									>
										<SelectValue placeholder="Seleccione Empresa" />
									</SelectTrigger>

									<SelectContent position="popper">
										<SelectGroup>
											<SelectLabel>Empresas</SelectLabel>

											{empresas?.map(empresa => (
												<SelectItem
													key={empresa.id}
													value={empresa.id}
													className="justify-center"
												>
													{empresa.razonSocial.toUpperCase()}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>

								{isInvalid && (
									<FieldError
										errors={field.state.meta.errors}
										className="text-xs 2xl:text-sm absolute -bottom-4 left-0 text-right"
									/>
								)}
							</Field>
						)
					}}
				/>

				<form.Field
					name="instrumentoId"
					children={field => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid

						return (
							<Field data-invalid={isInvalid} className="relative gap-1">
								<FieldLabel
									htmlFor={field.name}
									className="flex items-center gap-3 textL"
								>
									<Cpu className="size-6" /> Instrumento utilizado
								</FieldLabel>

								<Select
									value={field.state.value || ""}
									onValueChange={value => field.handleChange(value)}
								>
									<SelectTrigger
										id={field.name}
										name={field.name}
										onBlur={field.handleBlur}
										aria-invalid={isInvalid}
										className="w-full"
									>
										<SelectValue placeholder="Seleccione Instrumento" />
									</SelectTrigger>

									<SelectContent position="popper">
										<SelectGroup>
											<SelectLabel>Instrumentos</SelectLabel>

											{instrumentos?.map(instrumento => (
												<SelectItem
													key={instrumento.id}
													value={instrumento.id}
													className="justify-center"
												>
													{instrumento.nombre.toUpperCase()}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>

								{isInvalid && (
									<FieldError
										errors={field.state.meta.errors}
										className="text-xs 2xl:text-sm absolute -bottom-4 left-0  text-right"
									/>
								)}
							</Field>
						)
					}}
				/>

				<form.Field
					name="clima"
					children={field => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid

						return (
							<Field data-invalid={isInvalid} className="relative gap-1">
								<FieldLabel
									htmlFor={field.name}
									className="flex items-center gap-3 textL"
								>
									Clima
								</FieldLabel>

								<Select
									value={field.state.value || ""}
									onValueChange={value => field.handleChange(value)}
								>
									<SelectTrigger
										id={field.name}
										name={field.name}
										onBlur={field.handleBlur}
										aria-invalid={isInvalid}
										className="w-full"
									>
										<SelectValue placeholder="Seleccione Clima" />
									</SelectTrigger>

									<SelectContent position="popper">
										<SelectGroup>
											<SelectLabel>Clima</SelectLabel>

											{CLIMA?.map(clima => (
												<SelectItem
													key={clima}
													value={clima}
													className="justify-center"
												>
													{clima.toUpperCase()}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>

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
					name="humedad"
					children={field => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid

						return (
							<Field data-invalid={isInvalid} className="relative gap-1">
								<FieldLabel
									htmlFor={field.name}
									className="flex items-center gap-3 textL"
								>
									Humedad
								</FieldLabel>

								<Select
									value={field.state.value || ""}
									onValueChange={value => field.handleChange(value)}
								>
									<SelectTrigger
										id={field.name}
										name={field.name}
										onBlur={field.handleBlur}
										aria-invalid={isInvalid}
										className="w-full"
									>
										<SelectValue placeholder="Seleccione Humedad" />
									</SelectTrigger>

									<SelectContent position="popper">
										<SelectGroup>
											<SelectLabel>Humedad</SelectLabel>

											{HUMEDAD?.map(humedad => (
												<SelectItem
													key={humedad}
													value={humedad}
													className="justify-center"
												>
													{humedad.toUpperCase()}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>

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
					name="temperatura"
					children={field => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid

						return (
							<Field data-invalid={isInvalid} className="relative gap-1">
								<FieldLabel
									htmlFor={field.name}
									className="flex items-center gap-3 textL"
								>
									Temperatura
								</FieldLabel>

								<Select
									value={field.state.value || ""}
									onValueChange={value => field.handleChange(value)}
								>
									<SelectTrigger
										id={field.name}
										name={field.name}
										onBlur={field.handleBlur}
										aria-invalid={isInvalid}
										className="w-full"
									>
										<SelectValue placeholder="Seleccione Temperatura" />
									</SelectTrigger>

									<SelectContent position="popper">
										<SelectGroup>
											<SelectLabel>Temperatura</SelectLabel>

											{TEMPERATURA?.map(temperatura => (
												<SelectItem
													key={temperatura}
													value={temperatura}
													className="justify-center"
												>
													{temperatura.toUpperCase()}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>

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
								Guardando... <Loader className="animate-spin size-4"></Loader>
							</div>
						) : (
							"Siguiente"
						)}
					</button>
				</Field>

				{error && <p>{error.message}</p>}
				{updateError && <p>{updateError.message}</p>}
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
	)
}

function Part1DataSkelton() {
	return (
		<div className="w-full my-20 sm:my-4 flex flex-col gap-8">
			<div className="flex flex-col gap-3 relative">
				<TextTooltip
					text={"Datos obtenidos a través del perfil."}
					className={"top-0 right-0"}
				/>
				<div className="flex items-center gap-2">
					<UserRound className="size-6" />
					Técnico responsable
				</div>
				<div className="w-5/6 mx-auto px-6 py-2.5 card justify-end bg-accent textXS animate-pulse">
					. . .
				</div>
			</div>

			<div className="flex flex-col gap-3 relative">
				<span className="flex items-center gap-3">
					<Warehouse className="size-6" />
					Empresa receptora
				</span>

				<div className="w-5/6 mx-auto px-6 py-2.5 card justify-end bg-accent textXS animate-pulse">
					. . .
				</div>
			</div>

			<div className="flex flex-col gap-3 relative">
				<span className="flex items-center gap-3">
					<Cpu className="size-6" /> Instrumento utilizado
				</span>

				<div className="w-5/6 mx-auto px-6 py-2.5 card justify-end bg-accent textXS animate-pulse">
					. . .
				</div>
			</div>

			<div className="flex flex-col gap-1 w-5/6 mx-auto">
				<Label className="tracking-wider" htmlFor="matricula">
					Clima
				</Label>
				<div className="w-full mx-auto px-6 py-2.5 card justify-end bg-accent textXS animate-pulse">
					. . .
				</div>
			</div>

			<div className="flex flex-col gap-1 w-5/6 mx-auto">
				<Label className="tracking-wider" htmlFor="matricula">
					Humedad
				</Label>
				<div className="w-full mx-auto px-6 py-2.5 card justify-end bg-accent textXS animate-pulse">
					. . .
				</div>
			</div>

			<div className="flex flex-col gap-1 w-5/6 mx-auto">
				<Label className="tracking-wider" htmlFor="matricula">
					Temperatura
				</Label>
				<div className="w-full mx-auto px-6 py-2.5 card justify-end bg-accent textXS animate-pulse">
					. . .
				</div>
			</div>

			<div className="w-5/6 mx-auto my-10">
				<button className="card p-2 px-6 w-1/2 ml-auto justify-center textM text-sm sm:text-base bg-accent">
					Siguiente
				</button>
			</div>
		</div>
	)
}
