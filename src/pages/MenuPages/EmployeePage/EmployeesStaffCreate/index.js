import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import StaffCreate from './StaffCreate'
import './style.scss'

class EmployeesStaffActive extends React.Component {
  static defaultProps = {
    pathName: 'Staff Create Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Staff Create Page" />
        <StaffCreate />
      </Page>
    )
  }
}

export default EmployeesStaffActive
