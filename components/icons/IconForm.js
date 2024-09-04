import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';

const IconForm = () => {
  return (
    <View>
      <Image
        source={require('../../assets/img/icons/form.jpg')}
        style={styles.icon}
      />
    </View>
  );
};

export default IconForm;

const styles = StyleSheet.create({
  icon: {
    width: 120,
    height: 120,
  },
});
