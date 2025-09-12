import { Platform, StyleSheet, Text, View,StatusBar,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default  function Botones() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Botones personalizados</Text>
      {/* Boton grande */}
        <TouchableOpacity style={styles.botonGrande}>
          <Text style={styles.textoBotonGrande}>Boton Grande</Text>
        </TouchableOpacity>
        {/* Boton Grande con icono */}
        <TouchableOpacity style={styles.botonGrandeiCON}>
          <Text style={styles.textoBotonGrande}>Boton Grande</Text>
          <Icon name="send" size={20} color="#ffffff" style={styles.iconIZQ} />
        </TouchableOpacity>

        {/* Boton Grande con sombra */}
        <TouchableOpacity style={styles.botonsombra}>
          <Text style={styles.textosombra}>Boton Sombreado</Text>
        </TouchableOpacity>        
    </View>
  );
}

const styles = StyleSheet.create({
  main: { 
    flex: 1,
    backgroundColor: '#072cd1ff',
    paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight : 44, 
    padding: 16
  },
    title: {    
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 30,
    color: '#ffffffff',
    },
    botonGrande: {
        backgroundColor: '#e00ae7ff', 
        padding: 20,
        borderRadius: 15,
        marginBottom: 20,
        alignSelf:'center',
    },
    textoBotonGrande: {
        color: '#ffffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    botonGrandeiCON: {
        backgroundColor: '#ff6767ff', 
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 15,
    },
    iconIZQ: {
        marginLeft: 15, 
        marginTop: 3,
        alignSelf: 'center',
    },
    botonsombra: {
        backgroundColor: '#ddff1aff', 
        padding: 20,
        marginTop: 20,
        borderRadius: 15,
        elevation: 100, 
        shadowColor: '#0f0202ff',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.9,
    },
    textosombra: {
        color: '#000000ff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});