import { db } from "db"
import { NRpart3s } from "./schema"
import { eq } from "drizzle-orm"
import { delay } from "@/lib/utils"

export async function getNRpart3DB(userId: string) {
	try {
		await delay()
		return await db
			.select()
			.from(NRpart3s)
			.where(eq(NRpart3s.userId, userId))
			.limit(1)
			.then(rows => rows[0] ?? null)
	} catch (error) {
		console.error(
			"ERROR obteniendo parte3Data:",
			error instanceof Error ? error.message : error
		)
	}
}
