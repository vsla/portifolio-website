import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { Header } from '../../../../components'
import './styles.scss'

export default class Presentation extends Component {

  render() {
    return (
      <Grid container className='Presentation'>
        <Header/>
      </Grid>
    )
  }
}