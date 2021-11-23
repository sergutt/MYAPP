import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CHASE</Text>
        <Image
          style={styles.tinyLogo}
          source={require("./images/chaselogo.png")}
        />
      </View>
      <View style={styles.contentWrapper}>
        <TextInput
          placeholder={" Enter your username"}
          style={styles.content}
        ></TextInput>
        <TextInput
          placeholder={" Enter your password"}
          style={styles.content}
        ></TextInput>
        <View style={styles.rememberMe}>
          <TextInput
            placeholder={"Remember me "}
            style={styles.content}
          ></TextInput>
          <TextInput
            placeholder={"Use token "}
            style={styles.content}
          ></TextInput>
        </View>
        <TextInput
          placeholder={"Sign in "}
          placeholderTextColor="#fff"
          style={styles.signIn}
        ></TextInput>

        <TextInput
          placeholder={" Forgot username or password? "}
          placeholderTextColor="#2962ff"
          style={styles.forgotUserName}
        ></TextInput>
      </View>
      <View style={styles.content}>
        <Text style={styles.signUp}>Sign up | Open an account | Privacy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2962ff",
  },
  header: {
    fontFamily: "bold",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
  },
  tinyLogo: {
    width: 40,
    height: 35,
    marginLeft: 8,
    marginTop: 3,
    backgroundColor: "#2962ff",
  },
  title: {
    fontSize: 25,
    color: "white",
  },
  contentWrapper: {
    backgroundColor: "white",
    margin: 18,
    marginBottom: -30,
    paddingBottom: 10,
    justifyContent: "center",
    marginTop: 200,
    borderColor: "gray",
    borderWidth: 1,
    zIndex: 90,
  },
  content: {
    marginLeft: 5,
    padding: 10,
    textAlign: "justify",
    color: "#2962ff",
    backgroundColor: "white",
  },
  rememberMe: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  signIn: {
    textAlign: "center",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    padding: 2,
    backgroundColor: "#2962ff",
    borderRadius: 5,
  },

  signUp: {
    textAlign: "center",
    color: "#2962ff",
    paddingTop: 30,
    paddingBottom: 90,
    zIndex: -1,
  },
  forgotUserName: {
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
});
