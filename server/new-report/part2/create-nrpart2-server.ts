import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { createNRpart2DB } from "db/new-report/part2/create-nrpart2-db"
import { part2DataFormValidator } from "db/new-report/part2/nrpart2-validator"

export const createNRpart2Server = createServerFn({ method: "POST" })
	.inputValidator(part2DataFormValidator)
	.handler(async ({ data }) => {
		const request = getRequest()
		const session = await protectedServerFn(request)
		const newPart2Data = {
			...data,
			id: crypto.randomUUID(),
			userId: session.user.id,
		}

		const result = await createNRpart2DB(newPart2Data)
		if (!result) {
			throw new Error("Failed to create part2Data")
		}
		return result[0]
	})
