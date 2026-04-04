import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { updateEmpresaValidator } from "db/empresas/empresa-validator"
import { updateEmpresaDB } from "db/empresas/update-empresa-db"

export const updateEmpresaServer = createServerFn({ method: "POST" })
	.inputValidator(updateEmpresaValidator)
	.handler(async ({ data }) => {
		const request = getRequest()
		const session = await protectedServerFn(request)
		if (session.user.id !== data.userId) {
			throw new Response("Unauthorized", { status: 401 })
		}

		return await updateEmpresaDB(data)
	})
