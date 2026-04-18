import { useState } from "react"
import { LoginForm } from "../login-form"

export default function MovilLogin() {
	const [activeForm, setActiveForm] = useState<"login" | "register">("login")
	const authPosition =
		activeForm === "login" ? "translate-x-0" : "-translate-x-[50dvw]"

	return (
		<section className="w-screen min-h-screen flex items-center justify-center">
			<LoginForm setActiveForm={setActiveForm} />
		</section>
	)
}
