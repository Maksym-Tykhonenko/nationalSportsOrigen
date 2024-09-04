import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {QuizBtn} from '../ui';
import {Color} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');
const TOP = height * 0.1;
const RIGHT = width * 0.15;

const InterestingFact = ({visible, close, bgImage, fact}) => {
  return (
    <Modal visible={visible} transparent={false} animationType="slide">
      <ImageBackground
        style={{flex: 1, backgroundColor: Color.blue, padding: 10}}
        source={bgImage}
        imageStyle={{opacity: 0.3}}
        resizeMode="cover">
        <SafeAreaView style={styles.safeArea}>
          <Text style={styles.header}>INTERESTING FACT</Text>
          <View style={styles.subView}>
            <Text style={{}}>{fact}</Text>
          </View>
        </SafeAreaView>
        <View style={{height: 70}}>
          <QuizBtn onPress={close}>CLOSE</QuizBtn>
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default InterestingFact;

const styles = StyleSheet.create({
  safeArea: {height: '80%', justifyContent: 'center', width: '100%'},
  header: {
    position: 'absolute',
    top: TOP,
    left: RIGHT,
    color: Color.milk,
    fontWeight: '700',
    fontSize: 28,
    textAlign: 'center',
  },
  subView: {
    backgroundColor: Color.milk,
    padding: 15,
    borderRadius: 12,
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    color: Color.blue,
    textAlign: 'center',
  },
});
