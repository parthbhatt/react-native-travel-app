/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Home from './src/screens/Home';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  //const safeAreaInsets = useSafeAreaInsets();

  return (
    <Home />
    // <SafeAreaView style={[styles.flex,styles.safeView]}>
    //   <View style={styles.view}>
    //     <Text style={styles.text}>Hello World</Text>
    //   </View>
    // </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   // },
//   flex: {
//     flex: 1
//   },
//   safeView: {
//     // flex: 1,
//     //backgroundColor: 'red'
//   },
//   view: {
//     flex: 1,
//     backgroundColor: 'yellow',
//   },
//   text: {
//      flex: 1,
//      textAlign: 'center'
//   }
// });

export default App;
