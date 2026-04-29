import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Part1DataType } from "db/new-report/part1/schema"
import { updatePart1DataServer } from "server/new-report/part1/update-nrpart1-server"

export function useUpdateNrPart1() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: updatePart1DataServer,
		onSuccess: data => {
			queryClient.setQueryData<Part1DataType>(["part1Data"], data)
		},
	})
}
