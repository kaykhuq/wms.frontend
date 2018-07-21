import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import CreateForm from './CreateForm'
// import './style.scss'

class EmployeeTitleCreate extends React.Component {
  static defaultProps = {
    pathName: 'Tạo Chức Vụ',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Employee Title Page" />
        <CreateForm />
      </Page>
    )
  }
}

export default EmployeeTitleCreate
