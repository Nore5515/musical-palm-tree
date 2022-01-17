import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("tick");
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>{seconds}</Text>
      <Button title="Reset" onPress={() => setSeconds(10)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
