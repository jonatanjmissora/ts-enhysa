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

export function CreateInstrumentoForm({
	children,
}: {
	children: React.ReactNode
}) {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild className="hover:bg-accent">
				{children}
			</AlertDialogTrigger>

			<AlertDialogContent className="p-20 bg-accent/40 backdrop-blur-xl w-1/2 min-h-[50dvh]">
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

			const result = await createInstrumentoMutation({ data: value })

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
							<Field data-invalid={isInvalid} className="relative">
								<FieldLabel
									htmlFor={field.name}
									className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
								>
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
									className={`bg-background py-2 px-4 rounded-lg text-foreground text-center sm:text-base 2xl:text-lg`}
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
								<Field data-invalid={isInvalid} className="relative">
									<FieldLabel
										htmlFor={field.name}
										className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
									>
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
										className={`text-foreground  bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg`}
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
								<Field data-invalid={isInvalid} className="relative">
									<FieldLabel
										htmlFor={field.name}
										className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
									>
										Modelo
									</FieldLabel>

									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. DT-8809A"
										className={`text-foreground  bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg`}
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
								<Field data-invalid={isInvalid} className="relative">
									<FieldLabel
										htmlFor={field.name}
										className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
									>
										Nro de serie
									</FieldLabel>

									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. 32451"
										className={`text-foreground  bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg`}
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
								<Field data-invalid={isInvalid} className="relative">
									<FieldLabel
										htmlFor={field.name}
										className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
									>
										Fecha de calibración
									</FieldLabel>

									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. 12-10-2025"
										className={`text-foreground  bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg`}
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

				<form.Field
					name="imagenes"
					children={field => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid

						return (
							<Field data-invalid={isInvalid} className="relative">
								<FieldLabel
									htmlFor={field.name}
									className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
								>
									Imagenes
								</FieldLabel>

								<div className="w-full bg-foreground/5 h-max sm:py-[5px] 2xl:py-[4px] rounded-lg border border-foreground/7">
									<InputFiles
										files={instrumentoFiles}
										setFiles={setInstrumentoFiles}
										text="Imágen del instrumento"
										maxFiles={3}
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
						className="ring ring-foreground/5 shadow bg-background  h-full py-2 rounded-lg tracking-wider sm:text-lg 2xl:text-xl font-semibold flex-1 hover:bg-background/75 cursor-pointer"
					>
						Cancelar
					</button>

					<button
						type="submit"
						disabled={isPending}
						className="themeBtnBackground py-2 rounded-lg tracking-wider sm:text-lg 2xl:text-xl font-semibold flex-1"
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
