import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const Style = {
  main: {
    paddingTop: 40
  }
};

const botaoPressionado = () => {
  alert("Botão pressionado");
}

const App = () => {
  const { main } = Style;

  return (
    <View style={main}>
      <Button
        onPress={botaoPressionado}
        title="Clique aqui"
        color="#841584"
        accessabilityLabel="Clique para visualizar"
      />
    </View>
  );
};

AppRegistry.registerComponent('AppFrasesDoDia', () => App);
