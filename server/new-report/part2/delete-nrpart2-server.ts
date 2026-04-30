import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { deleteNRpart2DB } from "db/new-report/part2/delete-nrpart2-db"
import { nrPart2IdValidator } from "db/new-report/part2/nrpart2-validator"

export const deleteNRpart2Server = createServerFn({ method: "POST" })
	.inputValidator(nrPart2IdValidator)
	.handler(async ({ data }) => {
		const request = getRequest()
		const session = await protectedServerFn(request)

		const result = await deleteNRpart2DB(data.id, session.user.id)

		if (!result) {
			throw new Error("Part2Data not found or could not be deleted")
		}

		return result
	})
