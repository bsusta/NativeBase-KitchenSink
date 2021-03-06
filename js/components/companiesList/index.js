
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

class CompaniesList extends Component {

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
        }
    }
}
onValueChange (value: string) {
    this.setState({
        selected1 : value
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
            <Title>Companies list</Title>
          </Body>
        </Header>
        <Content>
          <List>
                    <ListItem >
                      <Body>
                        <Text>Company 1</Text>
                      </Body>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                    </ListItem>
                    <ListItem>
                      <Body>
                        <Text>Company 2</Text>
                      </Body>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                    </ListItem>
                </List>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={Actions.addCompany} iconLeft style={{ flexDirection: 'row', borderColor: 'white', borderWidth: 0.5 }}>
              <Icon active style={{ color: 'white' }} name="add" />
              <Text style={{ color: 'white' }} >Company</Text>
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

export default connect(mapStateToProps, bindAction)(CompaniesList);
