import React, {Component} from 'react'
import {FaGithubAlt, FaPlus, FaSpinner} from 'react-icons/fa'

import {Container, Form, SubmitButton} from './style'
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
    const {newRepository, repositories} = this.state
    const res = await api.get(`/repos/${newRepository}`)

    const data = {
      name: res.data.full_name
    }

    this.setState({
      repositories: [...repositories, data],
      newRepository: '',
      loading: false,
    })
  }

  render() {

    const {newRepository, loading} = this.state

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
                <FaSpinner color="#fff" size={14}/>
                :
                <FaPlus color="#fff" size={14}/>
            }
          </SubmitButton>

        </Form>
      </Container>
    )
  }
}
