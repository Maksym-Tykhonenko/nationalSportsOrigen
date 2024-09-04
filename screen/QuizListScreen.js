import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {MainBg} from '../components/layout';
import {IMAGES_QUIZ} from '../data/data';
import {Color} from '../constants/colors';
import {IconClose, IconReboot, IconReturn} from '../components/icons';
import {useSportContext} from '../store/sport_context';

const {width, height} = Dimensions.get('screen');
const WIDTH = width * 0.8;
const HEIGHT = height * 0.09;
const ITEM_HEIGHT = height * 0.2;

const QuizListScreen = ({navigation, route}) => {
  const mode = route.params;
  // console.log('params',route.params)
  const {quiz} = useSportContext();

  function renderQuizList({item}) {
    const quizData = quiz.find(q => q.id === item.id);
    const lockedGame = !quizData.notLocked;
    const id = item.id;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('QuizGameScreen', {id, mode})}
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
        keyExtractor={item => item.id.toString()}
        renderItem={renderQuizList}
        data={IMAGES_QUIZ}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        // ListFooterComponent={<View style={styles.footer} />}
      />
      <View style={{margin: HEIGHT}}></View>
      <IconReboot mode={mode} />
      <IconReturn />
    </MainBg>
  );
};

export default QuizListScreen;

const styles = StyleSheet.create({
  image: {
    width: WIDTH,
    height: ITEM_HEIGHT,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    marginVertical: 20,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: Color.milk,
  },
  listContent: {
    paddingBottom: 20,
  },
  footer: {
    height: 10,
  },
  text: {fontSize: 32, fontWeight: '900', color: Color.milk, letterSpacing: 8},
});
