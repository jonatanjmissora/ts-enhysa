import { MyDocument } from "@/components/pdfs/my-document"
import { PDFViewer } from "@react-pdf/renderer"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_protected/new-report/pdf")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<PDFViewer width="100%" height="100%" className="min-h-screen w-full">
			<MyDocument nombre="PEPE" />
		</PDFViewer>
	)
}
