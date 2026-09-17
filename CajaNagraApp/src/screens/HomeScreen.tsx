import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';
import { navigationRef } from '../navigation/NavigatorService';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '../navigation/TabsNavigator';
import { RootStackParamList } from '../navigation/StackNavigator';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from '../contexts/ThemeContext';

type NestedFeedProps = CompositeScreenProps<
BottomTabScreenProps<TabsParamList, 'Home'>,
NativeStackScreenProps<RootStackParamList>
>;

export default function HomeScreen({navigation, route}: NestedFeedProps) {

    const { theme } = useTheme();

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Text style={[styles.title,{color: theme.text}]}>Bienvenido a Caja Nagra</Text>
            <Text style={[styles.subtitle,{color: theme.text}]}>Organiza tus objetos y encuentra donde los guardaste.</Text>
            <View style={[styles.card,{backgroundColor: theme.card}]}>
            <Text style={[styles.cardtitle,{color: theme.text}]}>🔎 ¿Buscas algo?</Text>
            <Text style={[styles.cardtext,{color: theme.text}]}>Encuentra rapidamente un objeto y descubre en que caja, armario, gaveta o espacio lo almacenaste. </Text>
                
            <CustomButton title='Buscar objeto' onPress={()=>console.log(1)} variant='secondary'/>
            
            </View>
            <View style={[styles.infocard,{backgroundColor: theme.card}]}>
                <Text style={[styles.infotitle,{color: theme.text}]}>📦 Organiza tus pertenencias</Text>
            </View>

            <Text style={[styles.pie,{color: theme.text}]}>Registra • Organiza • Encuentra</Text>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 27,
        fontWeight: '700',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        marginBottom: 28,
        textAlign: 'center',
        lineHeight: 21,
    },
    card: {
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
    },
    cardtext: {
        fontSize: 14,
        lineHeight: 21,
        marginBottom: 4,
    },
    infocard: {
        width: '100%',
        borderRadius: 16,
        padding: 18,
        marginTop: 16,
    },
    infotitle: {
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 6,
    },
    infotext: {
        fontSize: 14,
        lineHeight: 20,
    },
    pie: {
        marginTop: 25,
        fontSize: 13,
        fontWeight: '600',
    },
});