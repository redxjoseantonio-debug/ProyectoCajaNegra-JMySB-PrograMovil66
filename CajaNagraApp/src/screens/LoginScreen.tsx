import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton';
import CustomIput from '../components/CustomIput';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

type RootStackParamList = {
    Login: undefined;
    Tabs: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const { theme } = useTheme();
    const { login } = useAuth();

    const emailValid = email.includes('@') && email.includes('.');
    const passwordValid = password.length >= 6;

    const handleLogin = () => {
      const allowed = login(email);

      if (allowed){
      navigation.navigate('Tabs');
      }else{
        console.log("usuario sin acceso");
      }
    };

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Image source={require('../../assets/Logo_caja_negra.jpg')} style={styles.logo} />
            <Text style={[styles.title,{color: theme.text}]}>Caja Negra</Text>
            <Text style={[styles.subtitle,{color: theme.text}]}>Organiza tus objetos de forma sencilla</Text>
            <View style={styles.form}>
            <Text style={[styles.label,{color: theme.text}]}>Correo electrónico</Text>
            <CustomIput placeholder="Correo@ejemplo.com" value={email} onChangeText={setEmail} type='email'/>
            <Text style={[styles.label,{color: theme.text}]}>Contraseña</Text>
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
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 6,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
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