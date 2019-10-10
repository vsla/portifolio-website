import React, { Component } from "react";
import { loadCSS } from 'fg-loadcss';
import { Grid, Typography, Container, Paper, Icon } from "@material-ui/core";
import { Header } from "../../../../components";

import "../styles.scss";

import myphoto from ".././../../../common/images/myphoto.jpg";

export default class Presentation extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      icons:[
        {name: 'ReactJs and Native', icon:'fa fa-react'},
        {name: 'Html', icon:'fa fa-react'},
        {name: 'Js', icon:'fa fa-js-square'},
        {name: 'Css', icon:'fa fa-css3-alt'},
        {name: 'Python', icon:'fa fa-python'},
      ]
    };
  }
  
  renderIcons = () => {
    const { icons } = this.state;
    return icons.map(({name, icon}) => {
      return (
        <Grid item>
          <Typography>
            {name}
          </Typography>
        </Grid>
      )
    })
  }

  render() {
    return (
      <Container maxWidth="lg" className="skills">
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h1' >  
              Skills
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              {this.renderIcons()}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

