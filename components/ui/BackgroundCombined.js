import {StyleSheet} from 'react-native';
import {BlueBg, MainImageBg} from '.';

const BackgroundCombined = ({children}) => {
  return (
    <MainImageBg>
      <BlueBg>{children}</BlueBg>
    </MainImageBg>
  );
};

export default BackgroundCombined;
