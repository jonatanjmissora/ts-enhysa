import { Page, Text, View, StyleSheet } from "@react-pdf/renderer"

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
		fontSize: 10,
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
		fontSize: 10,
		padding: "5px 10px",
	},
	flexRowElementWithHight: {
		fontSize: 10,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
	},
})

export default function Page2() {
	return (
		<Page size="A4" orientation="landscape" style={styles.page}>
			<View style={styles.pagePadding}>
				<Text style={styles.title}>
					PROTOCOLO PARA MEDICIÓN DE ILUMINACIÓN EN EL AMBIENTE LABORAL
				</Text>

				<View style={styles.flexrow}>
					<View style={[styles.flexrowelement, { flex: 1 }]}>
						<Text>(18) Razón Social: </Text>
					</View>
					<View
						style={[
							styles.flexrowelement,
							{ borderLeft: "1px solid black", width: 180 },
						]}
					>
						<Text>(19) C.U.I.T.: </Text>
					</View>
				</View>

				<View style={styles.flexrow}>
					<View
						style={[
							styles.flexrowelement,
							{ borderRight: "1px solid black", width: "35%" },
						]}
					>
						<Text>(20) Dirección: </Text>
					</View>
					<View
						style={[
							styles.flexrowelement,
							{ borderRight: "1px solid black", width: "25%" },
						]}
					>
						<Text>(21) Localidad: </Text>
					</View>
					<View
						style={[
							styles.flexrowelement,
							{ borderRight: "1px solid black", width: "15%" },
						]}
					>
						<Text>(22) CP: </Text>
					</View>
					<View style={[styles.flexrowelement, { width: "25%" }]}>
						<Text>(23) Provincia: </Text>
					</View>
				</View>

				{/* **************************************************************************************************** */}

				<Text style={styles.subtitle}>Datos de la Medición</Text>
				<View style={styles.flexrow}>
					<View
						style={[
							styles.flexRowElementWithHight,
							{ borderRight: "1px solid black", width: "6%" },
						]}
					>
						<Text>(24)</Text>
						<Text>Punto de</Text>
						<Text>muestreo</Text>
					</View>
					<View
						style={[
							styles.flexRowElementWithHight,
							{ borderRight: "1px solid black", width: "4%" },
						]}
					>
						<Text>(25) </Text>
						<Text>Hora</Text>
					</View>
					<View
						style={[
							styles.flexRowElementWithHight,
							{ borderRight: "1px solid black", width: "15%" },
						]}
					>
						<Text>(26) </Text>
						<Text>Sector</Text>
					</View>
					<View
						style={[
							styles.flexRowElementWithHight,
							{ borderRight: "1px solid black", width: "15%" },
						]}
					>
						<Text>(27)</Text>
						<Text>Sección / Puesto / Tipo</Text>
					</View>
					<View
						style={[
							styles.flexRowElementWithHight,
							{ borderRight: "1px solid black", flex: 1 },
						]}
					>
						<Text>(28)</Text>
						<Text>Tipo de</Text>
						<Text>iluminación:</Text>
						<Text>Natural /</Text>
						<Text>Artificial /</Text>
						<Text>Mixta</Text>
					</View>
					<View
						style={[
							styles.flexRowElementWithHight,
							{ borderRight: "1px solid black", flex: 1 },
						]}
					>
						<Text>(29)</Text>
						<Text>Tipo de fuente</Text>
						<Text>lumínica:</Text>
						<Text>Incandescente /</Text>
						<Text>Descarga /</Text>
						<Text>Mixta</Text>
					</View>
					<View
						style={[
							styles.flexRowElementWithHight,
							{ borderRight: "1px solid black", flex: 1 },
						]}
					>
						<Text>(30)</Text>
						<Text>Iluminación:</Text>
						<Text>General /</Text>
						<Text>Localizada /</Text>
						<Text>Mixta</Text>
					</View>
					<View
						style={[
							styles.flexRowElementWithHight,
							{ borderRight: "1px solid black", width: "12%" },
						]}
					>
						<Text>(31) Valor de</Text>
						<Text>la uniformidad</Text>
						<Text>de iluminancia</Text>
						<Text>E mínima {"\u2265"}</Text>
						<Text>(E media)/2</Text>
					</View>
					<View
						style={[
							styles.flexRowElementWithHight,
							{ borderRight: "1px solid black", width: "6%" },
						]}
					>
						<Text>(32)</Text>
						<Text>Valor</Text>
						<Text>Medido</Text>
						<Text>(Lux)</Text>
					</View>
					<View
						style={[
							styles.flexRowElementWithHight,
							{ borderRight: "1px solid black", flex: 1 },
						]}
					>
						<Text>(33) Valor</Text>
						<Text>requerido</Text>
						<Text>legalmente</Text>
						<Text>según</Text>
						<Text>Anexo IV</Text>
						<Text>Dec. 351/79</Text>
					</View>
				</View>

				{/* **************************************************************************************************** */}

				{Array.from({ length: 10 }).map((_, i) => (
					<View key={i} style={styles.flexrow}>
						<View
							style={[
								styles.flexRowElementWithHight,
								{ borderRight: "1px solid black", width: "6%" },
							]}
						>
							<Text>24</Text>
							{/* Punto de muestreo */}
						</View>
						<View
							style={[
								styles.flexRowElementWithHight,
								{ borderRight: "1px solid black", width: "4%" },
							]}
						>
							<Text>25</Text>
							{/* Hora */}
						</View>
						<View
							style={[
								styles.flexRowElementWithHight,
								{ borderRight: "1px solid black", width: "15%" },
							]}
						>
							<Text>26</Text>
							{/* Sector */}
						</View>
						<View
							style={[
								styles.flexRowElementWithHight,
								{ borderRight: "1px solid black", width: "15%" },
							]}
						>
							<Text>27</Text>
							{/* Sección / Puesto / Tipo */}
						</View>
						<View
							style={[
								styles.flexRowElementWithHight,
								{ borderRight: "1px solid black", flex: 1 },
							]}
						>
							<Text>28</Text>
							{/* Tipo de iluminación */}
						</View>
						<View
							style={[
								styles.flexRowElementWithHight,
								{ borderRight: "1px solid black", flex: 1 },
							]}
						>
							<Text>29</Text>
							{/* Tipo de fuente */}
						</View>
						<View
							style={[
								styles.flexRowElementWithHight,
								{ borderRight: "1px solid black", flex: 1 },
							]}
						>
							<Text>30</Text>
							{/* Iluminación: */}
						</View>
						<View
							style={[
								styles.flexRowElementWithHight,
								{ borderRight: "1px solid black", width: "12%" },
							]}
						>
							<Text>31</Text>
							{/* Valor */}
						</View>
						<View
							style={[
								styles.flexRowElementWithHight,
								{ borderRight: "1px solid black", width: "6%" },
							]}
						>
							<Text>32</Text>
							{/* Valor Medido */}
						</View>
						<View
							style={[
								styles.flexRowElementWithHight,
								{ borderRight: "1px solid black", flex: 1 },
							]}
						>
							<Text>33</Text>
							{/* Valor requerido */}
						</View>
					</View>
				))}

				{/* **************************************************************************************************** */}

				<Text style={[styles.row, { height: 60, borderBottom: "none" }]}>
					(34) Observaciones:
				</Text>
			</View>
		</Page>
	)
}
