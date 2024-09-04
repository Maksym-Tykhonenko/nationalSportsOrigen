import {Animated} from 'react-native';
import {useState} from 'react';
import {useSportContext} from '../store/sport_context';
import {IMAGES_QUIZ} from '../data/data';

const useQuizGame = levelId => {
  const {quiz} = useSportContext();
  const thisLevel = quiz.find(item => item.id === levelId) || [];
  const questionBox = thisLevel.levelQuestions;
  // console.log(IMAGES_QUIZ.find(image => image.id === levelId));
  const imageObject = IMAGES_QUIZ.find(image => image.id === levelId);

  const [generalState, setGeneralState] = useState({
    currentIndex: 0,
    currentOption: null,
    correctOption: null,
    isOptionOff: false,
    score: 0,
    nextBtnActive: false,
    showResultsButton: false,
    progress: new Animated.Value(0),
    quizBgImage: imageObject,
    readStory: false,
    fact: questionBox[0]?.interestingFact || null,
  });

  const validationCheck = choosenOption => {
    // console.log(choosenOption);
    setGeneralState(prevState => {
      const isCorrect =
        choosenOption === questionBox[prevState.currentIndex].correctAnswer;
      const isLastQuestion = prevState.currentIndex === questionBox.length - 1;
      const isOptionChosenOnLastQuestion =
        isLastQuestion && choosenOption !== null;

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
        correctOption: questionBox[prevState.currentIndex].correctAnswer,
        isOptionOff: true,
        score: isCorrect ? prevState.score + 1 : prevState.score,
        nextBtnActive: !isLastQuestion, // active if not last question
        showResultsButton: isLastQuestion && choosenOption !== null,
        readStory: isCorrect,
      };
    });
  };

  const nextQuestion = () => {
    setGeneralState(prevState => {
      const isLastQuestion = prevState.currentIndex === questionBox.length - 1;

      const factIndex = isLastQuestion
        ? prevState.currentIndex
        : prevState.currentIndex + 1;
      const newFact = questionBox[factIndex]?.interestingFact || null;

      if (!isLastQuestion) {
        return {
          ...prevState,
          currentIndex: prevState.currentIndex + 1,
          currentOption: null,
          correctOption: null,
          isOptionOff: false,
          nextBtnActive: false,
          showResultsButton: isLastQuestion
            ? prevState.showResultsButton
            : false,
          readStory: false,
          fact: newFact,
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

  const restartHandle = () => {
    setGeneralState({
      currentIndex: 0,
      currentOption: null,
      correctOption: null,
      isOptionOff: false,
      score: 0,
      nextBtnActive: false,
      showResultsButton: false,
      progress: new Animated.Value(0),
      quizBgImage: imageObject,
    });
  };

  return {
    validationCheck,
    nextQuestion,
    restartHandle,
    generalState,
    thisLevel,
    questionBox,
  };
};

export default useQuizGame;
