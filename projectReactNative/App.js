import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RegistrationScreen from "./components/Screens/auth/RegistrationScreen";
import LoginScreen from "./components/Screens/auth/LoginScreen";
import PostsScreen from "./components/Screens/mainScreen/PostsScreen"

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {

  return (
    <>
    <NavigationContainer>
        <MainTab.Navigator>
          <MainTab.Screen name='Posts' component={PostsScreen} />
        </MainTab.Navigator>
    </NavigationContainer>
  </>
  );
}
// auth

{/* <Stack.Navigator>
          <Stack.Screen
           options={{
            headerShown: false,
          }}
            name="Register"
            component={RegistrationScreen} />
          <Stack.Screen
              options={{
            headerShown: false,
          }}
            name="Login"
            component={LoginScreen} />  
      </Stack.Navigator> */}