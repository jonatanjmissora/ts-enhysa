import { useState } from "react"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Asterisk, Loader, Pencil } from "lucide-react"
import { useForm } from "@tanstack/react-form"
import { InputFiles } from "@/components/layout/input-files"
import { toast } from "sonner"
import { useQuery } from "@tanstack/react-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { instrumentoFormValidator } from "db/instrumentos/instrumento-validator"
import { useUpdateInstrumento } from "queries/instrumentos/use-update-instrumento"
import { InstrumentoType } from "db/instrumentos/schema"
import { checkInstrumentoDiference } from "@/lib/utils"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
} from "@/components/ui/alert-dialog"

export function EditInstrumento({
	instrumento,
	setIsMenuOpen,
}: {
	instrumento: InstrumentoType
	setIsMenuOpen?: (open: boolean) => void
}) {
	const [open, setOpen] = useState(false)
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<div>
					<div className="w-full sm:hidden flex items-center gap-2 justify-center">
						<Pencil size={14} className="text-foreground/70" />
						Editar
					</div>
					<div className="sm:block hidden my-10 w-5/6">
						<button className="card bg-background sm:bg-accent rounded-lg cursor-pointer textM text-sm sm:text-base py-2 w-2/3 sm:w-1/4 justify-center gap-4 ml-auto">
							<Pencil className="size-6 text-foreground/70" />
							Editarlo
						</button>
					</div>
				</div>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-6 py-12 pb-40 sm:p-20 sm:py-15 2xl:py-20 bg-accent/80 backdrop-blur-xl w-full sm:w-1/2 h-screen sm:h-[95dvh] overflow-auto">
				<AlertDialogTitle className="h-max sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2 border-b border-foreground/20 w-full mb-10">
					Editar Instrumento
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center">
					<EditInstrumentoForm
						instrumento={instrumento}
						setOpen={setOpen}
						setIsMenuOpen={setIsMenuOpen}
					/>
				</AlertDialogDescription>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export function EditInstrumentoForm({
	instrumento,
	setOpen,
	setIsMenuOpen,
}: {
	instrumento: InstrumentoType
	setOpen: (open: boolean) => void
	setIsMenuOpen?: (open: boolean) => void
}) {
	const { data: tecnico } = useQuery(tecnicoQueryOptions)
	const [openPopover, setOpenPopover] = useState(false)
	const [calibrationDate, setCalibrationDate] = useState<Date | undefined>(
		instrumento.fechaCalibracion
			? new Date(instrumento.fechaCalibracion)
			: undefined
	)
	const [instrumentoFiles, setInstrumentoFiles] = useState<File[]>([])
	const {
		mutateAsync: updateInstrumentoMutation,
		isPending,
		error,
	} = useUpdateInstrumento()

	const form = useForm({
		defaultValues: {
			nombre: instrumento.nombre || "",
			marca: instrumento.marca || "",
			modelo: instrumento.modelo || "",
			serie: instrumento.serie || "",
			fechaCalibracion: instrumento.fechaCalibracion || "",
			imagenes: instrumento.imagenes || [],
		},
		validators: {
			onSubmit: instrumentoFormValidator,
		},
		onSubmit: async ({ value }) => {
			if (!tecnico) {
				toast.info("Completa los datos del técnico primero.")
				return
			}

			if (checkInstrumentoDiference(value, instrumento)) {
				setOpen(false)
				return
			}

			const updateInstrumento = {
				...value,
				id: instrumento.id,
				userId: instrumento.userId,
			}
			const result = await updateInstrumentoMutation({
				data: updateInstrumento,
			})
			if (!result) {
				console.error("Error al actualizar el instrumento", error)
				toast.error("Error al actualizar el instrumento")
			}
			if (setIsMenuOpen) setIsMenuOpen(false)
			setOpen(false)
			toast.success("Instrumento actualizado exitosamente")
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
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-y-4 sm:gap-x-10 justify-center items-start w-5/6 sm:w-full mx-auto">
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
					<form.Field
						name="serie"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>
										Nro de serie
										<Asterisk className="text-destructive size-3" />
									</FieldLabel>
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
												className="card py-2 bg-background justify-center textXS"
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
					<form.Field
						name="imagenes"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>Imagenes</FieldLabel>
									<div className="card p-2 bg-background">
										<InputFiles
											files={instrumentoFiles}
											setFiles={setInstrumentoFiles}
											text="Imágen del instrumento"
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
				</div>

				<div className="flex justify-end items-center gap-2 w-full text-destructive">
					<Asterisk className="text-destructive size-3" />
					<span className="text-xs 2xl:text-sm italic tracking-wide">
						campo obligatorio
					</span>
				</div>

				<Field className="flex flex-row justify-center gap-10 items-center w-full mt-10">
					<button
						onClick={() => {
							setOpen(false)
							if (setIsMenuOpen) setIsMenuOpen(false)
						}}
						type="button"
						disabled={isPending}
						className="ring ring-foreground/5 shadow bg-background h-full py-2 rounded-lg tracking-wider text-sm sm:text-base font-semibold flex-1 hover:bg-background/75 cursor-pointer my-shadow"
					>
						Cancelar
					</button>
					<button
						type="submit"
						disabled={isPending}
						className="themeBtnBackground py-2 rounded-lg tracking-wider text-sm sm:text-base font-semibold flex-1 my-shadow"
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
