import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Component } from 'react/cjs/react.production.min';
import { styles } from '../components/styles';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={styles.container}>
        <Text style={styles.textCenterStyle}>You are on profile screen</Text>
      </View>
      <Text style={styles.textBottomStyle}>
          www.tni.ac.th
        </Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;