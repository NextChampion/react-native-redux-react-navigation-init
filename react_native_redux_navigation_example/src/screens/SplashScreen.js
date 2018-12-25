import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import { connect } from '../redux';
import Container from '../components/Container';
import UI from '../UI';
import Button from '../components/Button';

class Splash extends Component<{}> {

  static navigationOptions = ({ navigation }) => {
    const headerLeft =null;
    const headerStyle = {
      backgroundColor: UI.color.white1,
      borderBottomWidth: 0,
      shadowRadius: 0,
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
        width: 0,
      },
      elevation: 0,
    };
    return { headerLeft, headerStyle };
  };

  state = {
  }

  onStart = () => {
    console.log('[hahahahahah], navigation', this.props.navigation);
    this.props.navigation.navigate('main');
  }

  render() {
    const degrees = ' Six Degrees of Separation';
    return (
      <Container>
        <View style={styles.content}>
          <Text>SplashScreen</Text>
        </View >
        <Button
            type='small'
            name='Get Started'
            onPress={this.onStart}
          />
      </Container>
    );
  }
}

export default connect(['version'])(Splash)

const styles = StyleSheet.create({
  images: {
    paddingTop: 112,
    alignItems: 'center',
  },
  image: {
    width: 327,
    height: 216,
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
    marginTop: 56,
    paddingHorizontal: UI.unit * 4,
  },
  text: {
    fontSize: 20,
    color: UI.color.black,
    fontFamily: 'AvenirNext-Medium'
  },
});
