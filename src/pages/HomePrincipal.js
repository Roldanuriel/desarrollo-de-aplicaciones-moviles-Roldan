import { Platform, StyleSheet, Text, View, StatusBar,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardBasico from '../components/CardBasico';
import CardImg from '../components/CardImg';
import CardV2 from '../components/CardV2';
import CardV3 from '../components/CardV3';





export default function HomePrincipal() {
    return (
        <ScrollView>
        <View style={styles.main}>
            <Text style={styles.title}>Pagina Principal</Text>
            <CardBasico />
            <CardImg />
            <CardV2 />
            <CardV3 />
            
        </View>
        </ScrollView>
            
        
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