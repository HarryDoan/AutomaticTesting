import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [bgc, setBgc] = useState(false);

  const handleChangeBGC = () => {
    setBgc(!bgc);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgc ? 'pink' : 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      alignItems: 'center',
    },
    textHeder: {
      color: bgc ? 'white' : 'black',
      fontSize: 24,
      fontWeight: 'bold',
    },
    btn: {
      marginTop: 20,
      width: 100,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor: 'crimson',
    },
    text: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.textHeder}>Automatic Testing</Text>

      <Pressable onPress={handleChangeBGC} style={styles.btn}>
        <Text style={styles.text}>Press</Text>
      </Pressable>
    </View>
  );
};

export default App;
