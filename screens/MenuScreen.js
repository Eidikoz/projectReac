import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import { styles } from '../components/styles';

import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from 'native-base';

const MenuScreen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <View>
        <Text
          style={{
            color: '#FFBCBC',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 20,
          }}>
          Main Menu
        </Text>
        {/* Native base code starts here */}
        <Content>
          {/* Home Page */}
          <ListItem
            icon
            style={{marginBottom: 10, marginTop: 10}}
            onPress={() => {
              navigation.navigate('HomeStack');
            }}>
            <Left>
              <Button style={{backgroundColor: '#FF9501'}}>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text>Home Page</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          {/* Product Page */}
          <ListItem
            icon
            onPress={() => {
              navigation.navigate('ProductStack');
            }}>
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
                <Icon active name="archive-outline" />
              </Button>
            </Left>
            <Body>
              <Text>Product</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </View>
    </ScrollView>
  );
};

export default MenuScreen;