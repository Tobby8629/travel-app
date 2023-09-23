import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens';


export default function App() {
  const stack = createStackNavigator()
  return (
    <NavigationContainer>
       <stack.Navigator>
        <stack.Screen name='Home' component={Home} />
       </stack.Navigator>
    </NavigationContainer>
  );
}
