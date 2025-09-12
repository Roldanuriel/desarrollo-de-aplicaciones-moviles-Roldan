import { StyleSheet, View, Text } from 'react-native';


export default function CardBasico() {
    return (
        <View style={style.card}>
            <Text style={style.Titulo}>Titulo del card</Text>
            <Text style={style.cont}>Contenido del card</Text>
            <Text style={style.cont}>Roldan Uriel Arcadio Avila</Text>
        </View>
    );
}

const style = StyleSheet.create({
    card: {

        backgroundColor: '#ffffffff',
        padding: 16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#0004daff',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    Titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cont: {
        fontSize: 16,
        color: '#333333',
        marginTop:4,
    },
});