import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import StaffAccounts from './StaffAccounts'

class EmployeesStaffAccounts extends React.Component {
  static defaultProps = {
    pathName: 'Staff Accounts Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Staff Accounts Page" />
        <StaffAccounts />
      </Page>
    )
  }
}

export default EmployeesStaffAccounts
