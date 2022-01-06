import React from 'react';
import { StyleSheet, Platform, Dimensions, Button, Alert, Text, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, View, SafeAreaView, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { withTheme } from 'react-native-paper';

class HomePage extends React.Component {
  state = {
    lastworkout: {
      date: new Date(),
      totalWeightLifted: 14000,
      totalSets: 20,
      totalReps: 200,
      totalExcercises: 5
    }
  };

  render() {
    const screenName = 'Details';
    return (
      <View
        style={styles.MainViewStyle}>
        <View style={{
          backgroundColor: 'tomato',
          width: '100%',
          height: 100
        }}>
          <Text>{this.state.lastworkout.date.toLocaleString()}</Text>
          <Text>{this.state.lastworkout.totalExcercises} excercises done</Text>
          <Text>{this.state.lastworkout.totalReps} total reps</Text>
          <Text>{this.state.lastworkout.totalSets} total sets</Text>
        </View>
        {/* <Button
          title={`Go to ${screenName}`}
          onPress={() => this.props.navigation.navigate(screenName)}
        /> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainViewStyle: {
    marginTop: '10%',
    flex: 1,
    flexDirection: 'row',
    // justifyContent: "center", //main axis
    // alignItems: 'center', //secondary axis
    flexWrap: 'wrap',
    // alignContent: "center"
  }
});

export default withTheme(HomePage);