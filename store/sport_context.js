import {useState, useEffect, useContext, createContext} from 'react';
import {QUIZ_DATA, MATCH_DATA} from '../data/data';
import {getGameData, saveGameData} from '../utils/asyncStorageUtils';

export const SportContext = createContext({});

export const SportProvider = ({children}) => {
  const [quiz, setQuiz] = useState([]);
  const [guess, setGuess] = useState([]);

  useEffect(() => {
    const launchData = async () => {
      try {
        let quizData = await getGameData('quiz');
        let guessData = await getGameData('guess');

        if (quizData.length === 0) {
          await saveGameData(QUIZ_DATA, 'quiz');
          quizData = await getGameData('quiz');
        }
        setQuiz(quizData);

        if (guessData.length === 0) {
          await saveGameData(MATCH_DATA, 'guess');
          guessData = await getGameData('guess');
        }
        setGuess(guessData);
      } catch (error) {
        console.error('Failed to load data:', error);
      }
    };
    launchData();
  }, []);

  const ulockNextAddScore = async (id, score, game) => {
    console.log(id, score, game);
    console.log(guess);
    try {
      const data = await getGameData(game);
      console.log(data);
      const currentIndex = data.findIndex(item => item.id === id);
      if (currentIndex !== -1) {
        const updatedData = data.map((game, i) => {
          if (i === currentIndex) {
            return {...game, score: score};
          } else if (i === currentIndex + 1) {
            return {...game, notLocked: true};
          }
          return game;
        });
        console.log('fn completed');
        console.log(`updated ${game} data`, updatedData);

        await saveGameData(updatedData, game);

        switch (game) {
          case 'guess':
            setGuess(updatedData);
            break;
          case 'quiz':
            setQuiz(updatedData);
            break;
          default:
            break;
        }
      }
    } catch (error) {
      console.error('Error to update game', error);
    }
  };

  const rebootGameHandler = async mode => {
    console.log('context-', mode);
    try {
      if (mode === 'guess') {
        console.log('reboot guess');
        setGuess(MATCH_DATA);
        saveGameData(MATCH_DATA, 'guess');
      } else {
        console.log('reboot quiz');
        setQuiz(QUIZ_DATA);
        saveGameData(QUIZ_DATA, 'quiz');
      }
    } catch (error) {}
  };

  const value = {quiz, guess, ulockNextAddScore, rebootGameHandler};
  return (
    <SportContext.Provider value={value}>{children}</SportContext.Provider>
  );
};

export const useSportContext = () => {
  const sportContext = useContext(SportContext);
  if (!sportContext) {
    throw new Error('Use useSportContext inside SportProvider');
  }
  return sportContext;
};
