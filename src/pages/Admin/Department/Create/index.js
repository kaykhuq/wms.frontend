import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import CreateForm from './CreateForm'
// import './style.scss'

class DepartmentCreate extends React.Component {
  static defaultProps = {
    pathName: 'Tạo Phòng Ban',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Department Create Page" />
        <CreateForm />
      </Page>
    )
  }
}

export default DepartmentCreate
