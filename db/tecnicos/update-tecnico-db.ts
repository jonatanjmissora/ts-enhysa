import { delay } from "@/lib/utils"
import { UpdateTecnicoType } from "./tecnico-validator"
import { db } from "db"
import { tecnicos } from "./schema"
import { eq } from "drizzle-orm"

export async function updateTecnicoDB(updatedTecnico: UpdateTecnicoType) {
	try {
		await delay()
		const result = await db
			.update(tecnicos)
			.set(updatedTecnico)
			.where(eq(tecnicos.userId, updatedTecnico.userId))
			.returning()

		return result[0]
	} catch (error) {
		console.error(
			"ERROR actualizando técnico:",
			error instanceof Error ? error.message : error
		)
	}
}
