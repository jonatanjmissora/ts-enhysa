import { queryOptions } from "@tanstack/react-query"
import { getNRpart1Server } from "server/new-report/part1/get-nrpart1-server"

export const part1DataQueryOptions = queryOptions({
	queryKey: ["part1Data"],
	queryFn: () => getNRpart1Server(),
	// refetchInterval: 60 * 1000, // refrescar cada 60 segundos
})
