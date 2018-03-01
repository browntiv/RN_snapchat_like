import { getStatusBarHeight } from 'react-native-status-bar-height';
// import { observer } from 'mobx-react/native';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import RootStackNavigator from '@navigation/RootStackNavigator';
// import BaseStyles from '@BaseStyles';
// import appStore from '@stores/appStore';
// import { ratio } from '@utils/Styles';
// import { ICONS } from '@utils/Icons';
// import { setLocale } from '@utils/Localizations';

// @observer
class App extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <RootStackNavigator />
      </View>
    );
  }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight(false) : 0, // false to get height of android too.
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});

export default App;
