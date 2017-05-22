
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem } from 'native-base';
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
          <List
            dataArray={datas} renderRow={data =>
              <ListItem button onPress={() => { Actions[data.route](); this.props.closeDrawer() }} >
              <Body>
                <Text>{data.text}</Text>
                <Text numberOfLines={1} note>
                  <Icon name="folder"/>
                  Folder 1
                </Text>
                <Text numberOfLines={1} note>Branislav Susta</Text>
                <Text numberOfLines={1} note>9:00 27.5.2017</Text>
               </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
          }
          />
        </Content>
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
