export default function User() {
	return (
		<div className="flex flex-col gap-4 m-6">
			<div className="flex items-center gap-2 p-4 bg-background rounded-lg shadow-xl">
				<div className="p-4 bg-accent rounded-full flex justify-center items-center">
					JM
				</div>
				<div className="flex flex-col items-end">
					<p className="text-lg font-semibold tracking-wider">
						Jonatan Missora
					</p>
					<p className="text-foreground/40">Plan profesional</p>
				</div>
			</div>
			<p className="p-4 text-foreground/75 cursor-pointer hover:text-foreground">
				Cerrar sesion
			</p>
		</div>
	)
}
