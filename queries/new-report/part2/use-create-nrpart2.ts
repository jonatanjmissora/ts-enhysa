import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Part2DataType } from "db/new-report/part2/schema"
import { createNRpart2Server } from "server/new-report/part2/create-nrpart2-server"

export function useCreatePart2Data() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createNRpart2Server,
		onSuccess: data => {
			queryClient.setQueryData<Part2DataType[]>(["part2Data"], oldData => {
				if (!oldData) return oldData
				return [...oldData, data]
			})
		},
	})
}
