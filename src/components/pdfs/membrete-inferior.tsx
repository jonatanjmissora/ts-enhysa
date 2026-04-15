import { View, Text } from "@react-pdf/renderer"
import { TecnicoType } from "db/tecnicos/schema"

export default function MembreteInferior({
	tecnico,
}: {
	tecnico: TecnicoType
}) {
	const firma = tecnico.firmaImg

	return (
		<View style={{ display: "flex", flexDirection: "column" }}>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					borderBottom: "1px solid black",
					padding: "2px 0px",
				}}
			>
				<View
					style={{
						flex: 1,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						paddingTop: 20,
					}}
				>
					<Text style={{ fontSize: 14, fontWeight: "bold", textAlign: "left" }}>
						LOGO
					</Text>
				</View>
				<View style={{ flex: 1 }}>
					<Text style={{ fontSize: 10, textAlign: "right" }}>
						{tecnico.nombre.toUpperCase()}
					</Text>
					<Text style={{ fontSize: 10, textAlign: "right" }}>
						MAT {tecnico.matricula}
					</Text>
				</View>
			</View>
			<View
				style={{
					fontSize: 10,
					width: "100%",
					display: "flex",
					flexDirection: "row",
					paddingBottom: 20,
				}}
			>
				<Text style={{ flex: 1, textAlign: "left" }}>Seguridad e Higiene</Text>
				<Text style={{ flex: 1, textAlign: "right" }}>Pagina 1 de 10</Text>
			</View>
		</View>
	)
}
