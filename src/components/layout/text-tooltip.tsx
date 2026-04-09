import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { Info } from "lucide-react"

interface TextTooltipProps {
	text: string
	className?: string
}

export const TextTooltip = ({ text, className }: TextTooltipProps) => {
	return (
		<Tooltip>
			<TooltipTrigger className={`absolute top-4 right-4 ${className}`}>
				<Info className="size-4 text-amber-500/50" />
			</TooltipTrigger>
			<TooltipContent className="bg-gray-300">
				<p className="p-6 w-80 text-pretty tracking-wider italic">{text}</p>
			</TooltipContent>
		</Tooltip>
	)
}
