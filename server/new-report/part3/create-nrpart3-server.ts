import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { createNRpart3DB } from "db/new-report/part3/create-nrpart3-db"
import { part3DataFormValidator } from "db/new-report/part3/nrpart3-validator"

export const createNRpart3Server = createServerFn({ method: "POST" })
	.inputValidator(part3DataFormValidator)
	.handler(async ({ data }) => {
		const request = getRequest()
		const session = await protectedServerFn(request)
		const newPart3Data = {
			...data,
			id: crypto.randomUUID(),
			userId: session.user.id,
		}

		const result = await createNRpart3DB(newPart3Data)
		if (!result) {
			throw new Error("Failed to create part3Data")
		}
		return result[0]
	})
