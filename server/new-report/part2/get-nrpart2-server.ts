import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { getNRpart2DB } from "db/new-report/part2/get-nrpart2-db"

export const getNRpart2Server = createServerFn().handler(async () => {
	const request = getRequest()
	const session = await protectedServerFn(request)

	return await getNRpart2DB(session.user.id)
})
