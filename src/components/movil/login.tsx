import { useState } from "react"
import { LoginForm } from "../login-form"
import { RegisterForm } from "../register-form"

export default function MovilLogin() {
	const [activeForm, setActiveForm] = useState<"login" | "register">("login")
	const authPosition =
		activeForm === "login" ? "translate-x-0" : "-translate-x-[50dvw]"

	return (
		<section className="w-[200dvw] min-h-screen flex items-center justify-between gap-10 overflow-auto">
			<LoginForm setActiveForm={setActiveForm} />
			<RegisterForm setActiveForm={setActiveForm} />
		</section>
	)
}
