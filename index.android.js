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
  let randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 5);

  let phrases = Array();
  phrases[0] = 'A persistência é o caminho do êxito.';
  phrases[1] = 'Se algo é difícil de fazer, então não vale a pena ser feito!';
  phrases[2] = 'A culpa é minha e eu coloco ela em quem eu quiser!';
  phrases[3] = 'Álcool... A causa e solução de todos os problemas.';
  phrases[4] = 'Eu não estava mentindo! Estava escrevendo ficção com a boca.';

  let phraseSelected = phrases[randomNumber];

}

const App = () => {
  const { main, button, buttonText } = Style;

  return (
    <View style={main}>
      <Image source={require('./imgs/logo.png')}/>

      <TouchableOpacity style={button} onPress={buttonPressed}>
        <Text style={buttonText}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('AppFrasesDoDia', () => App);
