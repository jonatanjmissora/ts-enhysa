import { Button } from "@/components/ui/button"
import { TecnicoType } from "db/tecnicos/schema"
import { toast } from "sonner"
import { useSuspenseQuery } from "@tanstack/react-query"
import { Ellipsis } from "lucide-react"
import { useState } from "react"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Pencil, Trash2 } from "lucide-react"
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { instrumentosQueryOptions } from "queries/instrumentos/instrumentos-query"
import { InstrumentoType } from "db/instrumentos/schema"
import { CreateInstrumentoForm } from "./create-instrumento-form"

export default function InstrumentosList({
	tecnico,
}: {
	tecnico: TecnicoType | null
}) {
	const { data: instrumentos } = useSuspenseQuery(instrumentosQueryOptions)

	if (!instrumentos || instrumentos.length === 0) {
		return <NoInstrumental tecnico={tecnico} />
	}

	return (
		<article className="flex flex-col gap-2 w-full">
			{instrumentos.map(instrumento => (
				<Instrumento key={instrumento.id} instrumento={instrumento} />
			))}
		</article>
	)
}

const Instrumento = ({ instrumento }: { instrumento: InstrumentoType }) => {
	return (
		<div className="w-full grid grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-2 p-3 text-center tracking-widest text-foreground/75 cardAccent">
			<span>{instrumento.nombre}</span>
			<span>{instrumento.marca}</span>
			<span>{instrumento.modelo}</span>
			<span>{instrumento.serie}</span>

			<div className="w-full flex justify-end px-4 cursor-pointer">
				<InstrumentoDropdownMenu instrumento={instrumento} />
			</div>
		</div>
	)
}

const NoInstrumental = ({ tecnico }: { tecnico: TecnicoType | null }) => {
	return (
		<article className="flex flex-col gap-4 text-foreground/50 sm:text-lg 2xl:text-xl tracking-wide py-20">
			<p>No tiene ninguna empresa asociada a su cuenta.</p>
			<div className="flex items-center justify-center gap-2">
				<span>Por favor ingrese una nueva</span>
				{tecnico ? (
					<CreateInstrumentoForm>
						<Button
							className="text-foreground/50 sm:text-lg 2xl:text-xl tracking-wide cursor-pointer"
							variant="outline"
						>
							instrumento
						</Button>
					</CreateInstrumentoForm>
				) : (
					<Button
						onClick={() =>
							toast.info("Completa los datos del técnico primero.")
						}
						className="text-foreground/50 sm:text-lg 2xl:text-xl tracking-wide cursor-pointer"
						variant="outline"
					>
						instrumento
					</Button>
				)}
			</div>
		</article>
	)
}

const InstrumentoDropdownMenu = ({
	instrumento,
}: {
	instrumento: InstrumentoType
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	return (
		<DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="cursor-pointer">
					<Ellipsis size={14} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-28 2xl:w-40 p-4 text-xs 2xl:text-base"
				align="end"
			>
				<DropdownMenuGroup>
					<EditInstrumentoAlertDialog
						instrumento={instrumento}
						setIsMenuOpen={setIsMenuOpen}
					/>
					<DropdownMenuSeparator />
					<DeleteInstrumentoAlertDialog
						instrumento={instrumento}
						setIsMenuOpen={setIsMenuOpen}
					/>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export function DeleteInstrumentoAlertDialog({
	instrumento,
	setIsMenuOpen,
}: {
	instrumento: InstrumentoType
	setIsMenuOpen: (open: boolean) => void
}) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="ghost" className="w-full">
					<Trash2 size={14} className="text-destructive-foreground" />
					Borrar
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="py-20 px-10 bg-accent/50 backdrop-blur-xl">
				<AlertDialogTitle></AlertDialogTitle>
				<AlertDialogDescription></AlertDialogDescription>
				<DeleteInstrumentoForm
					instrumento={instrumento}
					setIsMenuOpen={setIsMenuOpen}
				/>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export function EditInstrumentoAlertDialog({
	instrumento,
	setIsMenuOpen,
}: {
	instrumento: InstrumentoType
	setIsMenuOpen: (open: boolean) => void
}) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="ghost" className="w-full gap-4">
					<Pencil size={14} className="text-amber-500" />
					Edit
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="p-20 bg-accent/40 backdrop-blur-xl w-1/2 min-h-[50dvh]">
				<AlertDialogTitle></AlertDialogTitle>
				<AlertDialogDescription></AlertDialogDescription>
				<EditInstrumentoForm
					instrumento={instrumento}
					setIsMenuOpen={setIsMenuOpen}
				/>
			</AlertDialogContent>
		</AlertDialog>
	)
}
