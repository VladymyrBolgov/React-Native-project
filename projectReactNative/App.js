import RegistrationScreen from "./components/Screens/auth/RegistrationScreen";
import LoginScreen from "./components/Screens/auth/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

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