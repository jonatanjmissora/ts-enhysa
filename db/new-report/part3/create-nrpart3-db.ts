import { delay } from "@/lib/utils"
import { db } from "db"
import { NRpart3s, Part3DataType } from "db/schema"

export async function createNRpart3DB(newPart3: Part3DataType) {
	try {
		await delay()
		return await db.insert(NRpart3s).values(newPart3).returning()
	} catch (error) {
		console.error(
			"ERROR insertando part3Data:",
			error instanceof Error ? error.message : error
		)
	}
}
