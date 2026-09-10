import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi Perfil</Text>
            <Text style={styles.subtitle}>Administra la informacion de tu cuenta</Text>
            <View style={styles.card}>
                <View style={styles.profileCircle}>
                <Text style={styles.profileIcon}>👤</Text>
                </View>
                <Text style={styles.profileName}>Nombre de Usuario</Text>
                <Text style={styles.profileDescription}>Organica tus objetos y manten el control de donde los guardaste.</Text>  
            </View>
            <View style={styles.buttons}>
            <CustomButton title='Editar perfil' onPress={()=>console.log(1)} variant='secondary'/>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6F8',
        paddingHorizontal: 24,
        paddingTop: 50,
    },
    title: {
        fontSize: 27,
        fontWeight: '700',
        marginBottom: 8,
        color: '#222',
    },
    subtitle: {
        fontSize: 15,
        marginBottom: 25,
        color: '#666',
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 25,
        alignItems: 'center',
        elevation: 3,
        borderRadius: 18,
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
    },
    profileCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#EDEEF0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    profileIcon: {
        fontSize: 36,
    },
    profileName: {
        fontSize: 19,
        fontWeight: '700',
        color: '#222',
        marginBottom: 8,
    },
    profileDescription:{
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 21,
    },
    buttons:{
        width:'100%',
        marginTop: 20,
    },
});