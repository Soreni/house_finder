import React from 'react';
import LottieView from 'lottie-react-native';

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return <LottieView loop autoplay source={require('../../assets/animation/loader.json')}></LottieView>;
};

export default ActivityIndicator;
