import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Color} from '../../constants/colors';

const IconTrophy = () => {
  return (
    <TouchableOpacity>
      <Image
        source={require('../../assets/img/icons/trophy.png')}
        style={{width: 120, height: 120}}
      />
    </TouchableOpacity>
  );
};

export default IconTrophy;

const styles = StyleSheet.create({});
