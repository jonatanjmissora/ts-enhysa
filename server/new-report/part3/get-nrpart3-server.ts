import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { getNRpart3DB } from "db/new-report/part3/get-nrpart3-db"

export const getNRpart3Server = createServerFn().handler(async () => {
	const request = getRequest()
	const session = await protectedServerFn(request)

	return await getNRpart3DB(session.user.id)
})
