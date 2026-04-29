import { delay } from "@/lib/utils"
import { Part1DataType, NRpart1s } from "./schema"
import { db } from "db"

export async function createNRpart1DB(newPart1: Part1DataType) {
	try {
		await delay()
		return await db.insert(NRpart1s).values(newPart1).returning()
	} catch (error) {
		console.error(
			"ERROR insertando part1Data:",
			error instanceof Error ? error.message : error
		)
	}
}
