import { clsx, type ClassValue } from "clsx"
import { TecnicoType } from "db/tecnicos/schema"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getUserInfo = (session: any) => {
	const avatar = session?.user?.image || ""
	const name = session?.user?.name.split(" ")[0] || ""
	const Name = name.charAt(0).toUpperCase() + name.slice(1)
	const lastName = session?.user?.name.split(" ")[1] || ""
	const LastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
	return { avatar, fullName: `${Name} ${LastName}` }
}

export async function delay(ms = 3000) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export const checkTecnicoDiference = (
	formValues: Omit<TecnicoType, "id">,
	tecnico: TecnicoType
) => {
	return (
		formValues.nombre === tecnico.nombre &&
		formValues.telefono === tecnico.telefono &&
		formValues.localidad === tecnico.localidad &&
		formValues.cargo === tecnico.cargo &&
		formValues.matricula === tecnico.matricula &&
		formValues.matriculaImg === tecnico.matriculaImg &&
		formValues.firmaImg === tecnico.firmaImg &&
		formValues.membrete === tecnico.membrete
	)
}
