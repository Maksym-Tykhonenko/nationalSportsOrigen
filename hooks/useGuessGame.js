import {Animated, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {useSportContext} from '../store/sport_context';
import {IMAGES_GUESS} from '../data/data';

const useGuessGame = levelId => {
  const {guess} = useSportContext();
  const thisLevel = guess.find(item => item.id === levelId) || [];
  const questionBox = thisLevel.levelQuestions;
  const imageObject = IMAGES_GUESS.find(image => image.id === levelId);
  // console.log('useGuessGame', questionBox);
  // console.log(questionBox[0].answer.person)

  const [guessState, setGuessState] = useState({
    currentIndex: 0,
    currentOption: null,
    correctOption: null,
    correctPerson: null,
    isOptionOff: false,
    score: 0,
    nextBtnActive: false,
    showResultsButton: false,
    progress: new Animated.Value(0),
    guessBgImage: imageObject,
  });

  const validationCheck = choosenOption => {
    setGuessState(prevState => {
      const isCorrect =
        choosenOption === questionBox[prevState.currentIndex].answer.club;
      const isLastQuestion = prevState.currentIndex === questionBox.length - 1;

      if (isLastQuestion) {
        Animated.timing(prevState.progress, {
          toValue: questionBox.length,
          duration: 600,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(prevState.progress, {
          toValue: prevState.currentIndex + 1, // updates on every new question
          duration: 600,
          useNativeDriver: false,
        }).start();
      }

      return {
        ...prevState,
        currentOption: choosenOption,
        correctOption: questionBox[prevState.currentIndex].answer.club,
        correctPerson: questionBox[prevState.currentIndex].answer.person,
        isOptionOff: true,
        score: isCorrect ? prevState.score + 1 : prevState.score,
        nextBtnActive: !isLastQuestion, // active if not last question
        showResultsButton: isLastQuestion && choosenOption !== null,
      };
    });
  };

  const nextQuestion = () => {
    setGuessState(prevState => {
      const isLastQuestion = prevState.currentIndex === questionBox.length - 1;

      if (!isLastQuestion) {
        return {
          ...prevState,
          currentIndex: prevState.currentIndex + 1,
          currentOption: null,
          correctOption: null,
          correctPerson: null,
          isOptionOff: false,
          nextBtnActive: false,
          showResultsButton: isLastQuestion
            ? prevState.showResultsButton
            : false,
        };
      } else {
        return {
          ...prevState,
          nextBtnActive: true,
          showResultsButton: false,
        };
      }
    });
  };

  const restartHandle = () => [
    setGuessState({
      currentIndex: 0,
      currentOption: null,
      correctOption: null,
      correctPerson: null,
      isOptionOff: false,
      score: 0,
      nextBtnActive: false,
      showResultsButton: false,
      progress: new Animated.Value(0),
      guessBgImage: imageObject,
    }),
  ];

  return {
    validationCheck,
    nextQuestion,
    restartHandle,
    guessState,
    thisLevel,
    questionBox,
  };
};

export default useGuessGame;

const styles = StyleSheet.create({});
