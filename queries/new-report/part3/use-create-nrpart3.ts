import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createNRpart3Server } from "server/new-report/part3/create-nrpart3-server"

export function useCreatePart3Data() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createNRpart3Server,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["part3Data"] })
		},
	})
}
