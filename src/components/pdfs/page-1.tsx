import { Page, Text, View, StyleSheet } from "@react-pdf/renderer"

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: "column",
		backgroundColor: "#fff",
		fontFamily: "Roboto",
	},
	pagePadding: {
		margin: "100px 60px",
		border: "1px solid black",
	},
	title: {
		fontSize: 10,
		fontWeight: 700,
		textAlign: "center",
		padding: "7px 0px",
		color: "white",
		backgroundColor: "black",
		letterSpacing: "1px",
	},
	subtitle: {
		fontSize: 10,
		fontWeight: 500,
		textAlign: "center",
		padding: "5px 0px",
		color: "black",
		backgroundColor: "gray",
		letterSpacing: "1px",
		borderBottom: "1px solid black",
	},
	row: {
		fontSize: 9,
		borderBottom: "1px solid black",
		padding: "5px 10px",
	},
	flexrow: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		borderBottom: "1px solid black",
	},
	flexrowelement: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: 9,
		height: 100,
	},
})

export default function Page1() {
	return (
		<Page size="A4" style={styles.page}>
			<View style={styles.pagePadding}>
				<Text style={styles.title}>
					PROTOCOLO PARA MEDICIÓN DE ILUMINACIÓN EN EL AMBIENTE LABORAL
				</Text>
				<Text style={styles.row}>(1) Razón Social: </Text>
				<Text style={styles.row}>(2) Dirección: </Text>
				<Text style={styles.row}>(3) Localidad: </Text>
				<Text style={styles.row}>(4) Provincia: </Text>
				<Text style={styles.row}>(5) CP: </Text>
				<Text style={styles.row}>(6) C.U.I.T: </Text>
				<Text style={styles.row}>
					(7) Horarios / Turnos habituales de trabajo:{" "}
				</Text>
				<Text style={styles.subtitle}>Datos de la Medición</Text>
				<Text style={styles.row}>
					(8) Instrumento de medición utilizado, marca:{" "}
				</Text>
				<Text style={styles.row}>
					(9) Fecha de calibración del instrumento utilizado en la medición:{" "}
				</Text>
				<Text style={styles.row}>
					(10) Metodología utilizada en la medición: según Resolución SRT Nº
					84/12, método de la grilla para iluminación general
				</Text>
				<View style={styles.flexrow}>
					<View style={styles.flexrowelement}>
						<Text>(11) Fecha de la medición:</Text>
					</View>
					<View
						style={[
							styles.flexrowelement,
							{ borderRight: "1px solid black", borderLeft: "1px solid black" },
						]}
					>
						<Text>(12) Hora de inicio: </Text>
					</View>
					<View style={styles.flexrowelement}>
						<Text>(13) Hora de finalización: </Text>
					</View>
				</View>

				<Text style={styles.row}>(14) Condiciones atmosféricas: </Text>

				<Text style={styles.subtitle}>
					Documentación que se Adjuntará a la Medición
				</Text>
				<Text style={styles.row}>(15) Certificado de calibración: </Text>
				<Text style={styles.row}>
					(16) Plano o croquis del establecimiento:{" "}
				</Text>
				<Text style={[styles.row, { height: 100, borderBottom: "none" }]}>
					(17) Observaciones:{" "}
				</Text>
			</View>
		</Page>
	)
}
