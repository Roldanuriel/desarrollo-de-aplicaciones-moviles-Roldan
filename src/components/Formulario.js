import { StyleSheet, View, Platform, StatusBar, Text, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'; // Corrección aquí

export default function Formulario() {
    return (
        <SafeAreaView style={style.main}>
            <Text style={style.Texto}>Nombre:</Text>
            <TextInput style={style.Input} placeholder="Ingrese su nombre"/>
            <Text style={style.Texto}>Descripcion:</Text>
            <TextInput multiline={true} numberOfLines={4} style={[style.Input, style.textArea]} placeholder="Describe tu personalidad"/>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#50f3ffff',
        padding: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16
    },
    Texto: {
        fontFamily: 'Arial',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },
    Input: {
        borderWidth: 1,
        borderColor: '#000000',
        height: 40,
        marginTop: 20,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#ffffff'
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top'
    },
});