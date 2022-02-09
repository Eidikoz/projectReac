import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { styles } from '../components/styles';

const AboutScreen = ({route}) => {
  const {email} = route.params;
  return (
    <View style={styles.container}>
      <Text>About Me</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

export default AboutScreen;