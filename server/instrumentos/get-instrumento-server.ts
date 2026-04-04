import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { getEmpresaDB } from "db/empresas/get-empresa-db"

export const getEmpresaServer = createServerFn()
	.inputValidator((data: { id: string; tecnicoId: string }) => data)
	.handler(async ({ data }) => {
		const request = getRequest()
		await protectedServerFn(request)

		return await getEmpresaDB(data.id, data.tecnicoId)
	})
