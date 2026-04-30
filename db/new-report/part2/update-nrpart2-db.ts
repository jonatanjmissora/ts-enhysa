import { delay } from "@/lib/utils"
import { db } from "db"
import { eq } from "drizzle-orm"
import { UpdatePart2DataType } from "./nrpart2-validator"
import { NRpart2s } from "./schema"

export async function updateNrPart2DB(updatedPart2Data: UpdatePart2DataType) {
	try {
		await delay()
		const result = await db
			.update(NRpart2s)
			.set(updatedPart2Data)
			.where(eq(NRpart2s.id, updatedPart2Data.id))
			.returning()

		return result[0]
	} catch (error) {
		console.error(
			"ERROR actualizando part1Data:",
			error instanceof Error ? error.message : error
		)
	}
}
