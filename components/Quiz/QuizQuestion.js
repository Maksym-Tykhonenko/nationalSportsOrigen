import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Color} from '../../constants/colors';

const QuizQuestion = ({question, correctPerson}) => {
  // console.log(correctPerson)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{question}</Text>
      <Text style={styles.text}>{correctPerson}</Text>
    </View>
  );
};

export default QuizQuestion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.milk,
    padding: 10,
    borderRadius: 12,
    width: '100%',
    height: 100,
    justifyContent: 'center',
  },
  text: {
    color: Color.blue,
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
  },
});
