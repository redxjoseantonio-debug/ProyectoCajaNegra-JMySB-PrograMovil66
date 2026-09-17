import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';
import { useTheme } from '../contexts/ThemeContext';
import { Switch } from 'react-native-gesture-handler';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

export default function ProfileScreen() {

    const {theme, isDark, toggleTheme } = useTheme();

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Text style={[styles.title,{ color: theme.text}]}>Mi Perfil</Text>
            <Text style={[styles.subtitle,{ color: theme.text}]}>Administra la informacion de tu cuenta</Text>
            <View style={[styles.card,{ backgroundColor: theme.card}]}>
            <View style={styles.profileCircle}>
                <Text style={styles.profileIcon}>👤</Text>
                </View>
                <View style={styles.profileInfo}>
                <Text style={[styles.Name,{ color: theme.text}]}>Nombre de Usuario</Text>
                <Text style={[styles.Email,{ color: theme.text}]}>Mi cuenta de Caja Negra</Text>  
                </View>
            </View>
            <View style={[styles.themeCard, { backgroundColor: theme.card}]}>
                <Text style={[styles.sectionTitle, { color: theme.text}]}>Preferencias</Text>
                <View style={styles.option}>
                    <View style={styles.optionInfo}>
                        <Text style={styles.optionIcon}>{isDark? '🌙' : '☀️'}</Text>
                    </View>
                    <Text style={[styles.themeTitle, {color: theme.text}]}> Modo Oscuro </Text>
                    <Text style={[styles.themeDescription,{color: theme.text}]}></Text>
                    <Switch value={isDark} onValueChange={toggleTheme}/>
                </View>
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
        paddingHorizontal: 24,
        paddingTop: 55,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 7,
    },
    subtitle: {
        fontSize: 15,
        opacity: 0.65,
        marginBottom: 28,
    },
    card: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
        borderRadius: 18,
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
    },
    themeCard: {
        width: '100%',
        borderRadius: 18,
        padding: 20,
        marginTop: 18,
        elevation: 3,
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 3},
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 18,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    optionInfo: {
        fontSize: 24,
        marginRight: 14,
    },
    optionIcon: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 3,
    },
    themeTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 18,
    },
    themeDescription: {
        fontSize: 13,
    },
    profileCircle: {
        width: 62,
        height: 62,
        borderRadius: 31,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        backgroundColor: '#E9EAEC',
    },
    profileIcon: {
        fontSize: 28,
    },
    profileInfo: {
        flex: 1,
    },
    Name: {
        fontSize: 19,
        fontWeight: '700',
        marginBottom: 5,
    },
    Email: {
        fontSize: 13,
        opacity: 0.6,
    },
    profileDescription:{
        fontSize: 13,
        textAlign: 'center',
        lineHeight: 21,
        opacity: 0.6,
    },
    buttons:{
        width:'100%',
        marginTop: 20,
    },
});