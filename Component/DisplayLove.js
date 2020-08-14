import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DisplayLove = (prop) => {
  if (prop.data === "loading") {
    return <Text style={styles.text}>Please Wait...</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Love Percentage = {prop.data.percentage}</Text>
    <Text style={styles.text}>Result = {prop.data.result}</Text>
      </View>
    );
  }
};
export default DisplayLove;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth:5,
    margin:40,
    padding:20,
    borderColor:"indigo",
    borderRadius:30,
    backgroundColor:"#efefef"

  },
  text: {
    fontSize: 20,
    textAlign: "center",
    padding:10,
    margin:5,
    marginTop:10,
    fontFamily:"monospace"
  },
});
