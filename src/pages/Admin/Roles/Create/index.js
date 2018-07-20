import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import CreateForm from './CreateForm'
// import './style.scss'

class RoleCreate extends React.Component {
  static defaultProps = {
    pathName: 'Tạo Vai Trò',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Role Create Page" />
        <CreateForm />
      </Page>
    )
  }
}

export default RoleCreate
