import { useForm } from "@tanstack/react-form"
import { updateTecnicoValidator } from "db/tecnicos/tecnico-validator"
import { Asterisk, CircleAlert, Loader, Pencil } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputFiles } from "@/components/layout/input-files"
import { Textarea } from "@/components/ui/textarea"
import { TecnicoType } from "db/schema"
import { useUpdateTecnico } from "queries/tecnico/use-update-tecnico"
import { checkTecnicoDiference } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { TextTooltip } from "@/components/layout/text-tooltip"

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
		<article className="flex flex-col items-stretch gap-6 text-lg p-10 cardAccent dark:bg-(--dark-blue-opa) bg-(--blue-opa) relative">
			<TextTooltip
				text={
					"Complete los datos del técnico encargado de realizar los informes. Seran pre cargados en todos los reportes nuevos."
				}
				className={"top-4 right-4"}
			/>
			<form
				className="flex flex-col gap-6"
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
									<Field data-invalid={isInvalid} className="relative">
										<FieldLabel
											htmlFor={field.name}
											className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
										>
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
											readOnly={!editMode}
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
									<Field data-invalid={isInvalid} className="relative">
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
											readOnly={!editMode}
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
							name="cargo"
							children={field => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid
								return (
									<Field data-invalid={isInvalid} className="relative">
										<FieldLabel
											htmlFor={field.name}
											className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
										>
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
											readOnly={!editMode}
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
									<Field data-invalid={isInvalid} className="relative">
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
											readOnly={!editMode}
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

					<div className="flex items-end gap-10">
						<form.Field
							name="matricula"
							children={field => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid
								return (
									<Field data-invalid={isInvalid} className="relative">
										<FieldLabel
											htmlFor={field.name}
											className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
										>
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
						<div className="w-full bg-foreground/5 h-max sm:py-[5px] 2xl:py-[4px] rounded-lg border border-foreground/7">
							<InputFiles
								files={matriculaFiles}
								setFiles={setMatriculaFiles}
								text="Imágen matrícula"
								maxFiles={1}
								editMode={editMode}
							/>
						</div>
					</div>

					<form.Field
						name="firmaImg"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative">
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
											editMode={editMode}
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
										className={`${editMode ? "bg-green-700/10 dark:bg-green-700/20" : "bg-background"} min-h-[80px] py-2 px-4 rounded-lg text-center text-pretty sm:text-base 2xl:text-lg`}
										readOnly={!editMode}
									/>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
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

					<div className="flex items-center gap-2 sm:text-sm 2xl:text-base">
						<CircleAlert className="size-5 text-amber-500/50" />
						<span className="italic text-foreground/25 tracking-wider">
							Completa tus datos para registrarlos en los reportes.
						</span>
					</div>

					{!editMode ? (
						<div className="flex justify-end item-center w-full mt-10">
							<Field className="w-max">
								<Button
									onClick={e => {
										e.preventDefault()
										setEditMode(true)
									}}
									type="button"
									variant="outline"
									disabled={isPending}
									className="py-2 rounded-lg tracking-wider sm:text-base 2xl:text-lg font-semibold flex-1 cursor-pointer flex items-center justify-end gap-3 border border-white px-4"
								>
									<Pencil size={20} className="text-foreground/75" />
									Editar
								</Button>
							</Field>
						</div>
					) : (
						<div className="flex item-center w-full">
							<Field className="flex flex-row justify-center gap-10 items-center w-full mt-11">
								<button
									onClick={() => setEditMode(false)}
									type="button"
									disabled={isPending}
									className="ring ring-foreground/5 shadow bg-background  h-full py-2 rounded-lg tracking-wider sm:text-sm 2xl:text-base font-semibold flex-1 hover:bg-background/75 cursor-pointer"
								>
									Cancelar
								</button>
								<button
									type="submit"
									disabled={isPending}
									className="themeBtnBackground py-2 rounded-lg tracking-wider sm:text-sm 2xl:text-base font-semibold flex-1"
								>
									{isPending ? (
										<div className="flex gap-2 w-full justify-center">
											Editando...{" "}
											<Loader className="animate-spin size-4"></Loader>
										</div>
									) : (
										"Guardar"
									)}
								</button>
							</Field>
						</div>
					)}
					{error && <p>{error.message}</p>}
				</FieldGroup>
			</form>
		</article>
	)
}
