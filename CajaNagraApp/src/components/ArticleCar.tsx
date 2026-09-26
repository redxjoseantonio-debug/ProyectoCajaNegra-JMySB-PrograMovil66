import { View, Text, Image, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Article, useArticlees } from "../contexts/ArticleContext";
import { useTheme } from "../contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useLenguage } from "../contexts/LanguageContext";

type LugarCardProps = {
    articlet: Article;
    onEdit?: (article: Article) => void;
}

export const ArticleCard = ({ articlet, onEdit }: LugarCardProps) => {
        const { theme } = useTheme();
        const { removearticle } = useArticlees();
        const { messag } = useLenguage();

        const handleDelete = () => {
            Alert.alert(messag('artcarTitle'),`¿${messag('artcarask')} "${articlet.nombre}"?`,
                [
                    { text: messag('artcarcancel'), style: "cancel" },
                    {
                        text: messag('artcarDelet'), style: "destructive", onPress: async () => {
                            try { await removearticle(articlet.id); }
                            catch (e: any) { Alert.alert("Error", e.message); }
                        }
                    },
                ]
            ); 
        };

    return (        
        <View style={[styles.card, { backgroundColor: theme.card }]}>
            <View style={[styles.infoContainer, { backgroundColor: theme.card }]}>
                <Text style={[styles.nombre, { color: theme.text }]}>{articlet.nombre}</Text>
                <Text style={[styles.ubicacion, { color: theme.text }]}>{articlet.ubicacion}</Text>
                <Text style={[styles.descripcion, { color: theme.text }]} numberOfLines={3}>
                    {articlet.descripcion}
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 8, gap: 16 }}>
                    <TouchableOpacity onPress={() => onEdit?.(articlet)}>
                        <Ionicons name="pencil" size={20} color="#007AFF" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDelete}>
                        <Ionicons name="trash" size={20} color="#E53935" />
                    </TouchableOpacity>
                </View>
            </View>

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
        alignSelf: 'center',
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 14,
        marginVertical: 5,
        marginHorizontal: 12,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 5,
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