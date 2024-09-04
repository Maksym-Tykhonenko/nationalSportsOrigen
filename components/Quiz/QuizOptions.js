import {StyleSheet, Text, TouchableOpacity, View, Animated} from 'react-native';
import {useState} from 'react';
import {Color} from '../../constants/colors';

const QuizOptions = ({
  options,
  currentOption,
  onPress,
  disable,
  correctOption,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [scale] = useState(new Animated.Value(1));

  const handlePress = item => {
    setSelectedOption(item);
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.2,
        duration: 150,
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
    // <View style={styles.container}>
    //   {options.map((item, i) => {
    //     return (
    //       <TouchableOpacity
    //         key={i}
    //         style={styles.option}
    //         // onPress={() => onPress(item)}
    //         onPress={() => handlePress(item)}
    //         disabled={disable}>
    //         {/* <Text style={styles.text}>{item}</Text> */}
    //         <Animated.View style={[styles.option, { transform: [{ scale }] }]}>
    //         <Text style={styles.text}>{item}</Text>
    //       </Animated.View>
    //       </TouchableOpacity>
    //     );
    //   })}
    // </View>
    <View style={styles.container}>
      {options.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => handlePress(item)}
          disabled={disable}>
          <Animated.View
            style={[
              styles.option,
              selectedOption === item && {transform: [{scale}]},
              {
                backgroundColor:
                  item == correctOption
                    ? Color.green
                    : item == currentOption
                    ? Color.red
                    : Color.milk,
              },
            ]}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    item == correctOption
                      ? Color.blue
                      : item == currentOption
                      ? Color.blue
                      : Color.blue,
                },
              ]}>
              {item}
            </Text>
          </Animated.View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuizOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    marginHorizontal: 20,
  },
  option: {
    marginHorizontal: 10,
    padding: 20,
    // backgroundColor: Color.milk,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 15,
    // width: '80%',
  },
  text: {
    // color: Color.blue,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
