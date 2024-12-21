import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import OnboardingSVG from '@/assets/images/undraw_chef.svg'
type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
          <OnboardingSVG
          style={{position:'absolute',alignSelf:'center'}}
          >

          </OnboardingSVG>
        <View style={styles.container}>
          <LinearGradient
            colors={[
              "transparent",
              "rgba(255,255,255,0.9)",
              "rgba(255,255,255,1)",
            ]}
            style={styles.background}
          >
            <View style={styles.wrapper}>
              <Text style={styles.title}>Menyu</Text>
              <Text style={styles.description}>An easier cooking experience</Text>

            <View style={styles.loginWrapper}>
              <Link href={"/signin"} asChild>
                <TouchableOpacity style={styles.button}>
                  <Ionicons name="mail-outline" size={20} color={'black'}/>
                  <Text style={styles.btnText}>Login with email</Text>
                </TouchableOpacity>
              </Link>
            </View>

            <View style={styles.loginWrapper}>
              <Link href={"/signin"} asChild>
                <TouchableOpacity style={styles.button}>
                  <Ionicons name="logo-google" size={20} color={'black'}/>
                  <Text style={styles.btnText}>Login with Google</Text>
                </TouchableOpacity>
              </Link>
            </View>



            <View style={styles.loginWrapper}>
              <Link href={"/signin"} asChild>
                <TouchableOpacity style={styles.button}>
                  <Ionicons name="logo-apple" size={20} color={'black'}/>
                  <Text style={styles.btnText}>Login with Apple</Text>
                </TouchableOpacity>
              </Link>
            </View>



              <Link href={"/signup"} asChild>
                <TouchableOpacity>
                  <Text style={{color:Colors.primary}}>SignUp</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </LinearGradient>
        </View>
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
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: Colors.primary,
    fontWeight: "700",
    letterSpacing:2.4,
    marginBottom:5
  },
  description:{
    fontSize: 14,
    color: Colors.gray,
    letterSpacing:1.2,
    lineHeight:30,
    marginBottom:20
  },
  loginWrapper:{
    alignSelf:'stretch'
  },
  button:{
    flexDirection:'row',
    padding:10,
    borderColor:Colors.gray,
    borderWidth:StyleSheet.hairlineWidth,
    borderRadius:25,
    borderTopWidth:2,
    borderBottomWidth:2,
    borderRightWidth:2,
    borderLeftWidth:2,
    alignItems:'center',
    justifyContent:'center',
    gap:5,
    marginBottom:15
  },
  btnText:{
    fontSize:14,
    fontWeight:'600',
    color:Colors.black,

  }
});
