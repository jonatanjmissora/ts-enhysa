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
import { useLoaderData, useNavigate } from "@tanstack/react-router"
import { LogOut } from "lucide-react"
import { useState } from "react"

export default function User() {
	const { session } = useLoaderData({ from: "__root__" })
	const { avatar, fullName } = getUserInfo(session)

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
				<span className="flex p-2 rounded-sm cursor-pointer text-sm items-center gap-2 text-left">
					<LogOut size={14} className="text-muted-foreground" /> Cerrar sesion
				</span>
			</AlertDialogTrigger>
			<AlertDialogContent className="py-20 px-10 bg-red-900/10 backdrop-blur-xl">
				<AlertDialogTitle className="text-center">
					¿Estás seguro de que quieres cerrar sesión?
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center">
					Esto cerrará tu sesión y necesitarás iniciar sesión de nuevo.
				</AlertDialogDescription>
				<div className="flex justify-end gap-4">
					<Button
						variant="outline"
						className="cursor-pointer"
						onClick={() => {
							setOpen(false)
						}}
					>
						Cancelar
					</Button>
					<Button className="cursor-pointer" onClick={logout}>
						Confirmar
					</Button>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}
