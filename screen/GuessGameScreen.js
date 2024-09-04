import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import useGuessGame from '../hooks/useGuessGame';
import {Color} from '../constants/colors';
import { QuizProgress, QuizQuestion} from '../components/Quiz';
import GuessOptions from '../components/Guess/GuessOptions';
import {QuizBtn} from '../components/ui';
import {useSportContext} from '../store/sport_context';

const GuessGameScreen = ({route, navigation}) => {
  const {mode, id} = route.params;
  const {ulockNextAddScore} = useSportContext();
  const {
    validationCheck,
    nextQuestion,
    restartHandle,
    thisLevel,
    questionBox,
    guessState,
  } = useGuessGame(id);
  const {
    currentIndex,
    currentOption,
    correctOption,
    isOptionOff,
    score,
    nextBtnActive,
    showResultsButton,
    progress,
    guessBgImage,
    correctPerson,
  } = guessState;


  const guessQuestion = thisLevel.task;

  const guessOptions = questionBox[currentIndex].options;
  const guessPerson = questionBox[currentIndex].answer.person;
  // console.log(guessOptions);
  const navigateToResultsHandler = () => {
    navigation.navigate('ResultsScreen', {
      score: score,
      name: thisLevel.name,
      totalQuestions: questionBox.length,
      image: guessBgImage.image,
    });
  };

  const activeNextLevelCall = () => {
    ulockNextAddScore(id, score, mode);
    navigation.navigate('GuessListScreen', mode);
  };
  const isLastQuestion = currentIndex === questionBox.length - 1;

  // console.log(score);
  return (
    <ImageBackground
      source={guessBgImage.image}
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
          <QuizQuestion question={guessQuestion} correctPerson={guessPerson} />
          <GuessOptions
            options={guessOptions}
            currentOption={currentOption}
            onPress={validationCheck}
            disabled={isOptionOff}
            correctOption={correctOption}
          />
          {!isLastQuestion && nextBtnActive && (
            <QuizBtn onPress={nextQuestion}>CONTINUE</QuizBtn>
          )}
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

export default GuessGameScreen;

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: Color.blue,
  },
});
