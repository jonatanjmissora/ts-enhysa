import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/test/")({
	component: RouteComponent,
})

import { PDFViewer } from "@react-pdf/renderer"
import { MyDocument } from "@/components/pdfs/my-document"

function RouteComponent() {
	return (
		<PDFViewer className="min-h-screen">
			<MyDocument />
		</PDFViewer>
	)
}
