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
import { Link } from "@tanstack/react-router"
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
	...props
}: React.ComponentProps<"div">) {
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
		toast.info("Funcionalidad de Google no implementada en el starter")
		// setLoading(true)

		// try {
		// 	await authClient.signIn.social({
		// 		provider: "google",
		// 		callbackURL: "/",
		// 	})
		// } catch (_err) {
		// 	// error ANTES de redirigir
		// 	setLoading(false)
		// 	toast.error("No se pudo iniciar sesión con Google")
		// }
	}

	return (
		<div className={cn("w-90 relative ml-50", className)} {...props}>
			<Card className="bg-white/80 border-transparent shadow-2xl">
				<CardHeader className="text-center">
					<CardTitle className="text-xl text-background">
						Bienvenido de nuevo
					</CardTitle>
					<CardDescription className="text-background/75">
						Ingresa con una cuenta de Google
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
								<Button
									variant="outline"
									type="button"
									onClick={signIn}
									className="text-background"
								>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<title>Google</title>
										<path
											d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
											fill="red"
										/>
									</svg>
									{loading ? "Iniciando..." : "Google"}
								</Button>
							</Field>
							<FieldSeparator>
								<span className="text-accent bg-transparent">
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
											<FieldLabel
												htmlFor={field.name}
												className="text-background"
											>
												Email
											</FieldLabel>
											<Input
												className="text-background"
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
											<FieldLabel
												htmlFor={field.name}
												className="text-background"
											>
												Contraseña
											</FieldLabel>
											<div className="relative">
												<Input
													className="text-background"
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
								<Button type="submit" className="bg-green-600">
									Ingresar
								</Button>
								<FieldDescription className="text-center text-background/65">
									No tiene cuenta ?{" "}
									<Link to="/register" viewTransition={{ types: ["rotateZ"] }}>
										Registrate
									</Link>
								</FieldDescription>
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
