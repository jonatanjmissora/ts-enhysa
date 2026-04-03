import { useSuspenseQuery } from "@tanstack/react-query"
import { tecnicoQueryOptions } from "queries/tecnico/tecnico-query"
import CreateTecnicoForm from "./create-tecnico-form"
import EditTecnicoForm from "./edit-tecnico-form"
import { useLoaderData } from "@tanstack/react-router"
import { getUserInfo } from "@/lib/utils"
import SkeltonTecnicoForm from "./skelton-tecnico-form"
import { Suspense } from "react"

export default function Tecnico() {
	const { session } = useLoaderData({ from: "__root__" })
	const { avatar, fullName } = getUserInfo(session)

	return (
		<div className="flex flex-col gap-2 relative w-1/2">
			<div className="flex justify-end items-center p-2 w-full">
				<div className="absolute sm:-top-10 2xl:-top-14 -left-10">
					{avatar ? (
						<img
							src={avatar}
							alt="User avatar"
							className="rounded-lg sm:size-28 2xl:size-30 shadow"
						/>
					) : (
						<div className="bg-accent p-2 rounded-full">
							{fullName?.charAt(0).toUpperCase()}
						</div>
					)}
				</div>
				<p className="px-10 sm:text-lg 2xl:text-xl tracking-widest font-semibold">
					{fullName.toUpperCase()}
				</p>
			</div>

			<Suspense fallback={<SkeltonTecnicoForm />}>
				<TecnicoForm />
			</Suspense>
		</div>
	)
}

const TecnicoForm = () => {
	const { data: tecnico } = useSuspenseQuery(tecnicoQueryOptions)
	return tecnico ? <EditTecnicoForm tecnico={tecnico} /> : <CreateTecnicoForm />
}
