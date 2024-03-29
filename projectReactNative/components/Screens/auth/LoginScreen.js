import React, { useState, useEffect, useCallback, useRef } from "react";
// import { useDispatch } from 'react-redux';
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
//fonts
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync(); 

const initialState = {
  email: "",
  password: "",
}

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  // const dispatch = useDispatch();
  const [isFocusedEmail, setIsFocusedEmail] = useState(false)
  const [isFocusedPassword, setIsFocusedPassword] = useState(false)

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
    navigation.navigate('Home');
  }

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

   // fonts
   const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../../../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../../../assets/fonts/Roboto-Medium.ttf')
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}
      onLayout={onLayoutRootView}>
      <View style={styles.container}>
        <ImageBackground style={styles.image}
            source={require("../../../assets/images/PhotoBG.png")}>
      
           {/* для поднятие над клавиатурой */}
            <KeyboardAvoidingView style={styles.box}
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
              <Text style={styles.h1}>Войти</Text>
              <View style={{ ...styles.form,
                marginBottom: isShowKeyboard ? 0 : 144,
                width: dimensions}}>
            
                    <TextInput
                      style={{...styles.input, borderColor: isFocusedEmail ? '#FF6C00' : '#E8E8E8'}}
                      placeholder="Адрес электронной почты"
                      keyboardType="email-address" 
                      onFocus={() => {
                        setIsShowKeyboard(true)
                        setIsFocusedEmail(true)
                        }}
                      onBlur={() => setIsFocusedEmail(false)}
                      value={state.email}
                      onChangeText={(value) =>
                        setState((prevState) => ({ ...prevState, email: value }))} 
                    />
              
                    <View style={styles.inputContainer}>
                      <TextInput
                          style={{...styles.inputPassword, borderColor: isFocusedPassword ? '#FF6C00' : '#E8E8E8'}}
                          placeholder="Пароль"
                          secureTextEntry={!isPasswordVisible}
                          onFocus={() => {
                            setIsShowKeyboard(true)
                            setIsFocusedPassword(true)
                            }}
                          onBlur={() => setIsFocusedPassword(false)}
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
                  <TouchableOpacity  onPress={() => navigation.navigate("Register")}>
                    <Text
                      style={styles.link}>
                        Зарегистрироваться
                    </Text>
                  </TouchableOpacity>
                </View>  
              </View>
            </KeyboardAvoidingView>    
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
    justifyContent: "center",
  },

  box: {
    paddingHorizontal:16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,        
    backgroundColor:'#FFFFFF',
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
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    marginBottom: 16,
    borderRadius: 8,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
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
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    marginBottom: 16,
    borderRadius: 8,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
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
    color: '#1B4371',
  },

  link: {
    fontFamily:'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
  },
});









