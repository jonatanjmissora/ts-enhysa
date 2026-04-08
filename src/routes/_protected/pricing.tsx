import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRight, Check, ChevronLeft, Shield } from "lucide-react"
import { useState } from "react"

const PLANS = [
	{
		title: "Gratis",
		price: 0,
		subtitle: "Lorem ipsum dolor sit amet.",
		benefits: [
			"beneficio adquirido 1",
			"beneficio adquirido 2",
			"beneficio adquirido 3",
			"beneficio adquirido 4",
			"beneficio adquirido 5",
		],
	},
	{
		title: "Profesional",
		price: 25,
		subtitle: "Lorem ipsum dolor sit amet.",
		benefits: [
			"beneficio adquirido 1",
			"beneficio adquirido 2",
			"beneficio adquirido 3",
			"beneficio adquirido 4",
			"beneficio adquirido 5",
		],
	},
	{
		title: "Empresarial",
		price: 55,
		subtitle: "Lorem ipsum dolor sit amet.",
		benefits: [
			"beneficio adquirido 1",
			"beneficio adquirido 2",
			"beneficio adquirido 3",
			"beneficio adquirido 4",
			"beneficio adquirido 5",
		],
	},
]

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

			<div className="flex-1 flex justify-center items-center flex-col gap-6 	sm:py-10 2xl:py-20">
				<div className="flex items-center gap-2  sm:text-5xl 2xl:text-6xl font-bold tracking-wildest relative">
					<span>Planes</span>
					<Shield className="absolute top-1/2 left-full -translate-1/2 sm:size-30 2xl:size-50 -rotate-15 text-amber-500/30 -z-10" />
				</div>
				<div>
					<p className="italic tracking-wider font-semibold text-pretty sm:text-base 2xl:text-xl w-1/2 mx-auto text-center text-foreground/50">
						Tu actual plan es el "Plan Profesional". ¿Deseas cambiar a plan
						Empresarial? Checkea los beneficios de subir de plan.
					</p>
				</div>
				<div className="flex gap-6 sm:mt-10 2xl:mt-20">
					{PLANS.map((plan, index) => (
						<Plan
							key={plan.title}
							{...plan}
							index={index}
							actualPlan={actualPlan}
							setActualPlan={setActualPlan}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

interface PlanProps {
	title: string
	price: number
	subtitle: string
	benefits: string[]
	index: number
	actualPlan: 0 | 1 | 2
	setActualPlan: (plan: 0 | 1 | 2) => void
}

const Plan = ({
	title,
	price,
	subtitle,
	benefits,
	index,
	actualPlan,
	setActualPlan,
}: PlanProps) => {
	return (
		<div
			className={`sm:w-80 2xl:w-100 cardAccent sm:p-10 2xl:p-20 sm:py-6 2xl:py-10 flex flex-col items-start gap-4 ${actualPlan === index ? "border-2 border-green-600 scale-120" : ""}`}
		>
			<span className="sm:text-xl 2xl:text-3xl font-semibold tracking-widest">
				{title}
			</span>
			<span className="sm:text-3xl 2xl:text-5xl font-semibold tracking-widest text-foreground/50">
				${price}
			</span>
			<span className="sm:text-base 2xl:text-lg font-medium tracking-wider text-foreground/70">
				{subtitle}
			</span>
			<div className="flex flex-col gap-2">
				{benefits.map(benefit => (
					<div key={benefit} className="flex gap-4">
						<Check className="sm:size-5 2xl:size-6" />
						<span className="sm:text-sm 2xl:text-base">{benefit}</span>
					</div>
				))}
			</div>

			<button
				className={`${actualPlan !== index ? "themeBtnAccent" : "bg-background"} rounded-lg shadow-xl sm:text-sm 2xl:text-lg text-foreground tracking-widest px-6 py-2 cursor-pointer m-auto sm:mt-4 2xl:mt-10 w-full flex justify-center items-center gap-4`}
				onClick={() => setActualPlan(index as 0 | 1 | 2)}
			>
				{actualPlan === index ? (
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
