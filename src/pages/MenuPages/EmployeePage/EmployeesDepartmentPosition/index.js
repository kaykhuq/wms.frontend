import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import DepartmentPosition from './DepartmentPosition'

class EmployeesDepartmentPosition extends React.Component {
  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Department Position Page" />
        <DepartmentPosition />
      </Page>
    )
  }
}

export default EmployeesDepartmentPosition
