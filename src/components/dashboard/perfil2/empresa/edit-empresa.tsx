import { useState } from "react"
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
import { empresaFormValidator } from "db/empresas/empresa-validator"
import { useQuery } from "@tanstack/react-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { EmpresaType } from "db/empresas/schema"
import { useUpdateEmpresa } from "queries/empresas/use-update-empresa"
import { checkEmpresaDiference } from "@/lib/utils"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { Pencil } from "lucide-react"

export function EditEmpresa({
	empresa,
	setIsMenuOpen,
}: {
	empresa: EmpresaType
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
					Editar Empresa
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center">
					<EditEmpresaForm
						empresa={empresa}
						setOpen={setOpen}
						setIsMenuOpen={setIsMenuOpen}
					/>
				</AlertDialogDescription>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export function EditEmpresaForm({
	empresa,
	setOpen,
	setIsMenuOpen,
}: {
	empresa: EmpresaType
	setOpen: (open: boolean) => void
	setIsMenuOpen?: (open: boolean) => void
}) {
	const { data: tecnico } = useQuery(tecnicoQueryOptions)
	const [logoFiles, setLogoFiles] = useState<File[]>([])
	const {
		mutateAsync: updateEmpresaMutation,
		isPending,
		error,
	} = useUpdateEmpresa()

	const form = useForm({
		defaultValues: {
			cuit: empresa.cuit || "",
			razonSocial: empresa.razonSocial || "",
			direccion: empresa.direccion || "",
			localidad: empresa.localidad || "",
			provincia: empresa.provincia || "",
			codigoPostal: empresa.codigoPostal || "",
			horarios: empresa.horarios || "",
			logo: empresa.logo || "",
		},
		validators: {
			onSubmit: empresaFormValidator,
		},
		onSubmit: async ({ value }) => {
			if (!tecnico) {
				toast.info("Completa los datos del técnico primero.")
				return
			}

			if (checkEmpresaDiference(value, empresa)) {
				setOpen(false)
				return
			}

			const updateEmpresa = {
				...value,
				id: empresa.id,
				userId: empresa.userId,
			}
			const result = await updateEmpresaMutation({ data: updateEmpresa })
			if (!result) {
				console.error("Error al actualizar la empresa", error)
				toast.error("Error al actualizar la empresa")
			}
			if (setIsMenuOpen) setIsMenuOpen(false)
			setOpen(false)
			toast.success("Empresa actualizada exitosamente")
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
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-y-4 sm:gap-x-10 justify-center items-center w-5/6 sm:w-full mx-auto">
					<form.Field
						name="razonSocial"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>
										Razón Social
										<Asterisk className="text-destructive size-3" />
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. Teléfonica"
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
						name="cuit"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>
										CUIT
										<Asterisk className="text-destructive size-3" />
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. 00-00000000-0"
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
						name="direccion"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>Dirección</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. Villa Verde"
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
									<FieldLabel htmlFor={field.name}>Localidad</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. Andorra"
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
						name="codigoPostal"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>Código Postal</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. 5000"
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
						name="provincia"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>Provincia</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. Pr. Andorra"
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
						name="horarios"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>
										Horarios de trabajo
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. Lun a Vie de 08:00 a 18:00"
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
						name="logo"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>Logo Empresarial</FieldLabel>
									<div className="w-full bg-foreground/5 h-max sm:py-[5px] 2xl:py-[4px] rounded-lg border border-foreground/7">
										<InputFiles
											files={logoFiles}
											setFiles={setLogoFiles}
											text="Imágen Logo digital"
											maxFiles={1}
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
						className="ring ring-foreground/5 bg-background h-full py-2 rounded-lg tracking-wider text-sm sm:text-base font-semibold flex-1 hover:bg-background/75 cursor-pointer my-shadow"
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
								Editando... <Loader className="animate-spin size-4"></Loader>
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
