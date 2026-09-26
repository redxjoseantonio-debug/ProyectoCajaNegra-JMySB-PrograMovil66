import React, { useMemo, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CustomButton from '../components/CustomButton';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '../navigation/TabsNavigator';
import { RootStackParamList } from '../navigation/StackNavigator';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from '../contexts/ThemeContext';
import { ListaArticle } from '../components/ListaArticle';
import { useArticlees } from '../contexts/ArticleContext';
import CustomIput from '../components/CustomIput';
import { Ionicons } from '@expo/vector-icons';
import { useLenguage } from '../contexts/LanguageContext';

type NestedFeedProps = CompositeScreenProps<
BottomTabScreenProps<TabsParamList, 'Home'>,
NativeStackScreenProps<RootStackParamList>
>;

export default function HomeScreen({navigation}: NestedFeedProps) {

    const { theme } = useTheme();
    const { messag } = useLenguage();
    const { articlees } = useArticlees();
    const [searching, setSearching] = useState(false);
    const [query, setQuery] = useState('');

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return articlees;
        return articlees.filter((a) =>
            a.nombre.toLowerCase().includes(q) ||
            a.ubicacion.toLowerCase().includes(q) ||
            (a.descripcion ?? '').toLowerCase().includes(q)
        );
    }, [articlees, query]);

    const closeSearch = () => {
        setSearching(false);
        setQuery('');
    };
   
    return (
        <View style={{ flex: 1, backgroundColor: theme.background }}>
            <ListaArticle
                data={searching ? filtered : undefined}
                onEdit={(article) => navigation.navigate('AddItem', { article })}
                ListHeaderComponent={
                    <View style={{ paddingHorizontal: 24 }}>
                        <Text style={[styles.title, {color: theme.text}]}>{messag('welHome')}</Text>
                        <Text style={[styles.subtitle, {color: theme.text}]}>{messag('messHome1')}</Text>
                        <View style={[styles.card, {backgroundColor: theme.card}]}>
                            <Text style={[styles.cardtitle, {color: theme.text}]}>{messag('askHome')}</Text>

                            {searching ? (
                                <>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                        <View style={{ flex: 1 }}>
                                            <CustomIput
                                                placeholder={messag('askPlaeHome')}
                                                value={query}
                                                onChangeText={setQuery}
                                            />
                                        </View>
                                        <TouchableOpacity onPress={closeSearch} style={{ marginBottom: 14 }}>
                                            <Ionicons name="close-circle" size={26} color={theme.text} />
                                        </TouchableOpacity>
                                    </View>
                                    {query.trim().length > 0 && (
                                        <Text style={[styles.cardtext, { color: theme.text }]}>
                                            {filtered.length} {messag('AskFinis')} {filtered.length !== 1 ? 's' : ''}
                                        </Text>
                                    )}
                                </>
                            ) : (
                                <>
                                    <Text style={[styles.cardtext, {color: theme.text}]}>{messag('messHome2')}</Text>
                                    <CustomButton title={messag('titleButtHome')} onPress={() => setSearching(true)} variant='secondary'/>
                                </>
                            )}
                        </View>

                        {!searching && (
                            <View style={[styles.infocard, {backgroundColor: theme.card}]}>
                                <Text style={[styles.infotitle, {color: theme.text}]}>{messag('organizemes')}</Text>
                            </View>
                        )}
                    </View>
                }
                ListFooterComponent={
                    <Text style={[styles.pie, {color: theme.text}]}>{messag('footerHome')}</Text>
                }
                ListEmptyoComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyIcon}>{searching ? '🔍' : '📭'}</Text>
                        <Text style={[styles.emptyTitle, { color: theme.text }]}>
                            {searching ? messag('resultN') : messag('thereNHome')}
                        </Text>
                        <Text style={[styles.emptyText, { color: theme.text }]}>
                            {searching
                                ? `${messag('thereNHome2')} "${query}"`
                                : messag('addmessHome')}
                        </Text>
                    </View>
                }
            />
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
        textAlign: 'center',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
    },
    emptyIcon: { 
        fontSize: 50, 
        marginBottom: 12 
    },
    emptyTitle: { 
        fontSize: 17, 
        fontWeight: '700', 
        marginBottom: 6 
    },
    emptyText: { 
        fontSize: 14, 
        opacity: 0.65, 
        textAlign: 'center', 
        paddingHorizontal: 30 
    },
});