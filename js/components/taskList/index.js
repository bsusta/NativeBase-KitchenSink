
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Footer, FooterTab, Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem, View } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  pushRoute,
} = actions;
const datas = [
  {
    route: 'taskEdit',
    text: 'Task name 1',
  },
  {
    route: 'taskEdit',
    text: 'Task name 2',
  },
];

class TaskList extends Component {

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

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Filter/Folder name</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List dataArray={datas} renderRow={data =>
            <ListItem button onPress={() => { Actions[data.route](); this.props.closeDrawer() }} >
              <Body>
                <Text>{data.text}</Text>
                <Text numberOfLines={1} note>
                  Folder: Folder 1
                </Text>
                <Text numberOfLines={1} note>Assigned: Branislav Susta</Text>
                <Text numberOfLines={1} note>Deadline: 9:00 27.5.2017</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          }
          />
        </Content>

        <Footer>
          <FooterTab>
            <Button iconLeft style={{ flexDirection: 'row', borderColor: 'white', borderWidth: 0.5 }}>
              <Icon active style={{ color: 'white' }} name="md-add" />
              <Text style={{ color: 'white' }} >Folder</Text>
            </Button>
          </FooterTab>

          <FooterTab>
            <Button iconLeft style={{ flexDirection: 'row', borderColor: 'white', borderWidth: 0.5 }}>
              <Icon active name="md-add" style={{ color: 'white' }} />
              <Text style={{ color: 'white' }} >Task</Text>
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

export default connect(mapStateToProps, bindAction)(TaskList);
