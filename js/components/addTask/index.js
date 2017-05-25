
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Input, Picker, Item, Footer, FooterTab, Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const {
  pushRoute,
} = actions;
const datas = [
];

class AddTask extends Component {

    static propTypes = {
      openDrawer: React.PropTypes.func,
      pushRoute: React.PropTypes.func,
      navigation: React.PropTypes.shape({
        key: React.PropTypes.string,
      }),
    }

    pushRoute(route) {
      this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
    }

    constructor(props) {
      super(props);
      this.state = {
        selectedItem: undefined,
        selected1: 'key0',
        results: {
          items: []
        },
      };
    }
    onValueChange(value: string) {
      this.setState({
        selected1: value
      });
    }

    render() {
      return (
        <Container style={styles.container}>
          <Header>
            <Left>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Add/Edit task</Title>
            </Body>
          </Header>
          <Content style={{ padding: 15 }}>
            <Text note> Task Name</Text>
            <View style={{ borderColor: '#CCCCCC', borderWidth: 0.5, marginBottom: 15 }}>
              <Input />
            </View>
            <Text note>Descrition</Text>
            <View style={{ borderColor: '#CCCCCC', borderWidth: 0.5, marginBottom: 15 }}>
              <Input />
            </View>
            <Text note>Work hours</Text>
            <View style={{ borderColor: '#CCCCCC', borderWidth: 0.5, marginBottom: 15 }}>
              <Input />
            </View>
            <Text note>Status</Text>
            <View style={{ borderColor: '#CCCCCC', borderWidth: 0.5, marginBottom: 15 }}>
              <Picker
                supportedOrientations={['portrait', 'landscape']}
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}>
                <Item label="New" value="key0" />
                <Item label="Company 2" value="key1" />
              </Picker>
            </View>
            <Text note>Requester</Text>
            <View style={{ borderColor: '#CCCCCC', borderWidth: 0.5, marginBottom: 15 }}>
              <Picker
                supportedOrientations={['portrait', 'landscape']}
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}>
                <Item label="user 1" value="key0" />
                <Item label="Company 2" value="key1" />
              </Picker>
            </View>
            <Text note>Company</Text>
            <View style={{ borderColor: '#CCCCCC', borderWidth: 0.5, marginBottom: 15 }}>
              <Picker
                supportedOrientations={['portrait', 'landscape']}
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}>
                <Item label="Company 1" value="key0" />
                <Item label="Company 2" value="key1" />
              </Picker>
            </View>
            <Text note>Assigned</Text>
            <View style={{ borderColor: '#CCCCCC', borderWidth: 0.5, marginBottom: 15 }}>
              <Picker
                supportedOrientations={['portrait', 'landscape']}
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}>
                <Item label="User 2" value="key0" />
                <Item label="Company 2" value="key1" />
              </Picker>
            </View>
          </Content>
          <Footer>
            <FooterTab>
              <Button onPress={Actions.addUser} iconLeft style={{ flexDirection: 'row', borderColor: 'white', borderWidth: 0.5 }}>
                <Icon active style={{ color: 'white' }} name="trash" />
                <Text style={{ color: 'white' }} >Delete</Text>
              </Button>
            </FooterTab>
            <FooterTab>
              <Button onPress={Actions.addUser} iconLeft style={{ flexDirection: 'row', borderColor: 'white', borderWidth: 0.5 }}>
                <Icon active style={{ color: 'white' }} name="add" />
                <Text style={{ color: 'white' }} >Save</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    }
  }

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(AddTask);
