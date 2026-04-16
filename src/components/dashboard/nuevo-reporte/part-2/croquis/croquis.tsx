import { useEffect, useRef, useState } from "react"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Expand, RulerDimensionLine, ThumbsUp } from "lucide-react"
import CroquisGrid from "./croquis-grid"
import PuntosList from "./puntos-list"
import { DeletePuntoAlertDialog } from "./delete-punto-alert"
import { CroquisType, defaultPunto, PuntoType } from "@/lib/types"
import { getLastPuntoOrden } from "@/lib/utils"

export default function CroquisComponent({
	nombre,
	croquis,
	puntos,
	setPuntos,
}: {
	nombre: string
	croquis: CroquisType
	puntos: PuntoType[]
	setPuntos: (puntos: PuntoType[]) => void
}) {
	const [openValue, setOpenValue] = useState<"new" | "edit" | false>(false)
	const [actualPunto, setActualPunto] = useState<PuntoType>(defaultPunto)

	return (
		<article className="card bg-accent flex-col gap-6 flex-1">
			<div className="flex w-full items-center border-b border-foreground/20">
				<div className="flex items-center gap-3">
					<div className="bg-purple-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<RulerDimensionLine className="size-6" />
					</div>
					<span className="w-full sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2">
						Puntos de medición ({puntos.length})
					</span>
				</div>
				<p className="flex-1 text-right text-sm text-foreground/70 py-1">
					{nombre || "Depósito"}
				</p>
			</div>
			<div className="flex flex-col gap-4 sm:w-[440px] 2xl:w-[500px] relative scale-100">
				<div className="min-h-[400px] h-max w-full overflow-auto bg-background shadow rounded-lg ring ring-foreground/5 py-10">
					<div className="absolute top-4 left-4">
						<AlertPointsCroquis
							croquis={croquis}
							puntos={puntos}
							setPuntos={setPuntos}
							actualPunto={actualPunto}
							setActualPunto={setActualPunto}
						/>
					</div>
					<Croquis
						croquis={croquis}
						puntos={puntos}
						setPuntos={setPuntos}
						actualPunto={actualPunto}
						setActualPunto={setActualPunto}
						openValue={openValue}
						setOpenValue={setOpenValue}
					/>
				</div>
			</div>
			<PuntosList puntos={puntos} setPuntos={setPuntos} />
		</article>
	)
}

function Croquis({
	croquis,
	puntos,
	setPuntos,
	actualPunto,
	setActualPunto,
	openValue,
	setOpenValue,
}: {
	croquis: CroquisType
	puntos: PuntoType[]
	setPuntos: (puntos: PuntoType[]) => void
	actualPunto: PuntoType
	setActualPunto: (punto: PuntoType) => void
	openValue: "new" | "edit" | false
	setOpenValue: (value: "new" | "edit" | false) => void
}) {
	return (
		<>
			<p className="absolute top-4 right-4 text-sm text-amber-500/50">
				Click en croquis para agregar puntos
			</p>
			<div className={`${openValue ? "blur-lg" : ""}`}>
				<CroquisGrid
					croquis={croquis}
					puntos={puntos}
					setActualPunto={setActualPunto}
					setOpenValue={setOpenValue}
				/>
			</div>
			<NewPuntoForm
				puntos={puntos}
				setPuntos={setPuntos}
				actualPunto={actualPunto}
				setActualPunto={setActualPunto}
				openValue={openValue}
				setOpenValue={setOpenValue}
			/>
			<EditPuntoForm
				puntos={puntos}
				setPuntos={setPuntos}
				actualPunto={actualPunto}
				setActualPunto={setActualPunto}
				openValue={openValue}
				setOpenValue={setOpenValue}
			/>
		</>
	)
}

