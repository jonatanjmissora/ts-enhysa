import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { getUserInfo } from "@/lib/utils"
import { Link, useLoaderData, useNavigate } from "@tanstack/react-router"
import { LogOut, Shield } from "lucide-react"
import { useState } from "react"

export default function User() {
	const { session } = useLoaderData({ from: "__root__" })
	const { avatar, fullName } = getUserInfo(session)
	return (
		<div className="flex flex-col sm:gap-2 2xl:gap-4 m-6">
			<div
				className={`gap-4 p-8 py-4 card  bg-gray-900/50 sm:bg-background sm:ring-foreground/5`}
			>
				<div className="bg-accent rounded-full flex justify-center items-center">
					{avatar ? (
						<img
							src={avatar}
							alt="User avatar"
							className="sm:size-10 2xl:size-14 rounded-full drop-shadow-lg/50"
						/>
					) : (
						<div className="bg-accent p-2 rounded-full">
							{fullName?.charAt(0).toUpperCase()}
						</div>
					)}
				</div>
				<div className="flex flex-col items-end w-full">
					<p className="sm:text-base 2xl:text-lg font-semibold tracking-wider text-left w-full sm:text-shadow-none text-shadow-sm/50 dark:text-shadow-sm/50 ">
						{fullName || "Usuario"}
					</p>
					<Link
						to="/pricing"
						className="sm:text-sm 2xl:text-base tracking-wider w-full flex items-end justify-end gap-1"
					>
						<Shield className="size-5 dark:text-amber-500/50 text-amber-700/70" />
						<span className="font-semibold text-gray-50/50 sm:text-foreground/50">
							Plan Profesional
						</span>
					</Link>
				</div>
			</div>
			<LogoutAlertDialog />
		</div>
	)
}

export function LogoutAlertDialog() {
	const [open, setOpen] = useState(false)
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
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild className="m-4 hover:bg-accent">
				<span className="flex p-2 rounded-sm cursor-pointer textM items-center justify-end sm:justify-start gap-2 text-left">
					<LogOut size={16} className="text-gray-50/50 sm:text-foreground/80" />{" "}
					Cerrar sesion
				</span>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-10 sm:p-20 dark:bg-background bg-accent backdrop-blur-xl w-11/12 sm:w-[40dvw] h-[30dvh] sm:h-[40dvh] justify-center items-center">
				<AlertDialogTitle className="text-center sm:text-lg 2xl:text-xl">
					¿Estás seguro de que quieres cerrar sesión?
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center w-3/4 text-pretty mx-auto">
					Esto cerrará tu sesión y necesitarás iniciar sesión de nuevo.
				</AlertDialogDescription>
				<div className="flex justify-end gap-4">
					<button
						className="cursor-pointer w-1/2 card py-1 justify-center"
						onClick={() => {
							setOpen(false)
						}}
					>
						Cancelar
					</button>
					<Button className="cursor-pointer w-1/2 my-shadow" onClick={logout}>
						Confirmar
					</Button>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}
