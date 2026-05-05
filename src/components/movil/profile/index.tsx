import Profile from "@/components/dashboard/perfil2/profile"
import { ChevronLeft, FileText } from "lucide-react"
import { Link } from "@tanstack/react-router"

export default function MovilProfile({ from }: { from: string }) {
	return (
		<section className="min-h-screen py-30 pt-30 mx-auto w-11/12 relative">
			<Link to={from} className={`absolute top-20 left-0`}>
				<ChevronLeft size={24} />
			</Link>
			<div className="text-left textXL bg-blue-500/25 py-4 mt-10 px-5 rounded w-full">
				<div className="flex items-center justify-between gap-6 w-full">
					Mi Perfil
					<FileText className="size-7" />
				</div>
			</div>

			<Profile />
		</section>
	)
}
