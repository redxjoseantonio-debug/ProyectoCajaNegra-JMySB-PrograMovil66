import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomIput from '../components/CustomIput';
import { useTheme } from '../contexts/ThemeContext';
import { useArticlees } from '../contexts/ArticleContext';
import CustomButton from '../components/CustomButton';

export default function AddItemScreen() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [urlImage, setUrlImage] = useState('');

    const nameValid = name.trim().length > 0;
    const locationValid = location.trim().length > 0;

    const [submitted, setSubmitted] = useState(false);

    const {theme} = useTheme();

    const {addarticle} = useArticlees();

    const handleAdd = async () => {
        if (!nameValid || !locationValid) return;
        try {
            await addarticle({ nombre: name, ubicacion: location, descripcion: description, urlImage: '' });
            setName(''); setDescription(''); setLocation('');
        } catch (e: any) {
            console.log("usuario no tiene acceso");
        }
    };


    return (
        <View style={[styles.container,{ backgroundColor: theme.background}]}>
            <Text style={[styles.title,{ color: theme.text}]}>Agregar un objeto</Text>
            <Text style={[styles.subtitle, {color: theme.text}]}>Registra un objeto para saber donde lo guardaste.</Text>

            <View style={[styles.card, { backgroundColor: theme.card}]}>
                <Text style={[styles.cardtitle, { color: theme.text}]}>📦 Agrega un objeto</Text>
                <Text style={[styles.cardtext,{color: theme.text}]}>Aqui podras agregar la informacion de tus pertenencias y mantenerlas organizadas.</Text>
            </View>

            <View style={[styles.card, { backgroundColor: theme.card}]}>
                <CustomIput placeholder='Ingresa el nombre' value={name} onChangeText={setName}/>

                <CustomIput placeholder='Ingresa el lugar' value={location} onChangeText={setLocation}/>

                <CustomIput placeholder='Ingresa Descripcion' value={description} onChangeText={setDescription}/>

                

                <CustomButton title='Agregar articulo' onPress={handleAdd} /> 

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
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
        marginBottom: 16,
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