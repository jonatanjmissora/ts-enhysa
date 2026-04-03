import { delay } from "@/lib/utils"
import { db } from "db"
import { empresas } from "./schema"
import { and, eq } from "drizzle-orm"

export async function deleteEmpresaDB(id: string, tecnicoId: string) {
	try {
		await delay()
		return await db
			.delete(empresas)
			.where(and(eq(empresas.id, id), eq(empresas.tecnicoId, tecnicoId)))
			.returning()
	} catch (error) {
		console.error(
			"ERROR eliminando categoria:",
			error instanceof Error ? error.message : error
		)
	}
}
