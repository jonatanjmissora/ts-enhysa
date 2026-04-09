import { db } from "db"
import { instrumentos } from "./schema"
import { eq, desc } from "drizzle-orm"
import { delay } from "@/lib/utils"

export async function getInstrumentosDB(userId: string) {
	try {
		await delay()
		return await db
			.select()
			.from(instrumentos)
			.where(eq(instrumentos.userId, userId))
			.orderBy(desc(instrumentos.nombre))
	} catch (error) {
		console.error(
			"ERROR obteniendo instrumental:",
			error instanceof Error ? error.message : error
		)
	}
}
