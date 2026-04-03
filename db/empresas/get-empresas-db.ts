import { db } from "db"
import { empresas } from "./schema"
import { eq } from "drizzle-orm"
import { delay } from "@/lib/utils"

export async function getEmpresasDB(tecnicoId: string) {
	try {
		await delay()
		return await db
			.select()
			.from(empresas)
			.where(eq(empresas.tecnicoId, tecnicoId))
			.limit(1)
			.then(rows => rows[0] ?? null)
	} catch (error) {
		console.error(
			"ERROR obteniendo empresas:",
			error instanceof Error ? error.message : error
		)
	}
}
