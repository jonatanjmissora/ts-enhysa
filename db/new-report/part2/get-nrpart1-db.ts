import { db } from "db"
import { NRpart1s } from "./schema"
import { eq } from "drizzle-orm"
import { delay } from "@/lib/utils"

export async function getNRpart1DB(userId: string) {
	try {
		await delay()
		return await db
			.select()
			.from(NRpart1s)
			.where(eq(NRpart1s.userId, userId))
			.limit(1)
			.then(rows => rows[0] ?? null)
	} catch (error) {
		console.error(
			"ERROR obteniendo parte1Data:",
			error instanceof Error ? error.message : error
		)
	}
}
