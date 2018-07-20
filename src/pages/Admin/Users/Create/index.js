import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import CreateForm from './CreateForm'
// import './style.scss'

class UserCreate extends React.Component {
  static defaultProps = {
    pathName: 'Tạo Tài Khoản',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="User Create Page" />
        <CreateForm />
      </Page>
    )
  }
}

export default UserCreate
