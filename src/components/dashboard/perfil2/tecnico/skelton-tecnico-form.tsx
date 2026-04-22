import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Asterisk, CircleAlert, Pencil } from "lucide-react"

export default function SkeltonTecnicoForm() {
	return (
		<article className="flex items-center justify-center w-full border border-cyan-700 dark:border-cyan-600 bg-accent sm:bg-background py-10 sm:px-10 sm:py-20 relative">
			<form
				className="flex items-center justify-center flex-col w-5/6"
				id="create-form"
			>
				<FieldGroup className="gap-5">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mb-3 sm:mb-0">
						<Field className="relative gap-1">
							<FieldLabel>
								Nombre Completo
								<Asterisk className="text-destructive size-3" />
							</FieldLabel>
							<Input
								placeholder=". . ."
								className={`animate-pulse bg-background sm:bg-accent`}
							/>
						</Field>

						<Field className="relative gap-1">
							<FieldLabel>Telefono</FieldLabel>
							<Input
								placeholder="..."
								className="animate-pulse bg-background sm:bg-accent"
							/>
						</Field>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mb-3 sm:mb-0">
						<Field className="relative gap-1">
							<FieldLabel>
								Cargo
								<Asterisk className="text-destructive size-3" />
							</FieldLabel>
							<Input
								placeholder="..."
								className="animate-pulse bg-background sm:bg-accent"
							/>
						</Field>

						<Field className="relative gap-1">
							<FieldLabel>Localidad </FieldLabel>
							<Input
								placeholder="..."
								className="animate-pulse bg-background sm:bg-accent"
							/>
						</Field>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 items-end mb-3 sm:mb-0">
						<Field className="relative gap-1">
							<FieldLabel>
								Matricula
								<Asterisk className="text-destructive size-3" />
							</FieldLabel>
							<Input
								placeholder="..."
								className="animate-pulse bg-background sm:bg-accent"
							/>
						</Field>

						<div className="flex flex-col gap-1">
							<Label>Matricula Digital</Label>
							<Input
								placeholder="..."
								className="animate-pulse bg-background sm:bg-accent"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mb-3 sm:mb-0">
						<div className="flex-1 flex flex-col gap-1">
							<Label>Firma Digital</Label>
							<Input
								placeholder="..."
								className="animate-pulse bg-background sm:bg-accent h-full"
							/>
						</div>

						<div className="flex-1 flex flex-col gap-1">
							<Label>Pie de Página</Label>
							<div className="flex flex-col gap-[0.5px]">
								<Input
									placeholder="..."
									className="text-center animate-pulse bg-background sm:bg-accent"
								/>

								<Input
									placeholder="..."
									className="text-center animate-pulse bg-background sm:bg-accent"
								/>
							</div>
						</div>
					</div>

					<div className="flex justify-end items-center gap-2 w-full text-destructive">
						<Asterisk className="text-destructive size-3" />
						<span className="text-xs 2xl:text-sm italic tracking-wide">
							campo obligatorio
						</span>
					</div>

					<div className="flex items-center gap-2">
						<CircleAlert className="size-3 sm:size-4 text-amber-500/50" />
						<span className="text-xs sm:text-sm italic text-foreground/25">
							Completa tus datos para los reportes.
						</span>
					</div>

					<div className="w-full sm:w-1/2 ml-auto sm:pl-5">
						<button
							type="button"
							className="textM w-1/2 flex gap-3 items-center justify-center card p-1 ml-auto"
						>
							<Pencil size={16} className="text-foreground/75" />
							Editar
						</button>
					</div>
				</FieldGroup>
			</form>
		</article>
	)
}
