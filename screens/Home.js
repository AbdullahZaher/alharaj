import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { SearchBar, Button, ListItem, Input } from 'react-native-elements';
import { ActivityIndicator, Animated, Dimensions, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Block, Text, Badge, Divider, Spinner } from '../components'
import { theme } from '../constants';
import { SliderBox } from 'react-native-image-slider-box';
import Modal from "react-native-modal";

const { width, height } = Dimensions.get('window');

class Home extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../assets/icons/store.png')} 
      style={{ height: 24, width: 24 }}
      />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      isAllCitiesModalVisible: false,
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree'
      ],
      categories: [
        { id: 1, source: 'https://source.unsplash.com/1024x768/?nature', title: "تجربة", caption: "", valid: "" },
        { id: 2, source: 'https://source.unsplash.com/1024x768/?water', title: "تجربة ", caption: "", valid: "" },
        { id: 3, source: 'https://source.unsplash.com/1024x768/?baby', title: "تجربة", caption: "", valid: "" },
        { id: 4, source: 'https://source.unsplash.com/1024x768/?tree', title: "تجربة", caption: "", valid: "" },
        { id: 5, source: 'https://source.unsplash.com/1024x768/?sea', title: "تجربة", caption: "", valid: "" },
        { id: 6, source: 'https://source.unsplash.com/1024x768/?football', title: "تجربة", caption: "", valid: "" },
        { id: 7, source: 'https://source.unsplash.com/1024x768/?sport', title: "تجربة", caption: "", valid: "" },
        { id: 8, source: 'https://source.unsplash.com/1024x768/?car', title: "تجربة", caption: "", valid: "" },
      ],
    };
  }

  updateSearch = search => {
    this.setState({ search });
  };

  toggleAllCitiesModal = () => {
    this.setState({ isAllCitiesModalVisible: !this.state.isAllCitiesModalVisible });
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

  render() {
    const { navigation } = this.props;
    const { search, images, categories } = this.state;

    return (
      <Block>
        <Block color='tertiary' padding={[theme.sizes.base * 2,0,5,0]} flex={false} row>
          <Block middle center wrap margin={[0,10,0,20]} flex={false}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image source={require('../assets/icons/menu1.png')} 
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity>
          </Block>
          <Block>
            <SearchBar
              placeholder='مالذي تبحث عنه؟'
              onChangeText={this.updateSearch}
              value={search}
              containerStyle={{
                backgroundColor: theme.colors.tertiary,
                borderBottomColor: theme.colors.tertiary,
                borderTopColor: theme.colors.tertiary,
              }}
              inputStyle={{
                textAlign: 'right',
                fontFamily: 'droid-arabic-kufi',
                fontSize: 14,
              }}
              inputContainerStyle={{
                backgroundColor: theme.colors.white,
                borderRadius: theme.sizes.radius6 * 3,
              }}
            />
          </Block>
        </Block>
        

        <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
          <Block>
            <SliderBox
                images={images}
                sliderBoxHeight={155}
                dotColor={theme.colors.tertiary}
                inactiveDotColor="#90A4AE"
                circleLoop
                dotStyle={{
                  width: 8,
                  height: 8,
                  borderRadius: 5,
                  marginHorizontal: 2.5,
                }}
            />
          </Block>

          <Divider height={4} />

          <Block>
            <Block row space="between"  margin={[theme.sizes.base]}>
              <Text title gary droid>
                التصنيفات
              </Text>
              <TouchableOpacity>
                <Text caption primary droid>
                  الكل <Icon name="arrow-left" />
                </Text>
              </TouchableOpacity>
            </Block>

            <FlatList 
              horizontal
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              snapToAlignment="center"
              data={categories}
              extraData={this.state}
              keyExtractor={(item, index) => `${item.id}`}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Block margin={[3,0,0,16]} center middle style={styles.category}>
                    <Badge size={70} color={theme.colors.tertiary}>
                      <Image style={styles.categoryIcon} source={{uri: item.source}}/>
                    </Badge>
                    <Text black droid caption>{item.title}</Text>
                  </Block>
                </TouchableOpacity>
              )}
              onScroll={
                  Animated.event([{
                      nativeEvent: { contentOffset: { x: this.scrollX } }
                  }])
              }
              />
          </Block>

          <Divider height={4} margin={[theme.sizes.base,0,0,0]} />

          <Block>
            <Block row space="between"  margin={[theme.sizes.base]}>
              <Text title gary droid>
                افضل الاختيارات
              </Text>
              <TouchableOpacity>
                <Text caption primary droid>
                  الكل <Icon name="arrow-left" />
                </Text>
              </TouchableOpacity>
            </Block>
            
            <FlatList 
              horizontal
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              snapToAlignment="center"
              data={categories}
              extraData={this.state}
              keyExtractor={(item, index) => `${item.id}`}
              renderItem={({ item }) => (
                <Block>
                  <Block column margin={[0,0,0,8]} style={styles.bestChoiceContainer}>
                    <TouchableOpacity>
                      <Block right>
                        <Image source={require('../assets/icons/like.png')} 
                          style={styles.bestChoiceHeartIcon}
                        />
                      </Block>
                    </TouchableOpacity>
                    <Block>
                      <TouchableOpacity>
                        <Image style={styles.bestChoiceImage} source={{uri: item.source}} />
                      </TouchableOpacity>
                    </Block>
                    <Block>
                      <TouchableOpacity>
                        <Text left droid padding={4}>{item.title}</Text>
                      </TouchableOpacity>
                    </Block>
                  </Block>
                </Block>
              )}
              onScroll={
                Animated.event([{
                  nativeEvent: { contentOffset: { x: this.scrollX } }
                }])
              }
              style={{ marginLeft: 6 }}
              />

          </Block>

          <Divider height={4} margin={[theme.sizes.base,0,0,0]} />

          <Block>
            <Block row space="between">
              <Block flex={false}>
                <Button 
                  title="اضف اعلان"
                  type="outline"
                  onPress={() => navigation.navigate('AddPost')}
                  icon={
                    <Icon
                      name="plus"
                      size={20}
                      color={theme.colors.black}
                    />
                  }
                  buttonStyle={styles.addNewPostButton}
                  titleStyle={styles.addNewPostTitleButton}
                />
              </Block>
              
              <Block row flex={false}>
                <Button 
                  title="موقعي"
                  type="clear"
                  icon={
                    <Icon
                      name="map-pin"
                      size={theme.sizes.body}
                      color={theme.colors.black}
                    />
                  }
                  buttonStyle={{marginVertical: theme.sizes.base / 2}}
                  titleStyle={styles.addNewPostTitleButton}
                />
              
                <Button 
                  title="كل المدن"
                  type="outline"
                  onPress={this.toggleAllCitiesModal}
                  icon={
                    <Icon
                      name="chevron-down"
                      size={20}
                      color={theme.colors.black}
                    />
                  }
                  buttonStyle={{margin: theme.sizes.base / 2, borderColor: theme.colors.gray2}}
                  titleStyle={styles.addNewPostTitleButton}
                />
              </Block>
            </Block>
            

            <Block>
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

              
            </Block>

            {this.renderAllCities()}
          </Block>

          <Divider height={4} />

        </ScrollView>

      </Block>
    );
  }
}

