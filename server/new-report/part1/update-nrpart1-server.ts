import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { updatePart1DataValidator } from "db/new-report/part1/nrpart1-validator"
import { updateNrPart1DB } from "db/new-report/part1/update-nrpart1-db"

export const updatePart1DataServer = createServerFn({ method: "POST" })
	.inputValidator(updatePart1DataValidator)
	.handler(async ({ data }) => {
		const request = getRequest()
		const session = await protectedServerFn(request)
		if (session.user.id !== data.userId) {
			throw new Response("Unauthorized", { status: 401 })
		}

		return await updateNrPart1DB(data)
	})
