import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Color} from '../../constants/colors';

const FormBtn = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default FormBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.blue,
    padding: 10,
    flex: 1,
    borderRadius: 12,
  },
  text: {
    color: Color.milk,
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 2,
    fontSize: 18,
  },
});
