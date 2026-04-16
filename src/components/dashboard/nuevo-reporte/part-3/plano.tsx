import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import { CroquisType, PuntoType } from "@/lib/types"
import { getHalfMedia } from "@/lib/utils"
import { RulerDimensionLine } from "lucide-react"

export default function NewReportPart3Plano({
	puntos,
	nombre,
	croquis,
}: {
	puntos: PuntoType[]
	nombre: string
	croquis: CroquisType
}) {
	return (
		<div className="flex-1 card bg-accent flex flex-col gap-6 justify-center">
			<div className="flex items-center w-full border-b border-foreground/20">
				<div className="flex items-center gap-3 flex-1">
					<div className="bg-purple-700/50 text-foreground rounded-sm p-1 px-3 flex items-center justify-center font-bold">
						<RulerDimensionLine className="size-6" />
					</div>
					<span className="w-full sm:text-lg 2xl:text-2xl font-semibold tracking-wider py-2">
						Plano
					</span>
				</div>
				<p className="flex-1 text-right text-sm text-foreground/70 py-1">
					{nombre || "Depósito"}
				</p>
			</div>
			<div className="flex flex-col gap-4 sm:w-[440px] 2xl:w-[550px] relative scale-100">
				<div className="min-h-[400px] h-max w-full overflow-auto bg-background shadow rounded-lg ring ring-foreground/5 py-10">
					<CroquisGrid croquis={croquis} puntos={puntos} />
				</div>
			</div>
		</div>
	)
}

function CroquisGrid({
	croquis,
	puntos,
}: {
	croquis: CroquisType
	puntos: PuntoType[]
}) {
	const celdasSize = 20
	const totalCeldas = croquis.ancho * croquis.largo
	const halfMedia = getHalfMedia(puntos)
	return (
		<div className="w-max h-max p-20 m-auto ">
			<div
				className="grid relative"
				style={{
					gridTemplateColumns: `repeat(${croquis.ancho}, minmax(0, 1fr))`,
					gridTemplateRows: `repeat(${croquis.largo}, minmax(0, 1fr))`,
				}}
			>
				<Cotas cantidadColumnas={croquis.ancho} cantidadFilas={croquis.largo} />
				{Array.from({ length: totalCeldas }).map((_, i) => {
					return (
						<div
							key={i}
							className={`border border-gray-400 size-${celdasSize} ${croquis.celdasSeleccionadas.includes(i) ? "bg-blue-500" : ""}`}
						/>
					)
				})}
				{puntos?.map((punto, index) => (
					<Punto
						key={punto.valorX - punto.valorY}
						punto={punto}
						index={index}
						halfMedia={halfMedia}
					/>
				))}
			</div>
		</div>
	)
}

const Punto = ({
	punto,
	index,
	halfMedia,
}: {
	punto: PuntoType
	index: number
	halfMedia: number
}) => {
	return (
		<div
			key={punto?.nombre || index}
			className="absolute"
			style={{
				top: `${punto?.valorY ? punto.valorY - 18 : 0}px`,
				left: `${punto?.valorX ? punto.valorX - 18 : 0}px`,
			}}
		>
			<Tooltip>
				<TooltipTrigger asChild>
					<div
						className={`cardBackground ${
							punto?.valor >= halfMedia ? "bg-green-700/90" : "bg-red-900/90"
						} ring ring-black/20 size-10 rounded-lg justify-center`}
					>
						<span className="italic">{punto.valor}</span>
					</div>
				</TooltipTrigger>
				<TooltipContent>
					<div className="flex flex-col gap-1 text-base">
						<p>punto-{index + 1}</p>
					</div>
				</TooltipContent>
			</Tooltip>
		</div>
	)
}

function Cotas({
	cantidadColumnas,
	cantidadFilas,
}: {
	cantidadColumnas: number
	cantidadFilas: number
}) {
	return (
		<>
			<span className="absolute -top-14 left-0 right-0 border-b-[1.5px] border-foreground/30 flex justify-center py-1 text-semibold tracking-widest italic text-foreground/50">
				Ancho {cantidadColumnas}m
			</span>
			<div className="absolute top-0 bottom-0 -left-18 border-r-[1.5px] border-foreground/30 flex flex-col justify-center items-center px-1 text-semibold tracking-widest italic text-foreground/50">
				Largo <span>{cantidadFilas}m</span>
			</div>
		</>
	)
}
