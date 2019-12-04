import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Block, Text, Divider } from '../components'
import { theme } from '../constants';

class Favourite extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/icons/heart.png')} 
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
            <Text droid left h3 black>المفضلة</Text>
          </Block>
        </Block>


        <ScrollView>
          <TouchableOpacity style={styles.harajContainer}>
            <Block row>
              <Block>
                <Block column>
                  <Block middle>
                  <Text droid left header padding={10}>تجربة عنوان لمنتج معروض</Text>
                  </Block>

                  <Block row padding={[0,10,0,10]}>
                    <Block row>
                      <Block middle padding={[0,5,0,0]} flex={false}>
                        <Text droid left caption gray>
                          <Icon name='map-pin' />
                        </Text>
                      </Block>
                      <Block middle>
                        <Text droid left caption gray>
                          الدمام
                        </Text>
                      </Block>
                    </Block>

                    <Block row>
                      <Block middle padding={[0,5,0,0]} flex={false}>
                        <Text droid left caption gray>
                          <Icon name='clock' />
                        </Text>
                      </Block>
                      <Block middle>
                        <Text droid left caption gray>
                          منذ ساعة
                        </Text>
                      </Block>
                    </Block>

                    <Block row>
                      <Block middle padding={[0,5,0,0]} flex={false}>
                        <Text droid left caption gray>
                          <Icon name='user' />
                        </Text>
                      </Block>
                      <Block middle>
                        <Text droid left caption gray>
                          عبدالله الشهري
                        </Text>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block flex={false}>
                <Image style={{ height: 85, width: 85 }} source={{uri: 'https://source.unsplash.com/1024x768/?nature'}}/>
              </Block>
            </Block>
          </TouchableOpacity>

          <TouchableOpacity style={styles.harajContainer}>
            <Block row>
              <Block>
                <Block column>
                  <Block middle>
                  <Text droid left header padding={10}>تجربة عنوان لمنتج معروض</Text>
                  </Block>

                  <Block row padding={[0,10,0,10]}>
                    <Block row>
                      <Block middle padding={[0,5,0,0]} flex={false}>
                        <Text droid left caption gray>
                          <Icon name='map-pin' />
                        </Text>
                      </Block>
                      <Block middle>
                        <Text droid left caption gray>
                          الدمام
                        </Text>
                      </Block>
                    </Block>

                    <Block row>
                      <Block middle padding={[0,5,0,0]} flex={false}>
                        <Text droid left caption gray>
                          <Icon name='clock' />
                        </Text>
                      </Block>
                      <Block middle>
                        <Text droid left caption gray>
                          منذ ساعة
                        </Text>
                      </Block>
                    </Block>

                    <Block row>
                      <Block middle padding={[0,5,0,0]} flex={false}>
                        <Text droid left caption gray>
                          <Icon name='user' />
                        </Text>
                      </Block>
                      <Block middle>
                        <Text droid left caption gray>
                          عبدالله الشهري
                        </Text>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block flex={false}>
                <Image style={{ height: 85, width: 85 }} source={{uri: 'https://source.unsplash.com/1024x768/?nature'}}/>
              </Block>
            </Block>
          </TouchableOpacity>
          <Divider />
        </ScrollView>
        

      </Block>
    );
  }
}

const styles = StyleSheet.create({
  rotate180: {
    transform: [{ rotate: '180deg' }]
  },
  harajContainer: {
    borderTopColor: theme.colors.gray3,
    borderTopWidth: 1
  },
});

export default Favourite;
