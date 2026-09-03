import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
    Login: undefined;
    Tabs: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const emailValid = email.includes('@') && email.includes('.');
    const passwordValid = password.length >= 6;

    const handleLogin = () => {
        setSubmitted(true);

        if (emailValid && passwordValid) {
            navigation.navigate('Tabs');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Logo_caja_negra.jpg')} style={styles.logo} />
            <Text style={styles.title}>Caja Negra</Text>
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo@ejemplo.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {submitted && !emailValid && (
                <Text style={styles.error}>Por favor, ingrese un correo electrónico válido.</Text>
            )}

            <Text style={styles.label}>Contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder="Minimo 6 caracteres"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {submitted && !passwordValid && (
                <Text style={styles.error}>La contraseña debe tener al menos 6 caracteres.</Text>
            )}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 6,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 4,
    },
    error: {
        color: 'red',
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 30, // Half of the width/height to make it circular
    },
});