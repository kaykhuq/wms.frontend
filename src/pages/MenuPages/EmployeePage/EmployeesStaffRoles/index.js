import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import StaffRoles from './StaffRoles'

class EmployeesStaffRoles extends React.Component {
  static defaultProps = {
    pathName: 'Staff Roles Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Staff Roles Page" />
        <StaffRoles />
      </Page>
    )
  }
}

export default EmployeesStaffRoles
