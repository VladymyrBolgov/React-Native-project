import React, { useState, useCallback} from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback, // импорт компонента обертки
  Keyboard, // импорт компонента клавиатуры
  KeyboardAvoidingView, 
  Platform, 
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

const initialState = {
  email: "",
  password: "",
}

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  }

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      onLayout={onLayoutRootView}
    >
      <View style={styles.container}>
        <ImageBackground
            style={styles.image}
            source={require("./staticImages/Photo.png")}>
        
          <View style={styles.box}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
              <Text style={styles.h1}>Войти</Text>
              <View style={{...styles.form, marginBottom: isShowKeyboard ? 0 : 144}}>
              
              <TextInput
                  style={styles.input}
                  placeholder="Адрес электронной почты"
                  keyboardType="email-address" 
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))}       
                />
              
                <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputPassword}
                    placeholder="Пароль"
                    secureTextEntry={!isPasswordVisible}
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.password}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, password: value }))}   
                    />
                  <View style={styles.passwordIcon}>
                    <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                        <MaterialCommunityIcons
                          name={isPasswordVisible ? "eye-off" : "eye"}
                          size={24}
                          color="gray" />
                      </TouchableWithoutFeedback>
                  </View>
                </View>
              
                <TouchableOpacity
                   activeOpacity={0.8}
                  style={styles.button} 
                  onPress={keyboardHide}>
                  <Text style={styles.buttonText}>Войти</Text>
                </TouchableOpacity>

                <View style={styles.display}>
                  <Text style={styles.title}>Нет аккаунта?</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link}>Зарегистрироваться</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </KeyboardAvoidingView>
          </View>
            
        </ImageBackground>
      </View>
       </TouchableWithoutFeedback> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  box: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: 360, // костыль
    height: 489,
    marginTop: 270, // костыль
  },

  h1: {
    marginTop: 32, 
    marginBottom: 33,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
  },

  input: {
    width: 343,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 16,
    borderRadius: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputPassword: {
    flex: 1,
    width: 343,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 16,
    borderRadius: 10,
  },
  passwordIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },

  button: {
    alignItems: "center",
    padding: 16,
    marginTop: 27, // костыль
    backgroundColor: "#FF6C00",
    borderRadius: 100,

  },
  buttonText: {
    fontFamily:'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  display: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 144,
    marginTop: 16,
  },

  title: {
    fontFamily:'Roboto-Regular',
    fontSize: 16,
    marginRight: 5,
  },

  link: {
    fontFamily:'Roboto-Regular',
    fontSize: 16,
  },
});