import 'react-native-gesture-handler';
import * as React from 'react';
import {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import theme from './styles/themes/Light';
import {Provider} from 'react-redux';
import configureStore from '../src/store';
import Snackbar from './components/Snackbar';
import NavigationService from './config/NavigationService';
import {Loader} from './components/common';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {Icon} from 'react-native-elements';
import {ThemeProvider} from 'styled-components';
import Home from './pages/Home';
import Classification from './pages/Classification';
import TeamDetail from './pages/TeamDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const {store} = configureStore();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    let iconName = 'home';

                    switch (route.name) {
                        case 'HomeComponent':
                            iconName = 'home';
                            break;
                        case 'ClassificationComponent':
                            iconName = 'emoji-events';
                            break;
                        case 'TeamDetailComponent':
                            iconName = 'sports-soccer';
                            break;
                    }
                    return <Icon type={'material'} name={iconName} size={30} color={color}
                                 tvParallaxProperties={undefined}/>;
                },
                tabBarActiveTintColor: theme.palette.logo,
                tabBarInactiveTintColor: 'gray',
                headerStyle: {
                    height: 0, // Specify the height of your custom header
                },
            })}>
            <Tab.Screen name="HomeComponent" component={Home} options={{title: 'Home'}}/>
            <Tab.Screen name="ClassificationComponent" component={Classification} options={{title: 'Classificação'}}/>
            <Tab.Screen name="TeamDetailComponent" component={TeamDetail} options={{title: 'Time'}}/>
        </Tab.Navigator>
    );
};

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    });

    return (
        <GestureHandlerRootView style={styles.gestureHandlerContainer}>
            <SafeAreaView style={styles.bottomSafeArea}>
                <Provider store={store}>
                    <PaperProvider>
                        <NavigationContainer ref={NavigationService.navigationRef}>
                            <ThemeProvider theme={theme}>
                                <Stack.Navigator initialRouteName="Home">
                                    <Stack.Screen name="Home" component={HomeTabs} options={{headerShown: false}}/>
                                </Stack.Navigator>
                            </ThemeProvider>
                        </NavigationContainer>
                        <Loader/>
                        <Snackbar/>
                    </PaperProvider>
                </Provider>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    topSafeArea: {
        flex: 0,
        backgroundColor: theme.palette.text,

    },
    bottomSafeArea: {
        flex: 1,
        backgroundColor: theme.palette.backGround,
    },
    gestureHandlerContainer: {
        flex: 1,
    },
});

export default App;
