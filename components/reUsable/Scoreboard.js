import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {IMAGES_QUIZ, IMAGES_GUESS} from '../../data/data';
import {Color} from '../../constants/colors';
import {useEffect, useState} from 'react';
import HeaderScoreboard from './HeaderScoreboard';
import IconClick from '../icons/IconClick';

const {width, height} = Dimensions.get('screen');
const HEIGHT = height * 0.09;

const Scoreboard = ({data, header}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [gameImages, setGameImages] = useState([]);

  useEffect(() => {
    if (header === 'QUIZ SCOREBOARD') {
      setGameImages(IMAGES_QUIZ);
    } else if (header === 'GUESS SCOREBOARD') {
      setGameImages(IMAGES_GUESS);
    }
  }, []);

  function seeDetails() {
    setShowDetails(prev => !prev);
  }

  function renderPrizeList({item}) {
    const id = item.id;
    // console.log('item-', item.name);

    const images = gameImages.find(image => image.id === id);
    // console.log(images);
    const score = item.score;
    // console.log(gameImages);

    return (
      <View
        style={{
          backgroundColor: Color.milk + 20,
          height: showDetails ? null : 0,
          borderRadius: 12,
        }}>
        <View style={[styles.prizeContainer]}>
          <View style={styles.detailsContainer}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.subText}>score</Text>
              <Text style={styles.scoreNum}>{score}</Text>
            </View>
            <Text style={styles.nameText}>{item.name}</Text>
            {score >= 8 ? (
              <View style={styles.iconContainer}>
                {images && images[item.name] ? (
                  <Image source={images[item.name]} style={styles.icon} />
                ) : (
                  <Text style={styles.noImageText}>No image available</Text>
                )}
              </View>
            ) : (
              <Text
                style={{color: Color.milk, fontWeight: '600', fontSize: 12}}>
                Your award will be here
              </Text>
            )}
          </View>
        </View>
      </View>
    );
  }
  return (
    <>
      <TouchableOpacity
        onPress={seeDetails}
        style={{position: 'relative', justifyContent: 'center'}}>
        <HeaderScoreboard>{header}</HeaderScoreboard>
        <View style={{position: 'absolute', right: 0}}>
          <IconClick />
        </View>
      </TouchableOpacity>
      <View>
        <FlatList
          data={data}
          key={item => item.id.toString()}
          renderItem={renderPrizeList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default Scoreboard;

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 20,
  },
  prizeContainer: {
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Color.milk,
    paddingHorizontal: 10,
  },
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30, 
    shadowColor: Color.milk,
    shadowOffset: {
      width: 2,
      height: 12,
    },
    shadowOpacity: 0.6,
    shadowRadius: 7,
   
  },
  icon: {
    width: 60,
    height: 60,
  },
  nameText: {
    color: Color.milk,
    fontWeight: '800',
    fontSize: 18,
    marginVertical: 5,
  },
  subText: {
    color: Color.milk,
    fontSize: 16,
    fontWeight: '500',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 2,
    marginVertical: 10,
    alignItems: 'center',
  },
  scoreNum: {
    color: Color.milk,
    fontWeight: '800',
    fontSize: 28,
  },
  noImageText: {color: Color.milk, fontWeight: '600', fontSize: 12},
});
