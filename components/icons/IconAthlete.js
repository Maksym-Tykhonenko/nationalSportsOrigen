import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const IconAthlete = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('AthleteScreen')}>
      <Image
        source={require('../../assets/img/icons/athletics.png')}
        style={styles.iconStyle}
      />
    </TouchableOpacity>
  );
};

export default IconAthlete;

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    // width: '100%',
    tintColor: Color.milk,
    height: 40,
    width: 40,
    // alignSelf: 'flex-end',
    // marginRight: 40,
    // marginTop: 40,
    top: 40,
  },
});
