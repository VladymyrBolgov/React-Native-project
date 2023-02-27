import React, { useState, useCallback, useEffect } from "react";
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
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

const initialState = {
  name: "",
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

  // для поворота єкрана
  const [dimensions, setDimensions] = useState(
    Dimensions.get('window').width - 20 * 2)

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 20 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    }
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

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
            {/* для поднятие над клавиатурой */}
            <KeyboardAvoidingView 
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
              <Text style={styles.h1}>Регистрация</Text>
               {/* для поднятие над клавиатурой */}
              <View style={{
                    ...styles.form,
                    marginBottom: isShowKeyboard ? 0 : 78,
                    width: dimensions,
                  }}>
                    <TextInput
                      style={styles.input}
                      placeholder="Логин" 
                      onFocus={() => setIsShowKeyboard(true)} 
                      value={state.name}
                      onChangeText={(value) =>
                        setState((prevState) => ({ ...prevState, name: value }))}
                      />
                      
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
                        <Text style={styles.buttonText}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.display}>
                  <Text style={styles.title}>Уже есть аккаунт?</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link}>Войти</Text>
                  </TouchableOpacity>
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
    justifyContent: "flex-end",
    alignItems: "center"

  },

  box: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: 360, // костыль
    height: 549,
    marginTop: 205, // костыль
  },

  h1: {
    marginTop: 80, //костыль
    marginBottom: 33,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
  },

  form: {
    // marginHorizontal: 16,
    
  }, 

  input: {
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
    marginBottom: 78,
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




