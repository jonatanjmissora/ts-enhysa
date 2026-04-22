import { Suspense } from "react"
import SkeltonTecnicoForm from "./skelton-tecnico-form"
import { useSuspenseQuery } from "@tanstack/react-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import EditTecnicoForm from "./edit-tecnico-form"
import CreateTecnicoForm from "./create-tecnico-form"

export default function ProfileTecnico() {
	return (
		<Suspense fallback={<SkeltonTecnicoForm />}>
			<TecnicoForm />
		</Suspense>
	)
}
const TecnicoForm = () => {
	const { data: tecnico } = useSuspenseQuery(tecnicoQueryOptions)
	return tecnico ? <EditTecnicoForm tecnico={tecnico} /> : <CreateTecnicoForm />
}
