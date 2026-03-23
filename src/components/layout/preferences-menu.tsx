import { useRouteContext, useRouter } from "@tanstack/react-router"
import { setThemeServerFn } from "server/theme"
import { Moon, Monitor, Sun } from "lucide-react"

export const PreferencesMenu = () => {
	const { theme } = useRouteContext({ from: "__root__" })
	const router = useRouter()

	const toggleTheme = () => {
		const themes = ["light", "dark", "auto"] as const
		const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length]
		setThemeServerFn({ data: nextTheme }).then(() => {
			router.invalidate()
		})
	}

	return (
		<div className="flex items-center gap-2">
			<div className="bg-background/50 rounded-full sm:p-1 2xl:p-2 sm:px-2 2xl:px-3 text-foreground/50 italic font-thin cursor-pointer">
				es
			</div>
			<button
				onClick={toggleTheme}
				className="bg-background/50 rounded-full p-2 px-3 cursor-pointer"
			>
				{theme === "dark" ? (
					<Moon size={14} className="text-muted-foreground" />
				) : theme === "light" ? (
					<Sun size={14} className="text-muted-foreground" />
				) : (
					<Monitor size={14} className="text-muted-foreground" />
				)}
			</button>
		</div>
	)
}
