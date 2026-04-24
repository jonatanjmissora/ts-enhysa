import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-react"
import { EmpresaType } from "db/schema"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import DeleteEmpresa from "@/components/dashboard/perfil2/empresa/delete-empresa"
import { EditEmpresa } from "@/components/dashboard/perfil2/empresa/edit-empresa"

export default function EmpresaDropdownMenu({
	empresa,
}: {
	empresa: EmpresaType
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
					<EditEmpresa empresa={empresa} setIsMenuOpen={setIsMenuOpen} />
					<DropdownMenuSeparator />
					<DeleteEmpresa empresa={empresa} setIsMenuOpen={setIsMenuOpen} />
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
