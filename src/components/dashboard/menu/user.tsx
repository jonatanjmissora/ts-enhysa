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
				className={`gap-4 p-8 py-4 card rounded-lg bg-green-700 sm:bg-background`}
			>
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
				<div className="flex flex-col items-end w-full">
					<p className="sm:text-base 2xl:text-lg font-semibold tracking-wider text-left w-full">
						{fullName || "Usuario"}
					</p>
					<Link
						to="/pricing"
						className="sm:text-sm 2xl:text-base text-foreground/40 tracking-wider w-full flex items-end justify-end gap-1"
					>
						<Shield className="size-5 text-amber-500/50" />
						<span className="font-semibold">Plan Profesional</span>
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
					<LogOut size={16} className="text-foreground/80" /> Cerrar sesion
				</span>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-10 sm:p-20 bg-red-900/10 backdrop-blur-xl w-11/12 sm:w-auto">
				<AlertDialogTitle className="text-center sm:text-lg 2xl:text-xl">
					¿Estás seguro de que quieres cerrar sesión?
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center">
					Esto cerrará tu sesión y necesitarás iniciar sesión de nuevo.
				</AlertDialogDescription>
				<div className="flex justify-end gap-4">
					<Button
						variant="outline"
						className="cursor-pointer w-1/2"
						onClick={() => {
							setOpen(false)
						}}
					>
						Cancelar
					</Button>
					<Button className="cursor-pointer w-1/2" onClick={logout}>
						Confirmar
					</Button>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}
