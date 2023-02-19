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


export default function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${email} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('./staticImages/Photo BG.png')}>
          {/* </ImageBackground> */}

        <View style={styles.box}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
            <Text style={styles.h1}>Регистрация</Text>
            <TextInput
                value={name}
                onChangeText={nameHandler}
                placeholder="Логин"
                style={styles.input}
              />
              <TextInput
              value={email}
                onChangeText={emailHandler}
                placeholder="Адрес электронной почты"
                keyboardType="email-address"
                style={styles.input}
              />
                <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Пароль"
                secureTextEntry={true}
                style={styles.input}
              />
              <TouchableOpacity style={styles.button} onPress={onLogin}>
                <Text style={styles.buttonText}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.title}>Уже есть аккаунт? Войти</Text>
              </View>
              <View style={styles.line}></View>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    
  },
  image: {
    width: 375,
    height: 812,
  },

  box: {
    
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
 
    width: 375,
    height: 549,
    marginTop: 245,
  },

  h1: {
    marginTop: 92,
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

  input: {
    width: 343,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 16,
    borderRadius: 10,
  },

  title: {
    marginTop: 16,
    fontSize: 16,
    textAlign: "center",

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
  line: {
    width: 134,
    height: 5,
    bottom: 8,
    backgroundColor: "#212121",
    borderRadius: 100,
    marginTop: 66,
    marginBottom: 8,
    alignSelf: 'center'
  }
});
