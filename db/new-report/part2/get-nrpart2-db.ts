import { db } from "db"
import { NRpart2s } from "./schema"
import { eq } from "drizzle-orm"
import { delay } from "@/lib/utils"

export async function getNRpart2DB(userId: string) {
	try {
		await delay()
		return await db
			.select()
			.from(NRpart2s)
			.where(eq(NRpart2s.userId, userId))
			.limit(1)
			.then(rows => rows[0] ?? null)
	} catch (error) {
		console.error(
			"ERROR obteniendo parte1Data:",
			error instanceof Error ? error.message : error
		)
	}
}
