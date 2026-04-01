import { getUserInfo } from "@/lib/utils"
import { useForm } from "@tanstack/react-form"
// import { useQuery } from "@tanstack/react-query"
import { useLoaderData } from "@tanstack/react-router"
import { tecnicoFormValidator } from "db/tecnicos/tecnico-validator"
import { Asterisk, Loader } from "lucide-react"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { useState } from "react"
import { toast } from "sonner"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useCreateTecnico } from "queries/tecnico/use-create-tecnico"
import { useQuery } from "@tanstack/react-query"
import { InputFiles } from "@/components/layout/input-files"
import { Textarea } from "@/components/ui/textarea"

export default function FormTecnico() {
	const { session } = useLoaderData({ from: "__root__" })
	const { avatar, fullName } = getUserInfo(session)
	const [editMode, setEditMode] = useState(false)
	const { data: tecnico, isLoading } = useQuery(tecnicoQueryOptions)
	const [matriculaFiles, setMatriculaFiles] = useState<File[]>([])
	const [firmaFiles, setFirmaFiles] = useState<File[]>([])

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
			localidad: "",
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
		<div className="flex flex-col gap-2 relative w-1/2">
			<div className="flex justify-end items-center p-2">
				<div className="absolute sm:-top-10 2xl:-top-14 -left-10">
					{avatar ? (
						<img
							src={avatar}
							alt="User avatar"
							className="rounded-lg sm:size-24 2xl:size-30 shadow"
						/>
					) : (
						<div className="bg-accent p-2 rounded-full">
							{fullName?.charAt(0).toUpperCase()}
						</div>
					)}
				</div>
				<p className="px-10 sm:text-lg 2xl:text-xl tracking-widest font-semibold">
					{fullName.toUpperCase()}
				</p>
			</div>
			<article className="flex flex-col items-stretch gap-6 text-lg p-10 cardAccent">
				<form
					className="flex flex-col gap-4"
					id="create-form"
					onSubmit={e => {
						e.preventDefault()
						form.handleSubmit()
					}}
				>
					<FieldGroup className="gap-5">
						<div className="flex gap-10">
							<form.Field
								name="nombre"
								children={field => {
									const isInvalid =
										field.state.meta.isTouched && !field.state.meta.isValid
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel
												htmlFor={field.name}
												className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
											>
												Nombre
												<Asterisk className="text-destructive size-4" />
											</FieldLabel>
											<Input
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={e => field.handleChange(e.target.value)}
												aria-invalid={isInvalid}
												placeholder="Nombre Completo"
												className={`bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg ${isLoading ? "animate-pulse" : ""}`}
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
										<Field data-invalid={isInvalid}>
											<FieldLabel
												htmlFor={field.name}
												className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
											>
												Telefono
											</FieldLabel>
											<Input
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={e => field.handleChange(e.target.value)}
												aria-invalid={isInvalid}
												placeholder="000-0000000"
												className={`bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg ${isLoading ? "animate-pulse" : ""}`}
											/>
											{isInvalid && (
												<FieldError errors={field.state.meta.errors} />
											)}
										</Field>
									)
								}}
							/>
						</div>

						<div className="flex gap-10">
							<form.Field
								name="cargo"
								children={field => {
									const isInvalid =
										field.state.meta.isTouched && !field.state.meta.isValid
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel
												htmlFor={field.name}
												className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
											>
												Cargo
												<Asterisk className="text-destructive size-4" />
											</FieldLabel>
											<Input
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={e => field.handleChange(e.target.value)}
												aria-invalid={isInvalid}
												placeholder="Ej. Seguridad e Higiene"
												className={`bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg ${isLoading ? "animate-pulse" : ""}`}
											/>
											{isInvalid && (
												<FieldError errors={field.state.meta.errors} />
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
										<Field data-invalid={isInvalid}>
											<FieldLabel
												htmlFor={field.name}
												className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
											>
												Localidad{" "}
											</FieldLabel>
											<Input
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={e => field.handleChange(e.target.value)}
												aria-invalid={isInvalid}
												placeholder="Ej. Andorra"
												className={`bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg ${isLoading ? "animate-pulse" : ""}`}
											/>
											{isInvalid && (
												<FieldError errors={field.state.meta.errors} />
											)}
										</Field>
									)
								}}
							/>
						</div>

						<div className="flex items-end gap-10">
							<form.Field
								name="id"
								children={field => {
									const isInvalid =
										field.state.meta.isTouched && !field.state.meta.isValid
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel
												htmlFor={field.name}
												className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
											>
												Matricula
												<Asterisk className="text-destructive size-4" />
											</FieldLabel>
											<Input
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={e => field.handleChange(e.target.value)}
												aria-invalid={isInvalid}
												placeholder="N° Matrícula"
												className={`bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg ${isLoading ? "animate-pulse" : ""}`}
											/>
										</Field>
									)
								}}
							/>
							<div className="w-full bg-foreground/5 h-max sm:py-[5px] 2xl:py-[4px] rounded-lg border border-foreground/7">
								<InputFiles
									files={matriculaFiles}
									setFiles={setMatriculaFiles}
									text="Imágen matrícula"
									maxFiles={1}
								/>
							</div>
						</div>

						<form.Field
							name="firma"
							children={field => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid
								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel
											htmlFor={field.name}
											className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
										>
											Firma
										</FieldLabel>
										<div className="w-full bg-foreground/5 h-max sm:py-[5px] 2xl:py-[4px] rounded-lg border border-foreground/7">
											<InputFiles
												files={firmaFiles}
												setFiles={setFirmaFiles}
												text="Imágen firma digital"
												maxFiles={1}
											/>
										</div>
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
									<Field data-invalid={isInvalid}>
										<FieldLabel
											htmlFor={field.name}
											className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
										>
											Pie de pagina
										</FieldLabel>
										<Textarea
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={e => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
											placeholder="Estos datos se adjuntaran en el pie de cada pagina del reporte"
											className={`min-h-[80px] py-2 px-4 rounded-lg text-center text-pretty sm:text-base 2xl:text-lg ${isLoading ? "animate-pulse" : ""}`}
										/>
										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								)
							}}
						/>

						<div className="flex justify-end items-center gap-2 w-full text-destructive">
							<Asterisk className="text-destructive size-4" />
							<span className="text-xs 2xl:text-sm italic tracking-wide">
								campo obligatorio
							</span>
						</div>

						<Field>
							<button
								type="submit"
								disabled={isPending}
								className="themeBtnBackground py-2 rounded-lg tracking-wider mt-10"
							>
								{isPending ? (
									<div className="flex gap-2">
										Creando... <Loader className="animate-spin"></Loader>
									</div>
								) : (
									"Crear"
								)}
							</button>
						</Field>

						{error && <p>{error.message}</p>}
					</FieldGroup>
				</form>
			</article>
		</div>
	)
}
