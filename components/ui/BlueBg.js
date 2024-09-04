import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Color} from '../../constants/colors';

const BlueBg = ({children}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

export default BlueBg;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.blue,
    flex: 1,
    // opacity: 0.9,
  },
});
