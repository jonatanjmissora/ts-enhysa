import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { getNRpart1DB } from "db/new-report/part1/get-nrpart1-db"

export const getNRpart1Server = createServerFn().handler(async () => {
	const request = getRequest()
	const session = await protectedServerFn(request)

	return await getNRpart1DB(session.user.id)
})
