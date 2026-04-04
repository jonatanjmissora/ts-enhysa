import { sortedByNombre } from "@/lib/utils"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { InstrumentoType } from "db/instrumentos/schema"
import { createInstrumentoServer } from "server/instrumentos/create-instrumento-server"

export function useCreateInstrumento() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createInstrumentoServer,
		onSuccess: data => {
			// queryClient.invalidateQueries({ queryKey: ["empresas"] })
			queryClient.setQueryData<InstrumentoType[]>(["instrumentos"], oldData => {
				if (!oldData) return oldData
				return sortedByNombre([data, ...oldData])
			})
		},
	})
}
