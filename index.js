

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
// this provider compoentn is connected to the store

import configureStore from './src/store/storeConfig';

const store = configureStore();
const RNRedux = () => (
    <Provider store={store}  >
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
