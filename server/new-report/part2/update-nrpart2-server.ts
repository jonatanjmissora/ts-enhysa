import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { updatePart2DataValidator } from "db/new-report/part2/nrpart2-validator"
import { updateNrPart2DB } from "db/new-report/part2/update-nrpart2-db"

export const updatePart2DataServer = createServerFn({ method: "POST" })
	.inputValidator(updatePart2DataValidator)
	.handler(async ({ data }) => {
		const request = getRequest()
		const session = await protectedServerFn(request)
		if (session.user.id !== data.userId) {
			throw new Response("Unauthorized", { status: 401 })
		}

		return await updateNrPart2DB(data)
	})
