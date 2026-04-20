import Profile from "@/components/dashboard/perfil2/profile"

export default function MovilProfile() {
	return (
		<section className="min-h-screen w-11/12 py-30 pt-40 mx-auto">
			<p className="w-full text-left textXL bg-blue-500/25 py-4 flex items-center gap-8 px-5 rounded">
				Mi Perfil
			</p>

			<Profile />
		</section>
	)
}
