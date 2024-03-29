import SignIn from './SignIn';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppNavigator from '../AppNavigator';
import AuthLoadingScreen from './AuthLoadingScreen';
import { createStackNavigator } from 'react-navigation-stack';

// Auth stack
const routeConfigs = {
    SignIn: {
        screen: SignIn,
        navigationOptions: () => ({
            header: null
        })
    }
};

const stackNavigatorConfig = {
    initialRouteName: 'SignIn'
};

const AuthNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);

// Bundle auth stack and app stack
const switchNavigatorConfig = {
    initialRouteName: 'AuthLoading'
};

const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthNavigator,
        App: AppNavigator
    },
    switchNavigatorConfig
);

export default createAppContainer(SwitchNavigator);
