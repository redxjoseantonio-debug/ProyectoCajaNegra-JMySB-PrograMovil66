import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';
import { useTheme } from '../contexts/ThemeContext';
import { Switch } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '../navigation/TabsNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import { useAuth } from '../contexts/AuthContext';
import { useLenguage } from '../contexts/LanguageContext';

type NestedProps = CompositeScreenProps<
    BottomTabScreenProps<TabsParamList, "Profile">,
    NativeStackScreenProps<RootStackParamList>
>;

export default function ProfileScreen({navigation, route}: NestedProps) {

    const {theme, isDark, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    const { language, changeLenguage, messag } = useLenguage();

    const handlelogout = () => logout();

    const isEnglish = language === "en";

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Text style={[styles.title,{ color: theme.text}]}>{messag('titleProfile')}</Text>
            <Text style={[styles.subtitle,{ color: theme.text}]}>{messag('profilemmessTitle')}</Text>
            <View style={[styles.card,{ backgroundColor: theme.card}]}>
            <View style={styles.profileCircle}>
                <Text style={styles.profileIcon}>👤</Text>
                </View>
                <View style={styles.profileInfo}>
                <Text style={[styles.Name,{ color: theme.text}]}>{messag('profNameUser')}</Text>
                <Text style={[styles.Email,{ color: theme.text}]}>{user? user?.email : messag('profnotUser')}</Text>  
                </View>
            </View>

            <View style={[styles.themeCard, { backgroundColor: theme.card}]}>
                <Text style={[styles.sectionTitle, { color: theme.text}]}>{messag('profPrefe')}</Text>
                
                <View style={[styles.division,
                    {backgroundColor: isDark ? '#333333' : '#E1E1E1'}]}/>
                <View style={styles.option}>
                    <View style={styles.optionInfo}>
                        <View style={styles.iconContainer}>
                        <Text style={styles.preferenceIcon}>{isDark? '🌙' : '☀️'}</Text>
                    </View>
                    <View style={styles.themeTextContainer}>
                    <Text style={[styles.themeTitle, {color: theme.text}]}> {messag('profTitleTheme')} </Text>
                    <Text style={[styles.themeDescription,{color: theme.text}]}>{isDark ? messag('profThemeDark') : messag('profThemelieting')}</Text>
                    </View>
                    </View>
                    <Switch value={isDark} onValueChange={toggleTheme}
                    trackColor={{false: '#D1D5DB', true: '#555555',}}
                    thumbColor={isDark ? '#FFFFFF' : '#FFFFFF'}/>
                </View>
                <View style={[styles.division,
                    {backgroundColor: isDark ? '#333333' : '#E5E5E5'}]}/>
                    <View style={styles.option}>
                <View style={styles.iconContainer}>
                    <Text style={styles.flagIcon}>{isEnglish ? '🇺🇸' : '🇪🇸'}</Text>
                </View>
                <View style={styles.preferenceInfo}>
                    <Text style={[styles.preferenceTitle, {color: theme.text}]}>Idioma</Text>
                    <Text style={[styles.themeDescription, {color: theme.text}]}>{isEnglish ? 'English' : 'Español'} </Text>
                </View>
                <Switch value={isEnglish} onValueChange={(value)=>changeLenguage(value ? "en" : "es")} trackColor={{false: '#D1D5DB', true: '#555555',}} thumbColor="#FFFFFF"/>
                </View>
            </View>
            <View style={styles.buttons}>
            <CustomButton title={messag('profButtTitle')} onPress={handlelogout} variant='secondary'/>
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
    iconContainer:{
        width: 46,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 13,
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
    themeTextContainer:{
        flex: 1,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    optionInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    preferenceIcon: {
        fontSize: 19,
    },
    flagIcon:{
        fontSize: 22,
    },
    preferenceInfo:{
        flex: 1,
    },
    preferenceTitle:{
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 3,
    },
    division: {
        width: '100%',
        height: 1,
        marginTop: 14,
        marginBottom: 16,
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