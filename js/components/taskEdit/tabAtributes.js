
import React, { Component } from 'react';

import { Container, Content,ListItem, Icon, Input,Left,Body, Item, Label, View, Text, Footer, FooterTab, Button, Picker } from 'native-base';

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
      <Content style={styles.containerStyle}>
        <ListItem icon>
          <Left>
              <Icon name="plane" />
          </Left>
          <Body>
            <Item stackedLabel>
              <Label>Task name</Label>
              <Input style={styles.input} />
            </Item>
          </Body>
        </ListItem>

        <Item stackedLabel>
          <Label>Task name</Label>
          <Input style={styles.input} />
        </Item>

        <Item stackedLabel>
          <Label>Task description</Label>
          <Input style={styles.input} />
        </Item>
        <Item stackedLabel>
          <Label>Work done</Label>
          <Input style={styles.input} />
        </Item>
        <Item stackedLabel>
          <Label>Add work time</Label>
          <Input style={styles.input} />
        </Item>
        <View style={styles.inputView}>
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
          </View>

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
