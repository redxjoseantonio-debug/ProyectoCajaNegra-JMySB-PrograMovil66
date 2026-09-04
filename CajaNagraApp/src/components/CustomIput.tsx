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
        <View>
            <View style={[styles.inputContainer, error && isWritting && styles.inputError]}>
            <MaterialIcons name={IconName as any} size={22} />

        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={isSecureText}
        />
        {isPasswordField && <TouchableOpacity
        onPress={() => {
            setIsSecureText(!isSecureText);
        }}>
        <Ionicons name="eye" size={22} />
        </TouchableOpacity>}
        </View>
        {error && isWritting && (<Text style={styles.inputError}>{error}</Text>)}
        </View>
    );
}

const styles = StyleSheet.create({
        inputContainer:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "space-between",
            borderRadius: 8,
            borderColor: "#ccc",
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
            marginBottom: 4,

        },
        inputError:{
            color: 'red',
            borderColor: 'red',
            marginTop: 5,
            marginLeft: 5,
        },
        input:{
            width: '80%',
        }
    })