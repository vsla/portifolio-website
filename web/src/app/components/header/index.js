import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import {AppBar, Container, Grid} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ReactDOM from 'react-dom';

const Styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  topAppBar:{
    backgroundColor: 'transparent',
    boxShadow: '0px 0px 0px 0px',
    alignItems: 'center'
  },
  whiteAppBar:{
    backgroundColor: 'white',
    boxShadow: '0px 0px 0px 0px',
    alignItems: 'center'
  },
  link: {
    textDecoration: 'none',
  },
  selectedMenu: {
    padding: theme.spacing(2),
    color: '#adaaaa',
    fontSize: '17px',
  },
  notSelectedMenu: {
    padding: theme.spacing(2),
    color: 'white',
    fontSize: '17px',
    '&:hover':{
      color: '#dbdbdb'
    }
  },
  title: {
    fontWeight: '800',
    color: 'black',
    backgroundColor: 'white',
    padding: '6px',
    paddingTop: '0px',
    paddingBottom: '0px',
    borderRadius: '2px',
    letterSpacing: '1px',
    fontSize: '30px',
    lineHeight: 1.2
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class Header extends Component {
  constructor(props){
    super(props)
    const {classes} = this.props
    this.state = {
      openSideMenu: false,
      links: ['Home', 'About', 'Projects', 'Contact'],
      className: classes.topAppBar
    }
  }

  RenderLinks = () => {
    const {classes} = this.props
    return this.state.links.map((linkName) => {
      if (linkName !== 'Home'){
        return(
          <Link to="#" className={classes.link} >
            <Typography className={classes.notSelectedMenu} variant="h6" >
              {linkName}
            </Typography>
          </Link>
        )
      } else {
        return(
          <Typography className={classes.selectedMenu} variant="h6" >
            {linkName}
          </Typography>
        )
      }
    })
  }

  handleScroll() { 
    console.log(document.documentElement.scrollTop);
    const {classes} = this.props
    
    if (document.documentElement.scrollTop > 140) {
      this.setState({
        className: classes.whiteAppBar
      })
    } else {
      this.setState({
        className: classes.topAppBar
      })
    }

   }
 
  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }

  render(){
    const {classes} = this.props
    
    return (
      <div style={{ width: '100%' }}> 
        <AppBar id='appbar' position="fixed" className={this.state.className} > 
          <Container maxWidth="lg">
            <Toolbar style={{ width: '100%', padding: 0}}>
              <Typography className={classes.title} variant="h6" noWrap>
                ATTAR
              </Typography>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                { this.RenderLinks() }
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  edge="end"
                  onClick={(e) => this.setState({ openSideMenu: e.currentTarget })}
                  // onClick={(e) => this.setState({ openSideMenu: true })}
                  className={classes.selectedMenu}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
        {/* <SwipeableDrawer
          anchor="right"
          open={this.state.openSideMenu}
          onClose={() => this.setState({ openSideMenu: false })}
          // onOpen={toggleDrawer('right', true)}
        >
          oi
        </SwipeableDrawer> */}
        <Menu
          id="open drawer"
          anchorEl={this.state.openSideMenu}
          keepMounted
          open={Boolean(this.state.openSideMenu)}
          onClose={() => this.setState({ openSideMenu: null })}
        >
          <MenuItem onClick={() => {}}>Profile</MenuItem>
          <MenuItem onClick={() => {}}>My account</MenuItem>
          <MenuItem onClick={() => {}}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
  
}
export default withStyles(Styles)(Header)