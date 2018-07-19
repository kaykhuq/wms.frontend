import React from 'react'
import ForgotForm from './ForgotForm'
import './style.scss'

class Forgot extends React.Component {
  

  componentDidMount() {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
  }

  componentWillUnmount() {
    document.getElementsByTagName('body')[0].style.overflow = ''
  }

  render() {
    return (
      <div className="main-login main-login--fullscreen">
        <div className="main-login__header">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-login__header__logo">
                <a href="javascript: void(0);">
                  <img src="resources/images/login/logo.png" alt="Clean UI Admin Template" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-login__block main-login__block--extended pb-0">
          <div className="row">
            <div className="col-xl-12">
              <div className="main-login__block__promo text-black text-center">
                <h1 className="mb-3 text-black">
                 
                  Warehouse Management System
                </h1>
                
              </div>
              <div className="main-login__block__inner">
                <div className="main-login__block__form">
                  <ForgotForm />
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Forgot
