import {createSwitchNavigator, CreateAppContainer} from "react_navigation";

export default class App extends Component{

    render(){
        return<AppContainer/>;
    }
}
const AppSwitchNavigator = createSwitchNavigator(
    {
  Login: {screen: LoginScreen},
  BottomTab: {}
    }
)