import { clsx, type ClassValue } from "clsx"
import { EmpresaFormType } from "db/empresas/empresa-validator"
import { EmpresaType } from "db/empresas/schema"
import { InstrumentoFormType } from "db/instrumentos/instrumento-validator"
import { InstrumentoType } from "db/instrumentos/schema"
import { TecnicoType } from "db/tecnicos/schema"
import { TecnicoFormType } from "db/tecnicos/tecnico-validator"
import { twMerge } from "tailwind-merge"
import { PuntoType } from "./types"
import { Part1DataFormType } from "db/new-report/part1/nrpart1-validator"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getUserInfo = (session: any) => {
	const avatar = session?.user?.image || ""
	const name = session?.user?.name.split(" ")[0] || ""
	const Name = name.charAt(0).toUpperCase() + name.slice(1)
	const lastName = session?.user?.name.split(" ")[1] || ""
	const LastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
	return { avatar, fullName: `${Name} ${LastName}` }
}

export const delay = async (ms = 3000) => {
	if (!import.meta.env.DEV) return

	await new Promise(r => setTimeout(r, ms))
}

export const checkTecnicoDiference = (
	formValues: TecnicoFormType,
	tecnico: TecnicoType
) => {
	return (
		formValues.nombre === tecnico.nombre &&
		formValues.telefono === tecnico.telefono &&
		formValues.localidad === tecnico.localidad &&
		formValues.cargo === tecnico.cargo &&
		formValues.matricula === tecnico.matricula &&
		formValues.matriculaImg === tecnico.matriculaImg &&
		formValues.firmaImg === tecnico.firmaImg &&
		formValues.membrete === tecnico.membrete
	)
}

export const checkEmpresaDiference = (
	formValues: EmpresaFormType,
	empresa: EmpresaType
) => {
	return (
		formValues.cuit === empresa.cuit &&
		formValues.razonSocial === empresa.razonSocial &&
		formValues.direccion === empresa.direccion &&
		formValues.localidad === empresa.localidad &&
		formValues.provincia === empresa.provincia &&
		formValues.codigoPostal === empresa.codigoPostal &&
		formValues.horarios === empresa.horarios &&
		formValues.logo === empresa.logo
	)
}

export const checkInstrumentoDiference = (
	formValues: InstrumentoFormType,
	instrumento: InstrumentoType
) => {
	return (
		formValues.nombre === instrumento.nombre &&
		formValues.marca === instrumento.marca &&
		formValues.modelo === instrumento.modelo &&
		formValues.serie === instrumento.serie &&
		formValues.fechaCalibracion === instrumento.fechaCalibracion &&
		formValues.imagenes === instrumento.imagenes
	)
}

export const checkPart1DataDiference = (
	formValues: Part1DataFormType,
	part1Data: Part1DataFormType
) => {
	return (
		formValues.tecnicoNombre === part1Data.tecnicoNombre &&
		formValues.empresaId === part1Data.empresaId &&
		formValues.instrumentoId === part1Data.instrumentoId &&
		formValues.clima === part1Data.clima &&
		formValues.humedad === part1Data.humedad &&
		formValues.temperatura === part1Data.temperatura
	)
}

export const sortedByRazonSocial = (empresas: EmpresaType[]) => {
	return empresas.sort((a, b) => a.razonSocial.localeCompare(b.razonSocial))
}

export const sortedByNombre = (instrumentos: InstrumentoType[]) => {
	return instrumentos.sort((a, b) => a.nombre.localeCompare(b.nombre))
}

export const getIndiceDeLocal = (
	cantidadFilas: number,
	cantidadColumnas: number,
	cantidadAltura: number
) => {
	return (
		(cantidadFilas * cantidadColumnas) /
		(cantidadAltura * (cantidadFilas + cantidadColumnas))
	)
}

export const getIndiceRedondeo = (indiceDeLocal: number) =>
	Math.abs(indiceDeLocal % 1) > 0
		? Math.trunc(indiceDeLocal) + 1
		: Math.trunc(indiceDeLocal)

export const getMinimoMediciones = (indiceRedondeo: number) =>
	(indiceRedondeo + 2) ** 2

export const getMinimoMedicionesFrom = (
	cantidadFilas: number,
	cantidadColumnas: number,
	cantidadAltura: number
) => {
	return getMinimoMediciones(
		getIndiceRedondeo(
			getIndiceDeLocal(cantidadFilas, cantidadColumnas, cantidadAltura)
		)
	)
}

export const getHalfMedia = (puntos: PuntoType[]) => {
	const sumatoria = puntos.reduce((acc, valor) => acc + valor.valor, 0)
	return sumatoria / puntos.length / 2
}

export const puntosResult = (puntos: PuntoType[]) => {
	const puntosQueCumplen: PuntoType[] = []
	const puntosQueNoCumplen: PuntoType[] = []

	const halfMedia = getHalfMedia(puntos)
	puntos.map(punto =>
		punto.valor >= halfMedia
			? puntosQueCumplen.push(punto)
			: puntosQueNoCumplen.push(punto)
	)
	return { puntosQueCumplen, puntosQueNoCumplen }
}

export const getPuntosSortedByTimestamp = (puntos: PuntoType[] | []) => {
	const newPuntos = [...puntos]
	return newPuntos.sort((a, b) => a.created - b.created)
}

export const getLastPuntoOrden = (puntos: PuntoType[] | []) => {
	const lastPunto = puntos[puntos.length - 1]
	return lastPunto?.orden ?? 0
}

export const updateClima = (clima: string, position: number, value: string) => {
	const newClima = clima.split("-")
	newClima[position] = value
	return newClima.join("-")
}
