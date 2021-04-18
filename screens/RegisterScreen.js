import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  const register = () => {
    auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
      authUser.user.update({
        displayName: name,
        photoURL:
          imageUrl ||
          "https://www.google.com/search?q=png+om&safe=active&sxsrf=ALeKk00yVSWDtMFv9sxzThPK-YW8MCNSTw:1618775946387&tbm=isch&source=iu&ictx=1&fir=Ub1lKMIYyBw_kM%252CYsSwG9ZtF44SPM%252C_&vet=1&usg=AI4_-kRr6m5-Y6P7qMzZrr0qQsxJoe7DVg&sa=X&ved=2ahUKEwjJhYWqyojwAhW0heYKHbxSDxcQ9QF6BAgREAE#imgrc=Ub1lKMIYyBw_kM",
      });
    });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{ marginBottom: 50, fontSize: 26, fontWeight: "bold" }}>
        Create a Signal account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChange={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChange={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          autoFocus
          type="password"
          secureTextEntry
          value={password}
          onChange={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture URL (optional)"
          autoFocus
          type="text"
          value={imageUrl}
          onChange={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        onPress={register}
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
