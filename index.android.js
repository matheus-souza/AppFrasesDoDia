import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const Style = {
  main: {
    flex: 1,
    backgroundColor: 'cornflowerblue'
  },
  top: {
    flex: 2,
    backgroundColor: 'brown'
  },
  content: {
    flex: 8,
    backgroundColor: 'darkblue'
  },
  footer: {
    flex: 1,
    backgroundColor: 'orangered'
  }
};

const App = () => {
  const { main, top, content, footer } = Style;

  return (
    <View style={main}>
      <Text style={top}>Topo</Text>
      <Text style={content}>Conteudo</Text>
      <Text style={footer}>Rodape</Text>
    </View>
  );
};

AppRegistry.registerComponent('AppFrasesDoDia', () => App);
