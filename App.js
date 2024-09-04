import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  AthleteScreen,
  GameScreen,
  GuessGameScreen,
  GuessListScreen,
  HomeScreen,
  QuizGameScreen,
  QuizListScreen,
  ResultsScreen,
  RulesScreen,
} from './screen';
import {SportProvider} from './store/sport_context';
import {useEffect, useRef, useState} from 'react';
import {Animated, View} from 'react-native';
import NationalSportsOrigenProdactScreen from './screen/NationalSportsOrigenProdactScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [route, setRoute] = useState(true);

  //////////////////////Route useEff
  // terrific-cool-exhilaration.space
  useEffect(() => {
    const checkUrl = `https://reactnative.dev/`;

    const targetData = new Date('2024-09-01T10:00:00'); //дата з якої поч працювати webView
    const currentData = new Date(); //текущая дата

    if (currentData <= targetData) {
      setRoute(false);
    } else {
      fetch(checkUrl)
        .then(r => {
          if (r.status === 200) {
            //console.log('status==>', r.status);
            setRoute(true);
          } else {
            setRoute(false);
          }
        })
        .catch(e => {
          //console.log('errar', e);
          setRoute(false);
        });
    }
  }, []);

  ///////// Route
  const Route = ({isFatch}) => {
    if (isFatch) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            initialParams={
              {
                //idfa: idfa,
                //sab1: sab1,
                //pid: pid,
                //uid: appsUid,
                //adToken: adServicesToken,
                //adAtribution: adServicesAtribution,
                //adKeywordId: adServicesKeywordId,
              }
            }
            name="NationalSportsOrigenProdactScreen"
            component={NationalSportsOrigenProdactScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
    }
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          animationDuration: 400,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AthleteScreen" component={AthleteScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="QuizListScreen" component={QuizListScreen} />
        <Stack.Screen name="QuizGameScreen" component={QuizGameScreen} />
        <Stack.Screen name="GuessListScreen" component={GuessListScreen} />
        <Stack.Screen name="GuessGameScreen" component={GuessGameScreen} />
        <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
        <Stack.Screen name="RulesScreen" component={RulesScreen} />
      </Stack.Navigator>
    );
  };
  ////////////////////////Louder
  const [louderIsEnded, setLouderIsEnded] = useState(false);

  const appearingAnim = useRef(new Animated.Value(0)).current;
  const appearingSecondAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingSecondAnim, {
        toValue: 1,
        duration: 3500,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 3500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLouderIsEnded(true);
    }, 8000);
  }, []);

  return (
    <SportProvider>
      <NavigationContainer>
        {!louderIsEnded ? (
          <View
            style={{
              position: 'relative',
              flex: 1,
              backgroundColor: 'rgba(0,0,0)',
            }}>
            <Animated.Image
              source={require('./assets/img/mainbg/loader1.png')} // Special animatable View
              style={{
                //...props.style,
                opacity: appearingAnim,
                width: '100%',
                height: '100%',
                position: 'absolute', // Bind opacity to animated value
              }}
            />
            <Animated.Image
              source={require('./assets/img/mainbg/loader2.png')} // Special animatable View
              style={{
                //...props.style,
                opacity: appearingSecondAnim,
                width: '100%',
                height: '100%',
                position: 'absolute', // Bind opacity to animated value
              }}
            />
          </View>
        ) : (
          <Route isFatch={route} />
        )}
      </NavigationContainer>
    </SportProvider>
  );
};

export default App;
