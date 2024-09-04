import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../constants/colors';

const IconClick = () => {
  return (
    // <TouchableOpacity>
      <Image
        source={require('../../assets/img/icons/touch.png')}
        style={styles.icon}
      />
    // </TouchableOpacity>
  );
};

export default IconClick;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    tintColor: Color.brown,
  },
});