const styles = StyleSheet.create({
  rotate180: {
    transform: [{ rotate: '180deg' }]
  },
  category: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 1.1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryIcon: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    borderColor: theme.colors.black,
    borderWidth: 2
  },
  bestChoiceContainer: {
    borderWidth: StyleSheet.hairlineWidth, 
    borderColor: theme.colors.gray2,
    width: 160
  },
  bestChoiceImage: {
    height: 200,
    width: 159,
  },
  bestChoiceHeartIcon: {
    margin: 6,
    height: 16,
    width: 16,
    opacity: 0.7
  },
  bestChoiceTitle: {
    padding: 4,
    fontSize: 18,
    color: theme.colors.gray2
  },
  citiesPickerContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.gray2,
    height: 25, 
    width: 100,
  },
  harajContainer: {
    borderTopColor: theme.colors.gray3,
    borderTopWidth: 1
  },
  addNewPostButton: {
    //borderWidth: 2,
    borderColor: theme.colors.tertiary,
    backgroundColor: theme.colors.tertiary,
    borderRadius: theme.sizes.radius6,
    margin: theme.sizes.base / 2,
  },
  addNewPostTitleButton: {
    fontFamily: 'droid-arabic-kufi',
    fontSize: theme.sizes.body,
    color: theme.colors.black,
    marginLeft: 5
  },
  addNewPostInput: {
    textAlign: 'right',
    fontFamily: 'droid-arabic-kufi',
    fontSize: 14,
  }
});

export default Home;
