
import { StyleSheet, View, Text, Platform, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native';
// import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';


const ListaAlumnos = () => {
    return (
        <View style={style.main}>
            {/* Inicio del AppBar */}
            <View style={style.appBar}>
                <Icon name="arrow-left" size={20} />
                <Text style={style.Title}>Lista de Usuarios</Text>
                <View style={{ width: 20 }}></View>
            </View>
            {/* Fin del AppBar */}
            {/* Inicio del contenido (Lista de alumnos) */}
            <ScrollView style={{ padding: 10 }}>
                <Text style={style.titulo2}>Alumnos de Aplicaciones Moviles</Text>
                {/* Alumno 1  */}
                  {[1,2,3,4,5,6,7,8,9,10].map(( ) => (
                <View style={style.card}>
                    <Image style={style.avatar} source={{ uri: 'https://tse3.mm.bing.net/th/id/OIP.oX-SBg3T3WoH1vy9yv6bNAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3' }} />
                    <View style={style.cardinfo}>
                        <Text style={style.username}>Roldan Uriel Arcadio Avila</Text>
                        <Text style={style.userdetails}>Ing. en Sistemas Computacionales</Text>
                        <TouchableOpacity style={style.saveButton}>
                            <Text style={style.saveButtonText}>Ver mas</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                  ))}
            </ScrollView>
            {/* Fin del contenido (Lista de alumnos) */}
        </View>
    )
}

export default ListaAlumnos;


const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#48aab183',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    },

    appBar: {
        height: 50,
        width: '100%',
        backgroundColor: '#1409099d',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    Title: {
        fontFamily: 'cursive',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffffff',
        textAlign: 'center',
    },
    titulo2: {
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: '#fff3f3ff',
    },
    username: {
        fontFamily: 'arial',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    userdetails: {
        fontFamily: 'consolas',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    cardinfo: {
        flex: 1,
        justifyContent: 'center',
    },
    card: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#ffffffff',
        borderRadius: 25,
        marginTop: 20,
    },
    avatar: {
        width: 68,
        height: 68,
        borderRadius: 50,
        marginRight: 12,
    },
    saveButton: {
        backgroundColor: '#00ccffff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 10,
        alignSelf: 'flex-end',
        padding: 10,
    },
    saveButtonText: {
        color: '#000000ff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});