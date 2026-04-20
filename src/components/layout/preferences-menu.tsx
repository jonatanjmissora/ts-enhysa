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
		<div className="flex items-center justify-between w-full gap-2">
			<div className="bg-background sm:bg-accent rounded-full p-1 2xl:p-2 px-2 2xl:px-3 text-foreground/50 italic font-thin cursor-pointer hover:ring hover:ring-green-500/50 dark:hover:ring-green-500/20">
				es
			</div>
			<button
				onClick={toggleTheme}
				className="bg-background sm:bg-accent rounded-full p-2 px-3 cursor-pointer hover:ring hover:ring-green-500/50 dark:hover:ring-green-500/20"
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
