import { InputFiles } from "@/components/layout/input-files"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
	ILUMINACION,
	ILUMINACION_FUENTE,
	ILUMINACION_TIPO,
	IluminacionFuenteType,
	IluminacionTipoType,
	IluminacionType,
	VALORES_REQUERIDOS,
	ValoresRequeridosType,
} from "@/lib/constants"
import { useForm } from "@tanstack/react-form"
import { Box, Edit, HardHat, Lightbulb, Loader, Trash2 } from "lucide-react"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import Formula from "./formula"
import { getIndiceDeLocal, getIndiceRedondeo } from "@/lib/utils"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { Part2DataType } from "db/new-report/part2/schema"
import { useUpdateNrPart2 } from "queries/new-report/part2/use-update-nrpart2"
import { part2DataFormValidator } from "db/new-report/part2/nrpart2-validator"
import { toast } from "sonner"

export default function MovilEditAreaAlert({ area }: { area: Part2DataType }) {
	const [open, setOpen] = useState(false)
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild className="hover:bg-accent">
				<button className="card py-2 px-4 my-20 flex items-center justify-center gap-2 w-max textM text-sm  bg-accent hover:bg-accent/90 ml-auto">
					<Edit className="size-4" />
					Editar
				</button>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-6 py-12 pb-40 sm:p-20 sm:py-15 2xl:py-20 bg-accent/80 backdrop-blur-xl w-full sm:w-1/2 h-screen sm:h-[95dvh] overflow-auto">
				<AlertDialogTitle className="h-max sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2 border-b border-foreground/20 w-full mb-10">
					Editar Area
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center">
					<MovilEditArea area={area} setOpen={setOpen} />
				</AlertDialogDescription>
			</AlertDialogContent>
		</AlertDialog>
	)
}

