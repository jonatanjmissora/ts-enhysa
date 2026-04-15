import { View, Text } from "@react-pdf/renderer"

export default function MembreteSuperior({
	membreteDerecho,
}: {
	membreteDerecho: string[]
}) {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				borderBottom: "1px solid black",
				padding: "20px 0px",
			}}
		>
			<View
				style={{
					flex: 1,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text style={{ fontSize: 14, fontWeight: "bold", textAlign: "left" }}>
					LOGO
				</Text>
			</View>
			<View style={{ flex: 1 }}>
				{membreteDerecho.map((line, index) => (
					<Text key={index} style={{ fontSize: 11, textAlign: "right" }}>
						{line}
					</Text>
				))}
			</View>
		</View>
	)
}
