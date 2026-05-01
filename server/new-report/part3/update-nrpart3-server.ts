import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { updateNrPart3DB } from "db/new-report/part3/update-nrpart3-db"
import { updatePart3DataValidator } from "db/new-report/part3/nrpart3-validator"

export const updatePart3DataServer = createServerFn({ method: "POST" })
	.inputValidator(updatePart3DataValidator)
	.handler(async ({ data }) => {
		const request = getRequest()
		const session = await protectedServerFn(request)
		if (session.user.id !== data.userId) {
			throw new Response("Unauthorized", { status: 401 })
		}

		return await updateNrPart3DB(data)
	})
