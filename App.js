import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      numero: 0,
      botao: 'Iniciar'
    };
    
    //Variavel do timer do relogio.
    this.timer = null;

    this.iniciar = this.iniciar.bind(this);
    this.parar = this.parar.bind(this);

  }

  iniciar(){

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'Iniciar'})
    }else{
      this.timer = setInterval(()=> {
        this.setState({numero: this.state.numero + 0.1, botao: 'Pausar'})
      }, 100);
    }
  }


  parar(){
    clearInterval(this.timer);
    this.timer = null;
    this.setState({numero: 0.0})
    if(this.state.botao = 'Pausar'){
      this.setState({botao: 'Iniciar'})
    }
  }


  render(){
    return(
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')} style={styles.cronometro}/>

        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
            <Text style={styles.btnText}>{this.state.botao}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btn} onPress={this.parar}>
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
    marginTop:-150,
    color: '#FFF',
    fontSize: 55,
    fontWeight: 'bold'
  },

  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },

  btnText:{
    fontSize: 20,
    color: '#FFF'
  },

  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:40,
    margin: 17,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#FFF',
    backgroundColor: '#40E0D0'
  }
})

export default App;