import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFilm, faTv, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LabelConstant } from '../common/constants';
import useTheme from '../hooks/useTheme';
import { Movie } from '../screen/Movie';
import linking from './route';
import { RootStackParamList, RootTabParamList } from './types';

const Navigation = ({ theme }: {theme: ColorSchemeName}) => {
    return (
        <SafeAreaProvider>
            <NavigationContainer linking={linking}
                                 theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
                <Navigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root"
                          component={bottomTabNavigator}
                          options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const bottomTabNavigator = () => {
    const theme = useTheme();

    return (
        <BottomTab.Navigator initialRouteName="Movie"
                             screenOptions={{
                                 tabBarActiveBackgroundColor: Colors[theme].background,
                                 tabBarActiveTintColor: Colors[theme].tint,
                             }}>
            <BottomTab.Screen name="Movie"
                              component={Movie}
                              options={{
                                  title: LabelConstant.MOVIE,
                                  tabBarIcon: ({ color }: {color: string}) => <TabBarIcon icon={faFilm} color={color} />,
                              }}
            />
            <BottomTab.Screen name="TV"
                              component={Movie}
                              options={{
                                  title: LabelConstant.TV,
                                  tabBarIcon: ({ color }: {color: string}) => <TabBarIcon icon={faTv} color={color} />,
                              }}
            />
            <BottomTab.Screen name="People"
                              component={Movie}
                              options={{
                                  title: LabelConstant.PEOPLE,
                                  tabBarIcon: ({ color }: {color: string}) => <TabBarIcon icon={faUser} color={color} />,
                              }}
            />
        </BottomTab.Navigator>
    );
}

const TabBarIcon = (props: {
    icon: IconProp;
    color: string;
}) => {
    return (
        <FontAwesomeIcon size={30}
                         style={{ marginBottom: -3 }}
                         icon={props.icon}
                         color={props.color}/>
    );
}

export default Navigation;