function MovilEditArea({
	area,
	setOpen,
}: {
	area: Part2DataType
	setOpen: Dispatch<SetStateAction<boolean>>
}) {
	const [puntos, setPuntos] = useState<number[]>(area.puntos)
	const [puntosError, setPuntosError] = useState<string | null>(null)
	const [planoFiles, setPlanoFiles] = useState<File[]>([])

	const { mutateAsync: updateNRpart2, isPending, error } = useUpdateNrPart2()

	const form = useForm({
		defaultValues: {
			nombre: area.nombre,
			tipo: area.tipo,
			iluminacionTipo: area.iluminacionTipo,
			iluminacionFuente: area.iluminacionFuente,
			iluminacion: area.iluminacion,
			valorRequerido: area.valorRequerido,
			observaciones: area.observaciones,
			largo: area.largo,
			ancho: area.ancho,
			alto: area.alto,
		},
		validators: {
			onSubmit: part2DataFormValidator,
		},
		onSubmit: async ({ value }) => {
			setPuntosError(null)
			if (puntos.every(punto => punto === 0))
				return setPuntosError("Debe agregar al menos un punto de medición")
			const newArea: Part2DataType = {
				...value,
				userId: area.userId,
				id: area.id,
				puntos,
				imagenes: [],
			}
			const result = await updateNRpart2({ data: newArea })
			if (!result) {
				console.error("Error al actualizar area", error)
				toast.error("Error al actualizar area")
				return
			}
			toast.success("Area actualizada exitosamente")
			setOpen(false)
		},
	})

	return (
		<form
			id="create-form"
			onSubmit={e => {
				e.preventDefault()
				form.handleSubmit()
			}}
			className="w-full my-5 sm:my-4 flex flex-col gap-8 relative"
		>
			<FieldGroup className="gap-5">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-5/6 mt-10 mx-auto">
					<form.Field
						name="nombre"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel
										htmlFor={field.name}
										className="flex items-center gap-3 textL"
									>
										Nombre del Area
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										className="bg-background sm:bg-accent text-right text-sm"
									/>
									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors}
											className="text-xs 2xl:text-sm absolute -bottom-4 left-0"
										/>
									)}
								</Field>
							)
						}}
					/>

					<form.Field
						name="tipo"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel
										htmlFor={field.name}
										className="flex items-center gap-3 textL"
									>
										Tipo del Area
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										className="bg-background sm:bg-accent text-right text-sm"
									/>
									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors}
											className="text-xs 2xl:text-sm absolute -bottom-4 left-0"
										/>
									)}
								</Field>
							)
						}}
					/>
				</div>

				<div className="flex items-center justify-between border-b border-cyan-500 dark:border-cyan-300/25 my-10 w-full">
					<div className="textL py-2 px-3 flex items-center gap-8 justify-between w-full">
						Iluminación{" "}
						<Lightbulb className="sm:size-7 2xl:size-9 text-cyan-500 dark:text-cyan-300/75" />
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-5/6 mt-10 mx-auto">
					<form.Field
						name="iluminacionTipo"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid

							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel
										htmlFor={field.name}
										className="flex items-center gap-3 textL"
									>
										Tipo de Iluminación
									</FieldLabel>

									<Select
										value={field.state.value || ""}
										onValueChange={value =>
											field.handleChange(value as IluminacionTipoType)
										}
									>
										<SelectTrigger
											id={field.name}
											name={field.name}
											onBlur={field.handleBlur}
											aria-invalid={isInvalid}
											className="w-full"
										>
											<SelectValue placeholder="Seleccione Clima" />
										</SelectTrigger>

										<SelectContent position="popper">
											<SelectGroup>
												<SelectLabel>Iluminacion Tipo</SelectLabel>

												{ILUMINACION_TIPO?.map(iluminacionTipo => (
													<SelectItem
														key={iluminacionTipo}
														value={iluminacionTipo}
														className="justify-center"
													>
														{iluminacionTipo.toUpperCase()}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>

									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors}
											className="text-xs 2xl:text-sm absolute -bottom-4 left-0"
										/>
									)}
								</Field>
							)
						}}
					/>

					<form.Field
						name="iluminacionFuente"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid

							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel
										htmlFor={field.name}
										className="flex items-center gap-3 textL"
									>
										Fuente de Iluminación
									</FieldLabel>

									<Select
										value={field.state.value || ""}
										onValueChange={value =>
											field.handleChange(value as IluminacionFuenteType)
										}
									>
										<SelectTrigger
											id={field.name}
											name={field.name}
											onBlur={field.handleBlur}
											aria-invalid={isInvalid}
											className="w-full"
										>
											<SelectValue placeholder="Seleccione Fuente" />
										</SelectTrigger>

										<SelectContent position="popper">
											<SelectGroup>
												<SelectLabel>Iluminacion Fuente</SelectLabel>

												{ILUMINACION_FUENTE?.map(iluminacionFuente => (
													<SelectItem
														key={iluminacionFuente}
														value={iluminacionFuente}
														className="justify-center"
													>
														{iluminacionFuente.toUpperCase()}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>

									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors}
											className="text-xs 2xl:text-sm absolute -bottom-4 left-0"
										/>
									)}
								</Field>
							)
						}}
					/>

					<form.Field
						name="iluminacion"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid

							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel
										htmlFor={field.name}
										className="flex items-center gap-3 textL"
									>
										Iluminación
									</FieldLabel>

									<Select
										value={field.state.value || ""}
										onValueChange={value =>
											field.handleChange(value as IluminacionType)
										}
									>
										<SelectTrigger
											id={field.name}
											name={field.name}
											onBlur={field.handleBlur}
											aria-invalid={isInvalid}
											className="w-full"
										>
											<SelectValue placeholder="Seleccione Iluminacion" />
										</SelectTrigger>

										<SelectContent position="popper">
											<SelectGroup>
												<SelectLabel>Iluminacion</SelectLabel>

												{ILUMINACION?.map(iluminacion => (
													<SelectItem
														key={iluminacion}
														value={iluminacion}
														className="justify-center"
													>
														{iluminacion.toUpperCase()}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>

									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors}
											className="text-xs 2xl:text-sm absolute -bottom-4 left-0"
										/>
									)}
								</Field>
							)
						}}
					/>

					<form.Field
						name="valorRequerido"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid

							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel
										htmlFor={field.name}
										className="flex items-center gap-3 textL"
									>
										Valor Requerido
									</FieldLabel>

									<Select
										value={field.state.value || ""}
										onValueChange={value =>
											field.handleChange(value as ValoresRequeridosType)
										}
									>
										<SelectTrigger
											id={field.name}
											name={field.name}
											onBlur={field.handleBlur}
											aria-invalid={isInvalid}
											className="w-full"
										>
											<SelectValue placeholder="Seleccione Valor" />
										</SelectTrigger>

										<SelectContent position="popper">
											<SelectGroup>
												<SelectLabel>Valores</SelectLabel>

												{VALORES_REQUERIDOS?.map(valorRequerido => (
													<SelectItem
														key={valorRequerido}
														value={valorRequerido}
														className="justify-center"
													>
														{valorRequerido.toUpperCase()}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>

									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors}
											className="text-xs 2xl:text-sm absolute -bottom-4 left-0"
										/>
									)}
								</Field>
							)
						}}
					/>

					<form.Field
						name="observaciones"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel
										htmlFor={field.name}
										className="flex items-center gap-3 textL"
									>
										Observaciones
									</FieldLabel>
									<Textarea
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										className="bg-background sm:bg-accent text-right text-sm"
									/>
									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors}
											className="text-xs 2xl:text-sm absolute -bottom-4 left-0"
										/>
									)}
								</Field>
							)
						}}
					/>
				</div>

				<div className="flex items-center justify-between border-b border-orange-700/50 dark:border-orange-300/50 my-10 w-full">
					<div className="textL py-2 px-3 flex items-center gap-8 justify-between w-full">
						Dimensiones{" "}
						<Box className="sm:size-7 2xl:size-9 text-orange-700/70 dark:text-orange-300/75" />
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-5/6 mt-10 mx-auto">
					<form.Field
						name="largo"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>Largo(m)</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(Number(e.target.value))}
										aria-invalid={isInvalid}
										placeholder="Ej. 4"
										type="number"
									/>
									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors}
											className="text-xs 2xl:text-sm absolute -bottom-4 left-0"
										/>
									)}
								</Field>
							)
						}}
					/>

					<form.Field
						name="ancho"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>Ancho(m)</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(Number(e.target.value))}
										aria-invalid={isInvalid}
										placeholder="Ej. 5"
										type="number"
									/>
									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors}
											className="text-xs 2xl:text-sm absolute -bottom-4 left-0"
										/>
									)}
								</Field>
							)
						}}
					/>

					<form.Field
						name="alto"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>
										Alto del montaje (m)
									</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(Number(e.target.value))}
										aria-invalid={isInvalid}
										placeholder="Ej. 2"
										type="number"
									/>
									{isInvalid && (
										<FieldError
											errors={field.state.meta.errors}
											className="text-xs 2xl:text-sm absolute -bottom-4 left-0"
										/>
									)}
								</Field>
							)
						}}
					/>
				</div>

				<div className="flex flex-col gap-1 w-5/6 mx-auto sm:w-full">
					<Label className="tracking-wider" htmlFor="largo">
						Imágenes del Área
					</Label>
					<div className="card p-2 bg-background ">
						<InputFiles
							text="Imágenes del área a medir."
							files={planoFiles}
							setFiles={setPlanoFiles}
							editMode={true}
						/>
					</div>
				</div>

				<form.Subscribe
					selector={state => [
						state.values.largo,
						state.values.ancho,
						state.values.alto,
					]}
					children={([largo, ancho, alto]) => {
						return (
							largo > 0 &&
							ancho > 0 &&
							alto > 0 && (
								<>
									<Formula
										alto={Number(alto)}
										ancho={Number(ancho)}
										largo={Number(largo)}
									/>
									<Grilla
										puntos={puntos}
										setPuntos={setPuntos}
										ancho={Number(ancho)}
										largo={Number(largo)}
										alto={Number(alto)}
									/>
								</>
							)
						)
					}}
				/>

				<Field className="flex flex-row justify-center gap-5 sm:gap-10 items-center w-full mx-auto mt-10">
					<button
						onClick={() => setOpen(false)}
						type="button"
						disabled={isPending}
						className="flex-1 card bg-background justify-center textM text-sm sm:text-base p-2 cursor-pointer"
					>
						Cancelar
					</button>
					<button
						type="submit"
						disabled={isPending}
						className="flex-1 themeBtnBackground py-2 rounded-lg textM text-sm sm:text-base my-shadow"
					>
						{isPending ? (
							<div className="flex gap-2 w-full justify-center items-center">
								Guardando... <Loader className="animate-spin size-4"></Loader>
							</div>
						) : (
							"Guardar"
						)}
					</button>
				</Field>

				{puntosError && (
					<p className="text-center italic textXS text-red-500/70">
						{puntosError}
					</p>
				)}
				{error && (
					<p className="text-center italic textXS text-red-500/70">
						{error.message}
					</p>
				)}

				<form.Subscribe
					selector={state => state.errors}
					children={errors =>
						errors.length > 0 && (
							<span className="text-red-500/70 italic w-full text-center ">
								Faltan campos por completar
							</span>
						)
					}
				/>
			</FieldGroup>
		</form>
	)
}

