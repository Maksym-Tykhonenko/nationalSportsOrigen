import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../../constants/colors';

const HomeBtn = ({children, screen, game}) => {
  const navigation = useNavigation();
  function screenCall() {
    navigation.navigate(`${screen}`, game);
  }
  return (
    <TouchableOpacity>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default HomeBtn;

const styles = StyleSheet.create({});
