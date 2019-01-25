import { Navigation } from 'react-native-navigation';
import CD from './../screenIDS';
import Icon from 'react-native-vector-icons/Ionicons';

// objects which contains the configuration for topBar


const startHomePageTabs = () => {
  Promise.all([
    Icon.getImageSource("md-albums", 30),
    Icon.getImageSource("ios-albums", 30)
  ]).then(source => {

    const topBarOptions = {
      topBar: {
        background: {
          color: 'blue'
        },
        title: {
          text: "Home",
          color: 'white',
        },
        // hideOnScroll: UI.settings.general.hideBarsOnScroll,
        rightButtons: [{
          id: 'right',
          text: 'right',
          icon: source[0],
          color: 'white',
        }],
        leftButtons: [{
          id: 'left',
          text: 'left',
          color: 'white',
          icon: source[0],
        }],
      },
    }
    // component object describing the wall screen
    const wallScreenComponentObject = {
      name: CD.WallScreen,
      passProps: {
        text: 'This is wall screen'
      },
      options: topBarOptions
    }
    
    const profileScreenComponentObject = {
      name: CD.ProfileScreen,
      passProps: {
        text: 'This is profile screen'
      },
      options: topBarOptions
    }


    Navigation.setRoot({
      root: {
        sideMenu: {
          id: CD.sideMenu,
          left: {
            component: { name: CD.ProfileScreen, },
            visible: false
          }, // left ends here
          center: {
            bottomTabs: {
              children: [
                //first tab starts from here
                { 
                  stack: {
                    children: [{
                      component: wallScreenComponentObject
                    }],
                    options: {
                      bottomTab: {
                        text: 'Tab 1',
                        icon: source[0],
                        testID: 'FIRST_TAB_BAR_BUTTON'
                      }
                    }
                  }
                }, //first tab 1 ends here
                {  // second tab starts from here
                  stack: {
                    children: [{
                      component: profileScreenComponentObject
                    }],
                    options: {
                      bottomTab: {
                        text: 'Tab 2',
                        icon: source[1],
                        testID: 'SECOND_TAB_BAR_BUTTON'
                      }
                    }
                  }
                } // second screen tab 2 ends here
              ], //bottomTabs.children[] ends here
            }, //bottom tabs end here
          }, // center ends here
          right: {
            component: { name: CD.ProfileScreen },
            visible: false
          } // right ends here
        } //sidemenu ends here
      } // root ends here
    }); //setRoot ends here
  }) //Promise.then ends here


  Navigation.events().registerNavigationButtonPressedListener(navigationButtonPressed);
  //unregistered automatically when the component unmounts.
}


navigationButtonPressed = (event) => {
  alert(event.buttonId);
  let sideMenu = {
    left: {
      visible: true
    },
    right: {
      visible: false
    }
  }
  if (event.buttonId === 'right' || event.buttonId === 'right1') {
    sideMenu.left.visible = false;
    sideMenu.right.visible = true;
  }

  Navigation.mergeOptions("sideMenu", {
    sideMenu
  });

}






export default startHomePageTabs;