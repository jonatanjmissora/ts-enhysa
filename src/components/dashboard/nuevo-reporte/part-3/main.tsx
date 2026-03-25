export default function NewReportPart3({
	actualStep,
	setActualStep,
}: {
	actualStep: number
	setActualStep: (step: number) => void
}) {
	return (
		<main
			className={`${actualStep === 3 ? "flex-1" : "hidden"} p-20 sm:py-10 2xl:py-20 flex flex-col gap-10 justify-center`}
		>
			<div className="flex items-stretch gap-10">step 3</div>
			<button
				type="button"
				className="bg-accent text-center hover:bg-accent/80 rounded-xl shadow-xl text-lg text-foreground tracking-wide px-6 py-4 cursor-pointer m-0"
			>
				Guardar y Continuar
			</button>
		</main>
	)
}
