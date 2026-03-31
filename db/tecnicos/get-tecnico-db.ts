import { db } from "db"
import { tecnicos } from "./schema"
import { eq } from "drizzle-orm"

export async function getTecnicoDB(userId: string) {
	try {
		return await db
			.select()
			.from(tecnicos)
			.where(eq(tecnicos.userId, userId))
			.limit(1)
			.then(rows => rows[0] ?? null)
	} catch (error) {
		console.error(
			"ERROR obteniendo tecnico:",
			error instanceof Error ? error.message : error
		)
	}
}
