import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {useState, useEffect} from 'react';
import {PickImage} from '../ui';
import {updateUser} from '../../utils/asyncStorageUtils';
import {Color} from '../../constants/colors';

const UserInfo = ({data}) => {
  const [update, setUpdate] = useState(false);
  const [isRename, setIsRename] = useState(false);
  const [profileName, setProfileName] = useState(data.name);
  const [profileImage, setProfileImage] = useState(data.image);

  const nameChange = async () => {
    await updateUser('name', profileName);
    setUpdate(false);
  };

  const replaceImage = async image => {
    setProfileImage(image);
    await updateUser('image', image);
  };

  return (
    <View>
      {update ? (
        <>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              gap: 20,
            }}>
            <TextInput
              value={profileName}
              onChangeText={setProfileName}
              style={styles.textInput}
            />
            {/* <View> */}
            <TouchableOpacity onPress={nameChange} style={styles.renameBtn}>
              <Text>Rename</Text>
            </TouchableOpacity>
            {/* </View> */}
          </View>
        </>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            maxWidth: '75%',
            gap: 5,
          }}>
          <PickImage saveImage={i => replaceImage(i)}>
            <View style={{flexDirection: 'row'}}>
              <Image source={{uri: profileImage}} style={styles.image} />
            </View>
          </PickImage>
          <TouchableOpacity
            onPress={() => setUpdate(true)}
            style={{justifyContent: 'center'}}>
            <Text style={styles.name}>{profileName}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    borderRadius: 10,
    paddingVertical: 10,
    minWidth: 100,
    maxWidth: 250,
    borderRadius: 90,
    backgroundColor: Color.milk,
  },
  image: {width: 90, height: 90, borderRadius: 50},
  name: {
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: 5,
    color: Color.milk,
    maxHeight: 40,
  },
  renameBtn: {
    alignItems: 'center',
    backgroundColor: Color.milk,
    borderRadius: 20,
    marginVertical: 20,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
});
