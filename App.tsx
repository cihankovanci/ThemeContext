import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';


const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (

    <ThemeProvider>

    <View style={{backgroundColor: theme.primary,}}>

        <Home />

    </View>
    </ThemeProvider>



  );
};

export default App;

const styles = StyleSheet.create({});
