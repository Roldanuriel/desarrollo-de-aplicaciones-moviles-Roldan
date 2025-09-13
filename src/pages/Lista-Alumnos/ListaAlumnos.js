import { StyleSheet, View, Text, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';

const ListaAlumnos = () => {
    return (
        <SafeAreaView style={style.main}>
            {/* Inicio del AppBar */}
            <View style={style.appBar}>
                <Icon name="arrow-left" size={30} />
                <Text style={style.Title}>Lista de Usuarios</Text>
                <View style={{ width: 20 }}></View>
            </View>
            {/* Fin del AppBar */}
        </SafeAreaView>
    )
}

export default ListaAlumnos;


const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#00ff7334',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    },

    appBar: {
        height: 50,
        width: '100%',
        backgroundColor: '#000000ff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    Title: {
        fontFamily: 'arial',
        fontSize: 20,   
        fontWeight: 'bold',
        color: '#ffffffff',
        textAlign: 'center',
    },
});