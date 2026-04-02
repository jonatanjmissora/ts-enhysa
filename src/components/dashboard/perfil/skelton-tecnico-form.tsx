import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SkeltonTecnicoForm() {
	return (
		<article className="flex flex-col items-stretch gap-6 text-lg p-10 cardAccent">
			<form className="flex flex-col gap-6">
				<FieldGroup className="gap-5">
					<div className="flex gap-10">
						<Field className="relative">
							<FieldLabel className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl">
								Nombre
							</FieldLabel>
							<Input
								placeholder=". . ."
								className={`bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg animate-pulse`}
							/>
						</Field>

						<Field className="relative">
							<FieldLabel className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl">
								Teléfono
							</FieldLabel>
							<Input
								placeholder=". . ."
								className={`bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg animate-pulse`}
							/>
						</Field>
					</div>

					<div className="flex gap-10">
						<Field className="relative">
							<FieldLabel className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl">
								Cargo
							</FieldLabel>
							<Input
								placeholder=". . ."
								className={`bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg animate-pulse`}
							/>
						</Field>

						<Field className="relative">
							<FieldLabel className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl">
								Localidad
							</FieldLabel>
							<Input
								placeholder=". . ."
								className={`bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg animate-pulse`}
							/>
						</Field>
					</div>

					<div className="flex items-end gap-10">
						<Field className="relative">
							<FieldLabel className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl">
								Matrícula
							</FieldLabel>
							<Input
								placeholder=". . ."
								className={`bg-background py-2 px-4 rounded-lg text-center sm:text-base 2xl:text-lg animate-pulse`}
							/>
						</Field>

						<div
							className={`w-full bg-foreground/5 h-10 sm:py-[5px] 2xl:py-[4px] rounded-lg border border-foreground/7 animate-pulse`}
						></div>
					</div>

					<Field className="relative">
						<FieldLabel className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl">
							Firma
						</FieldLabel>
						<div
							className={`w-full bg-foreground/5 h-10 sm:py-[5px] 2xl:py-[4px] rounded-lg border border-foreground/7 animate-pulse`}
						></div>
					</Field>

					<Field>
						<FieldLabel className="font-semibold text-foreground/50 tracking-wider sm:text-lg 2xl:text-xl">
							Pie de pagina
						</FieldLabel>
						<Textarea className="min-h-[80px] py-2 px-4 rounded-lg text-center text-pretty sm:text-base 2xl:text-lg animate-pulse" />
					</Field>

					<div className="h-55 w-full"></div>
				</FieldGroup>
			</form>
		</article>
	)
}
