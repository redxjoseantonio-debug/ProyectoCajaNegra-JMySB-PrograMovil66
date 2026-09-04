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
            <Text style={styles.label}>Correo electrónico</Text>
            
            <CustomIput placeholder="Correo@ejemplo.com" value={email} onChangeText={setEmail} type='email'/>

            <Text style={styles.label}>Contraseña</Text>

            <CustomIput placeholder="Minimo 6 caracteres" value={password} onChangeText={setPassword} type='password'/>
            
            <CustomButton title="Iniciar sesión" onPress={handleLogin} variant='primary'/>

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
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 30, // Half of the width/height to make it circular
    },
});