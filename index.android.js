import React from 'react';
import { Text, View, Image, AppRegistry } from 'react-native';

const Style = {
  main: {
    paddingTop: 40
  }
};


const App = () => {
  const { main } = Style;

  return (
    <View style={main}>
      <Image
        source={ require('./imgs/test.png') }
      />
    </View>
  );
};

AppRegistry.registerComponent('AppFrasesDoDia', () => App);
