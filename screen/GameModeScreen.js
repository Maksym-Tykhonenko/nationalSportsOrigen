import {View} from 'react-native';
import {MainBg} from '../components/layout';
import {IconBall, IconReturn} from '../components/icons';

const GameModeScreen = () => {
  return (
    <MainBg>
      <View>
        <IconBall screen={'GuessListScreen'} mode={'guess'}>
          QUESS
        </IconBall>
        <IconBall screen={'QuizListScreen'} mode={'quiz'}>
          QUIZ
        </IconBall>
      </View>
      <IconReturn />
    </MainBg>
  );
};

export default GameModeScreen;
