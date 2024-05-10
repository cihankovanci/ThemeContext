import {
  Button,
  StyleSheet,
  Text,
  View,
  Switch,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useTheme} from '../context/ThemeContext';

type Props = {};

const Home = (props: Props) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.primary,
        width: '100%',
        alignItems: 'center',

      }}>
      <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
        <Switch onValueChange={toggleTheme} value={theme.isDark} />
        <Text style={{color: theme.textPrimary}}>{theme.theme}</Text>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
