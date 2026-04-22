import { TecnicoType } from "db/tecnicos/schema"
import { useState } from "react"
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import { Asterisk, CircleAlert, Loader, Pencil } from "lucide-react"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useUpdateTecnico } from "queries/tecnico/use-update-tecnico"
import { updateTecnicoValidator } from "db/tecnicos/tecnico-validator"
import { checkTecnicoDiference } from "@/lib/utils"
import { InputFiles } from "@/components/layout/input-files"
import { Label } from "@/components/ui/label"

export default function EditTecnicoForm({ tecnico }: { tecnico: TecnicoType }) {
	const [editMode, setEditMode] = useState<boolean>(false)
	const [matriculaFiles, setMatriculaFiles] = useState<File[]>([])
	const [firmaFiles, setFirmaFiles] = useState<File[]>([])

	const {
		mutateAsync: editTecnicoMutation,
		isPending,
		error,
	} = useUpdateTecnico()

	const form = useForm({
		defaultValues: {
			id: tecnico.id,
			nombre: tecnico.nombre,
			telefono: tecnico.telefono,
			localidad: tecnico.localidad,
			cargo: tecnico.cargo,
			matricula: tecnico.matricula,
			matriculaImg: tecnico.matriculaImg,
			firmaImg: tecnico.firmaImg,
			membrete: tecnico.membrete,
			userId: tecnico.userId,
		},
		validators: {
			onSubmit: updateTecnicoValidator,
		},
		onSubmit: async ({ value }) => {
			if (checkTecnicoDiference(value, tecnico)) {
				setEditMode(false)
				return
			}
			const result = await editTecnicoMutation({ data: value })
			if (!result) {
				console.error("Error al editar técnico", error)
				toast.error("Error al editar técnico")
			}

			setEditMode(false)
			toast.success("Técnico editado exitosamente")
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
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mb-3 sm:mb-0">
						<form.Field
							name="nombre"
							children={field => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid
								return (
									<Field data-invalid={isInvalid} className="relative gap-1">
										<FieldLabel htmlFor={field.name}>
											Nombre Completo
											<Asterisk className="text-destructive size-3" />
										</FieldLabel>
										<Input
											id={field.name}
											name={field.name}
											value={field.state.value.toUpperCase()}
											onBlur={field.handleBlur}
											onChange={e => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
											placeholder="Nombre Completo"
											readOnly={!editMode}
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
											readOnly={!editMode}
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
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mb-3 sm:mb-0">
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
											value={field.state.value.toUpperCase()}
											onBlur={field.handleBlur}
											onChange={e => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
											placeholder="Ej. Seguridad e Higiene"
											readOnly={!editMode}
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
											value={field.state.value.toUpperCase()}
											onBlur={field.handleBlur}
											onChange={e => field.handleChange(e.target.value)}
											aria-invalid={isInvalid}
											placeholder="Ej. Andorra"
											readOnly={!editMode}
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
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 items-end mb-3 sm:mb-0">
						<form.Field
							name="matricula"
							children={field => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid
								return (
									<Field data-invalid={isInvalid} className="relative gap-1">
										<FieldLabel htmlFor={field.name}>
											Matricula
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
											readOnly={!editMode}
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
							<Label>Matricula Digital</Label>
							<div className="card p-2 bg-background sm:bg-accent text-sm">
								<InputFiles
									files={matriculaFiles}
									setFiles={setMatriculaFiles}
									text="Imágen matrícula"
									maxFiles={1}
									editMode={editMode}
								/>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mb-3 sm:mb-0">
						<div className="flex-1 flex flex-col gap-1">
							<Label>Firma Digital</Label>
							<div className="card p-2 bg-background sm:bg-accent text-sm h-full">
								<InputFiles
									files={firmaFiles}
									setFiles={setFirmaFiles}
									text="Imágen Firma Digital"
									maxFiles={1}
									editMode={editMode}
								/>
							</div>
						</div>

						<div className="flex-1 flex flex-col gap-1">
							<Label>Pie de Página</Label>
							<div className="flex flex-col gap-[0.5px]">
								<Input
									value={tecnico.nombre?.toUpperCase() || ""}
									placeholder="Nombre Completo..."
									readOnly
									className="bg-background sm:bg-accent text-center"
								/>

								<Input
									value={`MAT ${tecnico.matricula?.toUpperCase()}` || ""}
									placeholder="Matricula..."
									readOnly
									className="bg-background sm:bg-accent text-center"
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
						{!editMode ? (
							<button
								onClick={e => {
									e.preventDefault()
									setEditMode(true)
								}}
								type="button"
								disabled={isPending}
								className="textM w-1/2 flex gap-3 items-center justify-center card p-1 ml-auto"
							>
								<Pencil size={16} className="text-foreground/75" />
								Editar
							</button>
						) : (
							<div className="flex item-center w-full gap-3">
								<button
									onClick={() => setEditMode(false)}
									type="button"
									disabled={isPending}
									className="textM w-1/2 flex gap-3 items-center justify-center card p-1"
								>
									Cancelar
								</button>
								<button
									type="submit"
									disabled={isPending}
									className="themeBtnBackground textM w-1/2 flex gap-3 items-center justify-center card p-1"
								>
									{isPending ? (
										<div className="flex gap-2 w-full justify-center items-center">
											Editando...{" "}
											<Loader className="animate-spin size-4"></Loader>
										</div>
									) : (
										"Guardar"
									)}
								</button>
							</div>
						)}
					</div>

					{error && <p>{error.message}</p>}
				</FieldGroup>
			</form>
		</article>
	)
}
