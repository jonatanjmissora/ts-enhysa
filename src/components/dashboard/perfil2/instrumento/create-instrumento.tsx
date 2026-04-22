import { useState } from "react"
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Asterisk, Loader } from "lucide-react"
import { useForm } from "@tanstack/react-form"
import { InputFiles } from "@/components/layout/input-files"
import { toast } from "sonner"
import { useQuery } from "@tanstack/react-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { useCreateInstrumento } from "queries/instrumentos/use-create-instrumento"
import { instrumentoFormValidator } from "db/instrumentos/instrumento-validator"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

export function CreateInstrumento() {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild className="hover:bg-accent">
				<button className="text-sm sm:text-base card bg-background py-1 px-2">
					+ Nuevo
				</button>
			</AlertDialogTrigger>

			<AlertDialogContent className="p-20 sm:py-15 2xl:py-20 bg-accent/80 backdrop-blur-xl w-1/2 min-h-[50dvh]">
				<AlertDialogTitle className="h-max sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2 border-b border-foreground/20 w-full mb-10">
					Instrumento Nuevo
				</AlertDialogTitle>

				<AlertDialogDescription className="text-center">
					<InstrumentoForm setOpen={setOpen} />
				</AlertDialogDescription>
			</AlertDialogContent>
		</AlertDialog>
	)
}

const InstrumentoForm = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
	const { data: tecnico } = useQuery(tecnicoQueryOptions)
	const [instrumentoFiles, setInstrumentoFiles] = useState<File[]>([])
	const [calibrationDate, setCalibrationDate] = useState<Date>()
	const [openPopover, setOpenPopover] = useState(false)

	const {
		mutateAsync: createInstrumentoMutation,
		isPending,
		error,
	} = useCreateInstrumento()

	const form = useForm({
		defaultValues: {
			nombre: "",
			marca: "",
			modelo: "",
			serie: "",
			fechaCalibracion: "",
			imagenes: [] as string[],
		},

		validators: {
			onSubmit: instrumentoFormValidator,
		},

		onSubmit: async ({ value }) => {
			if (!tecnico) {
				toast.info("Completa los datos del técnico primero.")

				return
			}

			const newInstrimento = {
				...value,
				fechaCalibracion: calibrationDate
					? format(calibrationDate, "dd-MM-yyyy")
					: "",
			}

			const result = await createInstrumentoMutation({ data: newInstrimento })

			if (!result) {
				console.error("Error al crear el instrumento", error)
				toast.error("Error al crear el instrumento")
			}

			setOpen(false)
			toast.success("Instrumento creado exitosamente")
		},
	})

	return (
		<form
			className="flex flex-col gap-4"
			id="create-form"
			onSubmit={e => {
				e.preventDefault()

				form.handleSubmit()
			}}
		>
			<FieldGroup className="gap-5">
				<form.Field
					name="nombre"
					children={field => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid

						return (
							<Field data-invalid={isInvalid} className="relative gap-1">
								<FieldLabel htmlFor={field.name}>
									Nombre
									<Asterisk className="text-destructive size-3" />
								</FieldLabel>

								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={e => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Ej. Luxómetro"
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

				<div className="flex gap-10">
					<form.Field
						name="marca"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid

							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>
										Marca
										<Asterisk className="text-destructive size-3" />
									</FieldLabel>

									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. DataLogger"
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
						name="modelo"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid

							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>Modelo</FieldLabel>

									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. DT-8809A"
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
				</div>

				<div className="flex gap-10">
					<form.Field
						name="serie"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid

							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>Nro de serie</FieldLabel>

									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. 32451"
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
						name="fechaCalibracion"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid

							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor="date-picker-simple">
										Fecha de calibración
									</FieldLabel>
									<Popover open={openPopover} onOpenChange={setOpenPopover}>
										<PopoverTrigger asChild>
											<button
												id="date-picker-simple"
												className="card p-[8px] bg-background justify-center"
											>
												{calibrationDate ? (
													format(calibrationDate, "dd-MM-yyyy")
												) : (
													<span className="text-foreground/30">
														Ej. 12-10-2025
													</span>
												)}
											</button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={calibrationDate}
												onSelect={date => {
													setCalibrationDate(date)
													setOpenPopover(false)
												}}
												defaultMonth={calibrationDate}
											/>
										</PopoverContent>
									</Popover>

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
				</div>

				<form.Field
					name="imagenes"
					children={field => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid

						return (
							<Field data-invalid={isInvalid} className="relative gap-1">
								<FieldLabel htmlFor={field.name}>Imagenes</FieldLabel>

								<div className="card bg-background py-2">
									<InputFiles
										files={instrumentoFiles}
										setFiles={setInstrumentoFiles}
										text="Imágen del certificado de calibración y del instrumento"
										maxFiles={3}
										editMode={true}
									/>
								</div>

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

				<div className="flex justify-end items-center gap-2 w-full text-destructive">
					<Asterisk className="text-destructive size-3" />

					<span className="text-xs 2xl:text-sm italic tracking-wide">
						campo obligatorio
					</span>
				</div>

				<Field className="flex flex-row justify-center gap-10 items-center w-full mt-10">
					<button
						onClick={() => setOpen(false)}
						type="button"
						disabled={isPending}
						className="flex-1 card bg-background justify-center textM p-2 cursor-pointer"
					>
						Cancelar
					</button>

					<button
						type="submit"
						disabled={isPending}
						className="flex-1 themeBtnBackground py-2 rounded-lg textM my-shadow"
					>
						{isPending ? (
							<div className="flex gap-2 w-full justify-center">
								Guardando... <Loader className="animate-spin size-4"></Loader>
							</div>
						) : (
							"Guardar"
						)}
					</button>
				</Field>

				{error && <p>{error.message}</p>}
			</FieldGroup>
		</form>
	)
}
