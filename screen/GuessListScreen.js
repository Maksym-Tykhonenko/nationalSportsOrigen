import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {MainBg} from '../components/layout';
import {IMAGES_GUESS} from '../data/data';
import {Color} from '../constants/colors';
import {IconClose, IconReboot, IconReturn} from '../components/icons';
import {useSportContext} from '../store/sport_context';

const {width, height} = Dimensions.get('screen');
const WIDTH = width * 0.8;
const HEIGHT = height * 0.09;
const ITEM_HEIGHT = height * 0.2;

const GuessListScreen = ({navigation, route}) => {
  const mode = route.params;
  const {guess} = useSportContext();
  function renderListGuess({item}) {
    const guessData = guess.find(gues => gues.id === item.id);

    const lockedGame = !guessData.notLocked;

    const id = item.id;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('GuessGameScreen', {id, mode})}
        activeOpacity={0.6}
        style={[
          styles.btnStyle,
          {borderColor: lockedGame ? 'black' : Color.milk},
        ]}
        disabled={lockedGame}>
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          imageStyle={{opacity: lockedGame ? 0.3 : 1}}
          style={styles.image}>
          {lockedGame && <IconClose />}
          <Text
            style={[
              styles.text,
              {color: lockedGame ? Color.milk + 10 : Color.milk},
            ]}>
            {item.sport}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  return (
    <MainBg style={{alignItems: 'center'}}>
      <FlatList
        data={IMAGES_GUESS}
        keyExtractor={item => item.id.toString()}
        renderItem={renderListGuess}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
      <View style={{margin: HEIGHT}}></View>
      <IconReboot mode={mode} />
      <IconReturn />
    </MainBg>
  );
};

export default GuessListScreen;

const styles = StyleSheet.create({
  image: {
    width: WIDTH,
    height: ITEM_HEIGHT,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    position: 'relative',
    marginVertical: 20,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 3,
  },
  listContent: {
    paddingBottom: 20,
  },
  footer: {
    height: 10,
  },
  text: {fontSize: 32, fontWeight: '900', letterSpacing: 8},
});
