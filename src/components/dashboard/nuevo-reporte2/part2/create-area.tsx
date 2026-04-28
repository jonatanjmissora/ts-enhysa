import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { useForm } from "@tanstack/react-form"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
} from "@/components/ui/alert-dialog"
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
import { InputFiles } from "@/components/layout/input-files"
import {
	areaFormValidator,
	part2DataDefault,
	Part2DataType,
} from "@/routes/_protected/new-report2"
import Formula from "./formula"
import { getIndiceDeLocal, getIndiceRedondeo } from "@/lib/utils"
import { Box, HardHat, Lightbulb, Loader, Trash2 } from "lucide-react"

export default function CreateNewAreaAlert({
	part2Data,
	setPart2Data,
}: {
	part2Data: Part2DataType
	setPart2Data: React.Dispatch<React.SetStateAction<Part2DataType>>
}) {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild className="hover:bg-accent">
				<button className="card py-2 px-4 my-10 flex items-center justify-center gap-2 mx-auto w-5/6 sm:w-1/3 textM text-sm sm:text-base sm:bg-background bg-accent cursor-pointer">
					<span className="">+ Nueva Area</span>
				</button>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-6 py-12 pb-40 sm:p-20 sm:py-15 2xl:py-20 bg-accent/80 backdrop-blur-xl w-full sm:w-1/2 h-screen sm:h-[95dvh] overflow-auto">
				<AlertDialogTitle className="h-max sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2 border-b border-foreground/20 w-full mb-10">
					Nueva Area
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center">
					<CreateNewAreaForm
						setOpen={setOpen}
						part2Data={part2Data}
						setPart2Data={setPart2Data}
					/>
				</AlertDialogDescription>
			</AlertDialogContent>
		</AlertDialog>
	)
}

const TIPO = ["natural", "artificial", "mixta"]
const FUENTE = ["incandescente", "descarga", "mixta"]
const ILUMINACION = ["general", "localizada", "mixta"]
const REQUERIDO = ["100", "200", "300", "750", "1000"]

