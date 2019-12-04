import React, { Component } from 'react';
import { Animated, Dimensions, FlatList, Image, Modal, ScrollView, StyleSheet } from 'react-native';

import { Button, Block, Text } from '../components';
import { theme } from '../constants';

const { width, height } = Dimensions.get('window');

class Intro extends Component {
    static navigationOptions = {
        header: null,
    }

    scrollX = new Animated.Value(0);

    state = {
        showTerms: false,
    }

    renderTermsService() {
        return(
            <Modal animationType="slide" visible={this.state.showTerms}>
                <Block padding={[theme.sizes.padding * 2 , theme.sizes.padding, 13]} space="between">
                    <Text h2 light center>شروط الاستخدام</Text>
                    <ScrollView style={{ paddingVertical: theme.sizes.padding }}>
                        <Text caption gray height={18}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text caption gray height={18}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text caption gray height={18}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text caption gray height={18}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text caption gray height={18}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text caption gray height={18}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </ScrollView>
                    <Button color="tertiary" style={{borderRadius: theme.sizes.radius6, height: theme.sizes.base * 3}} onPress={() => this.setState({ showTerms: false })}>
                        <Text center droid black>اتفهم ذلك!</Text>
                    </Button>
                </Block>
            </Modal>
        )
    }
    
    renderIllustrations(){
        const { illustrations } = this.props;

        return(
            <FlatList 
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToAlignment="center"
                data={illustrations}
                extraData={this.state}
                keyExtractor={(item, index) => `${item.id}`}
                renderItem={({ item }) => (
                  <Block middle center flex={0.8}>
                    <Image 
                        source={item.source}
                        resizeMode="contain"
                        style={{ width, height: height / 3, overflow: 'visible' }}
                    />
                    <Block style={styles.captionContainer}>
                    <Text center bold title primary>{item.title}</Text>
                    <Text center medium gray>{item.caption}</Text>
                    </Block>
                  </Block>
                )}
                onScroll={
                    Animated.event([{
                        nativeEvent: { contentOffset: { x: this.scrollX } }
                    }])
                }
            />
        )
    }

    renderSteps(){
        const { illustrations } = this.props;
        const stepPosition = Animated.divide(this.scrollX, width);
        
        return(
            <Block row center middle style={styles.stepsContainer}>
                {illustrations.map((item, index) => {
                    const opacity = stepPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.4, 1, 0.4],
                        extrapolate: 'extend'
                    });
                    return(
                        <Block 
                            animated 
                            flex={false} 
                            key={`step-${index}`} 
                            color="secondary" 
                            style={[ styles.steps, { opacity } ]} 
                        />
                    )
                })}
            </Block>
        )
    }

  render() {
    const { navigation } = this.props;

    return (
      <Block style={{ paddingTop: theme.sizes.base }}>
        <Block flex={1} center middle>
            {this.renderIllustrations()}
            {this.renderSteps()}
        </Block>
        <Block column middle flex={0.3}>
           <Block row style={{justifyContent: 'space-evenly'}}>
                <Button style={styles.button} color="tertiary" onPress={() => navigation.navigate('Login')}>
                    <Text center droid black>دخول</Text>
                </Button>
                <Button style={styles.button} shadow onPress={() => navigation.navigate('Singup')}>
                    <Text center droid black>تسجيل جديد</Text>
                </Button>
           </Block>
            <Block>
                <Button onPress={() => this.setState({ showTerms: true })}>
                    <Text center caption gray droid>بالمتابعة انت توافق على شروط واحكام الاستخدام.</Text>
                </Button>
            </Block>
        </Block>
        
        {this.renderTermsService()}
      </Block>
    );
  }
}

Intro.defaultProps = {
    illustrations: [
        { id: 1, source: require('../assets/images/1.png'), title: "Search Doctors", caption: "Get list of best doctor nearby you" },
        { id: 3, source: require('../assets/images/2.png'), title: "Book Diagonostic", caption: "Search and book diagnostic test" },
    ]
};

const styles = StyleSheet.create({
    stepsContainer: {
        position: 'absolute',
        bottom: theme.sizes.base * 2,
    },
    captionContainer: {
      position: 'absolute',
      bottom: theme.sizes.base * 4,
      right: 0,
      left: 0,
    },
    steps: {
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 2.5,
    },
    button: {
        width: 140,
        borderRadius: theme.sizes.radius6,
        height: theme.sizes.base * 3
    },
})
export default Intro;
