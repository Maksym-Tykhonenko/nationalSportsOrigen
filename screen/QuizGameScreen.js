import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useState} from 'react';
import useQuizGame from '../hooks/useQuizGame';
import {
  InterestingFact,
  QuizOptions,
  QuizProgress,
  QuizQuestion,
} from '../components/Quiz';
import {QuizBtn} from '../components/ui';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../constants/colors';
import {useSportContext} from '../store/sport_context';

const QuizGameScreen = ({route, navigation}) => {
  const {mode, id} = route.params;
  const [modal, setModal] = useState(false);
  const {ulockNextAddScore} = useSportContext();
  // const levelId = route.params;
  // const {quiz} = useSportContext();
  const {
    validationCheck,
    nextQuestion,
    restartHandle,
    generalState,
    thisLevel,
    questionBox,
  } = useQuizGame(id);
  const {
    currentIndex,
    currentOption,
    correctOption,
    isOptionOff,
    score,
    nextBtnActive,
    showResultsButton,
    progress,
    quizBgImage,
    readStory,
    fact,
  } = generalState;

  const question = questionBox[currentIndex].question || '';
  const options = questionBox[currentIndex].options || [];

  const navigateToResultsHandler = () => {
    navigation.navigate('ResultsScreen', {
      score,
      name: thisLevel.name,
      totalQuestions: questionBox.length,
      image: quizBgImage.image,
    });
  };
  const activeNextLevelCall = () => {
    ulockNextAddScore(id, score, mode);
    navigation.navigate('QuizListScreen', mode);
  };
  const isLastQuestion = currentIndex === questionBox.length - 1;

  return (

    <ImageBackground
      source={quizBgImage.image}
      style={styles.bgImage}
      imageStyle={{opacity: 0.3}}
      resizeMode="cover">
      <SafeAreaView>
        <ScrollView contentContainerStyle={{padding: 10}}>
          <QuizProgress
            progress={progress}
            length={questionBox.length}
            questionNum={currentIndex + 1}
          />
          <QuizQuestion question={question} />
          <QuizOptions
            options={options}
            currentOption={currentOption}
            onPress={validationCheck}
            disable={isOptionOff}
            correctOption={correctOption}
          />
          {!isLastQuestion && nextBtnActive && (
            <QuizBtn onPress={nextQuestion}>NEXT</QuizBtn>
          )}
          {readStory && (
            <QuizBtn onPress={() => setModal(true)}>READ FACT</QuizBtn>
          )}
          <InterestingFact
            visible={modal}
            close={() => setModal(false)}
            bgImage={quizBgImage.image}
            fact={fact}
          />
          {isLastQuestion && showResultsButton && (
            <View style={{flexDirection: 'row', flex: 1, gap: 20}}>
              <QuizBtn onPress={restartHandle}>Restart</QuizBtn>
              <QuizBtn onPress={navigateToResultsHandler}>Results</QuizBtn>
            </View>
          )}
          {isLastQuestion && score > 1 && showResultsButton && (
            <>
              <QuizBtn onPress={activeNextLevelCall}>OPEN NEXT LEVEL</QuizBtn>
            </>
          )}

        </ScrollView>
      </SafeAreaView>

    </ImageBackground>

  );
};

export default QuizGameScreen;

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: Color.blue,
  },
});
