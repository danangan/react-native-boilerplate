import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation'
import { Image } from 'react-native'

// import screens
import postScreen from './screens/Example'
import profileScreen from './screens/Profile'

// import icons
const searchIcon = require('./assets/Icons/Search.png')

const defaultNavigationOptions = { header: null }
const Tabs = createBottomTabNavigator(
  {
    Post: postScreen,
    Profile: profileScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: tintColor => {
        const { routeName } = navigation.state
        let iconName

        switch (routeName) {
          case 'Profile':
            iconName = searchIcon
            break
          case 'Post':
            iconName = searchIcon
            break
          default:
            break
        }

        return tabBarIcon({ iconName, tintColor })
      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: '#bbb',
      labelStyle: {
        fontSize: 10,
      },
      style: {
        backgroundColor: '#ffffff',
        paddingVertical: 5,
        borderWidth: 0,
      },
      allowFontScaling: true,
      showIcon: true,
    },
    initialRouteName: 'Post',
  },
)

const AppNavigator = createStackNavigator(
  { Home: { screen: Tabs } },
  { Post: { screen: postScreen } },
  {
    initialRouteName: 'Post',
    navigationOptions: defaultNavigationOptions,
  },
)

export default createAppContainer(AppNavigator)
