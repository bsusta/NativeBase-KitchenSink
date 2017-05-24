
import React, { Component } from 'react';

import { Container, Content, Card, CardItem, Text, Body, Footer, View,Input,Button } from 'native-base';

import styles from './styles';
const mockData=[
  {name:'John',comment:'Needs update',date:'16.4.2017'},
  {name:'Clara',comment:'Is should be up to date',date:'17.4.2017'},
  {name:'John',comment:'Thanks',date:'17.4.2017'}
]

export default class TabComments extends Component { // eslint-disable-line
  constructor(props){
      super(props);

      this.state = {
          inputText:'',
          canSubmit:false,
          commentData:[],
      }
      this.updateComments.bind(this);
  }
  updateComments(data){
    this.setState({
      commentData: this.state.commentData.concat(data)
    });
  }

  componentDidMount(){
    this.updateComments(mockData);
  }

  updateInput(input){
    this.setState({
      inputText:input,
      canSubmit:input!=''
    });
  }

  submitComment(){
    if(this.state.canSubmit){
      this.updateComments([{name:'novyKomentator',comment:this.state.inputText,date:'Aktualny Datum'}]);
      this.setState({inputText:''})
    }
  }
  render() { // eslint-disable-line
    return (
      <Container>
        <Content padder style={{ marginTop: 0 }}>

        {
          this.state.commentData.map((comment,index)=>{
            return <Card style={{ flex: 1 }} key={index}>
                  <CardItem key={index}>
                    <Body>
                      <Text style={styles.commentInfo}>{comment.name} {comment.date}</Text>
                      <Text>{comment.comment}</Text>
                    </Body>
                  </CardItem>
                </Card>

          })
        }
        </Content>
        <Footer style={{backgroundColor: 'white'}}>
        <Input style={styles.commentInput} placeholder="Comment here" onSubmitEditing={() => this.submitComment()} />
        </Footer>
      </Container>
    );
  }
}
