/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, Button, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val,
    });
  };

  placeSubmitHandler = () => {
      if(this.state.placeName.trim()===""){
        return;
      }
      this.setState(prevState => {
        return {
          places: prevState.places.concat(prevState.placeName)
        };
      });
  }

  render() {
    const placesOutput = this.state.places.map((place, index) => (
        <Text style={styles.listItem} key={index}>{place}</Text>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
              placeholder={"An awesome place"}
              style={styles.placeInput}
              onChangeText={this.placeNameChangeHandler}
              value={this.state.placeName}
          />
          <Button
              onPress={this.placeSubmitHandler}
              style={styles.placeButton}
              title="Add"
          />
        </View>
        <View style={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeInput: {
    width: "70%",
  },
  placeButton: {
    width: "30%",
  },
  listContainer: {
    width: "100%",
  },
  listItem: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
  }
});
