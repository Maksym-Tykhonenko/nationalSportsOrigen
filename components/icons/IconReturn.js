import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import {Color} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');
const MARGIN_BOTTOM = height * 0.1;
const RIGHT_MARGIN = width * 0.1;

const IconReturn = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: 'absolute',
        bottom: MARGIN_BOTTOM,
        right: RIGHT_MARGIN,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/img/icons/back.png')}
          style={{
            tintColor: Color.milk,
            width: 40,
            height: 40,
            // alignSelf: 'flex-end',
            // margin: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default IconReturn;

const styles = StyleSheet.create({});
