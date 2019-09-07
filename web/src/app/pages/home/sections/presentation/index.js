import React, { Component } from 'react'
import { Grid, Typography, Container, Paper } from '@material-ui/core'
import { Header } from '../../../../components'
import './styles.scss'

import myphoto from '.././../../../common/images/myphoto.jpg'

export default class Presentation extends Component {
  state = {
    title: "Hi, i'm Victor Attar "
  }
  render() {
    return (
      <div style={{ backgroundImage: 'url(' + myphoto + ')', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
        {/* Above have the background photo, under have the filter on the image */}
        <Grid container className='Presentation' >
          
          <Container maxWidth="lg" className='container'> 
            <Header/>
            <Grid container alignItems='center' style={{flexGrow: 1}}>
              <Grid item>
                <Grid container direction='column' spacing={2}>
                  <Grid item >
                    <Paper className='paper_title'>
                      <Typography className='title'>{this.state.title}</Typography>
                    </Paper>
                  </Grid>
                  <Grid item >
                    <Paper className='paper_subtitle' >
                      <Typography className='subtitle'> I'm a web developer! </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </div>
    )
  }
}