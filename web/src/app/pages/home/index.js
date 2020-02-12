import React, { Component } from 'react'
import { Grid, Container } from '@material-ui/core';
import { Presentation, Skills } from './sections';
import { Footer } from '../../components';

export default class Home extends Component {
  render() {
    return (
      <Grid container style={{ minHeight: '100vh', display: 'flex' }} >
        <Presentation/>
        {/* <Skills/> */}
        {/* <Grid container style={{ minHeight: '100%' }}></Grid> */}
        <Footer/>
      </Grid>
    )
  }
}
