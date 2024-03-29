import { NavigationActions } from 'react-navigation';

// https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
let navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
    navigator = navigatorRef;
}

function navigate(routeName: string, params: any) {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

// add other navigation functions that you need and export them
export default {
    navigate,
    setTopLevelNavigator
};
