import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import {Color} from '../../constants/colors';
import {useSportContext} from '../../store/sport_context';

const {height, width} = Dimensions.get('screen');
const MARGIN_BOTTOM = height * 0.1;
const LEFT_MARGIN = width * 0.1;

const IconReboot = ({mode}) => {
  const {rebootGameHandler} = useSportContext();
  function rebootGameCall() {
    rebootGameHandler(mode);
  }
  return (
    <View
      style={{
        position: 'absolute',
        bottom: MARGIN_BOTTOM,
        left: LEFT_MARGIN,
      }}>
      <TouchableOpacity onPress={rebootGameCall}>
        <Image
          source={require('../../assets/img/icons/resetGame.png')}
          style={{
            tintColor: Color.milk,
            width: 40,
            height: 40,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default IconReboot;

const styles = StyleSheet.create({});
