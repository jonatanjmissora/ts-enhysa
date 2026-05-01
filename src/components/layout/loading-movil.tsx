export default function LoadingMovil() {
	return (
		<div className="h-svh w-svw flex items-center justify-center opacity-75">
			<div className="flex items-center justify-center flex-col gap-4">
				<img src="/EnHySa_logo.webp" alt="logo EnHySa" className="size-50" />

				<p className="textXL text-4xl font-bold tracking-widest dark:text-shadow-lg/50">
					EnHySa App
				</p>
				<p className="textL font-bold tracking-widest dark:text-shadow-lg/50 animate-pulse">
					Cargando...
				</p>
			</div>
		</div>
	)
}
