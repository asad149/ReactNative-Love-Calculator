import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { TextInput, Appbar, Button } from "react-native-paper";
import DisplayLove from "./Component/DisplayLove";

class App extends React.Component {
 
  state = {
    fname: "",
    sname: "",
    result: "loading",
  };

  handleSubmit = () => {
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
      {
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "189bae46b2mshd78acfa75ba4fe9p173198jsn73f0294fc664",
        },
      }
    )
      .then((data) => data.json())
      .then((data2) => {
        console.log(data2);
        this.setState({
          result: data2,
        });
      });
  };



  render() {
    return (
      <View style={styles.container}>
        
        <Appbar.Header>
          <Appbar.Content
            title="Love % Calculator"
            style={{ alignItems: "center" }}
          />
        </Appbar.Header>
        <TextInput
          label="First Name"
          value={this.state.fname}
          onChangeText={(fname) => this.setState({ fname })}
        />
        <TextInput
          label="Second Name"
          value={this.state.sname}
          onChangeText={(sname) => this.setState({ sname })}
        />
        <Button
          style={{ margin: 10 }}
          icon="heart"
          mode="contained"
          onPress={this.handleSubmit}
        >
          Calculate
        </Button>
        <DisplayLove  data={this.state.result} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