function Grilla({
	puntos,
	setPuntos,
	ancho,
	largo,
	alto,
}: {
	ancho: number
	largo: number
	alto: number
	puntos: number[]
	setPuntos: Dispatch<SetStateAction<number[]>>
}) {
	const [openInputMenu, setOpenInputMenu] = useState<boolean>(false)
	const [actualPunto, setActualPunto] = useState<number | null>(null)

	const indiceDeLocal = getIndiceDeLocal(largo, ancho, alto)
	const indiceRedondeo = getIndiceRedondeo(indiceDeLocal)
	const celdas = (indiceRedondeo + 2) ** 2
	const div = Math.sqrt(celdas).toFixed(0)
	const divisionesLargo = Number(div)
	const divisionesAncho = Number(div)
	const largoRatio = 150 * divisionesLargo
	const anchoGrilla = `${(ancho / largo) * largoRatio}px`
	const largoGrilla = `${150 * divisionesLargo}px`

	return (
		<>
			<div className="flex items-center justify-between border-b border-purple-700/75 dark:border-purple-500/75 my-10 w-full">
				<div className="textL py-2 px-3 flex items-center gap-8 justify-between w-full">
					Mediciones{" "}
					<HardHat className="sm:size-7 2xl:size-9 text-purple-700/75 dark:text-purple-500/75" />
				</div>
			</div>

			{openInputMenu ? (
				<InputMenu
					setOpenInputMenu={setOpenInputMenu}
					puntos={puntos}
					setPuntos={setPuntos}
					actualPunto={actualPunto}
					setActualPunto={setActualPunto}
				/>
			) : (
				<div className="w-[90dvw] sm:w-full min-h-[500px] overflow-auto flex flex-col p-10">
					<div
						className="grid relative mx-auto"
						style={{
							height: largoGrilla,
							width: anchoGrilla,
							gridTemplateColumns: `repeat(${divisionesAncho}, 1fr)`,
							gridTemplateRows: `repeat(${divisionesLargo}, 1fr)`,
						}}
					>
						<span className="absolute left-0 -top-10 w-full border-b border-foreground/20 text-foreground/20">
							Ancho: {ancho}m
						</span>
						<span
							className={`absolute -left-4 bottom-0 border-b border-foreground/20 text-foreground/20 -rotate-90 origin-bottom-left`}
							style={{ width: largoGrilla }}
						>
							Largo: {largo}m
						</span>
						{Array.from({ length: celdas }).map((_, index) => (
							<div
								key={index}
								className={`border border-cyan-300/20 flex items-center justify-center ${puntos[index] !== 0 ? "bg-cyan-300/20" : ""}`}
							>
								<Punto
									index={index}
									puntos={puntos}
									setOpenInputMenu={setOpenInputMenu}
									setActualPunto={setActualPunto}
								/>
							</div>
						))}
					</div>
				</div>
			)}

			<AreaPuntosList puntos={puntos} setPuntos={setPuntos} />
		</>
	)
}

