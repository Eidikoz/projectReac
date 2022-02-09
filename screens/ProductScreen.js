import React, {useState, useEffect} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
import { styles } from '../components/styles';

import axios from 'axios';

const IoniconsHeaderButton = props => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Register"
            iconName="person-add"
            onPress={() => alert('Registering')}
          />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const [product, setProduct] = useState([]);
  //useEffect when A Product is selected
  useEffect(() => {
    //getData from server
    const getData = async () => {
      const res = await axios.get('https://api.codingthailand.com/api/course');
      // alert(JSON.stringify(res.data.data[0].title));
      setProduct(res.data.data);
    };
    getData();

    // return () => {
    //   second;
    // };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
      // set the data form server
      data={product} 
      // Extract the key from the data with keyExtractor
      keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
};

export default ProductScreen;