import { queryOptions } from "@tanstack/react-query"
import { getNRpart2Server } from "server/new-report/part2/get-nrpart2-server"

export const part2DataQueryOptions = queryOptions({
	queryKey: ["part2Data"],
	queryFn: () => getNRpart2Server(),
	// refetchInterval: 60 * 1000, // refrescar cada 60 segundos
})
