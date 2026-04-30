import { delay } from "@/lib/utils"
import { db } from "db"
import { NRpart2s } from "./schema"
import { and, eq } from "drizzle-orm"

export async function deleteNRpart2DB(id: string, userId: string) {
	try {
		await delay()
		return await db
			.delete(NRpart2s)
			.where(and(eq(NRpart2s.id, id), eq(NRpart2s.userId, userId)))
			.returning()
	} catch (error) {
		console.error(
			"ERROR eliminando part2Data:",
			error instanceof Error ? error.message : error
		)
	}
}
