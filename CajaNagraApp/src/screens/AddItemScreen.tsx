import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomIput from '../components/CustomIput';
import { useTheme } from '../contexts/ThemeContext';

export default function AddItemScreen() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const nameValid = name.trim().length > 0;
    const locationValid = location.trim().length > 0;

    const [submitted, setSubmitted] = useState(false);

    const {theme} = useTheme();

    return (
        <View style={[styles.container,{ backgroundColor: theme.background}]}>
            <Text style={[styles.title,{ color: theme.text}]}>Agregar un objeto</Text>
            <Text style={[styles.subtitle, {color: theme.text}]}>Registra un objeto para saber donde lo guardaste.</Text>

            <View style={[styles.card, { backgroundColor: theme.card}]}>
                <Text style={[styles.cardtitle, { color: theme.text}]}>📦 Agrega un objeto</Text>
                <Text style={[styles.cardtext,{color: theme.text}]}>Aqui podras agregar la informacion de tus pertenencias y mantenerlas organizadas.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    title: {
        fontSize: 27,
        fontWeight: '700',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 15,
        marginBottom: 25,
        lineHeight: 21,
    },
    card: {
        width: '100%',
        padding: 22,
        elevation: 3,
        borderRadius: 18,
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
    },
    cardtitle: {
        fontSize: 19,
        fontWeight: '700',
        marginBottom: 8,
    },
    cardtext: {
        fontSize: 14,
        lineHeight: 21,
    },
});