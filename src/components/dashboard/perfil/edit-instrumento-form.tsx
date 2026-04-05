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
import { useQuery } from "@tanstack/react-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import { instrumentoFormValidator } from "db/instrumentos/instrumento-validator"
import { useUpdateInstrumento } from "queries/instrumentos/use-update-empresa"
import { InstrumentoType } from "db/instrumentos/schema"
import { checkInstrumentoDiference } from "@/lib/utils"

export function EditInstrumentoForm({
	instrumento,
	setIsMenuOpen,
}: {
	instrumento: InstrumentoType
	setIsMenuOpen: (open: boolean) => void
}) {
	const { data: tecnico } = useQuery(tecnicoQueryOptions)
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
				setIsMenuOpen(false)
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
			setIsMenuOpen(false)
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
										className={`bg-green-700/10 dark:bg-green-700/20 py-2 px-4 rounded-lg text-foreground text-center sm:text-base 2xl:text-lg`}
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
										className={`bg-green-700/10 dark:bg-green-700/20 py-2 px-4 rounded-lg text-foreground text-center sm:text-base 2xl:text-lg`}
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
										className={`bg-green-700/10 dark:bg-green-700/20 py-2 px-4 rounded-lg text-foreground text-center sm:text-base 2xl:text-lg`}
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
								<Field data-invalid={isInvalid} className="relative">
									<FieldLabel
										htmlFor={field.name}
										className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
									>
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
										className={`bg-green-700/10 dark:bg-green-700/20 py-2 px-4 rounded-lg text-foreground text-center sm:text-base 2xl:text-lg`}
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
										Fecha calibración
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. 12-10-2025"
										className={`bg-green-700/10 dark:bg-green-700/20 py-2 px-4 rounded-lg text-foreground text-center sm:text-base 2xl:text-lg`}
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
									<InputFiles
										files={instrumentoFiles}
										setFiles={setInstrumentoFiles}
										text="Imágen del instrumento"
										maxFiles={3}
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
						className="ring ring-foreground/5 shadow bg-background h-full py-2 rounded-lg tracking-wider sm:text-sm 2xl:text-base font-semibold flex-1 hover:bg-background/75 cursor-pointer"
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
