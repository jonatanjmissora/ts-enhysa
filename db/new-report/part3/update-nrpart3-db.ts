import { delay } from "@/lib/utils"
import { db } from "db"
import { eq } from "drizzle-orm"
import { UpdatePart3DataType } from "./nrpart3-validator"
import { NRpart3s } from "./schema"

export async function updateNrPart3DB(updatedPart3Data: UpdatePart3DataType) {
	try {
		await delay()
		const result = await db
			.update(NRpart3s)
			.set(updatedPart3Data)
			.where(eq(NRpart3s.id, updatedPart3Data.id))
			.returning()

		return result[0]
	} catch (error) {
		console.error(
			"ERROR actualizando part3Data:",
			error instanceof Error ? error.message : error
		)
	}
}
