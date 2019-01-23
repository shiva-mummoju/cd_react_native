import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/auth/auth';
import ProfileScreen from './src/screens/profile/profile';
import WallScreen from './src/screens/wall/wall';

import CD from './src/screens/screenIDS'

// for redux
import { Provider } from 'react-redux';

import configureStore from './src/store/storeConfig';

const store = configureStore();

// register screens
Navigation.registerComponentWithRedux(CD.AuthScreen , () => AuthScreen ,Provider , store);
Navigation.registerComponentWithRedux(CD.ProfileScreen , () => ProfileScreen , Provider , store);
Navigation.registerComponentWithRedux(CD.WallScreen , () => WallScreen , Provider , store);

// start the app
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: CD.AuthScreen,
          }
        }],
        options: {
         topBar: {
           title: {
             text: 'Auth Screen'
           }
         }
       }
      }
    }
 })
})