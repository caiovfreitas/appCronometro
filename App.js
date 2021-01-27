import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  render(){
    return(
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')} style={styles.cronometro}/>

        <Text style={styles.timer}>0.0</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Iniciar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Parar</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008B8B'
  },

  timer:{
    marginTop:-150
  }
})

export default App;