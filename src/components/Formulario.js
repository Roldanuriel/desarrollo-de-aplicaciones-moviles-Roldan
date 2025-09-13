

import { StyleSheet, View, Platform, StatusBar, Text, TextInput,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Formulario() {
    return (
        <SafeAreaView style={style.main}>
            <Text style={style.Title}>Registro de Alumno</Text>
            <Text style={style.Texto}>Nombre:</Text>
            <TextInput style={style.Input} placeholder="Ingrese su nombre" />
            <Text style={style.Texto}>Carrera:</Text>
            <TextInput editable={false} style={style.Input} placeholder="Ingrese su carrera" />
            <Text style={style.Texto}>Descripcion:</Text>
            <TextInput multiline={true} numberOfLines={2} style={[style.Input, style.textArea]} placeholder="Describe tu personalidad" />
            <Text style={style.Texto}>Correo Electronico:</Text>
            <TextInput style={style.Input} placeholder="Ingrese su correo" keyboardType="email-address" />
            <Text style={style.Texto}>Contraseña:</Text>
            <TextInput style={style.Input} placeholder="*********" secureTextEntry />
            <Text style={style.Texto}>Telefono:</Text>
            <TextInput style={style.Input} placeholder="123456" keyboardType="phone-pad" />
            {/* Boton Grande con icono */}
            <TouchableOpacity style={style.botonGrandeiCON}>
                <Icon name="send" size={20} color="#ffffff" style={style.iconIZQ} />
                <Text style={style.textoBotonGrande}>Enviar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#2795a8ff',
        padding: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16
    },
    Title: {
        fontFamily: 'arial',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffffff',
        textShadowColor: '#ddf317ff',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    Texto: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#000000ff',
    },
    Input: {
        borderWidth: 2,
        borderColor: '#0a0404ff',
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
    textoBotonGrande: {
        color: '#000000ff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    iconIZQ: {
        marginRight: 15, 
        marginTop: 3,
        alignSelf: 'center',
    },
    botonGrandeiCON: {
        backgroundColor: '#ca0000ff', 
        marginTop: 20,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 15,
    },
});