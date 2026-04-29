import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { createNRpart1DB } from "db/new-report/part1/create-nrpart1-db"
import { part1DataFormValidator } from "db/new-report/part1/nrpart1-validator"

export const createNRpart1Server = createServerFn({ method: "POST" })
	.inputValidator(part1DataFormValidator)
	.handler(async ({ data }) => {
		const request = getRequest()
		const session = await protectedServerFn(request)
		const newPart1Data = {
			...data,
			id: crypto.randomUUID(),
			userId: session.user.id,
		}

		const result = await createNRpart1DB(newPart1Data)
		if (!result) {
			throw new Error("Failed to create part1Data")
		}
		return result[0]
	})
