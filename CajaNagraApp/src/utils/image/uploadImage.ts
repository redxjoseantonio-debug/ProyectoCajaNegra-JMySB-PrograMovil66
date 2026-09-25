import * as ImagePicker from 'expo-image-picker';
import { decode } from 'base64-arraybuffer';
import { supabase } from '../../lib/supabase';


export const pickAndUploadImage = async (userId: string): Promise<string | null> => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
        throw new Error('Se necesita permiso para acceder a tus fotos');
    }

    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
        base64: true,
    });

    if (result.canceled || !result.assets[0].base64) return null;

    const fileName = `${userId}/${Date.now()}.jpg`;

    const { error } = await supabase.storage
        .from('article-images')
        .upload(fileName, decode(result.assets[0].base64), { contentType: 'image/jpeg' });

    if (error) throw error;

    const { data } = supabase.storage.from('article-images').getPublicUrl(fileName);
    return data.publicUrl;
};

export const deleteImageFromUrl = async (url: string | undefined) => {
    if (!url) return;
   
    const marker = '/article-images/';
    const idx = url.indexOf(marker);
    if (idx === -1) return; 

    const path = url.slice(idx + marker.length);
    const { error } = await supabase.storage.from('article-images').remove([path]);
    if (error) console.log('No se pudo borrar la imagen:', error.message);
};