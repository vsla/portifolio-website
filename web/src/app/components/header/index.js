import React, { Component } from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import {AppBar, Container} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const Styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar:{
    backgroundColor: 'transparent',
    boxShadow: '0px 0px 0px 0px',
    alignItems: 'center'
  },
  link: {
    textDecoration: 'none',
  },
  selectedMenu: {
    padding: theme.spacing(2),
    color: '#adaaaa',
    fontSize: '15px',
  },
  notSelectedMenu: {
    padding: theme.spacing(2),
    color: 'white',
    fontSize: '15px',
    '&:hover':{
      textDecoration :'underline white',
    }
  },
  title: {
    fontWeight: '800',
    color: 'white',
    letterSpacing: '1px',
    fontSize: '30px',
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
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      links: ['Home', 'About', 'Projects', 'Resume', 'Contact']
    }
  }

  RenderLinks = () => {
    const {classes} = this.props
    return this.state.links.map((linkName) => {
      if (linkName !== 'Home'){
        return(
          <Link to="#" className={classes.link}>
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

  renderMenu = () => {
    return (
    <Menu
      anchorEl={this.state.anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={this.state.anchorEl}
      onClose={() => {}}
    >
      <MenuItem onClick={() => {}}>Profile</MenuItem>
      <MenuItem onClick={() => {}}>My account</MenuItem>
    </Menu>
    )
  };

  
  renderMobileMenu = () => {
    return(
      <Menu
        anchorEl={this.state.mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={this.state.isMobileMenuOpen}
        onClose={() => {}}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick= {() => {}}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    )
  }

  render(){
    const {classes} = this.props
    console.log(this.props)
    return (
      <div className={classes.grow}>
        <AppBar position="static" className={classes.appBar} > 
          <Container maxWidth="lg">
            <Toolbar style={{ width: '90%' }}>
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
        {this.renderMobileMenu()}
        {this.renderMenu()}
      </div>
    );
  }
  
}
export default withStyles(Styles)(Header)