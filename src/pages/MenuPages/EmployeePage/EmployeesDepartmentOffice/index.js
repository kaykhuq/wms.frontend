import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import DepartmentOffice from './DepartmentOffice'

class EmployeesDepartmentOffice extends React.Component {
  

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Department Office Page" />
        <DepartmentOffice/>
      </Page>
    )
  }
}

export default EmployeesDepartmentOffice
