import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import { SplashScreen } from './src/screen/SplashScreen';

const App: React.FC = () => {
  return (
      <View>
        <StatusBar barStyle="dark-content" hidden />
        <SafeAreaView>
          <SplashScreen />
        </SafeAreaView>
      </View>
  );
};

export default App;
