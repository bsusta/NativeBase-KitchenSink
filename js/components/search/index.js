
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Footer, FooterTab, Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem, View, Item,Input, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  pushRoute,
} = actions;

const mockResults = [
  {
    route: 'taskEdit',
    taskName: 'Task name 1',
    folder:"Folder 1",
    assigned:"Branislav",
    deadline:"7:00 26.6.2016",

  },
  {
    route: 'taskEdit',
    taskName: 'Task name 2',
    folder:"Folder 2",
    assigned:"Branislav",
    deadline:"9:00 24.4.2017",
  },
];
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: 'key1',
      results:[]
    }
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
  onValueChange (value: string) {
    this.setState({
        selected1 : value
    });
  }
  showResults(){
    this.setState({results:mockResults});
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar rounded >
          <Left style={{flex:1,}}>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Item style={{flex:9,}}>
            <Icon name="ios-search" />
            <Input placeholder="Search"/>
          </Item>
        </Header>

        <Content>
        <ListItem icon style={{margin:10,}}>
          <Left>
              <Icon name="plane" />
          </Left>
          <Body style={styles.inputView}>
          <Picker
            supportedOrientations={['portrait','landscape']}
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}>
            <Item label="Filter 1" value="key0" />
            <Item label="Filter 2" value="key1" />
            <Item label="Filter 3" value="key2" />
            <Item label="Filter 4" value="key3" />
           </Picker>
          </Body>
        </ListItem>
        <ListItem icon style={{margin:10,}}>
          <Body style={{flexDirection:'row',flex:1 }}>
          <Button iconLeft
          style={{borderColor: 'white', borderWidth: 0.5, flexDirection:'row',flex:1 }}
          onPress={this.showResults.bind(this)}
            >
            <Icon active style={{ color: 'white',flex:1 }} name="ios-search" />
            <Text style={{ color: 'white',textAlign:'center',flex:9 }}>Search</Text>
          </Button>
          </Body>
        </ListItem>
        <List
        dataArray={this.state.results}
        renderRow={data =>
          <ListItem button onPress={() => { Actions[data.route](); this.props.closeDrawer() }} >
            <Body>
              <Text>{data.taskName}</Text>
              <Text numberOfLines={1} note>
                Folder: {data.folder}
              </Text>
              <Text numberOfLines={1} note>Assigned: {data.assigned}</Text>
              <Text numberOfLines={1} note>Deadline: {data.deadline}</Text>
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

export default connect(mapStateToProps, bindAction)(Search);