function NewPuntoForm({
	puntos,
	setPuntos,
	actualPunto,
	setActualPunto,
	openValue,
	setOpenValue,
}: {
	puntos: PuntoType[]
	setPuntos: (puntos: PuntoType[]) => void
	actualPunto: PuntoType
	setActualPunto: (punto: PuntoType) => void
	openValue: "new" | "edit" | false
	setOpenValue: (value: "new" | "edit" | false) => void
}) {
	const inputRef = useRef<HTMLInputElement>(null)
	const handleNewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = new FormData(e.currentTarget)
		const value = Number(form.get("valor"))
		if (!value || value === actualPunto?.valor) return

		// Add punto to puntos array
		const newPunto: PuntoType = {
			...actualPunto,
			valor: value,
			orden: getLastPuntoOrden(puntos) + 1,
			created: Date.now(),
		}

		if (!puntos) {
			setPuntos([newPunto])
		} else {
			setPuntos([...puntos, newPunto])
		}
		setActualPunto(defaultPunto)
		setOpenValue(false)
	}

	useEffect(() => {
		if (openValue && inputRef.current) {
			window.scrollTo({
				top: 200,
				behavior: "smooth", // Use 'auto' for an instant jump
			})
			inputRef.current.focus()
		}
	}, [openValue])

	return (
		<>
			{openValue === "new" && (
				<form
					onSubmit={handleNewSubmit}
					className="card bg-background fixed z-10 max-h-[400px] inset-0 py-14 items-center justify-center flex-col gap-10"
				>
					<p className="border-t border-foreground/20 w-full text-end text-lg font-semibold tracking-widest">
						punto-{puntos?.length + 1}
					</p>

					<div className="w-2/3 mx-auto relative">
						<label
							htmlFor=""
							className="absolute -top-4 -left-2 text-lg tracking-widest bg-background text-foreground/70 px-6 rounded-lg font-bold"
						>
							VALOR
						</label>
						<input
							ref={inputRef}
							name="valor"
							type="number"
							className="w-full sm:text-4xl 2xl:text-6xl font-bold tracking-wildest p-4 card bg-foreground text-background text-center"
							autoComplete="off"
						/>
					</div>
					<div className="w-full flex items-center gap-4">
						<button
							type="button"
							className="flex-1 card bg-background py-2 text-lg 2xl:text-xl font-semibold dark:hover:bg-background/75 justify-center cursor-pointer"
							onClick={() => {
								setOpenValue(false)
								setActualPunto(defaultPunto)
							}}
						>
							Cancelar
						</button>
						<button
							type="submit"
							className="flex-1 card bg-accent py-2 text-lg 2xl:text-xl font-semibold dark:hover:bg-background/75 justify-center cursor-pointer"
						>
							Guardar
						</button>
					</div>
				</form>
			)}
		</>
	)
}

