import { sortedByRazonSocial } from "@/lib/utils"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { EmpresaType } from "db/empresas/schema"
import { updateEmpresaServer } from "server/empresas/update-empresas-server"

export function useUpdateEmpresa() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: updateEmpresaServer,
		onSuccess: data => {
			queryClient.setQueryData<EmpresaType[]>(["empresas"], oldData => {
				if (!oldData) return oldData
				return sortedByRazonSocial([data, ...oldData])
			})
		},
	})
}
