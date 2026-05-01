import { queryOptions } from "@tanstack/react-query"
import { getNRpart3Server } from "server/new-report/part3/get-nrpart3-server"

export const part3DataQueryOptions = queryOptions({
	queryKey: ["part3Data"],
	queryFn: () => getNRpart3Server(),
	// refetchInterval: 60 * 1000, // refrescar cada 60 segundos
})
