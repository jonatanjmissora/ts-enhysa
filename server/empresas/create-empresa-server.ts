import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { createEmpresaDB } from "db/empresas/create-empresa-db"
import { empresaFormValidator } from "db/empresas/empresa-validator"

export const createEmpresaServer = createServerFn({ method: "POST" })
	.inputValidator(empresaFormValidator)
	.handler(async ({ data }) => {
		const request = getRequest()
		await protectedServerFn(request)

		const result = await createEmpresaDB(data)
		if (!result) {
			throw new Error("Failed to create empresa")
		}
		return result[0]
	})
