import { Navigation } from 'react-native-navigation';
import CD from './../screenIDS';
import Icon from 'react-native-vector-icons/Ionicons';


const startHomePageTabs = () => {
    Promise.all([
         Icon.getImageSource("md-albums" , 30),
        Icon.getImageSource("ios-albums" , 30)
    ]).then(source => {


    Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [{
              stack: {
                children: [{
                  component: {
                    name: CD.WallScreen,
                    passProps: {
                      text: 'This is tab 1'
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    text: 'Tab 1',
                    icon: source[0],
                    testID: 'FIRST_TAB_BAR_BUTTON'
                  }
                }
              }
            },
            {
                stack: {
                  children: [{
                    component: {
                      name: CD.ProfileScreen,
                      passProps: {
                        text: 'This is tab 2'
                      }
                    }
                  }],
                  options: {
                    bottomTab: {
                      text: 'Tab 1',
                      icon: source[1],
                      testID: 'SECOND_TAB_BAR_BUTTON'
                    }
                  }
                }
              }]
          }
        }
      });

    })
    // alert("hi");
}




export default startHomePageTabs;