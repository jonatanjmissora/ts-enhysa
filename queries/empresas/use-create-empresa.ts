import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createEmpresaServer } from "server/empresas/create-empresa-server"

export function useCreateEmpresa() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createEmpresaServer,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["empresas"] })
		},
	})
}
