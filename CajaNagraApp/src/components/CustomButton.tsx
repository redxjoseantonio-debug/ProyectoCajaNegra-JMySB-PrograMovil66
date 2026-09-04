import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type CustomButtonProps = {
    title: string;
    onPress: ()=>void;
    variant?: "primary"| "secondary" | "tertiary";
};

export default function CustomButton({title, onPress, variant="primary"}: CustomButtonProps){
    const styles = getStyles(variant); 

    return(
        <TouchableOpacity style={styles.button} onPress={onPress} >
            <Text style={styles.buttonTitle}>
                {title}
            </Text>
        </TouchableOpacity >
    );
};

const getStyles = (variant: "primary"| "secondary" | "tertiary") =>
    StyleSheet.create({
        button:{
            backgroundColor: variant === "primary" ? '#007AFF' : 
                                    variant === "secondary" ? '#222' : '#fff',
            borderRadius: variant==="primary"? 8 : variant==="secondary" ? 10 : 0,
            padding: 14,
            marginTop: 20,
            alignItems: "center",
        },
        buttonTitle: {
            color: variant === "tertiary" ? 'black' : 'white',
            fontSize: 16,
            fontWeight: "bold"
        }
    })