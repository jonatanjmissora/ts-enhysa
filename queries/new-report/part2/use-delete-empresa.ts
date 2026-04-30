import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Part2DataType } from "db/new-report/part2/schema"
import { deleteNRpart2Server } from "server/new-report/part2/delete-nrpart2-server"

export function useDeleteNRpart2(part2DataId: string) {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ data }: { data: { id: string } }) =>
			deleteNRpart2Server({ data }),
		onSuccess: () => {
			queryClient.setQueryData<Part2DataType[]>(["part2Data"], oldData => {
				if (!oldData) return oldData
				return oldData.filter(item => item.id !== part2DataId)
			})
		},
	})
}
