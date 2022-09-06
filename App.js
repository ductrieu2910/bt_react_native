import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import Square from './Square';


export default function App(){
  return(
    <View style ={styles.container}>

      <Square number='1' color='#6CD1FA'/>
      <Square number='2' color='#78F57A'/>
      <Square number='3' color='#FA4C8F'/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : 'row'
  },
});