function CreateNewAreaForm({
	setOpen,
	part2Data,
	setPart2Data,
}: {
	setOpen: (open: boolean) => void
	part2Data: Part2DataType
	setPart2Data: React.Dispatch<React.SetStateAction<Part2DataType>>
}) {
	const isPending = false
	const error = null
	const [planoFiles, setPlanoFiles] = useState<File[]>([])
	const [puntos, setPuntos] = useState<number[]>([])

	const form = useForm({
		defaultValues: part2DataDefault,
		validators: {
			onSubmit: areaFormValidator,
		},
		onSubmit: async ({ value }) => {
			console.log(value)
			setOpen(false)
		},
		
		// defaultValues: {
		// 	nombre: "",
		// 	tipo: "",
		// 	iluminacion: "",
		// 	plano: "",
		// 	imagenes: "",
		// 	puntos: "",
		// },
		// validators: {
		// 	onSubmit: areaFormValidator,
		// },
		// onSubmit: async ({ value }) => {
		// 	const result = await createAreaMutation({ data: value })
		// 	if (!result) {
		// 		console.error("Error al crear el área", error)
		// 		toast.error("Error al crear el área")
		// 		return
		// 	}
		// 	setOpen(false)
		// 	toast.success("Técnico creado exitosamente")
		// },
	})

	return (
		<form
			className="flex flex-col gap-4"
			id="create-form"
			onSubmit={e => {
				e.preventDefault()
				form.handleSubmit()
			}}
		>
			<FieldGroup className="gap-5">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-y-4 sm:gap-x-10 justify-center items-start w-5/6 sm:w-full mx-auto mb-3 sm:mb-0">
					<form.Field
						name="nombre"
					children={field => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid
						return (
							<Field data-invalid={isInvalid} className="relative gap-1">
								<FieldLabel htmlFor={field.name}>Nombre del Area</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={e => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Ej. Planta Baja"
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
									<FieldLabel htmlFor={field.name}>Tipo de Area</FieldLabel>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={e => field.handleChange(e.target.value)}
										aria-invalid={isInvalid}
										placeholder="Ej. Depósito"
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

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-y-4 sm:gap-x-10 justify-center items-start w-5/6 sm:w-full mx-auto mb-3 sm:mb-0">
					<form.Field
						name="iluminacionTipo"
						defaultValue={TIPO[0]}
						children={field => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid

						return (
							<Field data-invalid={isInvalid} className="relative gap-1">
								<FieldLabel htmlFor={field.name}>
									Tipo de iluminación
								</FieldLabel>

								<Select
									value={field.state.value || ""}
									onValueChange={value => field.handleChange(value)}
								>
									<SelectTrigger
										id={field.name}
										name={field.name}
										onBlur={field.handleBlur}
										aria-invalid={isInvalid}
										className="w-full"
									>
										<SelectValue placeholder="Seleccione Tipo" />
									</SelectTrigger>

									<SelectContent position="popper">
										<SelectGroup>
											<SelectLabel>Tipos Iluminación</SelectLabel>

											{TIPO.map((tipo, index) => (
												<SelectItem key={index} value={tipo}>
													{tipo.toUpperCase()}
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
						defaultValue={FUENTE[0]}
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid

							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>Tipo de Fuente</FieldLabel>

									<Select
										value={field.state.value || ""}
										onValueChange={value => field.handleChange(value)}
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
												<SelectLabel>Tipos de Fuente</SelectLabel>

												{FUENTE.map((fuente, index) => (
													<SelectItem key={index} value={fuente}>
														{fuente.toUpperCase()}
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
						defaultValue={ILUMINACION[0]}
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid

							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>Iluminación</FieldLabel>

									<Select
										value={field.state.value || ""}
										onValueChange={value => field.handleChange(value)}
									>
										<SelectTrigger
											id={field.name}
											name={field.name}
											onBlur={field.handleBlur}
											aria-invalid={isInvalid}
											className="w-full"
										>
											<SelectValue placeholder="Seleccione Iluminación" />
										</SelectTrigger>

										<SelectContent position="popper">
											<SelectGroup>
												<SelectLabel>Tipos de Iluminación</SelectLabel>

												{ILUMINACION.map((iluminacion, index) => (
													<SelectItem key={index} value={iluminacion}>
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
						name="requerido"
						defaultValue={REQUERIDO[1]}
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid

							return (
								<Field data-invalid={isInvalid} className="relative gap-1">
									<FieldLabel htmlFor={field.name}>Valor Requerido</FieldLabel>

									<Select
										value={field.state.value || ""}
										onValueChange={value => field.handleChange(value)}
									>
										<SelectTrigger
											id={field.name}
											name={field.name}
											onBlur={field.handleBlur}
											aria-invalid={isInvalid}
											className="w-full"
										>
											<SelectValue placeholder="Seleccione Iluminación" />
										</SelectTrigger>

										<SelectContent position="popper">
											<SelectGroup>
												<SelectLabel>Tipos de Iluminación</SelectLabel>

												{REQUERIDO.map((requerido, index) => (
													<SelectItem key={index} value={requerido}>
														{requerido.toUpperCase()}
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
						name="observacion"
						children={field => {
							const isInvalid =
								field.state.meta.isTouched && !field.state.meta.isValid
							return (
							<Field data-invalid={isInvalid} className="relative gap-0">
								<FieldLabel htmlFor={field.name}>Observación</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={e => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Ej. Iluminaria Led"
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

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-5/6 mx-auto sm:w-full">
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
										onChange={e => field.handleChange(e.target.value)}
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
										onChange={e => field.handleChange(e.target.value)}
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
										onChange={e => field.handleChange(e.target.value)}
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

				<AreaPuntosList puntos={puntos} setPuntos={setPuntos} />

				<Field className="flex flex-row justify-center gap-5 w-full mx-auto sm:gap-10 items-center mt-10">
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

				<form.Subscribe
					selector={state => state.errors}
					children={errors =>
						errors.length > 0 && (
							<p className="text-red-500">
								Faltan campos por completar
							</p>
						)
					}
				/>
			</FieldGroup>
			{error && <p>{error.message}</p>}
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
	useEffect(() => {
		const newPuntos: number[] = Array.from({ length: celdas }, () => 0)
		setPuntos(newPuntos)
	}, [celdas, setPuntos])

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
					actualPunto !== null && puntos[actualPunto] !== 0 ? puntos[actualPunto] : ""
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
		const newPuntos = puntos.map((np, indexNP) =>
			indexNP === index ? 0 : np
		)
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
