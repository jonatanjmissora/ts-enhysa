import FileChart, {
	CheckCircle,
	ClockComponent,
} from "@/components/layout/icons"

export default function MovilInicioTags() {
	return (
		<div className="grid grid-cols-1 gap-8 ">
			<div className="p-2 card bg-accent rounded-lg gap-4 justify-center w-5/6 relative mx-auto py-5 ">
				<FileChart className="absolute -top-4 -left-4 " />
				<div className="flex flex-col gap-0 w-full">
					<p className="absolute top-0 right-7 text-[40px] font-bold text-blue-500 dark:text-blue-700 dark:text-shadow-sm/50">
						2
					</p>
					<p className="absolute top-2 right-2 text-[40px] font-bold text-blue-500 dark:text-blue-700 dark:text-shadow-sm/50">
						4
					</p>
					<p className="textM font-semibold text-center w-full dark:text-shadow-lg/50 relative">
						Informes totales
					</p>
				</div>
			</div>

			<div className="p-2 card bg-accent gap-4 justify-center w-5/6 relative mx-auto py-5 ">
				<CheckCircle className="absolute -top-4 -left-4" />
				<div className="flex flex-col gap-0 w-full">
					<p className="absolute top-0 right-7 text-[40px] font-bold text-green-600 dark:text-shadow-sm/50">
						1
					</p>
					<p className="absolute top-2 right-2 text-[40px] font-bold text-green-600 dark:text-shadow-sm/50">
						8
					</p>
					<p className="textM font-semibold text-center w-full dark:text-shadow-lg/50 relative">
						Cumplen Norma
					</p>
				</div>
			</div>

			<div className="p-2 card bg-accent gap-4 justify-center w-5/6 relative mx-auto py-5 ">
				<ClockComponent className="absolute -top-4 -left-4" />
				<div className="flex flex-col gap-0 w-full">
					<p className="absolute top-0 right-7 text-[40px] font-bold text-amber-600 dark:text-shadow-lg/50">
						6
					</p>
					<p className="textM font-semibold text-center w-full dark:text-shadow-sm/50 relative">
						Pendientes
					</p>
				</div>
			</div>
		</div>
	)
}
