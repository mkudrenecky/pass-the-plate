import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Keyboard } from "react-native";
import * as Font from "expo-font";
import styles from "./LoginStyles";
import { MaterialIcons } from "@expo/vector-icons";
import ButtonSignup from "./ButtonLanding";
import InputField from "./InputField";
import PasswordStrengthBar from "./PasswordStrengthBar";
import ChecklistModal from "./ChecklistModal";

const Signup = ({ onSwitch }) => {
  // State for form fields
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // State for form field errors
  const [signupEmailError, setSignupEmailError] = useState("");
  const [signupPasswordError, setSignupPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  // Function to handle signup validation and submission
  const handleSignup = () => {
    let isValid = true;
    Keyboard.dismiss();

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Validate email
    if (!signupEmail || !emailRegex.test(signupEmail)) {
      setSignupEmailError("Invalid email");
      isValid = false;
    } else {
      setSignupEmailError("");
    }

    // Validate password
    if (!signupPassword) {
      setSignupPasswordError("Password required");
      isValid = false;
    } else {
      setSignupPasswordError("");
    }

    // Validate password confirmation
    if (signupPassword !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (isValid) {
      // TODO: back-end signup logic
    }
  };

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        titleFont: require("../../assets/fonts/Inter-Bold.ttf"),
        subHeaderFont: require("../../assets/fonts/Inter-Regular.ttf"),
        textFont: require("../../assets/fonts/Inter-Medium.ttf"),
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <Text
          style={[
            styles.headerText,
            fontLoaded ? { fontFamily: "titleFont" } : {},
          ]}
        >
          Join Us
        </Text>
        <Text
          style={[
            styles.subHeaderText,
            fontLoaded ? { fontFamily: "subHeaderFont" } : {},
          ]}
        >
          Empty plate or full heart?
        </Text>
      </View>

      <View style={styles.fields}>
        <InputField
          icon="email"
          placeholder="email"
          value={signupEmail}
          onChangeText={(text) => {
            setSignupEmail(text);
            setSignupEmailError("");
          }}
          onFocus={() => {
            setSignupEmailError("");
          }}
          inputMode="email"
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          errorText={signupEmailError}
          style={{ marginTop: 0 }}
        />

        <InputField
          icon="lock"
          placeholder="password"
          value={signupPassword}
          onChangeText={(text) => {
            setSignupPassword(text);
            setSignupPasswordError("");
            setConfirmPasswordError("");
          }}
          onFocus={() => {
            setSignupPasswordError("");
            setConfirmPasswordError("");
          }}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          rightComponent={
            <View style={{ flexDirection: "row" }}>
              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                style={{ marginRight: 10 }}
              >
                <MaterialIcons
                  name={showPassword ? "visibility" : "visibility-off"}
                  size={25}
                  color="gray"
                />
              </Pressable>
              <ChecklistModal password={signupPassword} />
            </View>
          }
          renderBelow={() => <PasswordStrengthBar password={signupPassword} />}
          errorText={signupPasswordError}
        />

        <InputField
          icon="lock"
          placeholder="confirm password"
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            setConfirmPasswordError("");
          }}
          onFocus={() => {
            setConfirmPasswordError("");
          }}
          autoCapitalize="none"
          secureTextEntry={true}
          autoCorrect={false}
          name="confirmPassword"
          errorText={confirmPasswordError}
        />

        <ButtonSignup title="SIGN UP" onPress={handleSignup} />

        <Pressable style={styles.signupContainer} onPress={onSwitch}>
          <Text
            style={[
              styles.signupText,
              fontLoaded ? { fontFamily: "textFont" } : {},
            ]}
          >
            Already have an account?{" "}
            <Text
              style={[
                styles.signup,
                fontLoaded ? { fontFamily: "textFont" } : {},
              ]}
            >
              Sign in!
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;
