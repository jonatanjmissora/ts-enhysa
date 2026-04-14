import { Document, Font } from "@react-pdf/renderer"
import Page1 from "./page-1"
import Page2 from "./page-2"
import Page3 from "./page-3"

Font.register({
	family: "Roboto",
	src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
})

export const MyDocument = () => (
	<Document>
		<Page1 />
		<Page2 />
		<Page3 />
	</Document>
)
