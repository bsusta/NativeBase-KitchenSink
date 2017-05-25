
import React, { Component } from 'react';

import { Right, Left, Container, Content, Card, CardItem, Text, Body, Footer, FooterTab, Button, Icon } from 'native-base';

import styles from './styles';

export default class TabItems extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Container>
        <Content padder style={{ marginTop: 0 }}>
          <Card>
            <CardItem>
              <Left>
                <Text note>Name</Text>
              </Left>
              <Right>
                <Text>Keyboard</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text note>Quantity</Text>
              </Left>
              <Right>
                <Text>ks</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text note>Unit</Text>
              </Left>
              <Right>
                <Text>2</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text note>Price</Text>
              </Left>
              <Right>
                <Text>50</Text>
              </Right>
            </CardItem>

            <CardItem>
              <Left>
                <Text note>Price total</Text>
              </Left>
              <Right>
                <Text>100</Text>
              </Right>
            </CardItem>

            <CardItem>
              <Body>
                <Button active block>
                <Icon name="trash" />
                <Text>Delete</Text>
                </Button>
              </Body>
            </CardItem>

          </Card>
          <Card>
            <CardItem>
            <Left>
              <Text note>Total price</Text>
            </Left>
            <Right>
              <Text>100</Text>
            </Right>
          </CardItem>
          </Card>


      </Content>
      <Footer>
        <FooterTab>
          <Button iconLeft style={{ flexDirection: 'row', borderColor: 'white', borderWidth: 0.5 }}>
            <Icon active style={{ color: 'white' }} name="md-add" />
            <Text style={{ color: 'white' }} >Items</Text>
          </Button>
        </FooterTab>
      </Footer>
      </Container>
    );
  }
}
