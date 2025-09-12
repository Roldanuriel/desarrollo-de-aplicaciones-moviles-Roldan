import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardBasico from '../components/CardBasico';
import CardImg from '../components/CardImg';




export default function HomePrincipal() {
    return (
        
        <View style={styles.main}>
            <Text style={styles.title}>Pagina Principal</Text>
            <CardBasico />
            <CardImg />
        </View>
            
        
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#0f4049ff',
        padding: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16
    },
    title: {
        fontFamily: 'cursiva',
        color: '#ffffffff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
    },
});