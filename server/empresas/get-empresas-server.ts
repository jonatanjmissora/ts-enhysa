import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { getEmpresasDB } from "db/empresas/get-empresas-db"

export const getEmpresasServer = createServerFn()
	.inputValidator((data: { tecnicoId: string }) => data)
	.handler(async ({ data }) => {
		const request = getRequest()
		await protectedServerFn(request)

		return await getEmpresasDB(data.tecnicoId)
	})
