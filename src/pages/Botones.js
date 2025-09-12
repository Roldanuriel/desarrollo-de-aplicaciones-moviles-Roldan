import { Platform, StyleSheet, Text, View,StatusBar,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default  function Botones() {
  return (
    <View style={style.main}>
      <Text style={style.texto}>Botones</Text>
        {/* Boton 1 */}
        <TouchableOpacity style={style.BTNbasic}>
            <Text style={style.text}>Boton 1</Text>
        </TouchableOpacity>

        {/* Boton 2 */}
        <TouchableOpacity style={style.BTNIcon}>
            <Icon name="person" size={20} style={style.BTNIcon}/>
            <Text style={style.text}>Boton Icono</Text>
        </TouchableOpacity>

    </View>
  );
}

const style = StyleSheet.create({
  main: { 
    flex: 1,
    backgroundColor: '#1f7bd1ff',
    paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight : 44, 
    padding: 16
  },
    texto: {
        fontFamily: 'Arial',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffffffff',
        marginTop: 30,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#110101ff',
    },
    BTNbasic: {
        backgroundColor: '#0dc016ff',
        padding: 20, 
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,

    },
    BTNIcon: {
        backgroundColor: '#17c542ff',
        padding: 10, 
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row', 
        justifyContent: 'center', 
    },
    Btnicono: {
        fontSize: 25,
        color: '#ffffffff',
        marginLeft: 10, 
        marginTop: 0,   
    },  

});