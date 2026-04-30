import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Part2DataType } from "db/new-report/part2/schema"
import { updatePart2DataServer } from "server/new-report/part2/update-nrpart2-server"

export function useUpdateNrPart2() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: updatePart2DataServer,
		onSuccess: data => {
			queryClient.setQueryData<Part2DataType>(["part2Data"], data)
		},
	})
}
