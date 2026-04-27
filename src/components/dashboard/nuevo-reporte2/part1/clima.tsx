import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { updateClima } from "@/lib/utils"
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Part1DataType } from "@/routes/_protected/new-report2"
import { Dispatch, SetStateAction } from "react"
import { Cloud, CloudRain, CloudSun, Sun } from "lucide-react"


export default function Clima({part1Data, setPart1Data}: {part1Data: Part1DataType, setPart1Data: Dispatch<SetStateAction<Part1DataType>>}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full sm:my-10">
            <div className="flex flex-col gap-1 w-5/6 mx-auto">
                <Label className="tracking-wider" htmlFor="matricula">
                    Clima
                </Label>
                <Select defaultValue={part1Data.clima[0]} 
                    onValueChange={(e) => 
                        setPart1Data(prev => {
                            const newClima = updateClima(part1Data.clima, 0, e)
                            return{
                                ...prev,
                                clima: newClima
                            }
                        })
                    }
                    >
                    <SelectTrigger className="w-full">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="w-full p-2 px-6">
                        <SelectGroup>
                            <SelectLabel>Estado del clima</SelectLabel>
                            <SelectItem value="0">
                                <Sun size={12} />
                                Soleado
                            </SelectItem>
                            <SelectItem value="1">
                                <Cloud size={12} />
                                Nublado
                            </SelectItem>
                            <SelectItem value="2">
                                <CloudSun size={12} />
                                Templado
                            </SelectItem>
                            <SelectItem value="3">
                                <CloudRain size={12} />
                                Lluvioso
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-1 w-5/6 mx-auto">
                <Label className="tracking-wider" htmlFor="matricula">
                    Humedad
                </Label>
                <Select defaultValue={part1Data.clima[1]}
                onValueChange={(e) => 
                        setPart1Data(prev => {
                            const newClima = updateClima(part1Data.clima, 1, e)
                            return{
                                ...prev,
                                clima: newClima
                            }
                        })
                    }
                >
                    <SelectTrigger className="w-full">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="w-full p-2">
                        <SelectGroup>
                            <SelectLabel>Humedad</SelectLabel>
                            <SelectItem value="0">60%</SelectItem>
                            <SelectItem value="1">70%</SelectItem>
                            <SelectItem value="2">80%</SelectItem>
                            <SelectItem value="3">90%</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-1 w-5/6 mx-auto">
                <Label className="tracking-wider" htmlFor="matricula">
                    Temperatura
                </Label>
                <Select defaultValue={part1Data.clima[2]}
                onValueChange={(e) => 
                        setPart1Data(prev => {
                            const newClima = updateClima(part1Data.clima, 2, e)
                            return{
                                ...prev,
                                clima: newClima
                            }
                        })
                    }
                >
                    <SelectTrigger className="w-full">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="w-full p-2">
                        <SelectGroup>
                            <SelectLabel>Tempreatura</SelectLabel>
                            <SelectItem value="0">10°C</SelectItem>
                            <SelectItem value="1">20°C</SelectItem>
                            <SelectItem value="2">30°C</SelectItem>
                            <SelectItem value="3">40°C</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}