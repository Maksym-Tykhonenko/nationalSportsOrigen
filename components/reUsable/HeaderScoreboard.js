import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../constants/colors';

const HeaderScoreboard = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default HeaderScoreboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.milk + 30,
    borderRadius: 12,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: '700',
    fontSize: 30,
    color: Color.milk,
    // textAlign: 'center',
    paddingVertical: 10,
  },
});
