import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import { StyledButton, ButtonText, Colors } from '../components/styles';
const { darkLight, brand, primary, green, secondary } = Colors;

function Main({ navigation }) {
  return (
    <ImageBackground blurRadius={10} style={styles.background} source={require('../../assets/background.png')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/hplogo.png')} />
        <Text style={styles.tagline}>Search More with House Finder</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton onPress={() => navigation.navigate('Login')}>
          <ButtonText>Log In</ButtonText>
        </StyledButton>
        <StyledButton color={secondary} onPress={() => navigation.navigate('Signup')}>
          <ButtonText>Sign In</ButtonText>
        </StyledButton>
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

export default Main;
