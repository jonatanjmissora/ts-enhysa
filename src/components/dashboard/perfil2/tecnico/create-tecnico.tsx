import { useForm } from "@tanstack/react-form"
import { tecnicoFormValidator } from "db/tecnicos/tecnico-validator"
import { Asterisk, CircleAlert, Loader } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { useNavigate } from "@tanstack/react-router"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useCreateTecnico } from "queries/tecnico/use-create-tecnico"
import { InputFiles } from "@/components/layout/input-files"
import { Label } from "@/components/ui/label"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
} from "@/components/ui/alert-dialog"

export default function CreateTecnico() {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild className="hover:bg-accent">
				<button className="card p-2 px-6 textM text-sm sm:text-base bg-background cursor-pointer">
					Cargar Datos
				</button>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-6 py-12 pb-40 sm:p-20 sm:py-15 2xl:py-20 bg-accent/80 backdrop-blur-xl w-full sm:w-1/2 h-screen sm:h-[95dvh] overflow-auto">
				<AlertDialogTitle className="h-max sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2 border-b border-foreground/20 w-full mb-10">
					Tecnico Datos
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center">
					<CreateTecnicoForm setOpen={setOpen} />
				</AlertDialogDescription>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export function CreateTecnicoForm({
	setOpen,
}: {
	setOpen: (open: boolean) => void
}) {
	const [matriculaFiles, setMatriculaFiles] = useState<File[]>([])
	const [firmaFiles, setFirmaFiles] = useState<File[]>([])
	const navigate = useNavigate()

	const {
		mutateAsync: createTecnicoMutation,
		isPending,
		error,
	} = useCreateTecnico()

	const form = useForm({
		defaultValues: {
			nombre: "",
			telefono: "",
			localidad: "",
			cargo: "",
			matricula: "",
			matriculaImg: "",
			firmaImg: "",
			membrete: "",
		},
		validators: {
			onSubmit: tecnicoFormValidator,
		},
		onSubmit: async ({ value }) => {
			const result = await createTecnicoMutation({ data: value })
			if (!result) {
				console.error("Error al crear el técnico", error)
				toast.error("Error al crear el técnico")
				return
			}
			setOpen(false)
			toast.success("Técnico creado exitosamente")
			navigate({ to: "/profile2" })
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
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-y-4 sm:gap-x-10 justify-center items-start w-5/6 sm:w-full mx-auto mb-3 sm:mb-0">
					<form.Field
						name="nombre"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>
										Nombre completo
										<Asterisk className="text-destructive size-3" />
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Nombre Completo"
										className="bg-background sm:bg-accent"
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
						name="telefono"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>Telefono</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="000-0000000"
										className="bg-background sm:bg-accent"
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
						name="cargo"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>
										Cargo
										<Asterisk className="text-destructive size-3" />
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. Seguridad e Higiene"
										className="bg-background sm:bg-accent"
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
						name="localidad"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>Localidad </FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. Andorra"
										className="bg-background sm:bg-accent"
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
						name="matricula"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>
										Matrícula
										<Asterisk className="text-destructive size-3" />
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="N° Matrícula"
										className="bg-background sm:bg-accent"
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
					<div className="flex flex-col gap-1">
						<Label>Matrícula Digital</Label>
						<div className="card p-2 bg-background sm:bg-accent text-sm">
							<InputFiles
								files={matriculaFiles}
								setFiles={setMatriculaFiles}
								text="Imágen matrícula"
								maxFiles={1}
							/>
						</div>
					</div>

					<div className="flex-1 flex flex-col gap-1">
						<Label>Firma Digital</Label>
						<div className="card p-2 bg-background sm:bg-accent text-sm h-full">
							<InputFiles
								files={firmaFiles}
								setFiles={setFirmaFiles}
								text="Imágen Firma Digital"
								maxFiles={1}
							/>
						</div>
					</div>

					<div className="flex-1 flex flex-col gap-1">
						<Label>Pie de Página</Label>
						<div className="flex flex-col gap-[0.5px]">
							<form.Field
								name="nombre"
								children={field => (
									<Input
										value={field.state.value?.toUpperCase() || ""}
										placeholder="Nombre Completo..."
										readOnly
										className="bg-background sm:bg-accent text-center"
									/>
								)}
							/>

							<form.Field
								name="matricula"
								children={field => (
									<Input
										value={
											field.state.value?.toUpperCase()
												? `MAT ${field.state.value?.toUpperCase()}`
												: ""
										}
										placeholder="Matricula..."
										readOnly
										className="bg-background sm:bg-accent text-center"
									/>
								)}
							/>
						</div>
					</div>
				</div>

				<div className="flex justify-end items-center gap-2 w-full text-destructive">
					<Asterisk className="text-destructive size-3" />
					<span className="text-xs 2xl:text-sm italic tracking-wide">
						campo obligatorio
					</span>
				</div>

				<div className="flex items-center gap-2">
					<CircleAlert className="size-3 sm:size-4 text-amber-500/50" />
					<span className="text-xs sm:text-sm italic text-foreground/25">
						Completa tus datos para los reportes.
					</span>
				</div>

				<Field className="flex flex-row justify-center gap-10 items-center w-full mt-10">
					<button
						onClick={() => setOpen(false)}
						type="button"
						disabled={isPending}
						className="flex-1 card bg-background justify-center textM text-sm sm:text-base p-2 cursor-pointer"
					>
						Cancelar
					</button>
					<button
						type="submit"
						disabled={isPending}
						className="flex-1 themeBtnBackground py-2 rounded-lg textM text-sm sm:text-base my-shadow"
					>
						{isPending ? (
							<div className="flex gap-2 w-full justify-center items-center">
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
