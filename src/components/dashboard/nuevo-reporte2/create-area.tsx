import { useState } from "react"
import { useForm } from "@tanstack/react-form"
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { Asterisk, Box, CircleAlert, Cloud, CloudRain, CloudSun, Equal, EqualApproximately, Lightbulb, Loader, RulerDimensionLine, Sun, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { useNavigate } from "@tanstack/react-router"
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


export default function CreateNewAreaAlert () {
	const [open, setOpen] = useState(false)

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild className="hover:bg-accent">
				<button className="card py-2 px-4 my-10 flex items-center justify-center gap-2 mx-auto w-5/6 sm:w-1/3 textM text-sm sm:text-base bg-accent cursor-pointer">
				<span className="">+ Nueva Area</span>
			</button>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-6 py-12 pb-40 sm:p-20 sm:py-15 2xl:py-20 bg-accent/80 backdrop-blur-xl w-full sm:w-1/2 h-screen sm:h-[95dvh] overflow-auto">
				<AlertDialogTitle className="h-max sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2 border-b border-foreground/20 w-full mb-10">
					Nueva Area
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center">
					<CreateNewAreaForm setOpen={setOpen} />
				</AlertDialogDescription>
			</AlertDialogContent>
		</AlertDialog>
	)
}

function CreateNewAreaForm ({setOpen}: {setOpen: (open: boolean) => void}) {
const isPending = false
const error = null
	const [planoFiles, setPlanoFiles] = useState<File[]>([])

	const form = useForm({
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
				
				<Part1 form={form}/>

				<Part2 form={form} planoFiles={planoFiles} setPlanoFiles={setPlanoFiles}/>

				<Part3 form={form}/>

				<Field className="flex flex-row justify-center gap-10 items-center w-full mt-10">
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

				{error && <p>{error.message}</p>}
			</FieldGroup>
		</form>
	)
}

function Part1({form}: {form: any}) {
	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-y-4 sm:gap-x-10 justify-center items-start w-5/6 sm:w-full mx-auto mb-3 sm:mb-0">
				<form.Field
							name="nombre"
							children={field => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid
								return (
									<Field data-invalid={isInvalid} className="relative gap-1">
										<FieldLabel htmlFor={field.name}>
											Nombre del Area
										</FieldLabel>
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
										<FieldLabel htmlFor={field.name}>
											Tipo de Area
										</FieldLabel>
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

			<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full mx-auto sm:pt-6">
				<div className="flex flex-col gap-1 sm:w-full w-5/6 mx-auto">
					<Label className="tracking-wider" htmlFor="matricula">
						Clima
					</Label>
					<Select defaultValue="soleado">
						<SelectTrigger className="w-full">
							<SelectValue />
						</SelectTrigger>
						<SelectContent className="w-full p-2 px-6">
							<SelectGroup>
								<SelectLabel>Estado del clima</SelectLabel>
								<SelectItem value="soleado">
									<Sun size={12} />
									Soleado
								</SelectItem>
								<SelectItem value="numblado">
									<Cloud size={12} />
									Nublado
								</SelectItem>
								<SelectItem value="templado">
									<CloudSun size={12} />
									Templado
								</SelectItem>
								<SelectItem value="lluvioso">
									<CloudRain size={12} />
									Lluvioso
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className="flex flex-col gap-1 sm:w-full w-5/6 mx-auto">
					<Label className="tracking-wider" htmlFor="matricula">
						Humedad
					</Label>
					<Select defaultValue="60">
						<SelectTrigger className="w-full">
							<SelectValue />
						</SelectTrigger>
						<SelectContent className="w-full p-2">
							<SelectGroup>
								<SelectLabel>Humedad</SelectLabel>
								<SelectItem value="60">60%</SelectItem>
								<SelectItem value="70">70%</SelectItem>
								<SelectItem value="80">80%</SelectItem>
								<SelectItem value="90">90%</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className="flex flex-col gap-1 sm:w-full w-5/6 mx-auto">
					<Label className="tracking-wider" htmlFor="matricula">
						Temperatura
					</Label>
					<Select defaultValue="20">
						<SelectTrigger className="w-full">
							<SelectValue />
						</SelectTrigger>
						<SelectContent className="w-full p-2">
							<SelectGroup>
								<SelectLabel>Tempreatura</SelectLabel>
								<SelectItem value="10">10°C</SelectItem>
								<SelectItem value="20">20°C</SelectItem>
								<SelectItem value="30">30°C</SelectItem>
								<SelectItem value="40">40°C</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
					
			<div className="flex items-center justify-between border-b border-cyan-500 dark:border-cyan-300/25 my-10 w-full">
							<div className="textL py-2 px-3 flex items-center gap-8 justify-between w-full">
								Iluminación{" "}
								<Lightbulb className="sm:size-7 2xl:size-9 text-cyan-500 dark:text-cyan-300/75" />
							</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-y-4 sm:gap-x-10 justify-center items-start w-5/6 sm:w-full mx-auto mb-3 sm:mb-0">	
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="matricula">
						Tipo de iluminación
					</Label>
					<Select defaultValue="natural">
						<SelectTrigger className="w-full">
							<SelectValue
								placeholder="Seleccione Tipo"
								className="text-center"
							/>
						</SelectTrigger>
						<SelectContent position="popper">
							<SelectGroup>
								<SelectLabel>Tipos Iluminación</SelectLabel>

								<SelectItem value="natural">NATURAL</SelectItem>
								<SelectItem value="artificial">ARTIFICIAL</SelectItem>
								<SelectItem value="mixta">MIXTA</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="matricula">
						Tipo de Fuente
					</Label>
					<Select defaultValue="incandescente">
						<SelectTrigger className="w-full">
							<SelectValue
								placeholder="Seleccione Tipo"
								className="text-center"
							/>
						</SelectTrigger>
						<SelectContent position="popper">
							<SelectGroup>
								<SelectLabel>Tipos Iluminación</SelectLabel>

								<SelectItem value="incandescente">INCANDESCANTE</SelectItem>
								<SelectItem value="desacrga">DESCARGA</SelectItem>
								<SelectItem value="mixta">MIXTA</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="matricula">
						Iluminación
					</Label>
					<Select defaultValue="general">
						<SelectTrigger className="w-full">
							<SelectValue
								placeholder="Seleccione Tipo"
								className="text-center"
							/>
						</SelectTrigger>
						<SelectContent position="popper">
							<SelectGroup>
								<SelectLabel>Tipos Iluminación</SelectLabel>

								<SelectItem value="general">GENERAL</SelectItem>
								<SelectItem value="localizada">LOCALIZADA</SelectItem>
								<SelectItem value="mixta">MIXTA</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="matricula">
						Valor Requerido
					</Label>
					<Select defaultValue="300">
						<SelectTrigger className="w-full">
								<SelectValue
									placeholder="Seleccione Tipo"
									className="text-center"
								/>
							</SelectTrigger>
							<SelectContent position="popper">
								<SelectGroup>
									<SelectLabel>Valores</SelectLabel>

									<SelectItem value="100">100 lum</SelectItem>
									<SelectItem value="200">200 lum</SelectItem>
									<SelectItem value="300">300 lum</SelectItem>
									<SelectItem value="750">750 lum</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<form.Field
					name="observacion"
					children={field => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid
						return (
							<Field data-invalid={isInvalid} className="relative gap-0">
								<FieldLabel htmlFor={field.name}>
									Observación
								</FieldLabel>
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
		</>
	)
}

function Part2({form, planoFiles, setPlanoFiles}: {form: any, planoFiles: File[], setPlanoFiles: React.Dispatch<React.SetStateAction<File[]>>}) {
	return (
		<>
			<div className="flex items-center justify-between border-b border-orange-700/50 dark:border-orange-300/50 my-10 w-full">
				<div className="textL py-2 px-3 flex items-center gap-8 justify-between w-full">
					Dimensiones{" "}
					<Box className="sm:size-7 2xl:size-9 text-orange-700/70 dark:text-orange-300/75" />
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-5/6 mx-auto sm:w-full">
				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="largo">
						Largo (m)
					</Label>
					<Input
						id="largo"
						placeholder="Ej. 4"
						defaultValue="Ej. 4"
						readOnly
					/>
				</div>

				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="ancho">
						Ancho (m)
					</Label>
					<Input
						id="ancho"
						placeholder="Ej. 6"
						defaultValue="Ej. 6"
						readOnly
					/>
				</div>

				<div className="flex flex-col gap-1">
					<Label className="tracking-wider" htmlFor="altomontaje">
						Alto del montaje (m)
					</Label>
					<Input
						id="altomontaje"
						placeholder="Ej. 2"
						defaultValue="Ej. 2"
						readOnly
					/>
				</div>
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

			<div className="w-5/6 sm:w-full mx-auto flex flex-col items-stretch justify-between gap-3">
					<span className="w-full italic font-semibold text-foreground/50 tracking-widest border-b border-foreground/10 text-left">
						Indice del local{" "}
					</span>

					<div className="w-full flex sm:flex-row flex-col">
						<div className="flex flex-col gap-2 justify-center items-center flex-1">
							<div className="flex justify-end items-center gap-3 py-4 text-xs sm:text-base">
								<div className="flex flex-col">
									<span className="p-1 border-b border-foreground/50 w-full text-center sm:px-10">
										4 * 6
									</span>
									<span className="p-1 text-center">2 * ( 4 + 6 )</span>
								</div>
								<Equal size={16} />
								<span className="italic font-semibold text-xs sm:text-lg tracking-widest">
									0.83
								</span>
								<EqualApproximately size={16} />
								<span className="text-xl sm:text-2xl bg-teal-500/50 px-4 py-1 rounded-lg">
									1
								</span>
							</div>
						</div>

						<div className="flex-1 flex flex-col gap-2 items-center justify-end">
							<span className="text-2xl sm:text-3xl font-semibold bg-pink-500/50 px-4 py-1 rounded-lg">
								9
							</span>
							<span className="italic textXS">Número de mediciones</span>
						</div>
					</div>

					<span className="italic  border-t border-foreground/10 py-2 w-full text-right textXS text-foreground/50">
						Res. 84/2012 S.R.T.
					</span>
				</div>
		</>
	)
}

function Part3({form}: {form: any}) {
	const PUNTOS = ["301", "299", "300", "287", "293", "*", "*", "*", "*"]
	return (
		<>
			<div className="flex items-center justify-between border-b border-purple-500 dark:border-purple-500/25 my-10 w-full">
				<div className="textL py-2 px-3 flex items-center gap-8 justify-between w-full">
					Croquis{" "}
					<RulerDimensionLine className="sm:size-7 2xl:size-9 text-purple-500 dark:text-purple-500/75" />
				</div>
			</div>

			<div className="w-full grid grid-cols-3 relative">
				{Array.from({ length: 3 }).map((_, i) => (
					<div key={i} className="flex flex-col">
						{Array.from({ length: 3 }).map((_, j) => (
							<div
								key={j}
								className="h-34 border border-foreground/30 flex items-center justify-center"
							>
								<div className="flex flex-col gap-1 items-center justify-center">
									<span className="italic tracking-widest text-xs">
										punto-{i * 3 + j + 1}
									</span>
									<span className="w-15 text-xl font-semibold py-1 px-3 card bg-accent sm:bg-background justify-center items-center">
										{PUNTOS[i * 3 + j]}
									</span>
								</div>
							</div>
						))}
					</div>
				))}
			</div>

			<div className="p-2 sm:p-0 w-full min-h-full grid grid-cols-2 justify-between sm:gap-2 gap-4">
				{PUNTOS.map((p, i) => (
					<div
						key={i}
						className="px-2 sm:px-0 w-full flex items-center justify-between py-1 border-b border-foreground/10"
					>
						<span className="text-sm italic tracking-widest">punto-{i + 1}</span>
						<span className="text-sm font-semibold">{p}</span>
						<Trash2 size={14} className="text-destructive" />
					</div>
				))}
			</div>
			
		</>
	)
}