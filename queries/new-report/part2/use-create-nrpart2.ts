import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createNRpart2Server } from "server/new-report/part2/create-nrpart2-server"

export function useCreatePart2Data() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createNRpart2Server,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["part2Data"] })
		},
	})
}
