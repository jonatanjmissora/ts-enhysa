import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { updateTecnicoValidator } from "db/tecnicos/tecnico-validator"
import { updateTecnicoDB } from "db/tecnicos/update-tecnico-db"

export const updateTecnicoServer = createServerFn({ method: "POST" })
	.inputValidator(updateTecnicoValidator)
	.handler(async ({ data }) => {
		const request = getRequest()
		await protectedServerFn(request)

		return await updateTecnicoDB(data)
	})
