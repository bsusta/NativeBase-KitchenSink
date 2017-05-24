
import React, { Component } from 'react';

import { Container, Content, Icon, Input, Item, Label, Text, Footer, FooterTab, Button, Picker } from 'native-base';

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
        <Picker
                  supportedOrientations={['portrait','landscape']}
                  iosHeader="Select one"
                  mode="dropdown"
                  selectedValue={this.state.selected1}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Item label="Wallet" value="key0" />
                  <Item label="ATM Card" value="key1" />
                  <Item label="Credit Card" value="key2" />
                  <Item label="Debit Card" value="key3" />
             </Picker>
    </Content>

    </Container>



    );
  }
}
