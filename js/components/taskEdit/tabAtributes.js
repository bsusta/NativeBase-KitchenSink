
import React, { Component } from 'react';

import { Card, CardItem, Body, Container, Content, Icon, Input, Item, Label, Text, Footer, FooterTab, Button, Picker } from 'native-base';

import styles from './styles';

export default class TabAtributes extends Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: 'key1',
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

  render() { // eslint-disable-line
    return (
      <Container>
      <Content>
        <Item stackedLabel>
          <Label>Task name</Label>
          <Input />
        </Item>
        <Item stackedLabel>
          <Label>Task description</Label>
          <Input />
        </Item>
        <Item stackedLabel>
          <Label>Work done</Label>
          <Input />
        </Item>
        <Item stackedLabel>
          <Label>Add work time</Label>
          <Input />
        </Item>

<Text>Status</Text>
        <Picker
                  supportedOrientations={['portrait','landscape']}
                  iosHeader="Select one"
                  mode="dropdown"
                  selectedValue={this.state.selected1}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Item label="New" value="key0" />
                  <Item label="Solved" value="key1" />
                  <Item label="Pending" value="key2" />
                  <Item label="Closed" value="key3" />
             </Picker>
          <Text>Project</Text>
             <Picker
                       supportedOrientations={['portrait','landscape']}
                       iosHeader="Select one"
                       mode="dropdown"
                       selectedValue={this.state.selected1}
                       onValueChange={this.onValueChange.bind(this)}>
                       <Item label="New" value="key0" />
                       <Item label="Solved" value="key1" />
                       <Item label="Pending" value="key2" />
                       <Item label="Closed" value="key3" />
                  </Picker>
            <Text>Requester</Text>
                  <Picker
                            supportedOrientations={['portrait','landscape']}
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this)}>
                            <Item label="New" value="key0" />
                            <Item label="Solved" value="key1" />
                            <Item label="Pending" value="key2" />
                            <Item label="Closed" value="key3" />
                       </Picker>
              <Text>Company</Text>
                       <Picker
                                 supportedOrientations={['portrait','landscape']}
                                 iosHeader="Select one"
                                 mode="dropdown"
                                 selectedValue={this.state.selected1}
                                 onValueChange={this.onValueChange.bind(this)}>
                                 <Item label="New" value="key0" />
                                 <Item label="Solved" value="key1" />
                                 <Item label="Pending" value="key2" />
                                 <Item label="Closed" value="key3" />
                            </Picker>

            <Text>Assigned</Text>

    <Picker
              supportedOrientations={['portrait','landscape']}
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}>
              <Item label="New" value="key0" />
              <Item label="Solved" value="key1" />
              <Item label="Pending" value="key2" />
              <Item label="Closed" value="key3" />
         </Picker>











    </Content>
      <Footer>
        <FooterTab>
          <Button iconLeft style={{ flexDirection: 'row', borderColor: 'white', borderWidth: 0.5 }}>
            <Icon active style={{ color: 'white' }} name="md-add" />
            <Text style={{ color: 'white' }} >Cancel</Text>
          </Button>
        </FooterTab>

        <FooterTab>
          <Button iconLeft style={{ flexDirection: 'row', borderColor: 'white', borderWidth: 0.5 }}>
            <Icon active name="md-add" style={{ color: 'white' }} />
            <Text style={{ color: 'white' }} >Save</Text>
          </Button>
        </FooterTab>
    </Footer>
    </Container>



    );
  }
}
