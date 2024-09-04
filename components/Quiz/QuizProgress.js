import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';
import {Color} from '../../constants/colors';

const {width} = Dimensions.get('screen');
const CONTAINER_WIDTH = width * 0.75;

const QuizProgress = ({progress, length, questionNum}) => {
  const animateProgress = progress.interpolate({
    inputRange: [0, length],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.rootContainer}>
      <View style={styles.numContainer}>
        <Text style={{color: Color.blue}}>{questionNum}</Text>
      </View>
      <View style={styles.progressContainer}>
        <View
          style={{
            width: CONTAINER_WIDTH,
          }}>
          <Animated.View
            style={[
              styles.progressBar,
              {width: animateProgress},
            ]}></Animated.View>
        </View>
      </View>
      <View style={styles.numContainer}>
        <Text style={{color: Color.blue}}>{length}</Text>
      </View>
    </View>
  );
};

export default QuizProgress;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: Color.milk,
    // marginVertical: 8,
    borderRadius: 22,
  },
  progressContainer: {
    height: 35,
    borderRadius: 18,
    overflow: 'hidden',
    marginVertical: 10,
    // backgroundColor: Color.milk,
    // justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    borderRadius: 12,
    backgroundColor: Color.milk,
    height: 20,
  },
  numContainer: {
    backgroundColor: Color.blue,
    // padding: 5,
    borderRadius: 50,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.milk,
  },
});
