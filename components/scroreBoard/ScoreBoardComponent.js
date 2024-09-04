import {SafeAreaView, StyleSheet, Text, View, Dimensions} from 'react-native';
import {useSportContext} from '../../store/sport_context';
import Scoreboard from '../reUsable/Scoreboard';

const {width, height} = Dimensions.get('screen');
const HEIGHT = height * 0.07;
const MAX_HEIGHT = height * 0.25;
// console.log(MAX_HEIGHT);

const ScoreBoardComponent = () => {
  const {quiz, guess} = useSportContext();
  // console.log(data)
  return (
    // <SafeAreaView tyle={{height: '45%'}}>
    <View style={{height: '45%'}}>
      <View style={{maxHeight: MAX_HEIGHT}}>
        <Scoreboard data={quiz} header={'QUIZ SCOREBOARD'} />
        <Scoreboard data={guess} header={'GUESS SCOREBOARD'} />
      </View>
      <View style={{margin: HEIGHT}}></View>
    </View>
    // </SafeAreaView>
  );
};

export default ScoreBoardComponent;

const styles = StyleSheet.create({});
