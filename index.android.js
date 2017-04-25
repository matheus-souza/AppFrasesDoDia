import React from 'react';
import { Text, View, TouchableOpacity, AppRegistry } from 'react-native';

const Style = {
  main: {
    paddingTop: 40
  },
  button: {
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.4
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
};

const botaoPressionado = () => {
  alert("Botão pressionado");
}

const App = () => {
  const { main, button, buttonText } = Style;

  return (
    <View style={main}>
      <TouchableOpacity style={button}>
        <Text style={buttonText}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('AppFrasesDoDia', () => App);
