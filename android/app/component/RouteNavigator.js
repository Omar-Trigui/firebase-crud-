import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './Home';
import LoginForm from './LoginForm';

const AppNavigator = createStackNavigator({
    
    Login : {
        screen : LoginForm,
        navigationOptions : {
          title : 'Login'
        }
    },
    Home: {
      screen: Home,
      navigationOptions : {
        title : 'HOME'
      }
    }
  });
  const Root = createAppContainer(AppNavigator);
  export default  Root ; 