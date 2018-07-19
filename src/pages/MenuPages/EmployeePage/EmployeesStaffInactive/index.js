import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import StaffInactive from './StaffInactive'

class EmployeesStaffInactive extends React.Component {
  static defaultProps = {
    pathName: 'Staff Inactive Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Staff Inactive Page" />
        <StaffInactive />
      </Page>
    )
  }
}

export default EmployeesStaffInactive
