import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { Block, Text } from '../components'
import { theme } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';

class ForgetPassword extends Component {
  static navigationOptions = {
    title: 'استرجاع كلمة السر',
    headerTitleStyle: {
      fontSize: theme.sizes.title,
      fontFamily: 'droid-arabic-kufi',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Block flex={1} margin={[20,20,0,20]}>
        <Input
          placeholder='البريد الالكتروني'
          keyboardType='email-address'
          textContentType='emailAddress'
          containerStyle={{
            marginBottom: 15
          }}
          inputStyle={{
            paddingRight: 10,
            paddingLeft: 10,
            textAlign: 'right',
            fontFamily: 'droid-arabic-kufi',
            fontSize: theme.sizes.body
          }}
          inputContainerStyle={{
            borderColor: theme.colors.gray,
            borderWidth: 1,
            borderRadius: theme.sizes.radius6 * 2
          }}
          errorStyle={{ color: 'red' }}
          //errorMessage='ENTER A VALID ERROR HERE'
          leftIcon={
            <Icon
              name='user'
              size={20}
              color={theme.colors.gray}
            />
          }
          
        />

        <Block margin={[0,10,0,10]}>
          <Button
            title="استرجاع"
            buttonStyle={{
              borderRadius: theme.sizes.radius6 * 2,
              backgroundColor: theme.colors.tertiary
            }}
            titleStyle={{
              fontFamily: 'droid-arabic-kufi',
              color: theme.colors.black,
              fontSize: theme.sizes.header
            }}
          />
          </Block>

      </Block>
    );
  }
}

export default ForgetPassword;
