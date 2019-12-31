import React from 'react';
import DashboardNavigator from './dashboard/DashboardNavigator';
import RepoNavigator from './repo/RepoNavigator';
import ProfileNavigator from './profile/ProfileNavigator';
import SettingsNavigator from './settings/SettingsNavigator';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Colors } from '../constants/Styles';

const routeConfigs = {
    Dashboard: {
        screen: DashboardNavigator,
        navigationOptions: () => ({
            title: 'Dashboard'
        })
    },
    Repo: {
        screen: RepoNavigator,
        navigationOptions: () => ({
            title: 'Repo'
        })
    },
    Profile: {
        screen: ProfileNavigator,
        navigationOptions: () => ({
            title: 'Profile'
        })
    },
    Settings: {
        screen: SettingsNavigator,
        navigationOptions: () => ({
            title: 'Settings'
        })
    }
};

const tabNavigatorConfig = {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: {
        title: 'Unknown',
        mode: 'card', // [card, modal]
        headerMode: 'float' // [float, screen, none]
    },
    tabBarOptions: {
        activeTintColor: Colors.primary,
        labelStyle: {
            fontSize: 12
        },
        style: {
            backgroundColor: Colors.surface
        }
    }
};

const AppNavigator = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);
export default AppNavigator;