import { db } from "db"
import { empresas } from "./schema"
import { eq, desc } from "drizzle-orm"
import { delay } from "@/lib/utils"

export async function getEmpresasDB(userId: string) {
	try {
		await delay(5000)
		return await db
			.select()
			.from(empresas)
			.where(eq(empresas.userId, userId))
			.orderBy(desc(empresas.razonSocial))
	} catch (error) {
		console.error(
			"ERROR obteniendo empresas:",
			error instanceof Error ? error.message : error
		)
	}
}
