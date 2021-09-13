import React from 'react';
import LottieView from 'lottie-react-native';
import { Modal } from 'react-native';

interface Props {}
export const SplashScreen: React.FC<Props> = (props) => {
  const [hasAnimationPlayedOnce, setHasAnimationPlayedOnce] = React.useState(false)

  const handleAnimationFinish = () => {
    setHasAnimationPlayedOnce(true)
  }

  const isModalVisible = !(hasAnimationPlayedOnce)

  return (
      <Modal visible={isModalVisible} animationType="fade">
        <LottieView source={require('../../assets/images/welcome.json')}
                    autoPlay
                    loop={false}
                    onAnimationFinish={handleAnimationFinish} />
      </Modal>
  );
};
