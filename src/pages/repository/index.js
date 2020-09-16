import React, {Component} from 'react'
import PropTypes from 'prop-types'

import api from '../../services/api'
import {Loading} from './style'

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
      <h1>
        Repository
      </h1>
    )
  }
}
