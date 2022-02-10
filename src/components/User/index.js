import React, { Component } from 'react';
import axios from 'axios';
import { Input, Title, Section, Button, HeaderLabel, ButtonContainer } from "./UserElements"
import "./UserElements.js";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <Section>
      <div>
        <Title>
        <h3 class="title">Create New User</h3>
        </Title>
        <form onSubmit={this.onSubmit}>
          <div class="box"> 
            <HeaderLabel>Username: </HeaderLabel>
            <Input  type="text"
                required
                class="textinput"
                value={this.state.username}
                onChange={this.onChangeUsername} />
                
          </div>
          <ButtonContainer>
            <Button type="submit">Login</Button>
          </ButtonContainer>
        </form>
      </div> 
      </Section>
    )
    }
  }
    