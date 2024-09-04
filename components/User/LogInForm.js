import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {IconForm} from '../icons';
import {Color} from '../../constants/colors';

const LogInForm = ({isUserCreated}) => {
    
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.subText}>LogIn Form</Text>
        <IconForm />
        <TextInput />
      </View>
    </View>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  subText: {color: Color.blue, fontSize: 22, fontWeight: '600'},
  container: {
    backgroundColor: Color.white,
    padding: 15,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
