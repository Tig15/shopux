import {StyleSheet, Text, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const OnboardScreen = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    return navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        pages={[
          {
            backgroundColor: '#C94647',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../assets/animation/getStarted.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Get Started',
            subtitle: 'Check out this amazing shopping application.',
          },
          {
            backgroundColor: '#A048D3',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../assets/animation/discount.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Discount at Peak',
            subtitle: 'Get anything you wish at low cost.',
          },
          {
            backgroundColor: '#464039',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../assets/animation/shopux.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Shopux',
            subtitle: 'The application you were looking for.',
          },
        ]}
      />
    </View>
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottie: {
    width: 300,
    height: 400,
  },
});
