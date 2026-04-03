import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { deleteEmpresaDB } from "db/empresas/delete-empresa-db"
import { empresaIdValidator } from "db/empresas/empresa-validator"

export const deleteEmpresaServer = createServerFn({ method: "POST" })
	.inputValidator(empresaIdValidator)
	.handler(async ({ data }) => {
		const request = getRequest()
		await protectedServerFn(request)

		const result = await deleteEmpresaDB(data.id, data.tecnicoId)

		if (!result || result.length === 0) {
			throw new Error("Empresa not found or could not be deleted")
		}

		return result[0]
	})
