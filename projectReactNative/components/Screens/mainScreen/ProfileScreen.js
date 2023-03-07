import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";

export default function ProfileScreen({ navigation }) {
  
    return (
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },

  })