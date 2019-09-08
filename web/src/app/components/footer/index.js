import React, { Component } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'

// Styles
import './styles.scss'

// Icons
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
export default class Footer extends Component {

  render() {
    return (
      <Grid container className='footer'>
        <Container maxWidth="lg" style={{ display: 'flex' }}>
          <Grid 
            container 
            direction='row'
            alignItems='center' 
            justify='space-between' 
            className='footer_container'
          >
            <Grid item className='copy_container'>
                <Typography className='copy'>CopyRight © 2019 Victor Sena All Rights Reserved</Typography>
              </Grid>
            <Grid item className='social_item' >
              <Grid container direction='row' className='social_container'>
                <a href='https://github.com/vsla' target="_blank" >
                  <LogoGithub color='white' fontSize="40px"  />
                </a>
                <a href='https://www.facebook.com/victor.sena.96' target="_blank" >
                  <LogoFacebook color='white' fontSize="40px" />
                </a>
                <a 
                  href='https://www.linkedin.com/in/victor-sena-de-lima-attar-a54160161/' 
                  target="_blank"
                >
                  <LogoLinkedin color='white' fontSize="40px" />
                </a>
              </Grid>
            </Grid>  
          </Grid>
        </Container>
      </Grid>
    )
  }
}
