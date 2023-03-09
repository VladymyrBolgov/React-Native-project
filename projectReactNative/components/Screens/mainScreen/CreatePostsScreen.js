import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";

export default function CreatePostsScreen({ navigation }) {
  console.log("navigation", navigation);
    return (
      <View style={styles.container}>
        <Text>CreatePostsScreen</Text>
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