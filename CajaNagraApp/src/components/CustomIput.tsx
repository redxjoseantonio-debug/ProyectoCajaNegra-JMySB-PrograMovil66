import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, KeyboardTypeOptions, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";


type CustomIputProps = {
    onChangeText: (text: string) => void;
    value: string;
    placeholder: string;
    type?: "default" | "password" | "email" | "number";
};

export default function CustomIput({onChangeText, value, placeholder, type = "default",}: CustomIputProps){
const [isSecureText, setIsSecureText] = useState(type === "password")

        const isPasswordField = type === "password";
        const isWritting = value.length > 0;

        const IconName: (typeof MaterialIcons)["name"] | undefined = 
        type === "password" ? "lock" :
        type === "email" ? "alternate-email" : undefined;

        const keyboardType: KeyboardTypeOptions = 
        type === "email" ? "email-address" :
        type === "number" ? "number-pad":
        "default";

        const getError = () =>{
        if(type === "email" && !value.includes("@") && !value.includes(".")){
            return "Correo invalido";
        }
        if(type === "password" && value.length < 6){
            return "Contraseña invalida";
        }
        return undefined;
    };
        const error = getError();

    return(
        <View style={styles.wrapper}>
            <View style={[styles.inputContainer, error && isWritting && styles.inputError]}>
            <MaterialIcons name={IconName as any} size={21} color="#555" />

        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#999"
            keyboardType={keyboardType}
            secureTextEntry={isSecureText}
        />
        {isPasswordField && <TouchableOpacity
        onPress={() => {
            setIsSecureText(!isSecureText);
        }}>
        <Ionicons name="eye" size={22} color="#666" />
        </TouchableOpacity>}
        </View>
        {error && isWritting && (<Text style={styles.inputError}>{error}</Text>)}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        width: '100%',
        marginBottom: 14,
    },
        inputContainer:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "space-between",
            borderRadius: 8,
            borderColor: "#D9DDE2",
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
            height:52,
            marginBottom: 4,
            backgroundColor: "#F8F9FA",
            paddingHorizontal: 15,
        },
        inputError:{
            color: 'red',
            borderColor: '#E53935',
            backgroundColor: '#FFF8F8',
            marginTop: 5,
            marginLeft: 5,
        },
        input:{
            flex: 1,
            fontSize: 16,
            color: '#333',
            height: "100%",
        },
    })