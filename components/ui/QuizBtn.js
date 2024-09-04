import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Color} from '../../constants/colors';

const QuizBtn = ({children, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default QuizBtn;

const styles = StyleSheet.create({
  text: {
    color: Color.milk,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  btn: {
    borderWidth: 1,
    flex: 1,
    borderColor: Color.milk,
    borderRadius: 8,
    backgroundColor: Color.ocean,
    paddingVertical: 8,
    // marginBottom:5
    marginVertical: 15,
  },
});
