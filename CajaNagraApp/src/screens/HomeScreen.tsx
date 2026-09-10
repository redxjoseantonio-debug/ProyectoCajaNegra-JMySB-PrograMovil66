import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
        paddingHorizontal: 24,
        backgroundColor: '#F5F6F8',
    },
    title: {
        fontSize: 27,
        fontWeight: '700',
        color: '#222',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        marginBottom: 28,
        color: '#666',
        textAlign: 'center',
        lineHeight: 21,
    },
    card: {
        backgroundColor: '#FFFFFF',
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
        marginBottom: 10,
        color: '#222',
    },
    cardtext: {
        fontSize: 14,
        color: '#666',
        lineHeight: 21,
        marginBottom: 4,
    },
    infocard: {
        width: '100%',
        backgroundColor: '#EDEEF0',
        borderRadius: 16,
        padding: 18,
        marginTop: 16,
    },
    infotitle: {
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 6,
        color: '#333'
    },
    infotext: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    pie: {
        marginTop: 25,
        fontSize: 13,
        color: '#888',
        fontWeight: '600',
    },
});
