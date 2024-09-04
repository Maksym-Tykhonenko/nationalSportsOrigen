import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {MainBg} from '../components/layout';
import {IconReturn} from '../components/icons';
import {Color} from '../constants/colors';

const RulesScreen = () => {
  return (
    <MainBg>
      <Text style={styles.mainHeader}>Game Rules: National Sports Guess</Text>
      <View style={{padding: 10, height: '58%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>
            Welcome to National Sports Guess! This exciting sports trivia game
            has two main game modes, each designed to challenge your sports
            knowledge and reward your achievements.{' '}
          </Text>
          <Text style={styles.subHeader}>Game Modes</Text>
          <Text style={styles.aboutHeader}>1. Guess the Person</Text>
          <Text style={styles.text}>
            In this mode, your task is to correctly identify the club or team to
            which a sports personality belongs. Here's how it works:
          </Text>
          <Text style={styles.text}>
            Themes: There are 5 themes available in this mode:
          </Text>
          <Text style={styles.listItem}>*Football</Text>
          <Text style={styles.listItem}>*Basketball</Text>
          <Text style={styles.listItem}>*Volleyball</Text>
          <Text style={styles.listItem}>*Baseball</Text>
          <Text style={styles.listItem}>*Hockey</Text>

          <Text style={styles.aboutHeader}>2. Quiz Mode</Text>
          <Text style={styles.text}>
            This mode challenges you with a quiz based on various sports topics.
            Here's what to expect:
          </Text>
          <Text style={styles.text}>
            Themes: There are 5 themes available in this mode:
          </Text>
          <Text style={styles.listItem}>*Formula 1</Text>
          <Text style={styles.listItem}>*Golf</Text>
          <Text style={styles.listItem}>*Rugby</Text>
          <Text style={styles.listItem}>*Boxing</Text>
          <Text style={styles.listItem}>*UFC</Text>

          <Text style={styles.aboutHeader}>
            Questions: Each theme contains 10 questions.
          </Text>
          <Text style={styles.text}>
            Scoring: For every correct answer, you earn points. Your points are
            displayed on the scoreboard, which you can access after providing
            your name and adding a photo.
          </Text>
          <Text style={styles.text}>
            Rewards: Upon achieving a high score in a theme, you will receive a
            prize specific to that theme.
          </Text>

          <Text style={styles.aboutHeader}>Scoreboard</Text>
          <Text style={styles.text}>
            Your points are tracked on the scoreboard. You can access the
            scoreboard by entering your name and adding a photo. The scoreboard
            allows you to keep track of your progress and compare your scores
            with other players
          </Text>
          <Text style={styles.aboutHeader}>Prizes</Text>
          <Text style={styles.text}>
            Each theme in both game modes offers unique prizes. You can earn
            these prizes by reaching high scores in the respective themes.
          </Text>
        </ScrollView>
      </View>

      <IconReturn />
    </MainBg>
  );
};

export default RulesScreen;

const styles = StyleSheet.create({
  mainHeader: {
    fontSize: 30,
    textAlign: 'center',
    color: Color.milk,
    marginVertical: 20,
  },
  subHeader: {
    fontSize: 24,
    textAlign: 'center',
    color: Color.milk,
    marginVertical: 10,
  },
  aboutHeader: {
    fontSize: 20,
    textAlign: 'center',
    color: Color.milk,
    marginVertical: 10,
  },
  text: {color: Color.milk, textAlign: 'center', fontSize: 16},
  listItem: {color: Color.milk, fontSize: 16},
});
