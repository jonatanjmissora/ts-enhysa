import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { updateEmpresaValidator } from "db/empresas/empresa-validator"
import { updateEmpresaDB } from "db/empresas/update-empresa-db"

export const updateEmpresaServer = createServerFn({ method: "POST" })
	.inputValidator(updateEmpresaValidator)
	.handler(async ({ data }) => {
		const request = getRequest()
		await protectedServerFn(request)

		return await updateEmpresaDB(data)
	})
