import { delay } from "@/lib/utils"
import { db } from "db"
import { eq } from "drizzle-orm"
import { UpdatePart1DataType } from "./nrpart2-validator"
import { NRpart1s } from "./schema"

export async function updateNrPart1DB(updatedPart1Data: UpdatePart1DataType) {
	try {
		await delay()
		const result = await db
			.update(NRpart1s)
			.set(updatedPart1Data)
			.where(eq(NRpart1s.id, updatedPart1Data.id))
			.returning()

		return result[0]
	} catch (error) {
		console.error(
			"ERROR actualizando part1Data:",
			error instanceof Error ? error.message : error
		)
	}
}
