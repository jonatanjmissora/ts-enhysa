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

export default function CreateTecnicoForm() {
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

			toast.success("Técnico creado exitosamente")
			navigate({ to: "/profile2" })
		},
	})

	return (
		<article className="flex items-center justify-center w-full border border-cyan-700 dark:border-cyan-600 bg-accent sm:bg-background py-10 sm:px-10 sm:py-20 relative">
			<form
				className="flex items-center justify-center flex-col w-5/6"
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

					<div className="w-full sm:w-1/2 ml-auto sm:pl-5">
						<button
							type="submit"
							disabled={isPending}
							className="themeBtnBackground py-2 rounded-lg text-sm 2xl:text-base tracking-wider cursor-pointer w-full  my-shadow"
						>
							{isPending ? (
								<div className="w-full flex items-center justify-center gap-2">
									<span>Guardando...</span>
									<Loader className="animate-spin size-4"></Loader>
								</div>
							) : (
								<span>Guardar</span>
							)}
						</button>
					</div>

					{error && <p>{error.message}</p>}
				</FieldGroup>
			</form>
		</article>
	)
}
