import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import api from '../../services/api'
import {Loading, Owner} from './style'
import Container from '../../component/container'

export default class Repository extends Component {

  state = {
    repository: {},
    issues: [],
    loading: true,
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string
      })
    }).isRequired
  }

  async componentDidMount() {
    let {match} = this.props
    let repositoryName = decodeURIComponent(match.params.repository)

    let [repository, issues] = await Promise.all(
      [
        api.get(`/repos/${repositoryName}`),
        api.get(`/repos/${repositoryName}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
          }
        })
      ]
    )

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false
    })
  }


  render () {
    let {repository, issues, loading} = this.state

    if(loading) {
      return (
        <Loading>Carregando</Loading>
      )
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
      </Container>
    )
  }
}
