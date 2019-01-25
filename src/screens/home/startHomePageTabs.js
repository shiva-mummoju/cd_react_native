import { Navigation } from 'react-native-navigation';
import CD from './../screenIDS';
import Icon from 'react-native-vector-icons/Ionicons';


const startHomePageTabs = () => {
  Promise.all([
    Icon.getImageSource("md-albums", 30),
    Icon.getImageSource("ios-albums", 30)
  ]).then(source => {


    Navigation.setRoot({
      root: {
        sideMenu: {
          id: "sideMenu",
          left: {
            component: { name: CD.ProfileScreen, },
            visible: false
          },
          center: {
            bottomTabs: {
              children: [
                {
                  stack: {
                    children: [{
                      component: {
                        name: CD.WallScreen,
                        passProps: {
                          text: 'This is tab 1'
                        },
                        options: {
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
                        },
                        options: {
                          topBar: {
                            background: {
                              color: 'blue'
                            },
                            title: {
                              text: "Home",
                              color: 'white'
                            },
                            // hideOnScroll: UI.settings.general.hideBarsOnScroll,
                            rightButtons: [{
                              id: 'right1',
                              text: 'right',
                              icon: source[0],
                              color: 'white',
                            }],
                            leftButtons: [{
                              id: 'left1',
                              text: 'left',
                              icon: source[0],
                              color: 'white',
                            }],
                          },
                        }
                      }
                    }],
                    options: {
                      bottomTab: {
                        text: 'Tab 2',
                        icon: source[1],
                        testID: 'SECOND_TAB_BAR_BUTTON'
                      }
                    }
                  }
                }],

            },
       
            //bottom tabs end here
          


          },
          right: {
            component: { name: CD.ProfileScreen },
            visible: false
          }
        }
        //sidemenu ends here
      }
    });
  })
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