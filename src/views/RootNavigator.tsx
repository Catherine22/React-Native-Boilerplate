import React, { FC } from 'react';
import AuthNavigator from './auth/AuthNavigator';
import { createStore, applyMiddleware } from 'redux';
import appReducers from '../reducers';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
// import Logger from '../middleware/Logger';
import NavigationService from '../services/NavigationService';

type Props = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(appReducers, composeEnhancer(applyMiddleware(ReduxThunk /*, Logger */)));

const RootNavigator: FC<Props> = props => {
    return (
        <Provider store={store}>
            <AuthNavigator
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        </Provider>
    );
};

export default RootNavigator;
