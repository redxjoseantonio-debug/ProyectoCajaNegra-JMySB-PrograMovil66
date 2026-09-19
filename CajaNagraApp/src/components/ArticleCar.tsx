import { View, Text, Image, StyleSheet } from "react-native";
import { Article } from "../contexts/ArticleContext";

type LugarCardProps = {
    articlet: Article;
}

export const ArticleCard = ({ articlet }: LugarCardProps) => {
    return (
        <View style={styles.card}>
            {/* Columna izquierda: textos */}
            <View style={styles.infoContainer}>
                <Text style={styles.nombre}>{articlet.nombre}</Text>
                <Text style={styles.ubicacion}>{articlet.ubicacion}</Text>
                <Text style={styles.descripcion} numberOfLines={3}>
                    {articlet.descripcion}
                </Text>
            </View>

            {/* Lado derecho: imagen */}
            <Image
                source={articlet.urlImage ? { uri: articlet.urlImage } : require("../../assets/ImagePlaceholder.png")}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 12,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    },
    infoContainer: {
        width: '70%',
        flexDirection: "column",
        justifyContent: "center",
        paddingRight: 10,
    },
    nombre: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#222",
    },
    ubicacion: {
        fontSize: 13,
        color: "#666",
        marginTop: 2,
    },
    descripcion: {
        fontSize: 13,
        color: "#444",
        marginTop: 6,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
});