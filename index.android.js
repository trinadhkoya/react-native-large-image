import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';

import SmallImageView from './src/SmallImageView'
console.disableYellowBox=true;

export default class photoViewer extends Component {
  render() {
    return (
        <View style={{flex:1}}>
          <SmallImageView />
        </View>
    );
  }
}

AppRegistry.registerComponent('photoViewer', () => photoViewer);
