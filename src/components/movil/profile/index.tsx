import Profile from "@/components/dashboard/perfil2/profile"
import { FileText } from "lucide-react"

export default function MovilProfile() {
	return (
		<section className="min-h-screen py-30 pt-30 mx-auto w-11/12">
			<div className="text-left textXL bg-blue-500/25 py-4 mt-10 px-5 rounded w-full">
				<div className="flex items-center gap-6 w-full sm:w-max">
					Mi Perfil
					<FileText className="size-7" />
				</div>
			</div>

			<Profile />
		</section>
	)
}
