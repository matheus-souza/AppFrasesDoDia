import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const Style = {
  textStyle: {
    fontSize: 40,
    backgroundColor: '#4bad32',
    height: 60,
    width: 60
  },
  viewStyle: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
};

const App = () => {
  const { textStyle, viewStyle } = Style;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}></Text>
    </View>
  );
};

AppRegistry.registerComponent('AppFrasesDoDia', () => App);
