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
  Alert,
  TouchableOpacity,

} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${email} + ${password}`);
  };

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
              <View style={styles.form}>
                    <TextInput
                        value={name}
                        onChangeText={nameHandler}
                        placeholder="Логин"
                      // textAlign={"center"}
                        style={styles.input}
                    />
                  
                      <TextInput
                        value={email}
                        onChangeText={emailHandler}
                        placeholder="Адрес электронной почты"
                        keyboardType="email-address"
                        style={styles.input}
                    />
                    
                  <View style={styles.inputContainer}>
                      <TextInput
                        value={password}
                        onChangeText={passwordHandler}
                        placeholder="Пароль"
                      //secureTextEntry={true}
                        secureTextEntry={!isPasswordVisible}
                        style={styles.inputPassword}
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
                
                <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={onLogin}>
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



