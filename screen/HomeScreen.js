import {View, Dimensions} from 'react-native';
import IconAthlete from '../components/icons/IconAthlete';
import {IconBall} from '../components/icons';
import {MainBg} from '../components/layout';

const {height, width} = Dimensions.get('screen');
const MARGIN_TOP = height * 0.01;
const WIDTH = width * 0.2;

const HomeScreen = () => {
  return (
    <MainBg>
      <View style={{position: 'absolute', top: MARGIN_TOP, right: WIDTH}}>
        <IconAthlete />
      </View>
      <View>
        <IconBall screen={'GameScreen'}>GAME</IconBall>
        <IconBall screen={'RulesScreen'}>RULES</IconBall>
      </View>
    </MainBg>
  );
};

export default HomeScreen;
