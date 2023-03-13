import React from "react";
import RegistrationScreen from "./components/Screens/auth/RegistrationScreen";
import LoginScreen from "./components/Screens/auth/LoginScreen";
import PostsScreen from "./components/Screens/mainScreen/PostsScreen"
import CreatePostsScreen from "./components/Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./components/Screens/mainScreen/ProfileScreen"

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
    <Stack.Screen options={{ headerShown: false }}  name="Register" component={RegistrationScreen} />
    <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />  
  </Stack.Navigator>
</NavigationContainer>
</>
  //   <>
  //     <RegistrationScreen/>
  //   {/* <NavigationContainer>
  //       <MainTab.Navigator>
  //         <MainTab.Screen name='Posts' component={PostsScreen} />
  //         <MainTab.Screen name='Create' component={CreatePostsScreen} />
  //         <MainTab.Screen name='Profile' component={ProfileScreen} />
  //       </MainTab.Navigator>
  //   </NavigationContainer> */}
  // </>
  );
}
// auth
