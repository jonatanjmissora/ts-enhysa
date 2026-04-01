import { getUserInfo } from "@/lib/utils"
import { useForm } from "@tanstack/react-form"
// import { useQuery } from "@tanstack/react-query"
import { useLoaderData } from "@tanstack/react-router"
import { tecnicoFormValidator } from "db/tecnicos/tecnico-validator"
import { Loader } from "lucide-react"
// import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
// import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useCreateTecnico } from "queries/tecnico/use-create-tecnico"

export default function FormTecnico() {
	const { session } = useLoaderData({ from: "__root__" })
	const { avatar, fullName } = getUserInfo(session)
	// const [editMode, setEditMode] = useState(false)
	// const { data: tecnico, isLoading } = useQuery(tecnicoQueryOptions)

	const {
		mutateAsync: createTecnicoMutation,
		isPending,
		error,
	} = useCreateTecnico()

	const form = useForm({
		defaultValues: {
			id: "",
			nombre: "",
			cargo: "",
			telefono: "",
			imagen: "",
			membrete: "",
			firma: "",
		},
		validators: {
			onSubmit: tecnicoFormValidator,
		},
		onSubmit: async ({ value }) => {
			const result = await createTecnicoMutation({ data: value })
			if (!result) {
				console.error("Error al crear el técnico", error)
				toast.error("Error al crear el técnico")
			}
			toast.success("Técnico creado exitosamente")
		},
	})

	return (
		<div className="flex justify-center items-center min-h-screen p-20">
			<div className="flex flex-col gap-2 relative w-1/2">
				<div className="flex justify-end items-center p-2">
					<div className="absolute -top-14 -left-10">
						{avatar ? (
							<img
								src={avatar}
								alt="User avatar"
								className="sm:size-30 2xl:size-24 rounded-sm"
							/>
						) : (
							<div className="bg-accent p-2 rounded-full">
								{fullName?.charAt(0).toUpperCase()}
							</div>
						)}
					</div>
					<p>{fullName.toUpperCase()}</p>
				</div>
				<article className="flex flex-col items-stretch gap-6 text-lg p-10 cardAccent">
					<div className="grid grid-cols-2 gap-4">
						<form
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
											<Field data-invalid={isInvalid} className="gap-1">
												<FieldLabel htmlFor={field.name}>Nombre</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={e => field.handleChange(e.target.value)}
													aria-invalid={isInvalid}
													placeholder="Nombre Completo"
												/>
												{isInvalid && (
													<FieldError errors={field.state.meta.errors} />
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
											<Field data-invalid={isInvalid} className="gap-1">
												<FieldLabel htmlFor={field.name}>Telefono</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={e => field.handleChange(e.target.value)}
													aria-invalid={isInvalid}
													placeholder="000-0000000"
												/>
												{isInvalid && (
													<FieldError errors={field.state.meta.errors} />
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
											<Field data-invalid={isInvalid} className="gap-1">
												<FieldLabel htmlFor={field.name}>Cargo</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={e => field.handleChange(e.target.value)}
													aria-invalid={isInvalid}
													placeholder="Ej. Seguridad e Higiene"
												/>
												{isInvalid && (
													<FieldError errors={field.state.meta.errors} />
												)}
											</Field>
										)
									}}
								/>

								<form.Field
									name="id"
									children={field => {
										const isInvalid =
											field.state.meta.isTouched && !field.state.meta.isValid
										return (
											<Field data-invalid={isInvalid} className="gap-1">
												<FieldLabel htmlFor={field.name}>Matricula</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={e => field.handleChange(e.target.value)}
													aria-invalid={isInvalid}
													placeholder="N° Matrícula"
												/>
											</Field>
										)
									}}
								/>

								<form.Field
									name="imagen"
									children={field => {
										const isInvalid =
											field.state.meta.isTouched && !field.state.meta.isValid
										return (
											<Field data-invalid={isInvalid} className="gap-1">
												<FieldLabel htmlFor={field.name}>Imagen</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={e => field.handleChange(e.target.value)}
													aria-invalid={isInvalid}
													placeholder="Imagenes"
												/>
												{isInvalid && (
													<FieldError errors={field.state.meta.errors} />
												)}
											</Field>
										)
									}}
								/>

								<form.Field
									name="membrete"
									children={field => {
										const isInvalid =
											field.state.meta.isTouched && !field.state.meta.isValid
										return (
											<Field data-invalid={isInvalid} className="gap-1">
												<FieldLabel htmlFor={field.name}>Membrete</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={e => field.handleChange(e.target.value)}
													aria-invalid={isInvalid}
													placeholder="Pie de Pagina"
												/>
												{isInvalid && (
													<FieldError errors={field.state.meta.errors} />
												)}
											</Field>
										)
									}}
								/>

								<form.Field
									name="firma"
									children={field => {
										const isInvalid =
											field.state.meta.isTouched && !field.state.meta.isValid
										return (
											<Field data-invalid={isInvalid} className="gap-1">
												<FieldLabel htmlFor={field.name}>Firma</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={e => field.handleChange(e.target.value)}
													aria-invalid={isInvalid}
													placeholder="Firma"
												/>
												{isInvalid && (
													<FieldError errors={field.state.meta.errors} />
												)}
											</Field>
										)
									}}
								/>

								<Field>
									<Button type="submit" disabled={isPending}>
										{isPending ? (
											<div className="flex gap-2">
												Creando... <Loader className="animate-spin"></Loader>
											</div>
										) : (
											"Crear"
										)}
									</Button>
								</Field>

								{error && <p>{error.message}</p>}
							</FieldGroup>
						</form>
					</div>
				</article>
			</div>
		</div>
	)
}
