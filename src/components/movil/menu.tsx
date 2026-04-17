import { Menu } from "lucide-react"

export default function MovilMenu() {
	return (
		<header className="w-full fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-green-900">
			<div className="flex items-center gap-3">
				<img src="/EnHySa_logo.webp" alt="logo EnHySa" className="size-10" />

				<p className="textXL">EnHySa App</p>
			</div>
			<Menu className="size-7" />
		</header>
	)
}
