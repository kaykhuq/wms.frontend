import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import StaffActive from './StaffActive'

class EmployeesStaffActive extends React.Component {
  static defaultProps = {
    pathName: 'Staff Active Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Staff Active Page" />
        <StaffActive />
      </Page>
    )
  }
}

export default EmployeesStaffActive

