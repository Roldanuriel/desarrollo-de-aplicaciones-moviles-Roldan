
import { StyleSheet, View, Platform, StatusBar, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Formulario() {
    return (
        <SafeAreaView style={style.main}>
            <Text style={style.Texto}>Nombre:</Text>
            <TextInput style={style.Input} placeholder="Ingrese su nombre"/>
            <Text style={style.Texto}>Descripcion:</Text>
            <TextInput multiline={true} numberOfLines={4} style={[style.Input, style.textArea]} placeholder="Describe tu personalidad"/>
            <Text style={style.Texto}>Correo Electronico:</Text>
            <TextInput style={style.Input} placeholder="Ingrese su correo" keyboardType="email-address"/>
            <Text style={style.Texto}>Contraseña:</Text>
            <TextInput style={style.Input} placeholder="*********" secureTextEntry/>
            <Text style={style.Texto}>Telefono:</Text>
            <TextInput style={style.Input} placeholder="123456" keyboardType="phone-pad"/>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#31a0c2ff',
        padding: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16
    },
    Texto: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#000000ff',
    },
    Input: {
        borderWidth: 1,
        borderColor: '#d60000ff',
        height: 40,
        marginTop: 20,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#ffffffff'
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top'
    },
});