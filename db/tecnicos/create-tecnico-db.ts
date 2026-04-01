import { delay } from "@/lib/utils"
import { tecnicos, TecnicoType } from "./schema"
import { db } from "db"

export async function createTecnicoDB(newTecnico: TecnicoType) {
	try {
		await delay()
		return await db.insert(tecnicos).values(newTecnico).returning()
	} catch (error) {
		console.error(
			"ERROR insertando técnico:",
			error instanceof Error ? error.message : error
		)
	}
}
