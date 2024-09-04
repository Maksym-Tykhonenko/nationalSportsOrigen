import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../constants/colors';

const {width} = Dimensions.get('screen');
const LOGO_SIZE = width * 0.25;

const GuessOptions = ({
  options,
  disabled,
  currentOption,
  correctOption,
  onPress,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [scale] = useState(new Animated.Value(1));

  const handlePress = item => {
    setSelectedOption(item);
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.3,
        duration: 350,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onPress(item);
      setSelectedOption(null);
    });
  };

  return (
    <>
      <View style={styles.container}>
        {options.map((item, i) => {
          const thisOption = item.club;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => handlePress(item.club)}
              disabled={disabled}
              style={[
                styles.optionBox,
                {
                  backgroundColor:
                    item.club == correctOption
                      ? Color.green + 90
                      : item.club == currentOption
                      ? Color.red + 90
                      : Color.milk + 20,
                },
              ]}>
              <Animated.View
                style={[
                  styles.option,
                  selectedOption === item.club && {transform: [{scale}]},
                ]}>
                <Text style={styles.text}>{item.club}</Text>
                {/* <Image
                  source={{uri: item.image}}
                  style={[styles.image]}
                  resizeMode="contain"
                /> */}
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default GuessOptions;

const styles = StyleSheet.create({
  optionBox: {
    // backgroundColor: Color.milk + 20,
    margin: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Color.milk,
    marginVertical: 15,
  },
  option: {
    // alignItems: 'center',
    marginHorizontal: 10,
    // padding: 20,
    // backgroundColor: Color.milk,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
    // width: '80%',
    // flexDirection: 'row',
    gap: 30,
    width: 300,
    // justifyContent: 'space-between',
    // borderRadius: 12,
    // overflow: 'hidden',
    paddingVertical: 25,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    // flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  image: {
    width: 105,
    height: 105,
    borderRadius: 12,
  },
  text: {
    color: Color.milk,
    fontWeight: '800',
    fontSize: 28,
    flexWrap: 'wrap',
    textAlign: 'center',
    // width: '40%',
    letterSpacing: 1,
  },
});
