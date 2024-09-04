import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {Color} from '../constants/colors';
import {IconReturn} from '../components/icons';

const ResultsScreen = ({route}) => {
  const SCORE = route.params.score;
  const IMAGE = route.params.image;
  return (
    <ImageBackground
      source={IMAGE}
      style={{flex: 1, backgroundColor: Color.blue}}
      imageStyle={{opacity: 0.3}}>
      <SafeAreaView
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={styles.text}>
          You reach {SCORE} points, this is not bed!
        </Text>
        <Text style={styles.text}>
          To get prize you should have more then 8 points.
        </Text>
        <Text style={styles.text}>Do not stop to become better</Text>
        <Text style={styles.text}>
          score - <Text style={styles.score}>{SCORE}</Text>{' '}
        </Text>

        <View></View>
      </SafeAreaView>
      <IconReturn />
    </ImageBackground>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  text: {
    color: Color.milk,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  score: {fontSize: 32, fontWeight: '800', color: Color.red},
});
