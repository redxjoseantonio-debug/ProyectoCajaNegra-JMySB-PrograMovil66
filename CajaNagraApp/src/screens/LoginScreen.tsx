import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton';
import CustomIput from '../components/CustomIput';

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
            <Text style={styles.subtitle}>Organiza tus objetos de forma sencilla</Text>
            <View style={styles.form}>
            <Text style={styles.label}>Correo electrónico</Text>
            <CustomIput placeholder="Correo@ejemplo.com" value={email} onChangeText={setEmail} type='email'/>
            <Text style={styles.label}>Contraseña</Text>
            <CustomIput placeholder="Minimo 6 caracteres" value={password} onChangeText={setPassword} type='password'/>
            <CustomButton title="Iniciar sesión" onPress={handleLogin} variant='primary'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 28,
        backgroundColor: '#F5F6F8',
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#222',
        marginBottom: 6,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
        marginBottom: 30,
    },
    form: {
        width: '100%',
    },
    label: {
        fontSize: 15,
        marginBottom: 7,
        fontWeight: '600',
        color: '#333',
    },
    logo: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 18,
        borderRadius: 25, // Half of the width/height to make it circular
    },
});