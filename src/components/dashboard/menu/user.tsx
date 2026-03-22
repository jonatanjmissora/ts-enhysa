import { authClient } from "@/lib/auth-client"
import { getUserInfo } from "@/lib/utils"
import { useLoaderData, useNavigate } from "@tanstack/react-router"

export default function User() {
	const { session } = useLoaderData({ from: "__root__" })
	const { avatar, fullName } = getUserInfo(session)
	console.log(avatar)
	const navigate = useNavigate()
	const logout = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					// Redirect to home page after successful logout
					navigate({ to: "/login" })
				},
			},
		})
	}

	return (
		<div className="flex flex-col sm:gap-2 2xl:gap-4 m-6">
			<div className="flex items-center gap-4 p-4 bg-background rounded-lg shadow-xl">
				<div className="bg-accent rounded-full flex justify-center items-center">
					{avatar ? (
						<img
							src={avatar}
							alt="User avatar"
							className="sm:size-10 2xl:size-14 rounded-full"
						/>
					) : (
						<div className="bg-accent p-2 rounded-full">
							{fullName?.charAt(0).toUpperCase()}
						</div>
					)}
				</div>
				<div className="flex flex-col items-end">
					<p className="sm:text-base 2xl:text-lg font-semibold tracking-wider">
						{fullName || "Usuario"}
					</p>
					<p className="sm:text-sm 2xl:text-base text-foreground/40">
						Plan profesional
					</p>
				</div>
			</div>
			<button
				onClick={logout}
				className="p-4 text-foreground/75 cursor-pointer hover:text-foreground text-left"
			>
				Cerrar sesion
			</button>
		</div>
	)
}
