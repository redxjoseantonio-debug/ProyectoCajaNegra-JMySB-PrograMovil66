import { View, Text, Image, StyleSheet } from "react-native";
import { Article } from "../contexts/ArticleContext";
import { useTheme } from "../contexts/ThemeContext";

type LugarCardProps = {
    articlet: Article;
}

export const ArticleCard = ({ articlet }: LugarCardProps) => {
        const {theme} = useTheme();

    return (        
        <View style={[styles.card, {backgroundColor: theme.card}]}>
            {/* Columna izquierda: textos */}
            <View style={[styles.infoContainer, {backgroundColor: theme.card}]}>
                <Text style={[styles.nombre,{color: theme.text}]}>{articlet.nombre}</Text>
                <Text style={[styles.ubicacion,{color: theme.text}]}>{articlet.ubicacion}</Text>
                <Text style={[styles.descripcion,{color: theme.text}]} numberOfLines={3}>
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
        width: '92%',
        flexDirection: "row",
        textAlign: "center",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 14,
        marginVertical: 9,
        marginHorizontal: 12,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 4,
    },
    infoContainer: {
        flex: 1,
        justifyContent: "center",
        paddingRight: 12,
    },
    nombre: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 5,
    },
    ubicacion: {
        fontSize: 13,
        opacity: 0.75,
        marginBottom: 7,
    },
    descripcion: {
        fontSize: 13,
        lineHeight: 18,
        opacity: 0.85,
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 12,
    },
});