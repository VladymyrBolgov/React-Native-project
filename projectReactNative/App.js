import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const AuthStack = createStackNavigator();

export default function App() {

  return (
    <>
    <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen
           options={{
            headerShown: false,
          }}
            name="Register"
            component={RegistrationScreen} />
          <AuthStack.Screen
              options={{
            headerShown: false,
          }}
            name="Login"
            component={LoginScreen} />  
      </AuthStack.Navigator>
    </NavigationContainer>
  </>
  );
}