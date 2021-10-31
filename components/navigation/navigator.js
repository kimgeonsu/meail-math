import { createAppcontainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegisterPage from '../login/register-page';
import RegisterName from '../login/registerName';

const RegistNavigator = createStackNavigator({
    RegistPage: {screen: RegisterPage},
    InputName: RegisterName,

})

export default createAppcontainer(RegistNavigator);