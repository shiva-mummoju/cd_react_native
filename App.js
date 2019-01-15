import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/auth/auth';
import ProfileScreen from './src/screens/profile/profile';
import WallScreen from './src/screens/wall/wall';

import CD from './src/screens/screenIDS'

// register screens
Navigation.registerComponent(CD.AuthScreen , () => AuthScreen);
Navigation.registerComponent(CD.ProfileScreen , () => ProfileScreen);
Navigation.registerComponent(CD.WallScreen , () => WallScreen);

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