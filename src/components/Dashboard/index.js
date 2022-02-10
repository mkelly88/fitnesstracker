import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Name, LinkContainer, Title, Description, Duration, Date, Section, List, Edit, Delete, ButtonContainer, ListContainer, Button} from "./DashboardElements";

const Exercise = props => (
  <Container>
            <Name>{props.exercise.username}</Name>
            <Description>{props.exercise.description}</Description>
            <Duration>{props.exercise.duration} MIN</Duration>
            <Date>{props.exercise.date}</Date>
            <ButtonContainer>
            <Edit to={"/edit/"+props.exercise._id}>edit</Edit>  <Delete href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</Delete>
            </ButtonContainer>
  </Container>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <>
        <Section>
          <Title>
            <h3>Exercise Dashboard</h3>
          </Title>
          <LinkContainer>
          <Button to="/create">Create</Button>
          </LinkContainer>
          <ListContainer>
            <List>{ this.exerciseList() }</List>
          </ListContainer>
        </Section>
      </>
    )
  }
}