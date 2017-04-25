import React from 'react';
import { Text, View, Image, AppRegistry } from 'react-native';

const Style = {
  main: {
    paddingTop: 40
  },
  image: {
    justifyContent: 'flex-end',
    paddingBottom: 5,
    alignItems: 'center'
  }
};


const App = () => {
  const { main, image } = Style;

  return (
    <View style={main}>
      <Image style={image} source={ require('./imgs/test.png') } >
        <Text>Legenda da foto</Text>
      </Image>
    </View>
  );
};

AppRegistry.registerComponent('AppFrasesDoDia', () => App);
