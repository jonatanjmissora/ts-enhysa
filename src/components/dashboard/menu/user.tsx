export default function User() {
	return (
		<div className="flex flex-col sm:gap-2 2xl:gap-4 m-6">
			<div className="flex items-center gap-4 p-4 bg-background rounded-lg shadow-xl">
				<div className="sm:p-3 2xl:p-4 bg-accent rounded-full flex justify-center items-center">
					JM
				</div>
				<div className="flex flex-col items-end">
					<p className="sm:text-base 2xl:text-lg font-semibold tracking-wider">
						Jonatan Missora
					</p>
					<p className="sm:text-sm 2xl:text-base text-foreground/40">
						Plan profesional
					</p>
				</div>
			</div>
			<p className="p-4 text-foreground/75 cursor-pointer hover:text-foreground">
				Cerrar sesion
			</p>
		</div>
	)
}
