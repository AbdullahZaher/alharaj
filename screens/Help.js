import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Block, Text } from '../components'
import { theme } from '../constants';

class Help extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/icons/about.png')} 
      style={{ height: 24, width: 24 }}
      />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block>
        <Block color='tertiary' padding={[theme.sizes.base * 2,0,5,0]} flex={false} row>
        <Block middle center wrap margin={[10,10,5,20]} flex={false}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image source={require('../assets/icons/menu1.png')} 
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity>
          </Block>
          <Block margin={[10,10,5,0]}>
            <Text droid left h3 black>المساعدة</Text>
          </Block>
        </Block>

      </Block>
    );
  }
}

const styles = StyleSheet.create({
  rotate180: {
    transform: [{ rotate: '180deg' }]
  },
});

export default Help;
