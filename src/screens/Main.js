import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import { StyledButton, Colors } from '../components/styles';
const { darkLight, brand, primary, green, secondary } = Colors;

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground blurRadius={10} style={styles.background} source={require('../../assets/background.png')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton title="Login" onPress={() => navigation.navigate('Login')} />
        <StyledButton title="Register" color={secondary} onPress={() => navigation.navigate('Signup')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
