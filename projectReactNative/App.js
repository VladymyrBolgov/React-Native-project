import RegistrationScreen from "./components/Screens/auth/RegistrationScreen";
import LoginScreen from "./components/Screens/auth/LoginScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {

  return (
    <>
    <NavigationContainer>
        <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}