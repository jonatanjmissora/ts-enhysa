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

export function EditEmpresaForm({
	empresa,
	setIsMenuOpen,
}: {
	empresa: EmpresaType
	setIsMenuOpen: (open: boolean) => void
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
			const result = await updateEmpresaMutation({ data: value })
			if (!result) {
				console.error("Error al actualizar la empresa", error)
				toast.error("Error al actualizar la empresa")
			}
			setIsMenuOpen(false)
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
				<div className="flex gap-10">
					<form.Field
						name="razonSocial"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative">
									<FieldLabel
										htmlFor={field.name}
										className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
									>
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

					<form.Field
						name="cuit"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative">
									<FieldLabel
										htmlFor={field.name}
										className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
									>
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
						name="direccion"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative">
									<FieldLabel
										htmlFor={field.name}
										className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
									>
										Dirección
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. Villa Verde"
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
										Localidad
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. Andorra"
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
						name="codigoPostal"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative">
									<FieldLabel
										htmlFor={field.name}
										className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
									>
										Código Postal
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. 5000"
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
						name="provincia"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative">
									<FieldLabel
										htmlFor={field.name}
										className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
									>
										Provincia
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. Pr. Andorra"
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
						name="horarios"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative">
									<FieldLabel
										htmlFor={field.name}
										className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
									>
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
						name="logo"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative">
									<FieldLabel
										htmlFor={field.name}
										className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
									>
										Logo Empresarial
									</FieldLabel>
									<div className="w-full bg-foreground/5 h-max sm:py-[5px] 2xl:py-[4px] rounded-lg border border-foreground/7">
										<InputFiles
											files={logoFiles}
											setFiles={setLogoFiles}
											text="Imágen Logo digital"
											maxFiles={1}
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
						onClick={() => setIsMenuOpen(false)}
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
								Guardando... <Loader className="animate-spin"></Loader>
							</div>
						) : (
							"Editar"
						)}
					</button>
				</Field>

				{error && <p>{error.message}</p>}
			</FieldGroup>
		</form>
	)
}
