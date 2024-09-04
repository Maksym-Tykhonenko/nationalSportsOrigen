import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Text,
  ImageBackground,
} from 'react-native';
import IconReturn from '../components/icons/IconReturn';
import {Color} from '../constants/colors';
import {useEffect, useState} from 'react';
import ScoreBoardComponent from '../components/scroreBoard/ScoreBoardComponent';
import {IconForm} from '../components/icons';
import {fetchProfile, saveProfile} from '../utils/asyncStorageUtils';
import {PickImage} from '../components/ui';
import FormBtn from '../components/User/formBtn';
import UserInfo from '../components/User/UserInfo';

const AthleteScreen = () => {
  const [userCreated, setUserCreated] = useState(false);
  const [user, setUser] = useState(null);
  const [profileInputs, setPfofileInputs] = useState({name: '', image: ''});

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetchProfile();
      setUser(data);
    };
    fetchUser();
  }, []);

  function isUserCreatedFn(status) {
    console.log(status);
  }

  const saveInputs = (identifier, newValue) => {
    setPfofileInputs(prev => ({...prev, [identifier]: newValue}));
  };
  const userImage = image => {
    saveInputs('image', image);
  };

  const submit = async () => {
    const {name, image} = profileInputs;
    if (!name.trim()) {
      Alert.alert('Problem', 'Name is invalid');
      return;
    }
    const dataToSubmit = {name, image};
    try {
      await saveProfile(dataToSubmit);
      const updatedData = await fetchProfile();
      setUser(updatedData);
    } catch (error) {
      console.error('Failed to submit:', error);
    }
  };
  const deleteInputs = () => {
    setPfofileInputs({name: ''});
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../assets/img/mainbg/bcgr.png')}>
      <SafeAreaView style={{height: 450}}>
        {user ? (
          <>
            <UserInfo data={user} />
            <ScoreBoardComponent />
          </>
        ) : null}
        {user ? null : (
          <>
            <View style={styles.container}>
              <Text style={styles.subText}>LogIn Form</Text>
              <IconForm />
              <Text>Name</Text>
              <TextInput
                value={profileInputs.name}
                onChangeText={value => saveInputs('name', value)}
                style={styles.textInput}
              />
              <View style={styles.pickerContainer}>
                <PickImage saveImage={image => userImage(image)}>
                  <Text style={styles.pickerText}>Find Image</Text>
                </PickImage>
              </View>
              <View style={styles.btnContainer}>
                <FormBtn onPress={submit}>Save</FormBtn>
                <FormBtn onPress={deleteInputs}>Delete</FormBtn>
              </View>
            </View>
          </>
        )}
      </SafeAreaView>
      {userCreated && <ScoreBoardComponent />}
      <IconReturn />
    </ImageBackground>
  );
};

export default AthleteScreen;

const styles = StyleSheet.create({
  // positioning: {alignItems: 'center', height: '100%', marginTop: 100},
  mainContainer: {flex: 1, padding: 10},
  subText: {color: Color.blue, fontSize: 22, fontWeight: '600'},
  container: {
    backgroundColor: Color.white,
    padding: 15,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
  },
  textInput: {
    backgroundColor: Color.blue,
    width: 200,
    height: 30,
    borderRadius: 12,
    paddingHorizontal: 10,
    color: Color.milk,
    fontWeight: '500',
    fontSize: 20,
    paddingVertical: 4,
  },
  pickerContainer: {
    backgroundColor: Color.blue,
    fontWeight: '500',
    fontSize: 20,
    marginVertical: 10,
    paddingVertical: 10,
    width: 200,
    borderRadius: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  pickerText: {fontWeight: '500', color: Color.milk, fontSize: 20},
  btnContainer: {flexDirection: 'row', gap: 10, marginTop: 70},
});
