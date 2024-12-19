import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
    <Stack.Screen options={{headerShown:false}}/>
    <ImageBackground
      source={require('@/assets/images/ecommerce-splash.jpg')}
      style={{flex:1}}
      resizeMode="cover"
    >
    <View style={styles.container}>
      <LinearGradient
          colors={["transparent", 'rgba(255,255,255,0.9)']}
      >

      <Text>Welcome Screeneeeeee</Text>
      <Link href={"/signin"} asChild>
        <TouchableOpacity>
          <Text>Go to SignIn Screen</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/signup"} asChild>
        <TouchableOpacity>
          <Text>Go to SignUp Screen</Text>
        </TouchableOpacity>
      </Link>
      </LinearGradient>
    </View>
    </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
