import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useRouter } from "@tanstack/react-router"
import { authClient } from "@/lib/auth-client"
import { useState } from "react"
import { Eye, EyeClosed } from "lucide-react"

const formSchema = z.object({
	nombre: z.string().min(3, "Nombre mínimo de 3 caracteres."),
	email: z.email("Email inválido"),
	password: z.string().min(8, "Contraseña mínima de 8 caracteres."),
})

export function RegisterForm({
	className,
	setActiveForm,
	...props
}: React.ComponentProps<"div"> & {
	setActiveForm: (form: "login" | "register") => void
}) {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	const form = useForm({
		defaultValues: {
			nombre: "",
			email: "",
			password: "",
		},
		validators: {
			onSubmit: formSchema,
		},
		onSubmit: async ({ value }) => {
			await authClient.signUp.email(
				{
					email: value.email,
					password: value.password,
					name: value.nombre,
					callbackURL: "/",
				},
				{
					onSuccess: () => {
						toast.success("Registro exitoso")
						router.navigate({ to: "/" })
					},
					onError: ctx => {
						toast.error(ctx.error.message)
					},
				}
			)
		},
	})

	const signIn = async () => {
		setLoading(true)

		try {
			await authClient.signIn.social({
				provider: "google",
				callbackURL: "/",
			})
		} catch (_err) {
			// error ANTES de redirigir
			setLoading(false)
			toast.error("No se pudo iniciar sesión con Google")
		}
	}

	return (
		<div className={cn("w-90 relative mr-50", className)} {...props}>
			<Card className="bg-background shadow-2xl">
				<CardHeader className="text-center">
					<CardTitle className="text-xl">Bienvenido a la app</CardTitle>
					<CardDescription className="text-foreground/75">
						Ingresa con una cuenta de Google
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						id="register-form"
						onSubmit={e => {
							e.preventDefault()
							form.handleSubmit()
						}}
					>
						<FieldGroup>
							<Field>
								<Button
									variant="outline"
									type="button"
									onClick={signIn}
									className="text-foreground/75 dark:bg-accent shadow cursor-pointer"
								>
									{loading ? (
										"Iniciando..."
									) : (
										<div className="flex items-center gap-2">
											<img
												src="/google-icon-logo.svg"
												alt="Google"
												className="h-5"
											/>{" "}
											Google
										</div>
									)}
								</Button>
							</Field>
							<FieldSeparator>O continua con</FieldSeparator>

							<form.Field
								name="nombre"
								children={field => {
									const isInvalid =
										field.state.meta.isTouched && !field.state.meta.isValid
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel htmlFor={field.name}>Nombre</FieldLabel>
											<Input
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={e => field.handleChange(e.target.value)}
												aria-invalid={isInvalid}
												placeholder="nombre apellido"
												autoComplete="off"
												className="dark:bg-accent"
											/>
											{isInvalid && (
												<FieldError errors={field.state.meta.errors} />
											)}
										</Field>
									)
								}}
							/>

							<form.Field
								name="email"
								children={field => {
									const isInvalid =
										field.state.meta.isTouched && !field.state.meta.isValid
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel htmlFor={field.name}>Email</FieldLabel>
											<Input
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={e => field.handleChange(e.target.value)}
												aria-invalid={isInvalid}
												placeholder="m@example.com"
												autoComplete="off"
												className="dark:bg-accent"
											/>
											{isInvalid && (
												<FieldError errors={field.state.meta.errors} />
											)}
										</Field>
									)
								}}
							/>

							<form.Field
								name="password"
								children={field => {
									const isInvalid =
										field.state.meta.isTouched && !field.state.meta.isValid
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel htmlFor={field.name}>Contraseña</FieldLabel>
											<div className="relative">
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={e => field.handleChange(e.target.value)}
													aria-invalid={isInvalid}
													placeholder="********"
													type={showPassword ? "text" : "password"}
													className="dark:bg-accent"
												/>
												<button
													type="button"
													onClick={() => setShowPassword(!showPassword)}
													className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
												>
													{showPassword ? (
														<EyeClosed size={16} />
													) : (
														<Eye size={16} />
													)}
												</button>
											</div>
											{isInvalid && (
												<FieldError errors={field.state.meta.errors} />
											)}
										</Field>
									)
								}}
							/>

							<Field>
								<Button
									type="submit"
									className="bg-green-600 tracking-wider font-semibold shadow hover:bg-green-500 cursor-pointer"
								>
									Registrar
								</Button>
								<FieldDescription className="text-center">
									Ya tienes cuenta ?{" "}
									<button
										type="button"
										onClick={() => setActiveForm("login")}
										// viewTransition={{ types: ["rotateZ"] }}
										className="cursor-pointer dark:hover:text-green-400 underline"
									>
										Ingresar
									</button>
								</FieldDescription>
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
