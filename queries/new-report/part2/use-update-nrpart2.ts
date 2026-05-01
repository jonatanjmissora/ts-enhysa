import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Part2DataType } from "db/new-report/part2/schema"
import { updatePart2DataServer } from "server/new-report/part2/update-nrpart2-server"

export function useUpdateNrPart2() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: updatePart2DataServer,
		onSuccess: data => {
			if (!data) return
			queryClient.setQueryData<Part2DataType[]>(["part2Data"], oldData => {
				if (!oldData) return oldData
				const oldPart2Data = oldData.find(
					oldPart2Data => oldPart2Data.id === data.id
				)
				if (!oldPart2Data) return oldData
				return oldData.map(oldPart2Data =>
					oldPart2Data.id === data.id ? data : oldPart2Data
				)
			})
		},
	})
}
