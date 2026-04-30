import { delay } from "@/lib/utils"
import { NRpart2s, Part2DataType } from "./schema"
import { db } from "db"

export async function createNRpart2DB(newPart2: Part2DataType) {
	try {
		await delay()
		return await db.insert(NRpart2s).values(newPart2).returning()
	} catch (error) {
		console.error(
			"ERROR insertando part2Data:",
			error instanceof Error ? error.message : error
		)
	}
}
