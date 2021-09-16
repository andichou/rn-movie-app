import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import { PeopleStateWrap } from './src/context/people.state';
import Navigation from './src/navigation';
import { store } from './src/redux/store';

import { SplashScreen } from './src/screen/SplashScreen';
import useTheme from './src/hooks/useTheme';

const App: React.FC = () => {
    const theme = useTheme();

    return (
        <Provider store={store}>
            <StatusBar barStyle="dark-content" hidden />
            <SafeAreaView>
                <SplashScreen />
            </SafeAreaView>
            <PeopleStateWrap>
                <Navigation theme={theme} />
            </PeopleStateWrap>
        </Provider>
    );
};

export default App;
