import React, { Component } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AppIcon from '@material-ui/icons/Apps'
import NotificationIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/icons/AccountCircle'
class Header extends Component {
    state = { title: "" };
  onSearchChanged = event => {
    this.setState({ title: event.target.value });
    //console.log(this.state.title)
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.title);
  };
    render() {
        return (
            <div className="header">
               <div className="header-left">
               <MenuIcon />
                <img className="header-logo" src="https://images.app.goo.gl/YoUev1mFdacMaKbd8" alt="" />
                </div>
              
                <form onSubmit={this.onSubmit} className="header-form">
                <div className="header-center">
                <input type="text" value={this.state.title} onChange={this.onSearchChanged} placeholder="Search for a video"/>
                <button type="submit" className="header-inputButton"><SearchIcon /></button>
                </div>
                </form>
                <div className="header-right">
                <AppIcon className="header-rightIcon"/>
                <NotificationIcon className="header-rightIcon"/>
                <Avatar className="header-rightIcon"/>
                </div>
            </div>
        )
    }
}

export default Header
