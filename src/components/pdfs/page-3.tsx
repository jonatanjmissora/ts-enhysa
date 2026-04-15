import { Part3DataType } from "@/lib/types"
import { Page, Text, View, StyleSheet } from "@react-pdf/renderer"
import { EmpresaType } from "db/empresas/schema"

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: "column",
		backgroundColor: "#fff",
		fontFamily: "Roboto",
	},
	pagePadding: {
		margin: "100px 30px",
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
		fontSize: 9,
		padding: "5px 10px",
	},
	flexRowElementWithHight: {
		fontSize: 9,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
	},
})

export default function Page3({
	empresa,
	part3Data,
}: {
	empresa: EmpresaType
	part3Data: Part3DataType
}) {
	return (
		<Page size="A4" orientation="landscape" style={styles.page}>
			<View style={styles.pagePadding}>
				<Text style={styles.title}>
					PROTOCOLO PARA MEDICIÓN DE ILUMINACIÓN EN EL AMBIENTE LABORAL
				</Text>

				<View style={styles.flexrow}>
					<View style={[styles.flexrowelement, { flex: 1 }]}>
						<Text>(18) Razón Social: {empresa.razonSocial.toUpperCase()}</Text>
					</View>
					<View
						style={[
							styles.flexrowelement,
							{ borderLeft: "1px solid black", width: 180 },
						]}
					>
						<Text>(19) C.U.I.T.: {empresa.cuit}</Text>
					</View>
				</View>

				<View style={styles.flexrow}>
					<View
						style={[
							styles.flexrowelement,
							{ borderRight: "1px solid black", width: "35%" },
						]}
					>
						<Text>(20) Dirección: {empresa.direccion.toUpperCase()}</Text>
					</View>
					<View
						style={[
							styles.flexrowelement,
							{ borderRight: "1px solid black", width: "25%" },
						]}
					>
						<Text>(21) Localidad: {empresa.localidad.toUpperCase()}</Text>
					</View>
					<View
						style={[
							styles.flexrowelement,
							{ borderRight: "1px solid black", width: "15%" },
						]}
					>
						<Text>(22) CP: {empresa.codigoPostal}</Text>
					</View>
					<View style={[styles.flexrowelement, { width: "25%" }]}>
						<Text>(23) Provincia: {empresa.provincia.toUpperCase()}</Text>
					</View>
				</View>

				{/* **************************************************************************************************** */}

				<Text style={styles.subtitle}>
					Análisis de los Datos y Mejoras a Realizar
				</Text>
				<View style={styles.flexrow}>
					<View
						style={[
							styles.flexrowelement,
							{ borderRight: "1px solid black", flex: 1 },
						]}
					>
						<Text>(41) Conclusiones</Text>
					</View>
					<View style={[styles.flexrowelement, { flex: 1 }]}>
						<Text>
							(42) Recomendaciones parta adecuar el nivel de iluminación a la
							legislación vigente.
						</Text>
					</View>
				</View>

				<View style={[styles.flexrow, { borderBottom: "none" }]}>
					<View
						style={[
							styles.flexrowelement,
							{ borderRight: "1px solid black", flex: 1, height: 200 },
						]}
					>
						<Text>
							{part3Data.conclusion !== ""
								? part3Data.conclusion
								: "No hay conclusiones."}
						</Text>
					</View>
					<View style={[styles.flexrowelement, { height: 200, flex: 1 }]}>
						<Text>
							{part3Data.recomendacion !== ""
								? part3Data.recomendacion
								: "No hay recomendaciones."}
						</Text>
					</View>
				</View>
			</View>
		</Page>
	)
}
