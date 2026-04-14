import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export function getContext() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchInterval: 5 * 60 * 1000, // refresca cada 5 minutos
				refetchIntervalInBackground: true,
				refetchOnWindowFocus: false,
				refetchOnMount: false,
			},
		},
	})
	return {
		queryClient,
	}
}

export function Provider({
	children,
	queryClient,
}: {
	children: React.ReactNode
	queryClient: QueryClient
}) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
