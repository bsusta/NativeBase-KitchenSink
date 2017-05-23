
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Footer, FooterTab, Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem, View } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import styles from './styles';

const fakeData =[
  {date:"22.5.2017 16:00",messageHeader:"About",message:"Message about something"},
  {date:"23.5.2017 16:00",messageHeader:"About 2",message:"Message about something other"},
  {date:"24.5.2017 16:00",messageHeader:"About 3",message:"Message about something other other"},
  {date:"25.5.2017 16:00",messageHeader:"About 4",message:"Message about something other other other"},
]

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

class Messages extends Component {
  constructor(props){
    super(props);
    this.state={messages:fakeData};
  }
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
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Messages</Title>
          </Body>
          <Right>
         </Right>
        </Header>

        <Content>

        {
          this.state.messages.map((message)=>{
          return <View style={styles.textBox}><Text style={{fontWeight: 'bold'}}>{message.date}{"\n"}</Text><Text>{message.message}</Text></View>
        })
      }
        </Content>

        <Footer>
          <FooterTab>
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

export default connect(mapStateToProps, bindAction)(Messages);
