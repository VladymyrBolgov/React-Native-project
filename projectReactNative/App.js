import React, { useState } from "react";
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

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const initialState = {
  name: "",
  email: "",
  password: "",
}

const loadFonts = async () => {
  await Font.loadAsync({
   "Roboto-Regular": require("./fonts/Roboto-Regular.ttf"),
  "Roboto-Bold": require("./fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadFonts}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // };

  return (
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              <View style={{...styles.form, marginBottom: isShowKeyboard ? 0 : 78}}>
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
    justifyContent: "center",

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
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
  },

  form: {
    marginHorizontal: 16,
    
  }, 

  input: {
    width: 343,  // без box надо закоментить
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
    // width: 343,
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
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
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
    fontSize: 16,
    marginRight: 5,
  },

  link: {
    fontSize: 16,
  },
});




