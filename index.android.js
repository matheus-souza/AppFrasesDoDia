import React from 'react';
import { Text, View, Image, TouchableOpacity, AppRegistry } from 'react-native';

const Style = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const buttonPressed = () => {

}

const App = () => {
  const { main, button, buttonText } = Style;

  return (
    <View style={main}>
      <Image source={require('./imgs/logo.png')}/>

      <TouchableOpacity style={button}>
        <Text style={buttonText}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('AppFrasesDoDia', () => App);
