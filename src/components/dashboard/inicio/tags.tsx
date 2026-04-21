import FileChart, {
	CheckCircle,
	ClockComponent,
} from "@/components/layout/icons"

export default function InicioTags() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-10">
			<div className="p-4 sm:p-4 sm:px-6 2xl:p-10 card bg-accent gap-4 sm:justify-start sm:gap-6  w-64 sm:w-full">
				<FileChart className="size-16 p-3" />
				<div className="flex flex-col gap-0 sm:gap-2">
					<p className="textM sm:text-xl font-semibold text-foreground/70 dark:text-shadow-lg/50">
						Informes totales
					</p>
					<p className="text-2xl 2xl:text-4xl font-semibold dark:text-shadow-lg/50">
						24
					</p>
				</div>
			</div>

			<div className="p-4 sm:p-4 sm:px-6 2xl:p-10 card bg-accent gap-4 sm:justify-start sm:gap-6  w-64 sm:w-full mx-auto">
				<CheckCircle className="size-16 p-3" />
				<div className="flex flex-col gap-0 sm:gap-2">
					<p className="textM sm:text-xl font-semibold text-foreground/70 dark:text-shadow-lg/50">
						Cumplen Norma
					</p>
					<p className="text-2xl 2xl:text-4xl font-semibold dark:text-shadow-lg/50">
						18
					</p>
				</div>
			</div>

			<div className="p-4 sm:p-4 sm:px-6 2xl:p-10 card bg-accent gap-4 sm:justify-start sm:gap-6  w-64 sm:w-full ml-auto">
				<ClockComponent className="size-16 p-3" />
				<div className="flex flex-col gap-0 sm:gap-2">
					<p className="textM sm:text-xl font-semibold text-foreground/70 dark:text-shadow-lg/50">
						Pendientes
					</p>
					<p className="text-2xl 2xl:text-4xl font-semibold dark:text-shadow-lg/50">
						6
					</p>
				</div>
			</div>
		</div>
	)
}
