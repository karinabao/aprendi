import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import { connect } from 'react-redux'
import { sendUserInfoRequest, setUserInfo } from '../actions/user';
import SvgIcon from './SvgIcon'

class TopNav extends Component {
  constructor() {
    super()

    this.state = {
      dropdownExpanded: false
    }
  }

  // componentWillMount() {
  //   const { currUser, sendUserInfoRequest } = this.props
  //   console.log("component mounting")
  //   console.log(currUser)
  //   if (!currUser) {
  //     sendUserInfoRequest()
  //   }
  // }

  toggleMenuExpansion() {
    this.setState({
      dropdownExpanded: !this.state.dropdownExpanded
    })
  }

  render() {
    const { currUser, history, clearUserInfo } = this.props
    const { dropdownExpanded } = this.state

    console.log("in TopNav, currUser is", currUser)

    if (currUser === "fetching") {
      return null
    } else if (currUser) {
      return (
        <div className="top-nav">
          <div className="top-nav__contents">
            <div className={dropdownExpanded ? "top-nav__button dropdown-expanded" : "top-nav__button"} onClick={() => this.toggleMenuExpansion()}>
              <h5 className="top-nav__button__text">{this.props.currUser.userInfo.name}</h5>
              <SvgIcon name="arrow" className={this.state.dropdownExpanded ? "top-nav__button__arrow up" : "top-nav__button__arrow down"}/>
            </div>
            <div className={dropdownExpanded ? "top-nav__dropdown expanded" : "top-nav__dropdown"}>
              <h5 className="top-nav__dropdown__sub-text">{this.props.currUser.userInfo.email}</h5>
              <ul className="top-nav__dropdown__list">
                <li className="top-nav__dropdown__list-item" onClick={() => { this.toggleMenuExpansion(); history.push('/') }}>My Home Page</li>
                <li className="top-nav__dropdown__list-item" onClick={() => { this.toggleMenuExpansion(); logout(history, clearUserInfo) }}>Log Out</li>
              </ul>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="top-nav">
          <div className="top-nav__contents">
            <div className="top-nav__button" onClick={() => login()}>
              <h5 className="top-nav__button__text" >Admin Log In</h5>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currUser: state.currUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearUserInfo: () => {
      dispatch(setUserInfo())
    },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopNav));
