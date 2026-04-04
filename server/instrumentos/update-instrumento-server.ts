import { protectedServerFn } from "@/lib/protected-serverFn"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { updateInstrumentoValidator } from "db/instrumentos/instrumento-validator"
import { updateInstrumentoDB } from "db/instrumentos/update-instrumento-db"

export const updateInstrumentoServer = createServerFn({ method: "POST" })
	.inputValidator(updateInstrumentoValidator)
	.handler(async ({ data }) => {
		const request = getRequest()
		const session = await protectedServerFn(request)
		if (session.user.id !== data.userId) {
			throw new Response("Unauthorized", { status: 401 })
		}

		return await updateInstrumentoDB(data)
	})
