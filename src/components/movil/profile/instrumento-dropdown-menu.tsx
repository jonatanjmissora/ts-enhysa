import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import DeleteInstrumento from "@/components/dashboard/perfil2/instrumento/delete-instrumento"
import { InstrumentoType } from "db/instrumentos/schema"

export default function InstrumentoDropdownMenu({
	instrumento,
}: {
	instrumento: InstrumentoType
}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	return (
		<DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="cursor-pointer">
					<Ellipsis className="size-7" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-28 2xl:w-40 p-4 text-xs 2xl:text-base"
				align="end"
			>
				<DropdownMenuGroup className="flex flex-col gap-4 p-4">
					EDITAR
					<DropdownMenuSeparator />
					<DeleteInstrumento
						instrumento={instrumento}
						setIsMenuOpen={setIsMenuOpen}
					/>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
