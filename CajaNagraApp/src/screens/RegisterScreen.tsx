import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton';
import CustomIput from '../components/CustomIput';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useLenguage } from "../contexts/LanguageContext";
import { RootStackParamList } from '../navigation/StackNavigator';



type Props = NativeStackScreenProps<RootStackParamList, 'Register' >;

export default function RegisterScreen({ navigation }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const { theme } = useTheme();
    const { register } = useAuth();
    const { messag } = useLenguage();

    const emailValid = email.includes('@') && email.includes('.');
    const passwordValid = password.length >= 6;

    const handleRegistrer = async () => {
        try {
           await register(email, password);
           //navigation.navigate("Login");
        } catch (error:any) {
            console.log("error al registrarse:",error.message);
        }
    };

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Image source={require('../../assets/Logo_caja_negra.jpg')} style={styles.logo} />
            <Text style={[styles.title,{color: theme.text}]}>{messag('nameApp')}</Text>
            <Text style={[styles.subtitle,{color: theme.text}]}>Registrate</Text>
            <View style={styles.form}>
            <Text style={[styles.label,{color: theme.text}]}>{messag('nameEmail')}</Text>
            <CustomIput placeholder={messag('typeEmail')} value={email} onChangeText={setEmail} type='email'/>
            <Text style={[styles.label,{color: theme.text}]}>{messag('namePass')}</Text>
            <CustomIput placeholder={messag('typePassword')} value={password} onChangeText={setPassword} type='password'/>
            <CustomButton title={messag('signIn')} onPress={handleRegistrer} variant='primary'/>
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