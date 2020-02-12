import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import { Presentation, Skills } from "./sections";
import { Footer } from "../../components";

export default class Home extends Component {
  render() {
    return (
      <Grid container direction='column' style={{ minHeight: "100vh" }}>
        <Grid item xs>
          <Presentation />
        </Grid>

        {/* <Skills/> */}
        {/* <Grid container style={{ minHeight: '100%' }}></Grid> */}
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}
