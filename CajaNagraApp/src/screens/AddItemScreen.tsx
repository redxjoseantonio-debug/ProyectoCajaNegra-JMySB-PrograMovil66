import React, { useCallback, useState } from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity, Image} from 'react-native';
import CustomIput from '../components/CustomIput';
import { useTheme } from '../contexts/ThemeContext';
import { useArticlees } from '../contexts/ArticleContext';
import CustomButton from '../components/CustomButton';
import { useAuth } from '../contexts/AuthContext';
import { pickAndUploadImage } from '../utils/image/uploadImage';
import { RouteProp, useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { TabsParamList } from '../navigation/TabsNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useLenguage } from '../contexts/LanguageContext';

export default function AddItemScreen() {
    const route = useRoute<RouteProp<TabsParamList, 'AddItem'>>();
    const navigation = useNavigation<BottomTabNavigationProp<TabsParamList>>();
    const editing = route.params?.article;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const [uploading, setUploading] = useState(false);
    
    const {theme} = useTheme();
    const { user } = useAuth();
    const { messag } = useLenguage();
    const {addarticle, updatearticle } = useArticlees();

    useFocusEffect(
        useCallback(() => {
            setName(editing?.nombre ?? '');
            setLocation(editing?.ubicacion ?? '');
            setDescription(editing?.descripcion ?? '');
            setImageUrl(editing?.urlImage);
        }, [editing])
    );

    const nameValid = name.trim().length > 0;
    const locationValid = location.trim().length > 0;

    const handlePickImage = async () => {
        if (!user) return;
        try {
            setUploading(true);
            const url = await pickAndUploadImage(user.id);
            if (url) setImageUrl(url);
        } catch (e: any) {
            Alert.alert('Error', e.message);
        } finally {
            setUploading(false);
        }
    };

    const resetForm = () => {
        setName(''); setDescription(''); setLocation(''); setImageUrl(undefined);
    };

    const handleAdd = async () => {
        if (!nameValid || !locationValid) return;
        try {
            if (editing) {
                await updatearticle(editing.id, { nombre: name, ubicacion: location, descripcion: description, urlImage: imageUrl });
            } else {
                await addarticle({ nombre: name, ubicacion: location, descripcion: description, urlImage: imageUrl });
            }
            resetForm();
            navigation.setParams({ article: undefined }); // limpia el modo edición
            navigation.navigate('Home');
        } catch (e: any) {
            Alert.alert('Error', e.message);
        }
    };


    return (
        <View style={[styles.container,{ backgroundColor: theme.background}]}>
            <Text style={[styles.title,{ color: theme.text}]}>{messag('titleAdd')}</Text>
            <Text style={[styles.subtitle, {color: theme.text}]}>{messag('messTitleadd')}</Text>

            <View style={[styles.card, { backgroundColor: theme.card}]}>
                <Text style={[styles.cardtitle, { color: theme.text}]}>{messag('titleCarAdd')}</Text>
                <Text style={[styles.cardtext,{color: theme.text}]}>{messag('messCarAdd')}</Text>
            </View>

            <View style={[styles.card, { backgroundColor: theme.card}]}>
                <CustomIput placeholder={messag('placeHname')} value={name} onChangeText={setName}/>

                <CustomIput placeholder={messag('placeHLugar')} value={location} onChangeText={setLocation}/>

                <CustomIput placeholder={messag('placeHdesrip')} value={description} onChangeText={setDescription}/>

                <TouchableOpacity onPress={handlePickImage} disabled={uploading}>
                    {imageUrl ? (
                        <Image source={{ uri: imageUrl }} style={{ width: 90, height: 90, borderRadius: 12, marginBottom: 10 }} />
                    ) : (
                        <Text style={{ color: theme.text, marginBottom: 10 }}>
                        {uploading ? messag('imageLoadAdd') : messag('placeHimage')}
                        </Text>
                    )}
                </TouchableOpacity>

                <CustomButton title={editing ? messag('titleButtadd1') : messag('titleButtadd2')} onPress={handleAdd} /> 

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        alignItems: 'center',
        paddingTop: 50,
    },
    title: {
        fontSize: 27,
        fontWeight: '700',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 15,
        marginBottom: 25,
        lineHeight: 21,
    },
    card: {
        width: '100%',
        padding: 22,
        elevation: 3,
        borderRadius: 18,
        shadowOpacity: 0.08,
        marginBottom: 16,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
    },
    cardtitle: {
        fontSize: 19,
        fontWeight: '700',
        marginBottom: 8,
    },
    cardtext: {
        fontSize: 14,
        lineHeight: 21,
    },
});