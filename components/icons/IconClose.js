import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const IconClose = () => {
  return (
    <TouchableOpacity>
      <Image
        source={require('../../assets/img/icons/closed.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default IconClose;

const styles = StyleSheet.create({
  icon: {
    width: 90,
    height: 90,
    
  },
});
