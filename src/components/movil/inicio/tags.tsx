import { CheckCircle2, Clock, FileChartColumn } from "lucide-react"

export default function MovilInicioTags() {
	return (
		<div className="grid grid-cols-1 gap-8 ">
			<div className="p-2 card bg-accent rounded-lg gap-4 justify-center w-5/6 relative mx-auto py-5 ">
				<FileChartColumn className="absolute -top-4 -left-4 size-12 text-blue-300 p-3 bg-blue-900 rounded-lg my-shadow ring ring-blue-700" />
				<div className="flex flex-col gap-0 w-full">
					<p className="absolute top-0 right-7 text-[40px] font-bold text-blue-700 text-shadow-sm/50">
						2
					</p>
					<p className="absolute top-2 right-2 text-[40px] font-bold text-blue-700 text-shadow-sm/50">
						4
					</p>
					<p className="textM font-semibold text-center w-full text-shadow-lg/50 relative">
						Informes totales
					</p>
				</div>
			</div>

			<div className="p-2 card bg-accent rounded-lg gap-4 justify-center w-5/6 relative mx-auto py-5 ">
				<CheckCircle2 className="absolute -top-4 -left-4 size-12 text-green-300 p-3 bg-green-900 rounded-lg my-shadow ring ring-green-700" />
				<div className="flex flex-col gap-0 w-full">
					<p className="absolute top-0 right-7 text-[40px] font-bold text-green-700 text-shadow-sm/50">
						1
					</p>
					<p className="absolute top-2 right-2 text-[40px] font-bold text-green-700 text-shadow-sm/50">
						8
					</p>
					<p className="textM font-semibold text-center w-full text-shadow-lg/50 relative">
						Cumplen Norma
					</p>
				</div>
			</div>

			<div className="p-2 card bg-accent rounded-lg gap-4 justify-center w-5/6 relative mx-auto py-5 ">
				<Clock className="absolute -top-4 -left-4 size-12 text-amber-300 p-3 bg-amber-900 rounded-lg my-shadow ring ring-amber-700" />
				<div className="flex flex-col gap-0 w-full">
					<p className="absolute top-0 right-7 text-[40px] font-bold text-amber-700 text-shadow-lg/50">
						6
					</p>
					<p className="textM font-semibold text-center w-full text-shadow-sm/50 relative">
						Pendientes
					</p>
				</div>
			</div>
		</div>
	)
}
