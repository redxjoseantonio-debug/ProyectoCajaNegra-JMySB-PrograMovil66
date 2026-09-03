import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type CustomButtonProps = {
    title: string;
    onPress: ()=>void;
    variant?: undefined;
};

export default function CustomButton({title, onPress}: CustomButtonProps){
    return(
        <TouchableOpacity style={styles.button} onPress={onPress} >
            <Text style={styles.buttonTitle}>
                {title}
            </Text>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#206291',
        borderRadius: 5,
        width: 150,
        padding: 12,
        marginBottom: 5,
    },
    buttonTitle: {
            color: "Black",
    }
    })