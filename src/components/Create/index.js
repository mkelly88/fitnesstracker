import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Section, Title, HeaderLabel, Input, Select, ButtonContainer, Button, Box } from "./CreateComponents";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <>
      <Section>
        <div>
        <Title>
          <h3>Create Exercise Log</h3>
        </Title>
        <form onSubmit={this.onSubmit}></form>
        <Box>
        <HeaderLabel>Username:</HeaderLabel>
            <Select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
            </Select>
        <HeaderLabel>Description:</HeaderLabel>
            <Input type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription} />
        <HeaderLabel>Duration (in minutes):</HeaderLabel>
            <Input type="text"
              required
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration} />
        <HeaderLabel>Date:</HeaderLabel>
              <Input type="text"
              selected={this.state.date}
              onChange={this.onChangeDate} />
        </Box>
        <ButtonContainer>
          <Button type="submit">Submit</Button>
        </ButtonContainer>
        </div>
      </Section>
    </>
    )
  }
}