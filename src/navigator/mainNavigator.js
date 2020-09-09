import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings99466Navigator from '../features/Settings99466/navigator';
import Settings99447Navigator from '../features/Settings99447/navigator';
import Settings99428Navigator from '../features/Settings99428/navigator';
import Settings99409Navigator from '../features/Settings99409/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings99466: { screen: Settings99466Navigator },
Settings99447: { screen: Settings99447Navigator },
Settings99428: { screen: Settings99428Navigator },
Settings99409: { screen: Settings99409Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
