import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../constants';
import { Block, Text } from '../components'

import Home from '../screens/Home';
import Messages from '../screens/Messages';
import Favourite from '../screens/Favourite';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import Help from '../screens/Help';
import Terms from '../screens/Terms';
import AddPost from '../screens/AddPost';


const CustomDrawerContentComponent = (props) => {
  return (
  <Block>
    <Block middle center flex={false} style={styles.header}>
      <Image source={require('../assets/images/avatar.png')} 
        style={{ height: 50, width: 50 }}
      />
    </Block>
    <Block flex={false} style={{ borderBottomWidth: 1, borderColor: theme.colors.gray2 }}>
      <DrawerItems {...props} 
        getLabel = {(scene) => (
          <Block margin={[10,0,10,0]}>
            <Text droid left title>{props.getLabel(scene)}</Text>
          </Block>
        )}
      /> 
    </Block>
    <Block margin={[20,0,0,25]}>
      <Text droid left header onPress={() => props.navigation.navigate('Terms')}>الشروط والاحكام</Text>
    </Block>
      
  </Block>
  )
};

const AppMenu = createDrawerNavigator({
  الحراج: Home,
  الرسائل :Messages,
  المفضلة :Favourite,
  ملفي :Profile,
  الاعدادات: Settings,
  المساعدة: Help,
}, {
  initialRouteName: 'الحراج',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentOptions: {
    activeTintColor: theme.colors.primary,
  },
  navigationOptions: {
    header: null,
  },
    
});

const RootStackNavigator = createStackNavigator(
  {
    AppMenu: AppMenu,
    Home: Home,
    AddPost: AddPost,
    Terms: Terms
  }, 
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 3,
        backgroundColor: theme.colors.tertiary, // or 'white
        borderBottomColor: "transparent",
        elevation: 0, // for android
      },
      headerBackImage: <Icon name='arrow-right' size={24} color={theme.colors.white} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base,
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: theme.sizes.base,
      },
    }
  }
);

const styles = {
  rotate180: {
    transform: [{ rotate: '180deg' }]
  },
  titleTextAlign: {
    textAlign: 'center',
    flex: 1
  },
  header: {
    height: 130
  }
}

export default createAppContainer(RootStackNavigator);