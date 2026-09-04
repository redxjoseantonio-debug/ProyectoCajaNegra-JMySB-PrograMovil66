import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CustomButton from '../components/CustomButton';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a Caja Nagra</Text>
            <Text style={styles.subtitle}>Organiza tus objetos y encuentra donde los guardaste.</Text>
            <View style={styles.card}>
            <Text style={styles.cardtitle}>🔎 ¿Buscas algo?</Text>
            <Text style={styles.cardtext}>Encuentra rapidamente un objeto y descubre en que caja, armario, gaveta o espacio lo almacenaste. </Text>
                
            <CustomButton title='Buscar objeto' onPress={()=>console.log(1)} variant='secondary'/>
            
            </View>
            <View style={styles.infocard}>
                <Text style={styles.infotitle}>📦 Organiza tus pertenencias</Text>
            </View>

            <Text style={styles.pie}>Registra • Organiza • Encuentra</Text>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 30,
        color: '#555',
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#f9f9f9',
        width: '100%',
        padding: 22,
        elevation: 4,
        borderRadius: 18,
    },
    cardtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    cardtext: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
        marginBottom: 20,
    },
    infocard: {
        width: '100%',
        backgroundColor: '#EAEAEA',
        borderRadius: 15,
        padding: 18,
    },
    infotitle: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    infotext: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
    pie: {
        marginTop: 25,
        fontSize: 14,
        color: '#888',
        fontWeight: '600',
    },
});
