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
        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        style={{width: 200, height: 200}}
      />
    </View>
  );
};

AppRegistry.registerComponent('AppFrasesDoDia', () => App);
