import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Color} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const IconBall = ({screen, children, mode}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${screen}`, mode)}
      activeOpacity={0.5}
      style={styles.btnStyle}>
      <Image
        source={require('../../assets/img/icons/ball.png')}
        style={styles.iconStyle}
      />
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default IconBall;

const styles = StyleSheet.create({
  iconStyle: {
    tintColor: Color.brown,
    height: 140,
    width: 140,
  },
  text: {
    position: 'absolute',
    color: Color.milk,
    fontWeight: '900',
    fontSize: 34,
  },
  btnStyle: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
});
