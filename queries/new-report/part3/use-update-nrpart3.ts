import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Part3DataType } from "db/new-report/part3/schema"
import { updatePart3DataServer } from "server/new-report/part3/update-nrpart3-server"

export function useUpdateNrPart3() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: updatePart3DataServer,
		onSuccess: data => {
			queryClient.setQueryData<Part3DataType>(["part3Data"], data)
		},
	})
}
