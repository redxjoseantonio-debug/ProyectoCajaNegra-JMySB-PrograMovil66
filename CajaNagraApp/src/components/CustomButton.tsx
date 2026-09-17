import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

type CustomButtonProps = {
    title: string;
    onPress: ()=>void;
    variant?: "primary"| "secondary" | "tertiary";
};

export default function CustomButton({title, onPress, variant="primary"}: CustomButtonProps){
    
    const { theme, isDark } = useTheme();
    
    const styles = getStyles(variant, theme, isDark); 

    return(
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.75} >
            <Text style={styles.buttonTitle}>
                {title}
            </Text>
        </TouchableOpacity >
    );
};

const getStyles = (variant: "primary"| "secondary" | "tertiary", theme: any, isDark: boolean) =>
    StyleSheet.create({
        button:{
            backgroundColor: variant === "primary" ? '#007AFF' : 
            variant === "secondary" ? isDark ? '#333333' : '#222222' : theme.card,
            borderRadius: variant==="primary"? 10 : variant==="secondary" ? 12 : 10,
            paddingVertical: 14,
            paddingHorizontal: 20,
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: variant === "tertiary" ? 1 : 0,
            borderColor: isDark ? "#444444" : "#D9DDE2",
            elevation: variant === "tertiary" ? 0 : 2,
        },
        buttonTitle: {
            color: variant === "tertiary" ? theme.text : '#FFFFFF',
            fontSize: 16,
            fontWeight: "600",
        }
    });