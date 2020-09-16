import React, {Component} from 'react'
import {FaGithubAlt, FaPlus, FaSpinner} from 'react-icons/fa'

import {Container, Form, SubmitButton, List} from './style'
import api from '../../services/api'

export default class Main extends Component {

  state = {
    newRepository: '',
    repositories: [],
    loading: false,
  }

  handleInputChange = e => {
    this.setState({newRepository: e.target.value})
  }

  handleSubmit = async e => {
    this.setState({ loading: true })
    e.preventDefault();
    let {newRepository, repositories} = this.state
    let res = await api.get(`/repos/${newRepository}`)

    let data = {
      name: res.data.full_name
    }

    this.setState({
      repositories: [...repositories, data],
      newRepository: '',
      loading: false,
    })
  }

  render() {

    let {newRepository, repositories, loading} = this.state

    return (
      <Container>
        <h1>
          <FaGithubAlt/>
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepository}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            { loading ?
                (<FaSpinner color="#fff" size={14}/>)
                :
                (<FaPlus color="#fff" size={14}/>)
            }
          </SubmitButton>

        </Form>

        <List>
            {repositories.map(repository => (
              <li key={repository.name}>
                <span>{repository.name}</span>
                <a href="">Detalhes</a>
              </li>
            ))}
        </List>
      </Container>
    )
  }
}
