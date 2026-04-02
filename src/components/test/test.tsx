import { useForm } from "@tanstack/react-form"
import { tecnicoFormValidator } from "db/tecnicos/tecnico-validator"
import { toast } from "sonner"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { z } from "zod"

export const testFormValidator = z.object({
	nombre: z.string().min(3, "Mínimo 3 caracteres"),
	apellido: z.string(),
})

export type TestFormType = z.infer<typeof testFormValidator>

export default function Test() {
	const form = useForm({
		defaultValues: {
			nombre: "",
			apellido: "",
		},
		validators: {
			onSubmit: testFormValidator,
		},
		onSubmit: async ({ value }) => {
			// TODO : logic
			console.log("VALUE", value)
			toast.success("Técnico creado exitosamente")
		},
	})

	return (
		<article className="flex flex-col items-stretch gap-6 text-lg p-10 cardAccent">
			<form
				className="flex flex-col gap-6"
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
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Nombre Completo"
										className={`bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg`}
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
						name="apellido"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative">
									<FieldLabel
										htmlFor={field.name}
										className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl"
									>
										Apellido
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Nombre Completo"
										className={`bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg`}
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

					<Field className="w-1/2">
						<button
							type="submit"
							className="themeBtnBackground py-2 rounded-lg tracking-wider cursor-pointer w-full"
						>
							Guardar
						</button>
					</Field>
				</FieldGroup>
			</form>
		</article>
	)
}
