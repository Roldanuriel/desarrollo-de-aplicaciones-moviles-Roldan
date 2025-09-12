import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={{uri:'https://www.enewsletterhome.com/_eNewsletter/2020/2007_J_avatar.jpg?'}} style={styles.img}/>
      <Text style={styles.h1}>Bienvenidos </Text>
      <Text style={styles.h2}>Roldan Uriel Arcadio Avila</Text>
      <Text style={styles.holamundo}>Materia desarrollo de aplicaciones moviles</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e15dff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {fontSize: 30, fontWeight: 'bold', marginBottom: 20, color: '#110404ff'},
  h2: {fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: '#140101ff'
},
  holamundo: {
    color: '#1d0404ff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 50,
    padding: 20,
    backgroundColor: '#0b527ab0',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
});
