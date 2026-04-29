import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createNRpart1Server } from "server/new-report/part1/create-nrpart1-server"

export function useCreatePart1Data() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createNRpart1Server,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["part1Data"] })
		},
	})
}
