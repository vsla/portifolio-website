import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import { Presentation } from './sections';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Presentation/>
      </Grid>
    )
  }
}