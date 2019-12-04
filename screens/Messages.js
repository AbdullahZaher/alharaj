import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ListItem, Badge } from 'react-native-elements'
import { Block, Text } from '../components'
import { theme } from '../constants';

class Messages extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/icons/message.png')} 
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
    const list = [
      {
        name: 'Jim Catlin',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'شكرا لحسن تعاملك...'
      },
      {
        name: 'ناصر محمد',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'بخصوص السلعة رقم 897345998...'
      },
    ];

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
            <Text droid left h3 black>الرسائل</Text>
          </Block>
        </Block>

        <Block>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={
                  <Block left>
                    <Text droid body>{l.name}</Text>
                  </Block>
                }
                subtitle={
                  <Block left>
                    <Text droid small>{l.subtitle}</Text>
                  </Block>
                }
                contentContainerStyle={{
                  height: 45
                }}
                bottomDivider
              />
            ))
          }
        </Block>

      </Block>
    );
  }
}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
});

export default Messages;