function Punto({
	index,
	setOpenInputMenu,
	puntos,
	setActualPunto,
}: {
	index: number
	setOpenInputMenu: Dispatch<SetStateAction<boolean>>
	puntos: number[]
	setActualPunto: Dispatch<SetStateAction<number | null>>
}) {
	return (
		<div className="flex flex-col gap-1 items-center justify-center">
			<span className="italic tracking-widest text-xs text-foreground">
				punto-{index + 1}
			</span>
			<button
				onClick={() => {
					setOpenInputMenu(true)
					setActualPunto(index)
				}}
				className="w-15 text-xl font-semibold py-1 px-3 card bg-accent sm:bg-accent text-foreground justify-center items-center min-h-9"
			>
				{puntos[index] !== 0 ? puntos[index] : "*"}
			</button>
		</div>
	)
}

function InputMenu({
	setOpenInputMenu,
	puntos,
	setPuntos,
	actualPunto,
	setActualPunto,
}: {
	setOpenInputMenu: Dispatch<SetStateAction<boolean>>
	puntos: number[]
	setPuntos: Dispatch<SetStateAction<number[]>>
	actualPunto: number | null
	setActualPunto: Dispatch<SetStateAction<number | null>>
}) {
	const inputRef = useRef<HTMLInputElement | null>(null)
	const [puntoValue, setPuntoValue] = useState<string>("")

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus()
			inputRef.current.select()
		}
	}, [])

	function handleSetPunto() {
		if (actualPunto === null) return
		const newPuntos = [...puntos]
		newPuntos[actualPunto] = Number(puntoValue)
		setPuntos(newPuntos)
		setOpenInputMenu(false)
		setActualPunto(null)
	}
	return (
		<div className="card bg-background items-center justify-center gap-10 flex-col w-full p-10">
			<span className="textL border-b py-2 border-foreground/50 w-full text-left text-foreground/70">
				Punto {actualPunto !== null ? actualPunto + 1 : ""}
			</span>
			<input
				ref={inputRef}
				defaultValue={
					actualPunto !== null && puntos[actualPunto] !== 0
						? puntos[actualPunto]
						: ""
				}
				type="number"
				id="punto"
				name="punto"
				className="dark:bg-foreground/50 bg-foreground/5 text-background/75 textXL text-4xl w-3/4 sm:w-1/2 p-4 h-20 text-center rounded-md"
				onChange={e => setPuntoValue(e.currentTarget.value)}
			/>
			<div className="w-full flex justify-between gap-2 textM">
				<button
					type="button"
					onClick={() => setOpenInputMenu(false)}
					className="card p-2 cursor-pointer bg-background justify-center flex-1"
				>
					Cancelar
				</button>
				<button
					type="button"
					className="card p-2 bg-accent cursor-pointer justify-center flex-1"
					onClick={handleSetPunto}
				>
					Guardar
				</button>
			</div>
		</div>
	)
}

function AreaPuntosList({
	puntos,
	setPuntos,
}: {
	puntos: number[]
	setPuntos: Dispatch<SetStateAction<number[]>>
}) {
	const handleSetPunto = (index: number) => {
		const newPuntos = puntos.map((np, indexNP) => (indexNP === index ? 0 : np))
		setPuntos(newPuntos)
	}

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 gap-4  textXS">
			{puntos.map((punto, index) => (
				<div
					key={index}
					className="flex items-center justify-between p-2 border-b border-foreground/20"
				>
					<span>punto-{index + 1}</span>
					<span>{punto}</span>
					<button type="button" onClick={() => handleSetPunto(index)}>
						<Trash2 className="size-4 cursor-pointer text-red-700/50" />
					</button>
				</div>
			))}
		</div>
	)
}
