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
import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { Eye, EyeClosed } from "lucide-react"

const formSchema = z.object({
	email: z.email("Email inválido"),
	password: z.string().min(8, "Contraseña mínima de 8 caracteres."),
})

export function LoginForm({
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
			email: "",
			password: "",
		},
		validators: {
			onSubmit: formSchema,
		},
		onSubmit: async ({ value }) => {
			const result = await authClient.signIn.email({
				email: value.email,
				password: value.password,
				callbackURL: "/",
			})
			if (result.error) {
				toast.error("Email o contraseña incorrectos")
				return
			}

			toast.success("Login exitoso")
			router.invalidate()
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
		<div className={cn("w-90 relative ml-50", className)} {...props}>
			<Card className="cardBackground items-stretch">
				<CardHeader className="text-center">
					<CardTitle className="text-xl">Bienvenido de nuevo</CardTitle>
					<CardDescription className="text-foreground/75">
						Ingresa con una cuenta
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						id="login-form"
						onSubmit={e => {
							e.preventDefault()
							form.handleSubmit()
						}}
					>
						<FieldGroup>
							<Field>
								<Button variant="theme" type="button" onClick={signIn}>
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
							<FieldSeparator>
								<span className="text-foreground/75 dk:bg-background bg-accent">
									O continua con
								</span>
							</FieldSeparator>

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
								<button
									type="submit"
									className="themeBtnAccent tracking-wider font-semibold shadow cursor-pointer rounded-xl py-2"
								>
									Ingresar
								</button>
								<FieldDescription className="text-center">
									No tiene cuenta ?{" "}
									<button
										onClick={() => setActiveForm("register")}
										// viewTransition={{ types: ["rotateZ"] }}
										className="cursor-pointer dark:hover:text-green-400 underline"
										type="button"
									>
										Registrate
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
