import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, ListItem, Button } from 'react-native-elements';
import { Block, Text, Switch } from '../components';
import { theme } from '../constants';
import Modal from "react-native-modal";

class AddPost extends Component {
    static navigationOptions = () => ({
      headerTitle: <Text center header droid style={{flex: 1}}></Text>,
    });

  constructor(props) {
    super(props);
    this.state = {
      isAllCitiesModalVisible: false,
      isAllSectionsModalVisible: false,
      whatsapp: true
    };
  }

  toggleAllCitiesModal = () => {
    this.setState({ isAllCitiesModalVisible: !this.state.isAllCitiesModalVisible });
  };

  toggleAllSectionsModal = () => {
    this.setState({ isAllSectionsModalVisible: !this.state.isAllSectionsModalVisible });
  };

  toggleWhatsapp = () => {
    this.setState({ whatsapp: !this.state.whatsapp });
  };

  renderAllCities() {
    const list = [
      {
        title: 'النماص',
      },
      {
        title: 'ابها',
      },
      {
        title: 'النماص',
      },
      {
        title: 'ابها',
      },
      {
        title: 'النماص',
      },
      {
        title: 'ابها',
      },
      {
        title: 'النماص',
      },
      {
        title: 'ابها',
      },
      {
        title: 'النماص',
      },
      {
        title: 'ابها',
      },
      {
        title: 'النماص',
      },
      {
        title: 'ابها',
      },
      {
        title: 'النماص',
      },
      {
        title: 'ابها',
      },
      {
        title: 'النماص',
      },
      {
        title: 'ابها',
      },
      {
        title: 'النماص',
      },
      {
        title: 'ابها',
      },
      {
        title: 'النماص',
      },
      {
        title: 'ابها',
      },
      {
        title: 'النماص',
      },
      {
        title: 'ابها',
      },
      {
        title: 'النماص',
      },
      {
        title: 'ابها',
      },
    ]

    return (
      <Block flex={1}>
        <Modal
        transparent={false}
        onBackButtonPress={this.toggleAllCitiesModal} 
        isVisible={this.state.isAllCitiesModalVisible}
        presentationStyle='formSheet'
        style={{ margin: 0 }}
        >
          <Block flex={1} style={{backgroundColor: theme.colors.tertiary}}>
            <Block flex={false} 
            margin={[
              theme.sizes.base,
              0,
              theme.sizes.base,
              0
            ]}>
              <Text center droid title>المدينة المفضلة</Text>
            </Block>

            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: 'white'}}> 
              {
                list.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.title}
                    onPress={this.toggleAllCitiesModal}
                    titleStyle={{
                      textAlign: 'left',
                      fontFamily: 'droid-arabic-kufi'
                    }}
                    chevron={
                      <Icon
                      name='chevron-left' />
                    }
                    bottomDivider
                  />
                ))
              }
            </ScrollView>
          </Block>
        </Modal>
      </Block>
    );
  }

  renderAllSections() {
    const list = [
      {
        title: 'السيارات',
      },
      {
        title: 'العقارات',
      },
      
    ]

    return (
      <Block flex={1}>
        <Modal
        transparent={false}
        onBackButtonPress={this.toggleAllSectionsModal} 
        isVisible={this.state.isAllSectionsModalVisible}
        presentationStyle='formSheet'
        style={{ margin: 0 }}
        >
          <Block flex={1} style={{backgroundColor: theme.colors.tertiary}}>
            <Block flex={false} 
            margin={[
              theme.sizes.base,
              0,
              theme.sizes.base,
              0
            ]}>
              <Text center droid title>قسم الاعلان</Text>
            </Block>

            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: 'white'}}> 
              {
                list.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.title}
                    onPress={this.toggleAllSectionsModal}
                    titleStyle={{
                      textAlign: 'left',
                      fontFamily: 'droid-arabic-kufi'
                    }}
                    bottomDivider
                  />
                ))
              }
            </ScrollView>
          </Block>
        </Modal>
      </Block>
    );
  }

  render() {
    return (
      <Block>
        <ScrollView showsVerticalScrollIndicator={false}> 
          <Input
            placeholder='العنوان'
            placeholderTextColor={theme.colors.gray}
            inputStyle={[styles.addNewPostInput, {height: 45}]}
            inputContainerStyle={styles.addNewPostContainer}
          />

          <Input
            placeholder='رقم الاتصال'
            placeholderTextColor={theme.colors.gray}
            inputStyle={[styles.addNewPostInput, {height: 45}]}
            inputContainerStyle={styles.addNewPostContainer}
            maxLength={10}
            keyboardType={'phone-pad'}
            textContentType={'telephoneNumber'}
          />

          <Input
            placeholder='وصف الاعلان'
            placeholderTextColor={theme.colors.gray}
            multiline={true}
            inputStyle={[styles.addNewPostInput, {height: 100}]}
            inputContainerStyle={styles.addNewPostContainer}
          />

          <Block margin={[0,10,0,10]}>
            <Block row>
              <Block>
                <Button 
                  title="المدينة"
                  onPress={this.toggleAllCitiesModal}
                  type="outline" 
                  icon={
                    <Icon
                      name="map"
                      size={20}
                      color={theme.colors.gray}
                    />
                  }
                  buttonStyle={styles.buttonStyle}
                  titleStyle={styles.buttonTitleStyle}
                />
              </Block>
              <Block>
                <Button 
                  title="القسم"
                  onPress={this.toggleAllSectionsModal}
                  type="outline" 
                  icon={
                    <Icon
                      name="shopping-bag"
                      size={20}
                      color={theme.colors.gray}
                    />
                  }
                  buttonStyle={styles.buttonStyle}
                  titleStyle={styles.buttonTitleStyle}
                />
              </Block>
              <Block>
                <Button 
                  title="الصور" 
                  type="outline" 
                  icon={
                    <Icon
                      name="image"
                      size={20}
                      color={theme.colors.gray}
                    />
                  }
                  buttonStyle={styles.buttonStyle}
                  titleStyle={styles.buttonTitleStyle}
                />
              </Block>
            </Block>

            <Block row margin={[10,10,10,5]}>
              <Switch value={this.state.whatsapp} onChange={this.toggleWhatsapp}/>
              <Text middle center droid body padding={[0,0,0,5]}>استقبال واتساب</Text>
            </Block>
            
            <Block>
                <Button 
                  title="اضافة الاعلان" 
                  icon={
                    <Icon
                      name="plus"
                      size={20}
                      color={theme.colors.black}
                    />
                  }
                  buttonStyle={styles.addPostButtonStyle}
                  titleStyle={styles.addPostButtonTitleStyle}
                />
              </Block>
          </Block>
        </ScrollView>
        <Block>
          {this.renderAllCities()}
          {this.renderAllSections()}
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  addNewPostInput: {
    textAlign: 'right',
    fontFamily: 'droid-arabic-kufi',
    fontSize: 14,
    paddingHorizontal: 5,
  },
  addNewPostContainer: {
    borderColor: theme.colors.gray,
    borderWidth: 1,
    margin: 6,
    borderRadius: theme.sizes.radius6,
  },
  buttonStyle:{
    borderWidth: 1,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    borderRadius: theme.sizes.radius6,
    margin: 6,
  },
  buttonTitleStyle:{
    fontFamily: 'droid-arabic-kufi',
    fontSize: theme.sizes.body,
    color: theme.colors.gray,
    marginLeft: 5
  },
  addPostButtonStyle:{
    borderWidth: 1,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.tertiary,
    borderRadius: theme.sizes.radius6,
    margin: 6,
  },
  addPostButtonTitleStyle:{
    fontFamily: 'droid-arabic-kufi',
    fontSize: theme.sizes.body,
    color: theme.colors.black,
    marginLeft: 5
  },
});


export default AddPost;
