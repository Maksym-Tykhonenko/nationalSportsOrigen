import {StyleSheet, Text, View, Animated} from 'react-native';
import {useRef, useEffect, useState} from 'react';
import {BlueBg, MainImageBg} from '../components/ui';

const SaluteScreen = ({navigation}) => {
  const animationEffect = useRef(new Animated.Value(0)).current;
  const [fontSize, setFontSize] = useState(14);

  useEffect(() => {
    Animated.timing(animationEffect, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => navigation.replace('HomeScreen'));
  }, [animationEffect]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFontSize(prev => {
        if (prev < 36) {
          return prev + 0.3;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [navigation]);

  return (
    <MainImageBg>
      <BlueBg>
        <View style={styles.container}>
          <View>
            <Text style={[styles.text, {fontSize: fontSize}]}>
              Dive into the
            </Text>
            <Text style={[styles.text, {fontSize: fontSize}]}>
              world of sports with
            </Text>
          </View>
          <View>
            <Text style={[styles.text, {fontSize: fontSize + 5}]}>
              National
            </Text>
            <Text style={[styles.text, {fontSize: fontSize + 5}]}>
              Sports Guess
            </Text>
          </View>
        </View>
      </BlueBg>
    </MainImageBg>
  );
};

export default SaluteScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 60,
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    fontSize: 52,
    color: 'white',
    fontWeight: '800',
    // lineHeight: 100,
    textAlign: 'center',
  },
});
