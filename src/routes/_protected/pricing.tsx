import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRight, Check, ChevronLeft, Shield } from "lucide-react"
import { useState } from "react"

export const Route = createFileRoute("/_protected/pricing")({
	component: RouteComponent,
})

function RouteComponent() {
	const [actualPlan, setActualPlan] = useState<0 | 1 | 2>(1)

	return (
		<div className="min-h-screen flex flex-col">
			<header className="sm:text-base 2xl:text-xl font-semibold tracking-wider sm:h-20 2xl:h-24 px-20 bg-accent border border-background flex justify-between items-center">
				<span>Protocolo de Iluminación Res 84/12 SRT</span>
				<div className="flex gap-10 items-center justify-center">
					<Link
						to="/"
						className="flex items-center justify-center gap-2 themeBtnAccent rounded-lg shadow-xl sm:text-sm 2xl:text-lg text-foreground tracking-wider px-6 py-2 cursor-pointer m-0"
					>
						<ChevronLeft className="size-5" />
						Volver
					</Link>
				</div>
			</header>

			<div className="flex-1 flex justify-center items-center flex-col gap-6">
				<div className="flex items-center gap-2  text-6xl font-bold tracking-wildest">
					<span>Planes</span>
					<Shield className="size-14 text-amber-500/50" />
				</div>
				<div>
					<p className="italic tracking-wider font-semibold text-pretty text-xl w-1/2 mx-auto text-center text-foreground/50">
						Tu actual plan es el "Plan Profesional". ¿Deseas cambiar a plan
						Empresarial? Checkea los beneficios de subir de plan.
					</p>
				</div>
				<div className="flex gap-6 mt-20">
					<Plan1 actualPlan={actualPlan} setActualPlan={setActualPlan} />
					<Plan2 actualPlan={actualPlan} setActualPlan={setActualPlan} />
					<Plan3 actualPlan={actualPlan} setActualPlan={setActualPlan} />
				</div>
			</div>
		</div>
	)
}

const Plan1 = ({
	actualPlan,
	setActualPlan,
}: {
	actualPlan: 0 | 1 | 2
	setActualPlan: (plan: 0 | 1 | 2) => void
}) => {
	return (
		<div
			className={`w-100 cardAccent p-20 py-10 flex flex-col items-start gap-4 ${actualPlan === 0 ? "border-2 border-green-600 scale-120" : ""}`}
		>
			<span className="text-3xl font-semibold tracking-widest">Gratis</span>
			<span className="text-5xl font-semibold tracking-widest text-foreground/50">
				$0
			</span>
			<span className="text-lg font-medium tracking-wider text-foreground/70">
				Lorem ipsum dolor sit amet.
			</span>
			<div className="flex flex-col gap-2">
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 1</span>
				</div>
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 2</span>
				</div>
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 3</span>
				</div>
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 4</span>
				</div>
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 5</span>
				</div>
			</div>

			<button
				className={`${actualPlan !== 0 ? "themeBtnAccent" : "bg-background"} rounded-lg shadow-xl sm:text-sm 2xl:text-lg text-foreground tracking-widest px-6 py-2 cursor-pointer m-auto mt-10 w-full flex justify-center items-center gap-4`}
				onClick={() => setActualPlan(0)}
			>
				{actualPlan === 0 ? (
					<span>Actual Plan</span>
				) : (
					<>
						<span>Adquirir Plan</span>
						<ArrowRight className="size-5" />
					</>
				)}
			</button>
		</div>
	)
}

const Plan2 = ({
	actualPlan,
	setActualPlan,
}: {
	actualPlan: 0 | 1 | 2
	setActualPlan: (plan: 0 | 1 | 2) => void
}) => {
	return (
		<div
			className={`w-100 cardAccent p-20 py-10 flex flex-col items-start gap-4 ${actualPlan === 1 ? "border-2 border-green-600 scale-120" : ""}`}
		>
			<span className="text-3xl font-semibold tracking-widest">
				Profesional
			</span>
			<span className="text-5xl font-semibold tracking-widest text-foreground/50">
				$25
			</span>
			<span className="text-lg font-medium tracking-wider text-foreground/70">
				Lorem ipsum dolor sit amet.
			</span>
			<div className="flex flex-col gap-2">
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 1</span>
				</div>
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 2</span>
				</div>
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 3</span>
				</div>
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 4</span>
				</div>
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 5</span>
				</div>
			</div>

			<button
				className={`${actualPlan !== 1 ? "themeBtnAccent" : "bg-background"} rounded-lg shadow-xl sm:text-sm 2xl:text-lg text-foreground tracking-widest px-6 py-2 cursor-pointer m-auto mt-10 w-full flex justify-center items-center gap-4`}
				onClick={() => setActualPlan(1)}
			>
				{actualPlan === 1 ? (
					<span>Actual Plan</span>
				) : (
					<>
						<span>Adquirir Plan</span>
						<ArrowRight className="size-5" />
					</>
				)}
			</button>
		</div>
	)
}

const Plan3 = ({
	actualPlan,
	setActualPlan,
}: {
	actualPlan: 0 | 1 | 2
	setActualPlan: (plan: 0 | 1 | 2) => void
}) => {
	return (
		<div
			className={`w-100 cardAccent p-20 py-10 flex flex-col items-start gap-4 ${actualPlan === 2 ? "border-2 border-green-600 scale-120" : ""}`}
		>
			<span className="text-3xl font-semibold tracking-widest">
				Empresarial
			</span>
			<span className="text-5xl font-semibold tracking-widest text-foreground/50">
				$55
			</span>
			<span className="text-lg font-medium tracking-wider text-foreground/70">
				Lorem ipsum dolor sit amet.
			</span>
			<div className="flex flex-col gap-2">
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 1</span>
				</div>
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 2</span>
				</div>
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 3</span>
				</div>
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 4</span>
				</div>
				<div className="flex gap-4">
					<Check className="size-6" />
					<span>beneficio adquirido 5</span>
				</div>
			</div>

			<button
				className={`${actualPlan !== 2 ? "themeBtnAccent" : "bg-background"} rounded-lg shadow-xl sm:text-sm 2xl:text-lg text-foreground tracking-widest px-6 py-2 cursor-pointer m-auto mt-10 w-full flex justify-center items-center gap-4`}
				onClick={() => setActualPlan(2)}
			>
				{actualPlan === 2 ? (
					<span>Actual Plan</span>
				) : (
					<>
						<span>Adquirir Plan</span>
						<ArrowRight className="size-5" />
					</>
				)}
			</button>
		</div>
	)
}