function EditPuntoForm({
	puntos,
	setPuntos,
	actualPunto,
	setActualPunto,
	openValue,
	setOpenValue,
}: {
	puntos: PuntoType[]
	setPuntos: (puntos: PuntoType[]) => void
	actualPunto: PuntoType
	setActualPunto: (punto: PuntoType) => void
	openValue: "new" | "edit" | false
	setOpenValue: (value: "new" | "edit" | false) => void
}) {
	const inputRef = useRef<HTMLInputElement>(null)
	const actualPuntoIndex =
		puntos.findIndex(punto => punto.nombre === actualPunto.nombre) + 1 || 1

	const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = new FormData(e.currentTarget)
		const value = Number(form.get("valor"))
		if (!value || value === actualPunto?.valor || !puntos)
			return setOpenValue(false)

		const newPuntos = [...puntos].map(punto =>
			punto.nombre !== actualPunto?.nombre
				? punto
				: { ...punto, valor: value, created: Date.now() }
		)
		setPuntos(newPuntos)
		setActualPunto(defaultPunto)
		setOpenValue(false)
	}

	useEffect(() => {
		if (openValue && inputRef.current) {
			window.scrollTo({
				top: 200,
				behavior: "smooth", // Use 'auto' for an instant jump
			})
			inputRef.current.focus()
		}
	}, [openValue])

	return (
		<>
			{openValue === "edit" && actualPunto && (
				<form
					onSubmit={handleEditSubmit}
					className="card bg-background fixed z-10 inset-0 max-h-[400px] py-14 items-center justify-center flex-col gap-10"
				>
					<div className="w-full flex flex-col items-end gap-1">
						<DeletePuntoAlertDialog
							punto={actualPunto}
							puntos={puntos}
							setPuntos={setPuntos}
							setOpenValue={setOpenValue}
						/>
						<p className="border-t border-foreground/20 w-full text-end text-lg font-semibold tracking-widest">
							punto-{actualPuntoIndex}
						</p>
					</div>

					<div className="w-2/3 mx-auto relative">
						<label
							htmlFor=""
							className="absolute -top-4 -left-2 text-lg tracking-widest bg-background text-foreground/70 px-6 rounded-lg font-bold"
						>
							VALOR
						</label>
						<input
							ref={inputRef}
							name="valor"
							type="number"
							defaultValue={actualPunto.valor}
							className="w-full sm:text-4xl 2xl:text-6xl font-bold tracking-wildest p-4 card bg-foreground text-background text-center"
							autoComplete="off"
						/>
					</div>
					<div className="w-full flex items-center gap-4">
						<button
							type="button"
							className="flex-1 card bg-background py-2 text-lg 2xl:text-xl font-semibold dark:hover:bg-background/75 justify-center cursor-pointer"
							onClick={() => {
								setOpenValue(false)
								setActualPunto(defaultPunto)
							}}
						>
							Cancelar
						</button>
						<button
							type="submit"
							className="flex-1 card bg-accent py-2 text-lg 2xl:text-xl font-semibold dark:hover:bg-background/75 justify-center cursor-pointer"
						>
							Editar
						</button>
					</div>
				</form>
			)}
		</>
	)
}

export function AlertPointsCroquis({
	croquis,
	puntos,
	setPuntos,
	actualPunto,
	setActualPunto,
}: {
	croquis: CroquisType
	puntos: PuntoType[]
	setPuntos: (puntos: PuntoType[]) => void
	actualPunto: PuntoType
	setActualPunto: (punto: PuntoType) => void
}) {
	const [open, setOpen] = useState(false)
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<button className="cursor-pointer hover:bg-background/75">
					<Expand className="size-6" />
				</button>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-30 px-40">
				<AlertDialogTitle></AlertDialogTitle>
				<CroquisGridToPoint
					croquis={croquis}
					setOpen={setOpen}
					puntos={puntos}
					setPuntos={setPuntos}
					actualPunto={actualPunto}
					setActualPunto={setActualPunto}
				/>
			</AlertDialogContent>
		</AlertDialog>
	)
}

function CroquisGridToPoint({
	croquis,
	setOpen,
	puntos,
	setPuntos,
	actualPunto,
	setActualPunto,
}: {
	croquis: CroquisType
	setOpen: (value: boolean) => void
	puntos: PuntoType[]
	setPuntos: (puntos: PuntoType[]) => void
	actualPunto: PuntoType
	setActualPunto: (punto: PuntoType) => void
}) {
	const [openValue, setOpenValue] = useState<"new" | "edit" | false>(false)

	return (
		<div className="flex flex-col justify-center items-center">
			<div
				className={`max-h-[500px] h-max sm:w-[600px] 2xl:w-[800px] overflow-auto bg-accent shadow rounded-lg ring ring-foreground/10 relative scale-100`}
			>
				<div className="w-max h-max p-20 mx-auto">
					<Croquis
						croquis={croquis}
						puntos={puntos}
						setPuntos={setPuntos}
						actualPunto={actualPunto}
						setActualPunto={setActualPunto}
						openValue={openValue}
						setOpenValue={setOpenValue}
					/>
				</div>
			</div>
			<button
				onClick={() => setOpen(false)}
				className="cardBackground px-4 py-3 cursor-pointer w-1/2 mx-auto justify-center tracking-widest font-semibold gap-4 mt-10"
			>
				Listo
				<ThumbsUp size={16} />
			</button>
		</div>
	)
}
