import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react";

export const Route = createFileRoute("/test/")({
	component: RouteComponent,
})

function RouteComponent() {

	const [alto, setAlto] = useState(0);
	const [ancho, setAncho] = useState(0);

	return (
		<div className="h-screen w-screen bg-blue-800\50 p-20 flex flex-col items-center justify-center">
			<div className="flex gap-10">
				<input type="text" className="bg-accent" onChange={(e) => setAlto(Number(e.target.value))}/>
				<input type="text" className="bg-accent" onChange={(e) => setAncho(Number(e.target.value))}/>
			</div>

			</div>
			
	)
}
